module.exports = { // https://www.vuepress.cn/zh/config/

  base: '/',

  title: '耀 の 个人网站 | Mark の Personal Website',

  description: '耀の个人网站, 耀的个人网站, Mark の Personal Website, Mark\'s Personal Website, 耀的部落阁, jinyaoMa, Mustom, VuePress',

  theme: require.resolve('../../'),

  themeConfig: {
    author: 'jinyaoMa',
    year: 2019,
    brand: {
      signatures: [
        '我只想安静地做笔记', // zh
        'I just wanna note silently' // en
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
      caption: 'main', // locale match
      icon: '<i class="fas fa-sitemap fa-fw"></i>',
      items: [{
        icon: '<i class="fas fa-home fa-fw"></i>',
        text: 'home', // locale match
        link: '/'
      }, {
        icon: '<i class="fas fa-archive fa-fw"></i>',
        text: 'archive', // locale match
        link: '/archive/'
      }, {
        icon: '<i class="fas fa-user fa-fw"></i>',
        text: 'about', // locale match
        link: '/about/'
      }]
    }, {
      caption: 'job', // locale match
      icon: '<i class="fas fa-briefcase fa-fw"></i>',
      items: [{
        icon: '<i class="fas fa-paper-plane fa-fw"></i>',
        text: 'resume', // locale match
        link: '/resume/'
      }, {
        icon: '<i class="fas fa-file-contract fa-fw"></i>',
        text: 'letter', // locale match
        link: '/letter/'
      }]
    }, {
      caption: 'others', // locale match
      icon: '<i class="fas fa-ellipsis-h fa-fw"></i>',
      items: [{
        icon: '<i class="fas fa-search fa-fw"></i>',
        text: 'search', // locale match
        link: '/search/'
      }, {
        icon: '<i class="fas fa-box fa-fw"></i>',
        text: 'library', // locale match
        link: '/library/'
      }, {
        icon: '<i class="fas fa-icons fa-fw"></i>',
        text: 'icons', // locale match
        link: '/icons/'
      }, {
        icon: '<i class="fas fa-edit fa-fw"></i>',
        text: 'records', // locale match
        link: '/records/'
      }, {
        icon: '<i class="fas fa-images fa-fw"></i>',
        text: 'gallery', // locale match
        link: '/gallery/'
      }]
    }],
    exts: [{
      name: 'My Site',
      icon: 'https://ma-jinyao.cn/asset/img/author.medium.png',
      link: 'https://ma-jinyao.cn/'
    }, {
      name: 'MPlayer',
      icon: 'https://ma-jinyao.cn/asset/img/icon.medium.png',
      link: 'https://ma-jinyao.cn/MPlayer'
    }, {
      name: 'Resume',
      icon: 'https://ma-jinyao.cn/extension/resume/icon.png',
      link: 'https://ma-jinyao.cn/extension/resume/english/'
    }, {
      name: '简历',
      icon: 'https://ma-jinyao.cn/extension/resume/icon.reverse.png',
      link: 'https://ma-jinyao.cn/extension/resume/chinese/'
    }, {
      name: 'Cover Letter',
      icon: 'https://ma-jinyao.cn/extension/letter/icon.png',
      link: 'https://ma-jinyao.cn/extension/letter/english/'
    }, {
      name: '求职信',
      icon: 'https://ma-jinyao.cn/extension/letter/icon.reverse.png',
      link: 'https://ma-jinyao.cn/extension/letter/chinese/'
    }, {
      name: 'Palette',
      icon: 'https://ma-jinyao.cn/extension/palette/icon.png',
      link: 'https://ma-jinyao.cn/extension/palette/'
    }]
  },

  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [1, 2, 3, 4, 5, 6]
    },
    extractHeaders: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  },

  evergreen: true,

}