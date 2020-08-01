---
title: Hexo主题Mustom使用指南（对应主题1.0版）
categories:
  - Hexo
tags:
  - Mustom
date: 2020-04-15 13:56:45
updated: 2020-04-15 13:56:45
---

- 本主题[Mustom](//github.com/jinyaoMa/hexo-theme-mustom)是我参考了卡片式和窗口展示的样式设计的Hexo主题。
- 本主题通过大量的replaceWith函数和PJAX来加载，而且用了Live2D的插件，初始加载时回流特别厉害。
- 本主题可以衍生一个CSS的框架，但是作者本人目前还是在给每个组件都弄一个单独的样式表。
- 本主题把各类资源文件都分门别类了，在以后添加内容方面应该还是较方便的。

<!-- more -->

# Hexo根目录结构

**注：主题文件可以下载[本站](//github.com/jinyaoMa/ma-jinyao.cn)所有源代码后，通过复制粘贴`themes/mustom`文件夹获得，或者下载[Mustom](//github.com/jinyaoMa/hexo-theme-mustom)所有源代码获得**
**注：以下文件及文件夹都是使用Mustom主题必要的结构**

先来看看[本站](//github.com/jinyaoMa/ma-jinyao.cn)的根目录结构。

```
├─scaffolds    : 模板
├─source       : 内容资源文件夹
├─themes       : 下载的主题放这里
├─package.json : 里面可以看我都用了什么没有魔改过的Hexo插件
├─_config.yml  : 根配置文件
```

这就是一个普通Hexo建站的初始结构。这里主要讲下，**使用我的Mustom主题时，可以使用`scaffolds`里我的模板，里面包含了必要的front-matter变量。可以复制粘贴整个`scaffolds`文件去覆盖原本的文件夹。推荐按照[本站](//github.com/jinyaoMa/ma-jinyao.cn)里的`package.json`来安装依赖，因为基本上安装的依赖都是用于优化和兼容。可以复制粘贴本站的`package.json`去替换原本的文件，之后运行命令`npm i`安装依赖。之后所有的例子默认都使用了我的模板和依赖之后的操作。**

# _config.yml根配置文件

**注：使用本主题的你可以在上面添加变量和修改变量的值，但是最好不要删除某一个变量，你可以留个空字符串**
**可以在复制粘贴以下配置之后，通过网站效果慢慢改**

``` yml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: "耀 の 个人网站 | Mark の Personal Website"
description: "耀の个人网站, 耀的个人网站, Mark の Personal Website, Mark's Personal Website, 耀的部落阁, 耀の部落阁, jinyaoMa, Mustom, Hexo"
author: jinyaoMa ( 耀 / Mark )
year: 2019 # 建站年

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://ma-jinyao.cn
root: /

# Directory
source_dir: source
public_dir: docs # 方便使用Github Page
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: code # markdown使用include_code标签
skip_render:
  - "code/*.*" # 排除code_dir
  - "extension/**/*.html" # 排除extension
  - "*.html" # 如果在在主目录source文件夹里放了搜索引擎验证的.html文件
  - "CNAME" # 如果在在主目录source文件夹里放了CNAME文件

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link:
  enable: true # Open external links in new tab
  field: site # Apply to the whole site
  exclude: ""
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: "  "
  wrap: true
  hljs: false

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss
## Use post's date for updated date unless set in front-matter
use_date_for_updated: false

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: mustom

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  - type: baidu_url_submitter
  - type: git
    repo:

all_minifier: true # 如果装了 hexo-all-minifier
markdown: # 如果换了原装 hexo-renderer-marked, 用了 hexo-renderer-markdown-it
  render:
    html: true
    xhtmlOut: false
    breaks: true
    linkify: true
    typographer: true
    quotes: '“”‘’'
  plugins:
    - markdown-it-abbr
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-sub
    - markdown-it-sup
  anchors:
    level: 1
    collisionSuffix: 'v'
    permalink: true
    permalinkClass: headerlink
    permalinkSide: 'left'
    permalinkSymbol: ''
nofollow: # 如果装了 hexo-filter-nofollow
  enable: true
  field: post
sitemap: # 如果装了 hexo-generator-sitemap
  path: sitemap.xml
  rel: true
autoprefixer: # 如果装了 hexo-autoprefixer
  exclude:
    - "*.min.css"
  overrideBrowserslist:
    - "last 2 versions"
babelify: # 如果装了 hexo-renderer-babelify + @babel/preset-env
  presets:
    - "@babel/preset-env"
  sourceMaps: false
mathjax: # 如果装了 hexo-filter-mathjax
  tags: none # or 'ams' or 'all'
  single_dollars: true # enable single dollar signs as in-line math delimiters
  cjk_width: 0.9 # relative CJK char width
  normal_width: 0.6 # relative normal (monospace) width

ignore:
  - "**/source/asset/js/common/*.js" # 如果装了 hexo-renderer-babelify
  - "**/source/asset/js/part/*.js" # 如果装了 hexo-renderer-babelify
  - "**/source/asset/js/plugin/!(L2Dwidget.0.min.js)" # 如果装了 hexo-renderer-babelify

# 百度主动推送
baidu_url_submit:
  count: 1000 # 提交最新的一个链接
  host: ma-jinyao.cn # 在百度站长平台中注册的域名
  token: "" # 请注意这是您的秘钥， 所以请不要把博客源代码发布在公众仓库里!
  path: baidu_urls.txt # 文本文档的地址， 新链接会保存在此文本文档里

baidu_translate: # 用于划词翻译组件
  appid: ""
  appkey: ""

valine: # 用于评论组件
  appid: ""
  appkey: ""

# 搜索引擎验证
google_site_verification: ""
baidu_site_verification: ""
```

# themes/mustom目录结构

接下来看看[themes/mustom](//github.com/jinyaoMa/ma-jinyao.cn/tree/master/themes/mustom)的目录结构。

```
├─_config.yml : 主题配置文件，改菜单、改图标、改皮肤、改音乐/一言组件配置、新增组件时涉及
├─source : 主题资源文件夹
|   ├─browser.ejs : 不用babelify时旧浏览器会重定向到这个页面
|   ├─robots.txt
|   ├─sw.tpl : pwa需要加载的service worker模板
|   ├─asset
|   |   ├─part : 所有组件模板文件放这
|   |   |  ├─audioplayer.ejs
|   |   |  ├─brand.ejs
|   |   |  ├─codelib.ejs
|   |   |  ├─comment.ejs
|   |   |  ├─extension.ejs
|   |   |  ├─footer.ejs
|   |   |  ├─gallery.ejs
|   |   |  ├─goingto.ejs
|   |   |  ├─hitokoto.ejs
|   |   |  ├─menus.ejs
|   |   |  ├─page.ejs
|   |   |  ├─panels.ejs
|   |   |  ├─pather.ejs
|   |   |  ├─post.ejs
|   |   |  ├─recentposts.ejs
|   |   |  ├─records.ejs
|   |   |  ├─search.ejs
|   |   |  ├─settings.ejs
|   |   |  ├─sitename.ejs
|   |   |  ├─skin.ejs
|   |   |  ├─timeline.ejs
|   |   |  ├─toc.ejs
|   |   |  ├─translater.ejs
|   |   |  ├─xaside.ejs
|   |   |  ├─xcanvas.ejs
|   |   |  ├─xdrawer.ejs
|   |   |  └xsearch.ejs
|   |   ├─live2d : Live2D的文件放这
|   |   |   ├─haruto.model.json
|   |   |   ├─haruto.physics.json
|   |   |   ├─mtn
|   |   |   |  ├─01.mtn
|   |   |   |  ├─02.mtn
|   |   |   |  ├─03.mtn
|   |   |   |  ├─04.mtn
|   |   |   |  ├─05.mtn
|   |   |   |  ├─06.mtn
|   |   |   |  ├─07.mtn
|   |   |   |  ├─08.mtn
|   |   |   |  ├─09.mtn
|   |   |   |  └idle_02.mtn
|   |   |   ├─moc
|   |   |   |  ├─haruto.moc
|   |   |   |  ├─haruto.2048
|   |   |   |  |      └texture_00.png
|   |   ├─lang : 所有的语言界面资源文件放这
|   |   |  ├─en.yml : 英文
|   |   |  └zh-cn.yml : 中文
|   |   ├─js : 所有的JS资源文件放这
|   |   | ├─main.js : 管理所有资源的加载和程序
|   |   | ├─nomodule.js : 不使用babelify时用得到的旧浏览器重定向
|   |   | ├─plugin : 所有第三方JS插件模块
|   |   | |   ├─APlayer.min.js
|   |   | |   ├─av-min.js
|   |   | |   ├─evanyou.js
|   |   | |   ├─L2Dwidget.0.min.js
|   |   | |   ├─L2Dwidget.min.js
|   |   | |   ├─md5.min.js
|   |   | |   ├─Meting.min.js
|   |   | |   ├─socialShare.min.js
|   |   | |   └Valine.min.js
|   |   | ├─part : 所有组件加载必要的模块
|   |   | |  ├─audioplayer.js
|   |   | |  ├─brand.js
|   |   | |  ├─codelib.js
|   |   | |  ├─comment.js
|   |   | |  ├─extension.js
|   |   | |  ├─footer.js
|   |   | |  ├─gallery.js
|   |   | |  ├─goingto.js
|   |   | |  ├─hitokoto.js
|   |   | |  ├─menus.js
|   |   | |  ├─page.js
|   |   | |  ├─panels.js
|   |   | |  ├─pather.js
|   |   | |  ├─post.js
|   |   | |  ├─recentposts.js
|   |   | |  ├─records.js
|   |   | |  ├─search.js
|   |   | |  ├─settings.js
|   |   | |  ├─sitename.js
|   |   | |  ├─skin.js
|   |   | |  ├─timeline.js
|   |   | |  ├─toc.js
|   |   | |  ├─translater.js
|   |   | |  ├─xaside.js
|   |   | |  ├─xcanvas.js
|   |   | |  ├─xdrawer.js
|   |   | |  └xsearch.js
|   |   | ├─common : 包含所有通用JS函数
|   |   | |   ├─ajax.js
|   |   | |   ├─api.js
|   |   | |   ├─config.js
|   |   | |   ├─fetch.js
|   |   | |   ├─lang.js
|   |   | |   ├─part.js
|   |   | |   ├─storage.js
|   |   | |   └util.js
|   |   ├─img : 所有的固定图像资源文件放这
|   |   |  ├─android-chrome-192x192.png
|   |   |  ├─android-chrome-512x512.png
|   |   |  ├─author.large.png
|   |   |  ├─author.medium.png
|   |   |  ├─author.small.png
|   |   |  ├─by-nc-sa.svg
|   |   |  ├─icon.large.png
|   |   |  ├─icon.medium.png
|   |   |  ├─icon.small.png
|   |   |  ├─qf3cu.huaji.png
|   |   |  ├─qf3cu.jpg
|   |   |  ├─qf3cu.png
|   |   |  ├─qf3cu.temp.bw.png
|   |   |  ├─qf3cu.temp.png
|   |   |  ├─qq.png
|   |   |  ├─start.png
|   |   |  ├─start.reverse.png
|   |   |  └wechat.png
|   |   ├─font : 所有的字体文件放这
|   |   |  ├─fa-brands-400.eot
|   |   |  ├─fa-brands-400.svg
|   |   |  ├─fa-brands-400.ttf
|   |   |  ├─fa-brands-400.woff
|   |   |  ├─fa-brands-400.woff2
|   |   |  ├─fa-regular-400.eot
|   |   |  ├─fa-regular-400.svg
|   |   |  ├─fa-regular-400.ttf
|   |   |  ├─fa-regular-400.woff
|   |   |  ├─fa-regular-400.woff2
|   |   |  ├─fa-solid-900.eot
|   |   |  ├─fa-solid-900.svg
|   |   |  ├─fa-solid-900.ttf
|   |   |  ├─fa-solid-900.woff
|   |   |  ├─fa-solid-900.woff2
|   |   |  ├─iconfont.eot
|   |   |  ├─iconfont.svg
|   |   |  ├─iconfont.ttf
|   |   |  ├─iconfont.woff
|   |   |  └SourceHanSansCN.otf
|   |   ├─css : 所有的样式文件放这
|   |   |  ├─style.styl : 引用了所有的样式
|   |   |  ├─_plugin : 所有第三方样式插件
|   |   |  |    ├─APlayer.min.css
|   |   |  |    ├─fontawesome.min.css
|   |   |  |    ├─github-markdown.min.css
|   |   |  |    ├─highlight.styl
|   |   |  |    └share.min.css
|   |   |  ├─_part : 所有组件样式
|   |   |  |   ├─audioplayer.styl
|   |   |  |   ├─brand.styl
|   |   |  |   ├─codelib.styl
|   |   |  |   ├─comment.styl
|   |   |  |   ├─extension.styl
|   |   |  |   ├─footer.styl
|   |   |  |   ├─gallery.styl
|   |   |  |   ├─goingto.styl
|   |   |  |   ├─hitokoto.styl
|   |   |  |   ├─menus.styl
|   |   |  |   ├─page.styl
|   |   |  |   ├─panels.styl
|   |   |  |   ├─pather.styl
|   |   |  |   ├─post.styl
|   |   |  |   ├─recentposts.styl
|   |   |  |   ├─records.styl
|   |   |  |   ├─search.styl
|   |   |  |   ├─settings.styl
|   |   |  |   ├─sitename.styl
|   |   |  |   ├─skin.styl
|   |   |  |   ├─timeline.styl
|   |   |  |   ├─toc.styl
|   |   |  |   ├─translater.styl
|   |   |  |   ├─xaside.styl
|   |   |  |   ├─xcanvas.styl
|   |   |  |   ├─xdrawer.styl
|   |   |  |   └xsearch.styl
|   |   |  ├─_common : 包含所有页面的通用样式
|   |   |  |    ├─color.styl : 所有的受皮肤影响的颜色配置
|   |   |  |    ├─dimension.styl : 所有的固定距离、固定值等配置
|   |   |  |    └layout.styl : 所有页面通用样式，主要包含“m-”开头的主模板样式
├─scripts : 主题预处理脚本文件夹
|    ├─$filter.js
|    ├─$helper.js
|    ├─$renderer.js
|    ├─renderer
|    |    ├─$partplus.js
|    |    └$template.js
|    ├─plugin : 放改过的预处理时用到的第三方插件
|    |   ├─pangunode.js
|    |   ├─toc.js
|    |   ├─hexo-generator-restful
|    |   |           ├─index.js
|    |   |           ├─lib
|    |   |           |  └generator.js
|    |   ├─hexo-abbrlink
|    |   |       ├─index.js
|    |   |       ├─lib
|    |   |       |  ├─crc16.js
|    |   |       |  ├─crc32.js
|    |   |       |  ├─logic.js
|    |   |       |  └model.js
|    ├─helper : 放预处理渲染生成期间用到的函数
|    |   ├─$count.js
|    |   ├─$css.js
|    |   ├─$encode.js
|    |   ├─$forIn.js
|    |   ├─$gallery.js
|    |   ├─$js.js
|    |   ├─$min2read.js
|    |   ├─$mjs.js
|    |   ├─$nomjs.js
|    |   ├─$word4post.js
|    |   └$word4site.js
├─layout : 主题预处理页面模板文件夹
|   ├─archive.ejs : 管理所有归档页面头部涉及的数据
|   ├─index.ejs : 管理首页面头部涉及的数据
|   ├─page.ejs : 管理所有单独页面头部涉及的数据
|   ├─post.ejs : 管理所有文章页面头部涉及的数据
|   ├─_partial
|   |    └frame.ejs : 网页模板，增减改组件和修改头部模板时涉及
```

## 普通使用主题时涉及的文件及文件夹

```
├─_config.yml : 主题配置文件，改菜单、改图标、改皮肤、改音乐/一言组件配置、新增组件时涉及
├─source : 主题资源文件夹
|   ├─asset
|   |   ├─part : 所有组件模板文件放这
|   |   ├─lang : 所有的语言界面资源文件放这
|   |   |  ├─en.yml : 英文
|   |   |  └zh-cn.yml : 中文
|   |   ├─js : 所有的JS资源文件放这
|   |   | ├─main.js : 管理所有资源的加载和程序
|   |   | ├─part : 所有组件加载必要的模块
|   |   ├─css : 所有的样式文件放这
|   |   |  ├─style.styl : 引用了所有的样式
|   |   |  ├─_part : 所有组件样式
├─layout : 主题预处理页面模板文件夹
|   ├─_partial
|   |    └frame.ejs : 网页模板，增减改组件和修改头部模板时涉及
```

# source目录结构

再来看看[source](//github.com/jinyaoMa/ma-jinyao.cn/tree/master/source)的目录结构。

```
├─CNAME : 锁定github pages域名定向
├─_posts : 所有的文章
|   ├─Gallery-Post-Not-Supported.md
|   ├─Hello-Hexo.md
|   ├─Helpful-Links.md
|   ├─HTTP是什么？.md
|   ├─Markdown-Basic-Syntax.md
|   ├─Oracle-SQL-Basic-Usage.md
|   ├─TCP-IP是什么？.md
|   ├─主题hexo-theme-mustom使用指南.md
|   ├─旧版日记仿markdown编译代码.md
|   ├─测试区2048JS代码.md
|   └网易云音乐歌单JS音乐播放器JS代码.md
├─resume : 这是个“简历小贴士”单页面
|   └index.md
├─records : 这是个“记录”单页面
|    ├─content.yml : 记录组件加载时从这里读取数据
|    └index.md
├─library : 这是个“代码库”单页面
|    └index.md
├─letter : 这是个“求职信小贴士”单页面
|   └index.md
├─gallery : 这是个“图库”单页面
|    ├─FaceQ1583444636773.png
|    ├─http-request-example.jpg
|    ├─http-request-format.png
|    ├─http-response-example.jpg
|    ├─http-response-format.png
|    ├─index.md
|    ├─tcp-ip-ipv6-prefix.jpg
|    ├─tcp-ip-router-network.jpg
|    ├─tcp-ip-router-subnet.jpg
|    ├─wallpaper-2311325.jpg
|    ├─wallpaper-2572384.jpg
|    ├─wallpaper-878514.jpg
|    ├─yao2048-0.jpg
|    └yaoplayer-0.jpg
├─extension : 这个是本站左下角的扩展功能
|     ├─content.yml : 扩展组件加载时从这里读取数据
|     ├─test : “测试”扩展
|     ├─resume : “简历生成”扩展
|     ├─palette : “图像颜色提取”扩展
|     ├─letter : “求职信”扩展
├─code : 所有使用Hexo标签“include_code”的代码文件都放这
├─about : 这是个“关于”单页面
|   └index.md
```

# 新建单页面例子

**注：需要我的scaffolds/page.md模板为前提**

假如我要新建一个“友链”单页面，我需要运行新建命令：

``` bash
hexo new page "links"
```

运行命令后得到以下新目录结构

```
├─_posts
├─resume
├─records
├─links : 新“友链”单页面
|   └index.md : 模板生成的index.md
├─library
├─letter
├─gallery
├─extension
├─code
├─about
```

如何修改`links/index.md`可以参考[about/index.md](//raw.githubusercontent.com/jinyaoMa/ma-jinyao.cn/master/source/about/index.md)

## 添加菜单项目

在主题配置`_config.yml`中，按格式新增`menus`下的项目

``` yml
menus:
  main: # 项目组
    home: # 项目
      url: / # 项目链接
      icon: '<i class="fas fa-home fa-fw"></i>' # 项目图标
    archive: # 项目
      url: /archives/ # 项目链接
      icon: '<i class="fas fa-archive fa-fw"></i>' # 项目图标
    about: # 项目
      url: /about/ # 项目链接
      icon: '<i class="fas fa-user fa-fw"></i>' # 项目图标
    links: # 新项目 <----------------------------------------------------
      url: /links/  # 新项目链接 <----------------------------------------
      icon: '<i class="fas fa-link fa-fw"></i>' # 新项目图标 <------------
```

接下来，在主题`source/asset/lang`文件夹中的`.yml`语言文件新增`menus`下的项目

``` yml
menus:
  main: # 对应_config.yml中的项目组
    caption: 本站 # 项目组名称
    items: # 对应_config.yml中的项目
      home: 首页 # 项目名称
      archive: 归档 # 项目名称
      about: 关于 # 项目名称
      links: 友链 # 新项目名称 <-----------------------------------------
```

# 新建文章例子

**注：需要我的scaffolds/post.md模板为前提**

假如我要新建一个“HTTP是什么？”文章，我需要运行新建命令：

``` bash
hexo new "HTTP是什么？"
```

运行命令后得到以下新目录结构

```
├─_posts
|   └HTTP是什么？.md : 新“HTTP是什么？”文章
├─resume
├─records
├─links
├─library
├─letter
├─gallery
├─extension
├─code
├─about
```

打开`HTTP是什么？.md`，可以看到front-matter中没有abbrlink，没有关系，这是自动生成。**如果文章里使用了MathJax，需要设置`mathjax: true`。**

``` yml
---
title: HTTP是什么？
categories:
  - - null # 分类设置
tags:
  - null # 标签设置
mathjax: false
date: 2020-04-10 14:15:34
updated: 2020-04-10 14:15:34
---
```

# 添加组件例子

假如我要在“友链”单页面里添加一个像"记录"单页面下的记录组件，命名为`links`组件：

**首先，在Hexo根目录下`source/links`文件夹建立一个`content.yml`用以记录友链，里面的内容可以是这样的：**

``` yml source/links/content.yml
# 友链模板
- name: jinyaoMa
  site: //ma-jinyao.cn
  avatar: //ma-jinyao.cn/asset/img/author.medium.png
# 其他友链
- name: Test
  site: //baidu.com
  avatar: ""

# ...以此类推
```

**然后，在主题目录`themes/mustom`新建和修改以下必要的文件：**

```
├─_config.yml : 添加需要的图标
├─source
|   ├─asset
|   |   ├─part
|   |   |  └links.ejs : 必要“组件模板”
|   |   ├─lang
|   |   |  ├─en.yml : 添加需要的英文文本
|   |   |  └zh-cn.yml : 添加需要的中文文本
|   |   ├─js
|   |   | ├─part
|   |   | |  └links.js : 必要“JS加载模块”
|   |   ├─css
|   |   |  ├─_part
|   |   |  |   └links.styl : 必要“组件样式”
```

`links.ejs`：可以参照[asset/part/records.ejs](//raw.githubusercontent.com/jinyaoMa/ma-jinyao.cn/master/themes/mustom/source/asset/part/records.ejs)组件模板，刚开始可以只有以下部分：

``` html asset/part/links.ejs
<div class="p-links"><!-- 注意类名 -->
  <div class="p-links-caption"><!-- 窗口标题部分 -->
    <%- theme.links.icon %><!-- 窗口标题图标 -->
    <span data-lang="links.caption"><!-- 加载语言文件中links.caption的字符串 --></span>
  </div>
<div>
```

在`_config.yml`中添加以下代码：

``` yml
links:
  icon: '<i class="fas fa-link fa-fw"></i>'
```

在`en.yml`和`zh-cn.yml`中添加以下代码：

``` yml en.yml
links:
  caption: LINKS
```

``` yml zh-cn.yml
links:
  caption: 友链
```

`links.js`：可以参照[asset/js/part/records.js](//raw.githubusercontent.com/jinyaoMa/ma-jinyao.cn/master/themes/mustom/source/asset/js/part/records.js)加载模块，刚开始可以只有以下部分：

``` js asset/js/part/links.js
import part from "../common/part.js";
let tag = 'links'; // 注意标签名
let element = null;
const init = (params, callback) => {
  part(tag, el => {
    element = el;
    document.querySelector(tag).replaceWith(element);
    callback && callback(element);
  });
};
export default {
  tag,
  init
};
```

`links.styl`：可以参照[asset/css/_part/records.styl](//raw.githubusercontent.com/jinyaoMa/ma-jinyao.cn/master/themes/mustom/source/asset/css/_part/records.styl)组件样式，刚开始可以什么样式都没有。

**完成必要文件的新建之后，就要把这个组件加载到页面上，需要修改一下文件：**

在Hexo根目录`source/links/index.md`里面的front-matter中标记这个组件。

``` yml source/links/index.md
---
title: links
layout: page
name: links
parts: 
  - page
  - links # 标记组件
---
```

在`themes/mustom`主题目录中`source/asset/css/style.styl`引用`links.styl`。

``` styl 
// 文件末尾添加
@import '_part/links'
```

在`themes/mustom`主题目录中`source/asset/js/main.js`对号插入以下代码：

``` js
// 头部所有import下面
import links from './part/links.js';

/* Ctrl+F 查找 “Extra Operations”，在“Extra Operations”下添加代码加载组件到“links”单页面 */
// Extra Operations
if (/^\/(links)\//.test(pathname())) {
  ajax({
    url: `/links/content.json`, // content.yml 预编译成的JSON文件，友链的记录文件
    method: 'get',
    dataType: 'json',
    success(data) {
      parts.includes('links') && links.init({
        data
      }, el => {
        checklist.links = true;
        progress.step(stepping);
      });
    }
  });
}
```

在`themes/mustom`主题目录中`layout/_partial/frame.ejs`中`div.m-content`插入组件标签`<links></links>`。

**通过以上步骤就能把组件添加到单页面“友链”中**

# 删除单页面组件

想要停用某个单页面组件只要在单页面所属`source/YourPage/index.md`里面的front-matter中注释掉组件标记即可，例如：

``` yml
---
title: links
layout: page
name: links
parts: 
  - page
  # - links # 注释掉组件标记
---
```

**_我这个主题所用技术都是比较野生和混杂，不懂可以Github Issue我，也可以百度。自己研究一下熟悉之后就简单了，因为来来去去也就几个地方，只是代码分得较细，改动过程鼠标可能比较累。_**