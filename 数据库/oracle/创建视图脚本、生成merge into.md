---
tags:
  - 工作便捷脚本
  - 拼接指定字符串
---

创建原表的查询字段创建视图
```sql
with ALL_COL as
 (SELECT UTCA.TABLE_NAME,
        UTCA.COLUMN_ID,
         utnt.comments,
         'CAST(' || utca.table_name||'.'||UCC.COLUMN_NAME || ' AS ' || (CASE
           WHEN UTCA.DATA_TYPE = 'NUMBER' THEN
            UTCA.DATA_TYPE || '(' || UTCA.DATA_LENGTH || ',' ||
            UTCA.DATA_SCALE || ')'
           WHEN UTCA.DATA_TYPE = 'VARCHAR2' THEN
            UTCA.DATA_TYPE || '(' || UTCA.DATA_LENGTH || ')'
           WHEN UTCA.DATA_TYPE = 'NVARCHAR2' THEN
            UTCA.DATA_TYPE || '(' || UTCA.DATA_LENGTH/2 || ')'            
           WHEN UTCA.DATA_TYPE = 'CHAR' THEN
            UTCA.DATA_TYPE || '(' || UTCA.DATA_LENGTH || ')'
           ELSE
            UTCA.DATA_TYPE
         END) || ') AS ' || UCC.column_name ||
         decode(UTCA.COLUMN_ID,
                (select max(COLUMN_ID)
                   from USER_TAB_COLS a
                  where a.table_name = UTCA.table_name),
                '---',
                ',---') || UCC.comments AS COLUMN_NAME
    FROM USER_TAB_COLS UTCA
    left join user_tab_comments utnt
      on UTCA.table_name = utnt.table_name
   INNER JOIN USER_COL_COMMENTS UCC
      ON UTCA.TABLE_NAME = UCC.TABLE_NAME
     AND UTCA.COLUMN_NAME = UCC.COLUMN_NAME
   where utca.table_name in ('ISP_RANDOMRESULT',
                             'ISP_RANDOMVIOLATIONS') ORDER BY UTCA.COLUMN_ID)
SELECT '--- ' || AC.comments || chr(13) || 'CREATE OR REPLACE VIEW ' ||
       'HZBZV5_' || AC.TABLE_NAME || ' AS' || CHR(13) || 'SELECT ' || AC.A ||
       chr(13) || ' FROM ' || AC.TABLE_NAME || ';'
  FROM (SELECT AC.TABLE_NAME,
               AC.comments,
               xmlagg(xmlparse(content AC.COLUMN_NAME ||'' || chr(13)) ORDER BY AC.COLUMN_ID).getclobval() A
--               LISTAGG(AC.COLUMN_NAME, '' || chr(13)) WITHIN GROUP(ORDER BY AC.COLUMN_ID) A
          FROM ALL_COL AC
         group by AC.TABLE_NAME, AC.comments) AC  
```
生成merge into
```sql
with ALL_COL as (SELECT UTCA.TABLE_NAME ,UTCA.COLUMN_NAME  FROM USER_TAB_COLS   UTCA
 INNER JOIN USER_COL_COMMENTS   UCC
                                ON UTCA.TABLE_NAME = UCC.TABLE_NAME
                               AND UTCA.COLUMN_NAME = UCC.COLUMN_NAME 
                               where utca.table_name in ('SCJH_ZJYX',            
'SCJH_ZJYXNRB'         
) ),
ZJ AS (select   DISTINCT S.TABLE_NAME,UC.CONSTRAINT_NAME,UCC.COLUMN_NAME from ALL_COL S
LEFT JOIN USER_CONSTRAINTS  UC
ON S.TABLE_NAME=UC.TABLE_NAME 
LEFT JOIN USER_CONS_COLUMNS  UCC
ON UC.TABLE_NAME=UCC.TABLE_NAME
AND UC.CONSTRAINT_NAME=UCC.CONSTRAINT_NAME
WHERE UC.CONSTRAINT_TYPE='P') 
,
UPDATE_ALL AS (SELECT AC.TABLE_NAME,AC.COLUMN_NAME FROM ALL_COL AC
LEFT JOIN ZJ
ON AC.TABLE_NAME=ZJ.TABLE_NAME
AND AC.COLUMN_NAME=ZJ.COLUMN_NAME
WHERE ZJ.COLUMN_NAME IS NULL)
SELECT  'MERGE INTO '||AC.TABLE_NAME||' O USING ( SELECT '||A||' FROM '||AC.TABLE_NAME||' ) M ON ( ' , ZJ.B||' )WHEN MATCHED THEN UPDATE SET '
||UA.C,  'when not matched then INSERT ('||A||') values ('||D||'); COMMIT;' FROM (SELECT  AC.TABLE_NAME, LISTAGG(AC.COLUMN_NAME, ',') WITHIN GROUP(ORDER BY AC.COLUMN_NAME) A ,
LISTAGG('M.'||AC.COLUMN_NAME, ',') WITHIN GROUP(ORDER BY AC.COLUMN_NAME) D FROM  ALL_COL  AC group by  AC.TABLE_NAME) AC
LEFT JOIN (SELECT ZJ.TABLE_NAME, LISTAGG('O.'||ZJ.COLUMN_NAME||'= M.'||ZJ.COLUMN_NAME, ' AND ') WITHIN GROUP(ORDER BY ZJ.COLUMN_NAME) B FROM 
ZJ GROUP BY ZJ.TABLE_NAME ) ZJ
ON  AC.TABLE_NAME=ZJ.TABLE_NAME 
LEFT JOIN (SELECT  UA.TABLE_NAME, LISTAGG('O.'||UA.COLUMN_NAME||'= M.'||UA.COLUMN_NAME, ',') WITHIN GROUP(ORDER BY UA.COLUMN_NAME)   C 
FROM UPDATE_ALL UA GROUP BY UA.TABLE_NAME) UA 
ON  AC.TABLE_NAME=UA.TABLE_NAME  

```

