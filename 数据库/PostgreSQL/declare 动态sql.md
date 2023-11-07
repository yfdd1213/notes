---
tags:
  - 动态sql
  - 工作便捷脚本
---

```sql
do
$$
    DECLARE
        V_ORGID    varchar(36);
        P_USERNAME varchar(36);
        P_UPLOID   varchar(36);
        V_SQL      varchar(4000);
        v_a        varchar(60);
    begin

        V_ORGID = 'avbc';
        P_USERNAME = 'avbc';
        P_UPLOID = 'avbc';

        V_SQL := 'INSERT INTO BO_EU_ENTERINFOLIB(ID,ORGID,BINDID,CREATEDATE,CREATEUSER,UPDATEDATE,UPDATEUSER,PROCESSDEFID,ISEND,ENTNAME,REGNO,UNISCID,MARPRID,
              DOM,LEREP,ISMARPRIPOBJ,ESTDATE,OPSTATE) 
        SELECT t.ID,
            $1 AS ORGID,
            NULL AS BINDID,
            CURRENT_TIMESTAMP AS CREATEDATE,
            $2 AS CREATEUSER,
            CURRENT_TIMESTAMP AS UPDATEDATE,
            $3 AS UPDATEUSER,
            NULL AS PROCESSDEFID,
            0 AS ISEND,
            t.ENTNAME,
            t.REGNO,
            t.UNISCID,
             cast(t.MARPRID as numeric) as MARPRID,
            t.ADDRESS AS DOM,
            t.LEREP,
            ''0'' AS ISMARPRIPOBJ,
            t.ESTDATE,
            t.OPSTATE
            FROM 
            E_ZJ_UPLOENTINFO t
            WHERE t.UPLOID = $4 AND t.ENTINFOLIBID IS NULL AND t.DATATYPE=''非企业''';
        EXECUTE V_SQL USING V_ORGID,P_USERNAME,P_USERNAME,P_UPLOID;
        raise notice '%',V_SQL;

    end;
$$
                        
```
