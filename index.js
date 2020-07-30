const combineThemeConfig = (themeConfig, object) => {
  for (const key in object) {
    if (object[key] instanceof Array) {
      if (!themeConfig.hasOwnProperty(key)) {
        themeConfig[key] = [];
      }
      themeConfig[key] = themeConfig[key].concat(object[key]);
    } else if (typeof object[key] === "object") {
      if (!themeConfig.hasOwnProperty(key)) {
        themeConfig[key] = {};
      }
      combineThemeConfig(themeConfig[key], object[key]);
    } else {
      if (!themeConfig.hasOwnProperty(key)) {
        themeConfig[key] = object[key];
      }
    }
  }
};

module.exports = (themeConfig, context) => {

  combineThemeConfig(themeConfig, {
    skins: [{
      name: 'default', // locale match
      color: '#696969'
    }, {
      name: 'whiteblack', // locale match
      color: 'linear-gradient(120deg, #666666, #999999, #333333)'
    }, {
      name: 'jshine', // locale match
      color: 'linear-gradient(120deg, #ff3300, #cc66ff, #00ccff)'
    }, {
      name: 'memariani', // locale match
      color: 'linear-gradient(120deg, #cc6699, #6666cc, #33cccc)'
    }],
    settings: [{
      name: 'nightshift',
      icon: '<i class="fas fa-adjust fa-fw"></i>'
    }, {
      name: 'nocanvas',
      icon: '<i class="fas fa-video fa-fw"></i>'
    }, {
      name: 'language',
      icon: '<i class="fas fa-globe-asia fa-fw"></i>'
    }],
    panels: [{
      caption: 'categories',
      icon: '<i class="fas fa-folder-open fa-fw"></i>'
    }, {
      caption: 'tags',
      icon: '<i class="fas fa-tags fa-fw"></i>'
    }],
    hitokoto: {
      api: '//v1.hitokoto.cn',
      type: 'l' // https://developer.hitokoto.cn/sentence/#请求参数
    }
  });

  const name = 'vuepress-theme-mustom';

  const plugins = [
    [ // https://vuepress-plugin-blog.ulivz.com/
      '@vuepress/blog',
      {
        directories: [{
          id: 'post',
          title: '归档 | Archive',
          dirname: '_posts',
          path: context.base + 'archive/',
          pagination: {
            lengthPerPage: Infinity,
          },
          itemPermalink: context.base + 'archive/:slug',
          layout: 'Archive',
          itemLayout: 'Post'
        }],
        frontmatters: [{
          id: 'tags',
          title: '标签 | Tags',
          keys: ['tags'],
          path: context.base + 'tags/',
          scopeLayout: 'Archive'
        }, {
          id: 'categories',
          title: '分类 | Categories',
          keys: ['categories'],
          path: context.base + 'categories/',
          scopeLayout: 'Archive'
        }],
        sitemap: {
          hostname: 'https://ma-jinyao.cn' + context.base
        },
        comment: themeConfig.comment, /* { // https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#comment
          service: 'vssue',
          owner: 'You',
          repo: 'Your repo',
          clientId: 'Your clientId',
          clientSecret: 'Your clientSecret',
        }*/
      }
    ],
    [ // https://vuepress.github.io/zh/plugins/zooming/
      'vuepress-plugin-zooming',
      {
        selector: '.markdown-body img',
        delay: 1000,
        options: {
          bgColor: '#000000ee',
          scaleBase: 0.9,
          zIndex: 999999999,
        },
      },
    ],
    [ // https://vuepress.github.io/zh/plugins/table-of-contents/
      'vuepress-plugin-table-of-contents',
    ],
    //[ // https://vuepress.github.io/zh/plugins/smooth-scroll/
    //  'vuepress-plugin-smooth-scroll',
    //],
    [ // https://vuepress.github.io/zh/plugins/serve/
      'vuepress-plugin-serve',
    ],
    [ // https://vuepress.github.io/zh/plugins/mathjax/
      'vuepress-plugin-mathjax',
    ],
    [ // https://www.vuepress.cn/plugin/official/plugin-active-header-links.html
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ],
    [ // https://www.vuepress.cn/plugin/official/plugin-pwa.html
      '@vuepress/pwa'
    ],
    [ // https://www.vuepress.cn/plugin/official/plugin-search.html
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ],
    [ // https://shigma.github.io/markdown-it-pangu/vuepress.html
      'vuepress-plugin-pangu'
    ],
    [ // https://vuepress.github.io/zh/plugins/nprogress/
      'vuepress-plugin-nprogress'
    ],
    [ // https://github.com/viko16/vuepress-plugin-permalink-pinyin
      'vuepress-plugin-permalink-pinyin'
    ],
    [ // https://github.com/JoeyBling/vuepress-plugin-helper-live2d
      'vuepress-plugin-helper-live2d', {
        log: false,
        live2d: {
          enable: true,
          model: 'haruto',
          display: {
            position: "right",
            width: 200,
            height: 300,
            hOffset: 64,
            vOffset: 0,
          },
          mobile: {
            show: false
          },
          react: {
            opacity: 1
          }
        }
      }
    ],
    [ // https://sns.goyfe.com/guide/
      'vuepress-plugin-social-share',
      themeConfig.socialShare,/*{
        networks: ['qq', 'weibo', 'douban', 'email', 'whatsapp', 'twitter', 'facebook', 'reddit', 'telegram', 'line'],
        email: 'jinyao.ma@outlook.com',
        fallbackImage: '/social-share.png',
        autoQuote: true,
        isPlain: true
      }*/
    ],
  ];

  const alias = o => {
    return {
      '@theme': context.themeAPI.themePath
    };
  };

  const define = o => {
    return {
      BUILD_TIMESTAMP: Date.now(),
      BUILD_YEAR: (new Date()).getFullYear(),
      VUEPRESS_OFFICIAL_SITE: '//vuepress.vuejs.org/',
      THEME_REPO_URL: '//github.com/jinyaoMa/vuepress-theme-mustom',
      THEME_NAME: name,
      THEME_SHORTNAME: 'Mustom',
      THEME_AUTHOR: 'jinyaoMa',
      THEME_AUTHOR_LINK: '//github.com/jinyaoMa',
      CC_LICENSE_LINK: '//creativecommons.org/licenses/by-nc-sa/4.0/'
    };
  };

  const additionalPages = [
    {
      path: context.base,
      frontmatter: {
        layout: 'Home'
      }
    }
  ];

  const extendPageData = $page => {
    $page.frontmatter.lang = "zh-CN";

    const content = $page._strippedContent;

    // pangu
    if (content) {
      const pangunode = require('./scripts/pangunode');
      $page.frontmatter.title = $page.title = pangunode($page.title || '');
      $page._strippedContent = pangunode($page._strippedContent || '');
      $page.excerpt = pangunode($page.excerpt || '');
    }

    // word count
    if (content) {
      const zh = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
      const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
      const min2read = zh / 150 + en / 100;
      $page.frontmatter.wordcount = zh + en;
      $page.frontmatter.min2read = min2read < 1 ? '1' : parseInt(min2read, 10);
    } else {
      $page.frontmatter.wordcount = 0;
      $page.frontmatter.min2read = 0;
    }

    // extract cover
    if (content) {
      const matches = content.match(/!\[.*\]\(\s*([^\)]+)\s*\)/) || [];
      if (matches.length > 1) {
        $page.frontmatter.cover = $page.frontmatter.image = matches[1].replace(/\s+['"].*['"]/, '');
      } else {
        $page.frontmatter.cover = null;
      }
    }

    // generate desc
    if (!$page.frontmatter.meta || !$page.frontmatter.meta.length) {
      $page.frontmatter.meta = [];
    }
    if (content) {
      if (content.trim().length === 0) {
        $page.frontmatter.meta.push({
          name: 'description',
          content: $page.frontmatter.title + ' - ' + $page._computed.$description
        });
      } else {
        $page.frontmatter.meta.push({
          name: 'description',
          content: content.replace(/\r?\n|\r/g, '').replace(/<!--[^>]+-->/g, ' | ').substr(0, 146) + ' ...' // length 150
        });
      }
    } else {
      $page.frontmatter.meta.push({
        name: 'description',
        content: $page.frontmatter.title + ' - ' + $page._computed.$description
      });
    }
  };

  return {
    name,
    plugins,
    alias,
    define,
    additionalPages,
    extendPageData
  };
}