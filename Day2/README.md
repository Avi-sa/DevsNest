# POSTGESQL

*Start postgre on Local:* 

```
$ sudo service postgresql
$ sudo -u postgres psql
```

## Basic Commands
```
To Create User:
    - CREATE USER username WITH PASSWORD 'password';

To Create DATABASE:
    - CREATE DATABASE devs;

To grant previleges:
    - GRANT ALL PRIVILEGES ON DATABASE devs to username;

DROP DATABASE:
    - DROP DATABASE IF EXISTS devs;
```

**List all databases**
```
\l
```

**Connect Database**
```
\c devs;
```

## CREATE TABLE

```
CREATE TABLE COMPANY(
    ID PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    AGE INT NOT NULL,
    ADDRESS CHAR(50),
    SALARY REAL
);
```

**DROP TABLE**
```
DROP TABLE COMPANY;
```

**TO SEE THE TABLE**
```
\d
```

**TO CREATE SCHEMA**
```
CREATE SCHEMA mySchema;
```

**to see table entire details**
```
\d COMPANY;
```
**TO drop schema**
```
DROP SCHEMA mySchema;
```
**to insert into table**
```
DROP DATABASE COMPANY(ID, NAME, AGE, ADDRESS, SALARY) VALUES(1, 'PAUL', 32, 'CALIFORNIA', 20000.00);
```
**TO SEE DATA INTO TABLE**
```
SELECT * FROM COMPANY;
```
SUM, COUNT
```
SELECT (13+5) AS ADDITION;
SELECT COUNT(*) AS 
```

```
INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (1, 'Paul', 32, 'California', 20000.00,'2001-07-13');

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,JOIN_DATE) VALUES (2, 'Allen', 25, 'Texas', '2007-12-13');

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE) VALUES (3, 'Teddy', 23, 'Norway', 20000.00, DEFAULT );
```