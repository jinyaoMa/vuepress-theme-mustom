---
title: HTTP是什么？
categories:
  - 网络
tags:
  - HTTP
  - HTTPS
date: 2020-04-10 14:15:34
updated: 2020-04-10 14:15:34
---

HTTP是客户端和服务端之间互动需要准守的其中一种协议。在日常上网过程中，用户通过浏览器浏览目标网站的操作，看起来就是进入目标网站的门户之后，想看哪里就点哪里，但是实际上客户端和服务端之间的数据互动都是通过一套标准来执行的。用旧时代的眼光来看就是网络节点两边统一使用了莫斯代码，所以两边之间的交流就没有了障碍。

<!-- more -->

**先来个更好的文章做参考：[HTTP协议超级详解](//www.cnblogs.com/an-wen/p/11180076.html)**

# HTTP/1.1

HTTP属于TCP/IP中的“顶层”应用层，这说明HTTP的包装是数据出发前的第一步。在这里不谈TCP相关连接过程，但是HTTP请求/响应都是要在连接之后的事；想看的话，可以看[TCP三次握手详解及释放连接过程](//www.cnblogs.com/kaleidoscope/p/9701117.html)。基本上HTTP就是请求和响应的模式，在服务方想理你客户方的情况下，你想要什么，她都会回应你。

HTTP请求方法：

- GET，一般请求的数据都是不需要处理的数据
- HEAD，获取metadata，打个比方就是电脑上文件右键属性
- POST，一般请求的数据都是需要处理的数据
- PUT，像数据库的INSERT
- DELETE，像数据库的DELETE
- PATCH，像数据库的UPDATE
- 还有TRACE、OPTIONS、CONNECT

HTTP状态码：

- 100及以上，普通的信息代码
- 200及以上，请求成功被处理
- 300及以上，请求被重定向了
- 400及以上，这是客户方的错
- 500及以上，这是服务方的错

## HTTP请求/响应报文结构

![HTTP请求报文结构](/gallery/http-request-format.png)*Image from: [HTTP协议超级详解](//www.cnblogs.com/an-wen/p/11180076.html)*

![HTTP请求报文例子](/gallery/http-request-example.jpg)*Image from: [HTTP协议超级详解](//www.cnblogs.com/an-wen/p/11180076.html)*

![HTTP响应报文结构](/gallery/http-response-format.png)*Image from: [HTTP协议超级详解](//www.cnblogs.com/an-wen/p/11180076.html)*

![HTTP响应报文例子](/gallery/http-response-example.jpg)*Image from: [HTTP协议超级详解](//www.cnblogs.com/an-wen/p/11180076.html)*

## 比较HTTP/1.1和HTTP/2

- HTTP/2在一次TCP连接中可以同时发送多个请求，多行程减少了连接次数和响应的等待时间
- HTTP/2压缩头部信息，包裹更小，运输更方便
- HTTP/2使用二进制协议，不仅节省了不少分隔符和封箱胶带，还可以分成小份包装以数据流形式发送
- HTTP/2允许服务端推送，一次请求把相关依赖的脚本也给客户端一起发来，很人性化

# HTTPS

在HTTP包装外再来个SSL/TLS加密包装，HTTPS有以下特点：

1. 内容加密，传输过程中使用的密文
2. 验证身份，找到对的服务端
3. 保护数据完整性，防止传输过程中被动手脚

基本上传输中的数据不易被动手脚。

**_更多可以百度HTTP、HTTPS、TCP连接等。_**