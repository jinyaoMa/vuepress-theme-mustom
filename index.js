module.exports = (themeConfig, context) => {

  Object.assign(themeConfig, {
    skins: [{
      name: 'default', // locale match
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
    }]
  });

  const name = 'vuepress-theme-mustom';

  const plugins = [
    [
      '@vuepress/blog',
      {
        directories: [{
          id: 'post',
          dirname: '_posts',
          path: context.base + 'posts/',
          pagination: {
            lengthPerPage: Infinity,
          },
          itemPermalink: context.base + 'posts/:slug',
          layout: 'Archive',
          itemLayout: 'Post'
        }],
        frontmatters: [{
          id: 'tags',
          keys: ['tags'],
          path: context.base + 'tags/',
          scopeLayout: 'Archive'
        }, {
          id: 'categories',
          keys: ['categories'],
          path: context.base + 'categories/',
          scopeLayout: 'Archive'
        }],
        sitemap: {
          hostname: 'https://ma-jinyao.cn' + context.base
        }
      }
    ],
    [ // https://vuepress.github.io/zh/plugins/zooming/
      'vuepress-plugin-zooming',
      {
        selector: '.markdown-body img',
        delay: 1000,
        options: {
          bgColor: 'black',
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
    [
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
  ];

  const alias = o => {
    return {
      '@theme': context.themeAPI.themePath
    };
  };

  const define = o => {
    return {
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
      path: '/',
      frontmatter: {
        layout: 'Home'
      }
    }
  ];

  const extendPageData = $page => {
    $page.frontmatter.lang = "zh-CN";

    const content = $page._strippedContent;

    if (content) {
      const pangunode = require('./scripts/pangunode');
      $page.title = pangunode($page.title || '');
      //$page._strippedContent = pangunode($page._strippedContent || '');
      //$page.excerpt = pangunode($page.excerpt || '');
    }

    if (content) {
      const zh = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
      const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
      const min2read = zh / 300 + en / 160;
      $page.frontmatter.wordcount = zh + en;
      $page.frontmatter.min2read = min2read < 1 ? '1' : parseInt(min2read, 10);
    } else {
      $page.frontmatter.wordcount = 0;
      $page.frontmatter.min2read = 0;
    }

    if (content) {
      const matches = content.match(/!\[.*\]\(\s*([^\)]+)\s*\)/) || [];
      if (matches.length > 1) {
        $page.frontmatter.cover = matches[1].replace(/\s+['"].*['"]/, '');
      } else {
        $page.frontmatter.cover = null;
      }
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