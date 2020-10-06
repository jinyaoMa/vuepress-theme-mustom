const secret = require('./_secret');

module.exports = { // https://www.vuepress.cn/zh/config/

  theme: require.resolve('../../'),

  base: '/',

  title: '耀 の 部落阁 | Mark\'s BLOG',

  description: '耀, Mark, jinyaoMa, 部落阁, 博客, Blog, Mustom, VuePress, 耀の个人网站, 耀的个人网站, Mark の Personal Website, Mark\'s Personal Website',

  themeConfig: {
    domain: 'https://ma-jinyao.cn', // for sitemap generate
    translate: secret.translate, // baidu translation
    comment: secret.comment, // vssue setting
    // clustrmaps setting
    clustrmaps: {
      id: "clustrmaps", // clstr_globe / clustrmaps
      src: "//cdn.clustrmaps.com/map_v2.js?cl=333333&w=a&t=t&d=kuCCiVvtASTqmAMxPSTLcjxs-p8j6ht3LUi9z9Q-OKc&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=333333"
    },
    author: 'jinyaoMa',
    year: 2019, // year of site started
    maximizeLaunch: false, // full size image for launch
    noEmpty: false, // hide empty component
    recentPostOffset: 5, // number of recent posts each time click on 'more post'
    searchMaxSuggestions: 19, // max number of search results display
    images: { // for image replacment; no base needed; first layer key points to component name
      ad: 'https://raw.githubusercontent.com/jinyaoMa/jinyaoMa/master/qrcode.png',
      avatar: '/assets/img/avatar.png',
      brand: '/assets/img/brand.png',
      hitokoto: {
        left: '/assets/img/hitokoto.left.png',
        right: '/assets/img/hitokoto.right.png',
      },
      empty: '/assets/img/empty.png',
      records: '/assets/img/records.png',
      background: '/assets/img/background.png'
    },
    dateFormatter: time => { // for sitemap dateFormatter used
      const regexAM = /├\w\d\d: AM┤/;
      const regexPM = /├\w\d\d: PM┤/;
      return new Date(time.replace(regexAM, "AM").replace(regexPM, "PM")).toISOString();
    },
    customBackgrounds: [
      //'/assets/img/background.png',
      //'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596065328389&di=ad7a9cc49e45547721005bd528325f0d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F58b4ef69ed377.jpg',
      //'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596063652971&di=8b659ee5cd46f4006d082b626eb3bd0d&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F180330%2F4-1P330160644.jpg'
    ],
    socialShare: { // https://sns.goyfe.com/guide/
      networks: ['qq', 'weibo', 'douban', 'email', 'whatsapp', 'facebook', 'reddit', 'telegram', 'line'],
      email: 'jinyao.ma@outlook.com',
      fallbackImage: '/assets/img/avatar.png',
      noGlobalSocialShare: true
    },
    // startup notification; priority => index 0 = highest
    // type: 'default', 'warning', 'error'
    notification: [{ // welcome msg
        type: 'default',
        msg: [
          '<strong>欢迎来到我的个人网站！技术交流请加 QQ 群：595614161，也可以加本人QQ：907881445，或者点击页面左下角扫码找我哦~<strong>', // zh
          '<strong>Welcome to my personal website! <strong>' // en
        ]
      },
      {
        type: 'warning',
        msg: [
          '<strong>我的旧 Hexo 版网站已经搬迁至 <a target="_blank" href="https://blog.ma-jinyao.cn">https://blog.ma-jinyao.cn</a> ！</strong>', // zh
          '<strong>If you are looking for the Hexo version of my site, <a target="_blank" href="https://blog.ma-jinyao.cn">click here</a> ！</strong>' // en
        ]
      },
    ],
    qrcodes: [{ // qrcode for contact and friending
      tooltip: [
        '扫码加我QQ', // zh
        'Scan QR code to friend me via QQ' // en
      ],
      locale: [
        'QQ', // zh
        'QQ' // en
      ],
      path: '/assets/img/qq.png' // no base needed
    }, {
      tooltip: [
        '扫码加我微信', // zh
        'Scan QR code to friend me via WeChat' // en
      ],
      locale: [
        '微信', // zh
        'WeChat' // en
      ],
      path: '/assets/img/wechat.png' // no base needed
    }],
    header: {
      sitename: [
        '<em><span>耀 の</span></em><strong><span>部落阁</span></strong>', // zh
        '<em><span>Mark\'s</span></em><strong><span>BLOG</span></strong>' // en
      ]
    },
    brand: {
      signatures: [
        '问题, 方法, 程序, 标准, 解决', // zh
        'issue, func, flow, std, solve' // en
      ],
      contacts: [{
        icon: '<i class="fab fa-github fa-fw"></i>',
        text: 'jinyaoMa',
        link: 'https://github.com/jinyaoMa'
      }, {
        icon: '<i class="fas fa-envelope fa-fw"></i>',
        text: 'jinyao.ma@outlook.com',
        link: 'mailto://jinyao.ma@outlook.com'
      }, {
        icon: '<i class="fab fa-qq fa-fw"></i>',
        text: '907881445',
        link: 'tencent://Message/?uin=907881445'
      }]
    },
    menus: [{
      caption: [
        '菜单', // zh
        'MENU' // en
      ],
      icon: '<i class="fas fa-sitemap fa-fw"></i>',
      items: [{
        icon: '<i class="fas fa-home fa-fw"></i>',
        text: [
          '首页', // zh
          'Home' // en
        ],
        link: '/'
      }, {
        icon: '<i class="fas fa-archive fa-fw"></i>',
        text: [
          '归档', // zh
          'Archive' // en
        ],
        link: '/archive/'
      }, {
        icon: '<i class="fas fa-box fa-fw"></i>',
        text: [
          '代码库', // zh
          'Code Library' // en
        ],
        link: '/codes/'
      }, {
        icon: '<i class="fas fa-icons fa-fw"></i>',
        text: [
          '图标字体库', // zh
          'Icon Font Library' // en
        ],
        link: '/icons/'
      }, {
        icon: '<i class="fas fa-edit fa-fw"></i>',
        text: [
          '记录', // zh
          'Records' // en
        ],
        link: '/records/'
      }, {
        icon: '<i class="fas fa-images fa-fw"></i>',
        text: [
          '图库', // zh
          'Gallery' // en
        ],
        link: '/gallery/'
      }, {
        icon: '<i class="fas fa-paper-plane fa-fw"></i>',
        text: [
          '简历小贴士', // zh
          'Resume Tips' // en
        ],
        link: '/resume/'
      }, {
        icon: '<i class="fas fa-file-contract fa-fw"></i>',
        text: [
          '求职信小贴士', // zh
          'Cover Letter Tips' // en
        ],
        link: '/letter/'
      }, {
        icon: '<i class="fas fa-user fa-fw"></i>',
        text: [
          '关于', // zh
          'About' // en
        ],
        link: '/about/'
      }]
    }],
    meting: {
      server: 'netease', // netease, tencent, kugou, xiami, baidu
      type: 'playlist', // song, playlist, album, search, artist
      id: '4989572738', // song id / playlist id / album id / search keyword
      theme: 'var(--link)', // e.g. #ff3300
      height: '297px' // playlist height, 297px ==> 9 lines
    },
    // external links; use for the component that displays after clicking on the left-top button of header
    portals: [{
      name: 'My Site',
      desc: '耀 の 个人网站 | Mark の Personal Website',
      icon: '/assets/img/avatar.png',
      link: '/'
    }, {
      name: 'Palette',
      desc: '想知道图片主题色？',
      icon: 'https://jinyaoma.github.io/Palette/icon.png',
      link: 'https://jinyaoma.github.io/Palette/'
    }, {
      name: 'MPlayer',
      desc: 'APlayer 个人模仿练习版',
      icon: 'https://blog.ma-jinyao.cn/asset/img/icon.medium.png',
      link: 'https://jinyaoma.github.io/MPlayer/'
    }, {
      name: '求职信仓库',
      desc: 'Cover Letter Library',
      icon: 'https://jinyaoma.github.io/cover-letter-lib/favicon.ico',
      link: 'https://jinyaoma.github.io/cover-letter-lib/'
    }, {
      name: 'Resume',
      desc: 'Resume Template',
      icon: 'https://blog.ma-jinyao.cn/extension/resume/icon.png',
      link: 'https://blog.ma-jinyao.cn/extension/resume/english/'
    }, {
      name: '简历',
      desc: '简历模板',
      icon: 'https://blog.ma-jinyao.cn/extension/resume/icon.reverse.png',
      link: 'https://blog.ma-jinyao.cn/extension/resume/chinese/'
    }],
    hitokoto: {
      customs: [
        /*{ // format; if customs exist, API will be ignored, and customs will be in use
                word: 'https://developer.hitokoto.cn',
                from: '一言开发者中心'
              }*/
      ],
      type: 'i' // https://developer.hitokoto.cn/sentence/#请求参数
    },
    gallery: [
      /*{ format; these gallery items will be appended to /gallery/ page
            name: 'test image from baidu',
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596063652971&di=8b659ee5cd46f4006d082b626eb3bd0d&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F180330%2F4-1P330160644.jpg'
          }*/
    ],
    pwa: { // https://www.vuepress.cn/plugin/official/plugin-pwa.html
      serviceWorker: true,
      popupComponent: 'CustomSWUpdatePopup',
      updatePopup: {
        message: [
          '检测到可用的新内容。', // zh
          'New content is available.' // en
        ],
        buttonText: [
          '更新缓存', // zh
          'Refresh' // en
        ]
      }
    }
  },

  head: [ // Include pwa settings, https://www.vuepress.cn/plugin/official/plugin-pwa.html
    ['link', {
      rel: 'icon',
      href: '/favicon.ico',
      type: "image/x-icon"
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#ffffff'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: '#ffffff'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/assets/img/apple-touch-icon.png'
    }],

    // Search engine verify
    ['meta', {
      name: 'google-site-verification',
      content: 'DR-3xvCA7YBP7TIeg7__j5lxaniGh2pzocrfywyn8o0'
    }],
    ['meta', {
      name: 'baidu-site-verification',
      content: 'zQef3H7nga'
    }]
  ],

  // https://www.vuepress.cn/zh/config/#markdown
  markdown: {
    lineNumbers: false,
    extractHeaders: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  },

  evergreen: true, // using old browser ?

  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        output: {
          publicPath: 'https://cdn.jsdelivr.net/gh/jinyaoMa/vuepress-theme-mustom@1.1.1-20201006.1720/'
        }
      }
    }
  }

}