生成tbd_dex_tablelist插入脚本
```sql
SELECT 'INSERT INTO tbd_dex_tablelist(SOURCE_NAME,SOURCE_SQL,TARGET_NAME,TARGET_SQL,FLOW,TYPE)'||chr(10)||
        'VALUES(''' ||TOPICIS||''','''||TOPICIS|| ''','''||HZK|| ''','''||HZK ||''','''||STATE||''','''||'Y'||''');'
AS SQL_TEXT 
from TEST_YFDD
WHERE DIRECTION='TOPICIS-HZK'
```
生成交换平台插入脚本
```plsql
with ALL_COL as
         (SELECT UTCA.TABLE_NAME,
          UTCA.COLUMN_ID,
          utnt.comments,
          utca.table_name||'.'||UCC.COLUMN_NAME||
          decode(UTCA.COLUMN_ID ,
                            (select max(COLUMN_ID)
                             from USER_TAB_COLS a
                             where a.table_name=UTCA.table_name) ,
                            '' ,
                            ',') AS COLUMN_NAME
          FROM USER_TAB_COLS           UTCA
          left join user_tab_comments  utnt
          on UTCA.table_name=utnt.table_name
          INNER JOIN USER_COL_COMMENTS UCC
          ON UTCA.TABLE_NAME=UCC.TABLE_NAME
          AND UTCA.COLUMN_NAME=UCC.COLUMN_NAME
          where utca.table_name in ('REG_MARPRIPINFO',
                                    'ISP_RANDOMVIOLATIONS')
          ORDER BY UTCA.COLUMN_ID)
SELECT 'INSERT INTO conf_kettle_etl
(job_code, job_name, exec_order, thread_num, table_name, source_sjdz_sql, source_quantity, target_name, target_sjdz_sql, target_quantity, begin_time, end_time, exchange_time, is_succeed, exec_result, is_exec, deviation, is_check, ql_bz)
VALUES(''BZK_LCQZJ_1D'', ''数据同步—-标准库到浪潮前置机数据上报'', 8, ''5'', '''||'BZLCV_'||AC.TABLE_NAME||''', '''
               ||'SELECT '||AC.A||
           chr(13)||' FROM '||'BZLCV_'||AC.TABLE_NAME||''', NULL, '''||AC.TABLE_NAME||''', ''SELECT '||AC.A||chr(13)
               ||' FROM '||AC.TABLE_NAME||''', NULL, NULL, NULL, NULL, NULL, NULL, ''Y'', 10, ''N'', ''Y'');'
FROM (SELECT AC.TABLE_NAME,
      AC.comments,
      xmlagg(xmlparse(content AC.COLUMN_NAME||''||chr(13)) ORDER BY AC.COLUMN_ID).getclobval() A
      FROM ALL_COL AC
      group by AC.TABLE_NAME, AC.comments) AC
```
生成删除触发器
```plsql
with ALL_COL as
         (SELECT UTCA.TABLE_NAME,
          UTCA.COLUMN_ID,
          utnt.comments,
          UCC.COLUMN_NAME||
          decode(UTCA.COLUMN_ID ,
                            (select max(COLUMN_ID)
                             from USER_TAB_COLS a
                             where a.table_name=UTCA.table_name) ,
                            '' ,
                            ',') AS COLUMN_NAME
          FROM USER_TAB_COLS           UTCA
          left join user_tab_comments  utnt
          on UTCA.table_name=utnt.table_name
          INNER JOIN USER_COL_COMMENTS UCC
          ON UTCA.TABLE_NAME=UCC.TABLE_NAME
          AND UTCA.COLUMN_NAME=UCC.COLUMN_NAME
          where utca.table_name in ('LAW_CASEFEEDBACK_TEMP',
                                    'ISP_RANDOMVIOLATIONS')
          ORDER BY UTCA.COLUMN_ID)
SELECT 'INSERT INTO '||AC.TABLE_NAME||' ('
               ||AC.A||')'||
           chr(13)||' VALUES '||' ('||AC.B||')'||chr(13)
               ||';'
FROM (SELECT AC.TABLE_NAME,
      AC.comments,
      xmlagg(xmlparse(content AC.COLUMN_NAME||''||chr(13)) ORDER BY AC.COLUMN_ID).getclobval() A,
	  xmlagg(xmlparse(content ':OLD.'||AC.COLUMN_NAME||''||chr(13)) ORDER BY AC.COLUMN_ID).getclobval() B
      FROM ALL_COL AC
      group by AC.TABLE_NAME, AC.comments) AC
	  
INSERT INTO LAW_CASEFEEDBACK_TEMP (ID,
BUSTYPE,
BUSID,
CASEID,
STATE,
STATENAME,
REASON,
CLOCASEDATE,
CLOCASEREA,
CLOCASEREANAME,
ACCPTRANFAUTHTYPE,
ACCPTRANFAUTHTYPENAME,
ACCPTRANFAUTH,
TRANFREATYPE,
TRANFREATYPENAME,
TRANFREA,
TRANFDATE,
MARPRID,
NAME,
CERNO,
CASENO,
APPPROCEDURE,
APPPRONAME,
CASEFIDATE,
CASEENDDATE,
CASEVAL,
CASESCEDISTRICT,
CASESCEDISNAME,
CASESPOT,
ILLEGINCOME,
ILLEGACTTYPE,
ILLACTTYPENAME,
QUABASISCODE,
QUABASIS,
PENBASISCODE,
PENBASIS,
PENTYPE,
PENTYPENAME,
PENRESULT,
PENRESNAME,
PENAM,
FORFAM,
APPRCURAM,
COMMEACO,
COMMEACONAME,
PENWRITNO,
PENDECISSDATE,
FEDBACSTA,
ORGID,
PERID,
REGDATE,
ORGNODE,
CASERES,
CASETYPE,
FILENO,
CASESTATE,
PRIORGID,
ISSUEORGID,
CITYCODE,
PARTYTYPE,
PUNDECITYPE,
EFFECSTATE,
MODIFYDATE,
ALTCONTENT,
INSERILL,
CASEPERID,
TARDSIGN,
BUSREASON,
POWERMATTERCODE,
POWERMATTERCODESTR,
POWERMATTERLAWACCORD,
TWOLAWCASE,
TWOCASETYPE,
DIRECTORYCODE,
DIRECTORYNAME,
NBXH
)
 VALUES  (:OLD.ID,
:OLD.BUSTYPE,
:OLD.BUSID,
:OLD.CASEID,
:OLD.STATE,
:OLD.STATENAME,
:OLD.REASON,
:OLD.CLOCASEDATE,
:OLD.CLOCASEREA,
:OLD.CLOCASEREANAME,
:OLD.ACCPTRANFAUTHTYPE,
:OLD.ACCPTRANFAUTHTYPENAME,
:OLD.ACCPTRANFAUTH,
:OLD.TRANFREATYPE,
:OLD.TRANFREATYPENAME,
:OLD.TRANFREA,
:OLD.TRANFDATE,
:OLD.MARPRID,
:OLD.NAME,
:OLD.CERNO,
:OLD.CASENO,
:OLD.APPPROCEDURE,
:OLD.APPPRONAME,
:OLD.CASEFIDATE,
:OLD.CASEENDDATE,
:OLD.CASEVAL,
:OLD.CASESCEDISTRICT,
:OLD.CASESCEDISNAME,
:OLD.CASESPOT,
:OLD.ILLEGINCOME,
:OLD.ILLEGACTTYPE,
:OLD.ILLACTTYPENAME,
:OLD.QUABASISCODE,
:OLD.QUABASIS,
:OLD.PENBASISCODE,
:OLD.PENBASIS,
:OLD.PENTYPE,
:OLD.PENTYPENAME,
:OLD.PENRESULT,
:OLD.PENRESNAME,
:OLD.PENAM,
:OLD.FORFAM,
:OLD.APPRCURAM,
:OLD.COMMEACO,
:OLD.COMMEACONAME,
:OLD.PENWRITNO,
:OLD.PENDECISSDATE,
:OLD.FEDBACSTA,
:OLD.ORGID,
:OLD.PERID,
:OLD.REGDATE,
:OLD.ORGNODE,
:OLD.CASERES,
:OLD.CASETYPE,
:OLD.FILENO,
:OLD.CASESTATE,
:OLD.PRIORGID,
:OLD.ISSUEORGID,
:OLD.CITYCODE,
:OLD.PARTYTYPE,
:OLD.PUNDECITYPE,
:OLD.EFFECSTATE,
:OLD.MODIFYDATE,
:OLD.ALTCONTENT,
:OLD.INSERILL,
:OLD.CASEPERID,
:OLD.TARDSIGN,
:OLD.BUSREASON,
:OLD.POWERMATTERCODE,
:OLD.POWERMATTERCODESTR,
:OLD.POWERMATTERLAWACCORD,
:OLD.TWOLAWCASE,
:OLD.TWOCASETYPE,
:OLD.DIRECTORYCODE,
:OLD.DIRECTORYNAME,
:OLD.NBXH
)
;
```
