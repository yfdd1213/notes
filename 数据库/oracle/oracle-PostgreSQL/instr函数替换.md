---
tags:
  - 自定义函数
  - 字符串操作
---

Oracle里面instr函数在PostgreSQL不能使用，当instr（）没有声明起始位置和返回第几个值的时候，可以用STRPOS替换，语法一致，也可以使用position（a in b）其中a为需要搜索的字符，b为被搜索对象。也可在数据库中创建instr函数
```
  -- 实现1 两个参数
  CREATE FUNCTION instr(varchar, varchar) RETURNS integer AS
    $$ DECLARE pos integer;
  BEGIN
    pos := instr($1, $2, 1);
    RETURN pos;
  END;
  $$ LANGUAGE plpgsql STRICT IMMUTABLE;    
  
  -- 实现2          三个参数          
  CREATE FUNCTION instr(string           varchar,
                        string_to_search varchar,
                        beg_index        integer) RETURNS integer AS
    $$        DECLARE pos integer NOT NULL DEFAULT 0;
    temp_str  varchar;
    beg       integer;
    length    integer;
    ss_length integer;
  BEGIN
    IF beg_index > 0 THEN
      temp_str := substring(string FROM beg_index);
      pos      := position(string_to_search IN temp_str);
    
      IF pos = 0 THEN
        RETURN 0;
      ELSE
        RETURN pos + beg_index - 1;
      END IF;
    ELSIF beg_index < 0 THEN
      ss_length := char_length(string_to_search);
      length    := char_length(string);
      beg       := length + beg_index - ss_length + 2;
      WHILE beg > 0 LOOP
        temp_str := substring(string FROM beg FOR ss_length);
        pos      := position(string_to_search IN temp_str);
        IF pos > 0 THEN
          RETURN beg;
        END IF;
        beg := beg - 1;
      END LOOP;
      RETURN 0;
    ELSE
      RETURN 0;
    END IF;
  END;
  $$ LANGUAGE plpgsql STRICT IMMUTABLE;
  
  -- 实现3 四个参数
  CREATE FUNCTION instr(string           varchar,
                        string_to_search varchar,
                        beg_index        integer,
                        occur_index      integer) RETURNS integer AS
    $$           DECLARE pos integer NOT NULL DEFAULT 0;
    occur_number integer NOT NULL DEFAULT 0;
    temp_str     varchar;
    beg          integer;
    i            integer;
    length       integer;
    ss_length    integer;
  BEGIN
    IF beg_index > 0 THEN
      beg      := beg_index;
      temp_str := substring(string FROM beg_index);
      FOR i IN 1 .. occur_index LOOP
        pos := position(string_to_search IN temp_str);
        IF i = 1 THEN
          beg := beg + pos - 1;
        ELSE
          beg := beg + pos;
        END IF;
        temp_str := substring(string FROM beg + 1);
      END LOOP;
    
      IF pos = 0 THEN
        RETURN 0;
      ELSE
        RETURN beg;
      END IF;
    ELSIF beg_index < 0 THEN
      ss_length := char_length(string_to_search);
      length    := char_length(string);
      beg       := length + beg_index - ss_length + 2;
      WHILE beg > 0 LOOP
        temp_str := substring(string FROM beg FOR ss_length);
        pos      := position(string_to_search IN temp_str);
        IF pos > 0 THEN
          occur_number := occur_number + 1;
          IF occur_number = occur_index THEN
            RETURN beg;
          END IF;
        END IF;
        beg := beg - 1;
      END LOOP;
      RETURN 0;
    ELSE
      RETURN 0;
    END IF;
  END;
  $$ LANGUAGE plpgsql STRICT IMMUTABLE;
```
实现instr
