---
title: 网易云音乐歌单JS音乐播放器JS代码
categories:
  - Blog
  - Plugin
tags:
  - 音乐播放器
  - JavaScript
date: 2019-01-17 18:09:00
updated: 2019-01-17 18:09:00
---

![JS音乐播放器截图](/gallery/yaoplayer-0.jpg)

网易云音乐歌单JS音乐播放器JS代码

感谢[MessAPI](//github.com/messoer/mess-api-doc)提供的网易云音乐API

代码依赖jQuery和fontawesome

<!-- more -->

## 使用方法

``` JavaScript
$.get('https://v1.itooi.cn/netease/songList', {
	'id': 998389130 // 此处歌单ID
}, function(json){
	if (json.data != undefined && json.data != null &&
		json.data.tracks != undefined && json.data.tracks != null) {
		$('body').append(new YaoPlayer('YaoPlayer', json.data.tracks.map(song => {
      return {
        'name': song.name,
        'singer': song.artists.map(artist => artist.name).join(', '),
        'lrc': 'Not found',
        'pic': song.album.picUrl,
        'url': `https://v1.itooi.cn/netease/url?id=${song.id}&quality=128`
      };
    })));
	}
}, 'json');
```

## 插件全代码

{% include_code lang:javascript from:1 to:59 yaoplayer.js %}