const md5 = require('md5');
const path = require('path');
const fs = require('fs');

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

const generateGallery = context => {
  let result = {
    page: {},
    list: []
  };
  let projectPath = './';
  const regex = /^.+\.(bmp|png|jpeg|jpg|gif|svg|webp)$/;
  if (process.argv.length === 4 && /(dev|build)/.test(process.argv[2])) {
    const projectName = process.argv[3];
    projectPath = path.resolve(__dirname, projectName, '.vuepress/public/gallery');
  } else if (process.argv.length === 3 && /(dev|build)/.test(process.argv[2])) {
    projectPath = path.resolve(__dirname, '.vuepress/public/gallery');
  }
  if (fs.existsSync(projectPath) && fs.statSync(projectPath).isDirectory()) {
    const ls = fs.readdirSync(projectPath);
    if (ls && ls.length) {
      ls.forEach(filename => {
        regex.test(filename) && result.list.push({
          name: filename,
          url: context.base + 'gallery/' + filename
        });
      });
      result.page = {
        path: '/gallery/',
        frontmatter: {
          layout: 'Layout',
          title: '图库 | Gallery',
          gallery: {
            enabled: true
          }
        }
      };
    }
  }
  return result;
};

module.exports = (themeConfig, context) => {

  const gallery = generateGallery(context);

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
    },
    gallery: gallery.list
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
          path: '/archive/',
          pagination: {
            lengthPerPage: Infinity,
          },
          layout: 'Archive',
          itemLayout: 'Post'
        }],
        frontmatters: [{
          id: 'tags',
          title: '标签 | Tags',
          keys: ['tags'],
          path: '/tag/',
          scopeLayout: 'Archive'
        }, {
          id: 'categories',
          title: '分类 | Categories',
          keys: ['categories'],
          path: '/category/',
          scopeLayout: 'Archive'
        }],
        sitemap: {
          hostname: 'https://ma-jinyao.cn'
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
    [ // https://github.com/tolking/vuepress-plugin-img-lazy
      'vuepress-plugin-img-lazy'
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
      path: '/',
      frontmatter: {
        layout: 'Home'
      }
    },
    gallery.page
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
      const matches = content.match(/\!\[[^\]]*\]\(\s*([^\)]+)\s*\)/) || [];
      if (matches.length > 1) {
        $page.frontmatter.cover = $page.frontmatter.image = matches[1].replace(/\s+['"][^'"]+['"]$/, '');
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

    // change post link
    const matches = $page.regularPath.match(/\/_posts\/(.+)(\.html)/);
    if (matches && matches.length === 3) {
      const pathArr = md5(decodeURIComponent(matches[1]));
      $page.frontmatter.permalink = '/post/' + pathArr;
    }

    // add empty content flag
    if (typeof content !== 'string' || content === "" || content.trim().length === 0) {
      $page.frontmatter.isContentEmpty = true;
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