---
title: Oracle SQL Basic Usage
categories:
  - Note
  - SQL
tags:
  - Oracle
  - SQL
date: 2019-06-19 20:00:00
updated: 2019-06-19 20:00:00
---

Oracle SQL 复习笔记（~~进行中~~放弃了...）

<!-- more -->

# 笔记 / Cheat Sheet

``` SQL
concat(field/string, field/string, field/string...)
length(field/string)
round(number, [integer])
in(string, string...)
left(field/string, unsignedInteger) => js => field/string.substring(0, unsignedInteger)
replace(field/string, searchString, replacementString)
where, or, xor, and, != (<>), like, '_%', between ?number and ?number (both number inclusive), not ?operator
sum(field)
select distinct field => non-repeated/unique value
-- inline comment, a space after --
/* mutiple-line comment, a space at the very beginning and ending */
order by
all(table) => where field > all(select num from nums) -- find something with a field's number larger than all the num from nums
count(field)
group by field
having -- must only be used after 'group by' that can use sum(), count(), etc.
```
