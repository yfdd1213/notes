---
tags:
  - 动态sql
  - 执行固定查询
---

# 设计表格
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25566838/1638938294700-db42c0b3-2ce6-454d-a3d0-256ea09aeb8a.png#clientId=u6ac46875-1826-4&from=paste&height=502&id=u27015060&originHeight=502&originWidth=1052&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71647&status=done&style=none&taskId=u1d161c21-6478-4c7b-aa92-651a4182e93&title=&width=1052)
将表拆分为三个表格分类存储内容（指标描述为两列的合并单元格）指标描述拆分两列，第一列为指标名称，第二列为指标描述，合并单元格的数据指标描述为空
第一张表temp_hn_rule
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25566838/1638938514171-6690068b-dbed-486b-8b08-38945d143f74.png#clientId=u6ac46875-1826-4&from=paste&height=356&id=u87f71c79&originHeight=356&originWidth=1319&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21547&status=done&style=none&taskId=ub6eacca8-c1f8-467d-ba34-6fe2b3255fe&title=&width=1319)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25566838/1638939557158-1db8c278-56fc-433d-90a9-34e13cec041c.png#clientId=u6ac46875-1826-4&from=paste&height=418&id=u6217eaed&originHeight=418&originWidth=1356&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20741&status=done&style=none&taskId=ufe4be029-ce00-419a-98f7-beeef905e49&title=&width=1356)
dbid为sys_guid()生成一个32为随机数然后再excel里面下拉生成有序但不重复的32位字符型值，将dbid设为主键，xh（序号）为excel中从1下拉生成按原表内顺序的序号。
第二张表temp_hn_sql
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25566838/1638939604560-a7ba9060-919d-455e-88b1-0456699b86db.png#clientId=u6ac46875-1826-4&from=paste&height=418&id=u3d52d111&originHeight=418&originWidth=1356&originalType=binary&ratio=1&rotation=0&showTitle=false&size=31871&status=done&style=none&taskId=uad4a7970-a72e-4c7e-ad89-72dda9a6587&title=&width=1356)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25566838/1638939624286-3102f8b5-ca11-4911-8d48-cb190faf26aa.png#clientId=u6ac46875-1826-4&from=paste&height=418&id=uf86cf972&originHeight=418&originWidth=1356&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23684&status=done&style=none&taskId=u6cb0b34d-81e1-4550-89de-ba7573ba4e1&title=&width=1356)
dbid同理随机数，将原表内的每一段sql拆成一行做一条数据，sql_id为上一张表的主键，对应这张表的每一段sql，把sql_id设为外键。g_xh是一个指标名称对应的多个sql内的组内序号，若名称为矿权对应4段sql，算法规则都为1/2，1/2；那么g_xh为1、2、3、1、2、3，3为计算结果的sql。z_xh为不重复的总序号，顺序与原表一致。
第三张表temp_hn_result
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25566838/1638940636324-103e839c-7052-4d33-9b9b-e1051015c7f6.png#clientId=u6ac46875-1826-4&from=paste&height=418&id=u0d4c4e10&originHeight=418&originWidth=1356&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28301&status=done&style=none&taskId=u12cfc24d-04ea-4fd7-b0de-3a0046e7d45&title=&width=1356)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/25566838/1638940653051-08582b3b-c1cc-419c-a428-5e0d6d44534d.png#clientId=u6ac46875-1826-4&from=paste&height=428&id=u9b3c761b&originHeight=428&originWidth=1364&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23951&status=done&style=none&taskId=u690bedb6-d330-40ef-82e1-7286a3cc630&title=&width=1364)
dbid同理的随机数做主键，sql_id为上张表的主键hn_result为temp_hn_sql内每段sql的查询结果，序号与temp_hn_sql一致
# 动态sql实现插入更新
## 插入更新sql
```
DECLARE
  STR     VARCHAR2(4000);
  STR_SQL VARCHAR(1000);
  S_XH    NUMBER(4);
  ZHI     VARCHAR(100);
  I       NUMBER(4);
  V_MAX   NUMBER(4);
BEGIN
  S_XH := 1;
  I    := 0;
  SELECT COUNT(1) INTO V_MAX FROM TEMP_HN_SQL;
  WHILE I < V_MAX LOOP
    SELECT CHECK_SQL INTO STR FROM TEMP_HN_SQL WHERE Z_XH = S_XH;
    IF TRIM(STR) IS NOT NULL THEN
      EXECUTE IMMEDIATE STR
        INTO ZHI;
      STR_SQL := 'MERGE INTO TEMP_HN_RESULT T_RE
                    USING (SELECT 
                                  DBID SQL_ID,
                                  ' || ZHI ||
                 ' HN_RESULT,
                                  Z_XH XH,
                                  TRUNC(SYSDATE) RQ
                             FROM TEMP_HN_SQL
                             where z_xh=' || S_XH ||
                 ') T_SQL
                    ON (T_RE.SQL_ID = T_SQL.SQL_ID AND T_RE.RQ=T_SQL.RQ)
                    WHEN MATCHED THEN
                      UPDATE SET T_RE.HN_RESULT = T_SQL.HN_RESULT
                    WHEN NOT MATCHED THEN
                      INSERT
                        (T_RE.DBID, T_RE.SQL_ID, T_RE.HN_RESULT, T_RE.XH, T_RE.RQ)
                      VALUES
                        (SYS_GUID(), T_SQL.SQL_ID, T_SQL.HN_RESULT, T_SQL.XH, T_SQL.RQ)';
      EXECUTE IMMEDIATE STR_SQL;
      COMMIT;
      DBMS_OUTPUT.PUT_LINE(STR_SQL);
    ELSE
      STR_SQL := 'MERGE INTO TEMP_HN_RESULT T_RE
                    USING (SELECT 
                                  DBID SQL_ID,
                                  NULL HN_RESULT,
                                  Z_XH XH,
                                  TRUNC(SYSDATE) RQ
                             FROM TEMP_HN_SQL
                             where z_xh=' || S_XH ||
                 ') T_SQL
                    ON (T_RE.SQL_ID = T_SQL.SQL_ID AND T_RE.RQ=T_SQL.RQ)
                    WHEN MATCHED THEN
                      UPDATE SET T_RE.HN_RESULT = T_SQL.HN_RESULT
                    WHEN NOT MATCHED THEN
                      INSERT
                        (T_RE.DBID, T_RE.SQL_ID, T_RE.HN_RESULT, T_RE.XH, T_RE.RQ)
                      VALUES
                        (SYS_GUID(), T_SQL.SQL_ID, T_SQL.HN_RESULT, T_SQL.XH, T_SQL.RQ)';
      EXECUTE IMMEDIATE STR_SQL;
    END IF;
    S_XH    := S_XH + 1;
    I       := I + 1;
    ZHI     := NULL;
    STR     := NULL;
    STR_SQL := NULL;
  END LOOP;
END;

```
实现过程中执行EXECUTE IMMEDIATE STR INTO ZHI; STR的值必须是正常可以执行的sql语句不能为空，
所以使用if else语句判断STR是否为空，不为空时执行将值赋给zhi，为空时执行插入更新操作时候将结果设为NULL值。
## 表内字符串的sql
```
select case t1.fz
         when 0 then
          'chr(47)'
         else
          substr(t2.fz / t1.fz * 100,0,5)||'||chr(37)'
       end fz
  from (select count(*) fz
          from ZHYJ_KQJCXX jc
         WHERE JC.DQYXJZRQ > DATE '2020-12-31'
           AND JC.YXBZ = 1) t1,
       (SELECT COUNT(*) fz
          FROM (SELECT JC.XKZH, COUNT(1)
                  FROM ZHYJ_KQJCXX JC
                  LEFT JOIN ZHYJ_KQGDXX GD
                    ON JC.XKZH = GD.XKZH
                  LEFT JOIN ZHYJ_KQGDZBXX GDZB
                    ON GDZB.KQGDXXBS = GD.KQGDXXBS
                 WHERE JC.DQYXJZRQ > DATE '2020-12-31'
                   AND JC.YXBZ = 1
                 GROUP BY JC.XKZH
                HAVING COUNT(1) >= 4)) t2
```
判断分母为是否为0，为零插入/，不为0时将值*100拼接字符串‘%’显示为百分数，但是执行结果时如果STR的查询结果为2.2%这样的字符，特殊字符不能插入更新，所以直接将STR结果变为2.2||chr(37)的字符串,37%在ASCII表内对应编码，47为/在ASCII表内对应编码
```
select   nvl(sum(yjkjs),0)
  from zd_yq_scdt
 where rq = trunc(sysdate,'dd')-1 
   AND DWDM = '0'
```
这样的查询，原表内查询结果为该字段值，但若是查不到数据，则没有返回结果，连null值都没有。直接使用nvl函数赋值时候，依然是没有数据，加了聚合函数，虚构出一条数据，将这种空值设为0
