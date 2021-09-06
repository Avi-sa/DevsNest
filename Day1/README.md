# Install Redis on Ubuntu

`To install Redis on Ubuntu, go to the terminal and type the following commands −`
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
`This will install Redis on your machine.`<br>
``
`Start Redis`
```
$ redis-server
```
`Check If Redis is Working`
```
$ redis-cli 
```

**using key value pair**
```

127.0.0.1:6379> SET name "Avi" 
OK 
127.0.0.1:6379> GET name 
"Avi" 
127.0.0.1:6379> EXISTS name 
1  
127.0.0.1:6379> KEYS * 
1) name 
127.0.0.1:6379> DEL name 
(integer) 1 
127.0.0.1:6379> EXISTS name 
0
127.0.0.1:6379> FLUSHALL
OK
127.0.0.1:6379> setex name 10 Avi
OK
127.0.0.1:6379> ttl name
3
127.0.0.1:6379> expire name time
(integer) 1
127.0.0.1:6379> ttl name
(integer) -1

```

**List In Redis**
```
127.0.0.1:6379> lpush list redis 
(integer) 1 
127.0.0.1:6379> lpush list mongodb 
(integer) 2 
127.0.0.1:6379> lpush list rabitmq 
(integer) 3 
127.0.0.1:6379> lrange list 0 10  

1) "rabitmq" 
2) "mongodb" 
3) "redis"
```
**SET In Redis**
```
127.0.0.1:6379> sadd sets redis
(integer) 1 
127.0.0.1:6379> sadd sets mongodb 
(integer) 1 
127.0.0.1:6379> sadd sets rabitmq 
(integer) 1 
127.0.0.1:6379> sadd sets rabitmq 
(integer) 0 
127.0.0.1:6379> smembers sets  

1) "rabitmq" 
2) "mongodb" 
3) "redis" 

```
**JSON in JSON in Redis**

```
127.0.0.1:6379> HSET person name Avi
(integer) 1
127.0.0.1:6379> HSET person name
"Avi"
127.0.0.1:6379> HGETALL person
1) "name"
2) "Avi"

127.0.0.1:6379> HSET person age 28

127.0.0.1:6379> HGETALL person
1) "name"
2) "Avi"
3) "age"
4) "28"

127.0.0.1:6379> HDEL person age
(integer) 1
127.0.0.1:6379> HGETALL person
1) "name"
2) "Avi"

127.0.0.1:6379> HEXISTS person name
(integer) 1

```
# POSTGRESQL

**## Setup 🔨**

*Follow* this [link](https://kontext.tech/column/sql-databases/616/install-postgresql-on-wsl) blog to setup postgres on wsl

👉To start postgres server - sudo service postgresql start<br>
👉enter postgres prompt - sudo -u postgres psql
