---
title: 旧版日记仿markdown编译代码
categories:
  - Hexo
tags:
  - old blog
  - diary
date: 2019-02-21 22:00:00
updated: 2019-02-21 22:00:00
---

旧版日记仿markdown编译代码

<!-- more -->

``` JavaScript
const fs = require('hexo-fs');

const myDiary = fs.readFileSync('source/my.diary');

var timeRangeAndDiaries = myDiary.split(/-{9,}/); // Split by /-{9,}/ so that having time ranges and diaries separated (trimmed).

for (var i = 0; i < timeRangeAndDiaries.length; i++) {
    timeRangeAndDiaries[i] = timeRangeAndDiaries[i].trim();

    if (timeRangeAndDiaries[i].startsWith('#')) { // Edit time ranges to have h2 tags covered.
        timeRangeAndDiaries[i] = '<h2>' + timeRangeAndDiaries[i].replace('#', '').trim() + '</h2>';
    } else {
        // switch \n to {newline}
        timeRangeAndDiaries[i] = timeRangeAndDiaries[i].replace(/\n+/g, '{newline}');

        // Search list tags in each diaries and save them into temps for parts of paragraph.
        var tempLists = timeRangeAndDiaries[i].match(/\[list\](.*?)\[\/list\]/g);

        // Search img tags in each diaries and save them into temps for parts of paragraph.
        var tempImgs = timeRangeAndDiaries[i].match(/\[img\](.*?)\[\/img\]/g);

        // Edit the saved temps for parts of paragraph to html tags and replace them to each diary (clear out newline characters).
        if (tempLists != null) {
            for (var j = 0; j < tempLists.length; j++) {
                var temp = tempLists[j].replace(/\[\/?list\]/g, '').split('{newline}');
                for (var k = 0; k < temp.length; k++) {
                    var trimmed = temp[k].replace(/({newline})+/g, '').trim();
                    if (trimmed == '') {
                        temp[k] = '';
                    } else {
                        temp[k] = '<li>' + trimmed + '</li>';
                    }
                }
                tempLists[j] = '<ul>' + temp.join('') + '</ul>';
                timeRangeAndDiaries[i] = timeRangeAndDiaries[i].replace(/\[list\](.*?)\[\/list\]/, tempLists[j]);
            }
        }
        if (tempImgs != null) {
            for (var j = 0; j < tempImgs.length; j++) {
                tempImgs[j] = '<img src="' + tempImgs[j].replace(/\[\/?img\]/g, '').replace(/({newline})+/g, '').trim() + '">';
                timeRangeAndDiaries[i] = timeRangeAndDiaries[i].replace(/\[img\](.*?)\[\/img\]/, tempImgs[j]);
            }
        }

        // Split each diary by newline characters and save them into temps for paragraphing.
        var tempParagraphing = timeRangeAndDiaries[i].replace(/\n/g, '').split('{newline}');

        // Edit the saved temps for paragraphing to html tags and replace them to each diary (clear out newline characters and empty lines).
        for (var j = 0; j < tempParagraphing.length; j++) {
            var trimmed = tempParagraphing[j].replace(/({newline})+/g, '').trim();
            if (trimmed == '') {
                tempParagraphing[j] = '';
            } else if (!trimmed.startsWith('<ul')) {
                tempParagraphing[j] = '<p>' + trimmed + '</p>';
            }
        }
        var tempDiary = tempParagraphing.join('');
        if (tempDiary.trim() != '') {
            timeRangeAndDiaries[i] = '<div class="diary-item">' + tempDiary + '</div>';
        }
    }
}

// Join these converted time ranges and diaries into string.
var html = timeRangeAndDiaries.join('');
// console.log(html)
fs.writeFileSync('public/diaries.html', html);
```
