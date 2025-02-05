// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "Curve",
    // 站点描述
    description: "Hello World",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "https://blog.purclo.net",
    // 语言
    lang: "ko-KR",
    // 作者
    author: {
      name: "Admin",
      cover: "/images/logo/logo.webp",
      email: "114514@gmail.com",
      link: "https://www.imsyy.top",
    },
  },
  // 备案信息
  icp: "萌ICP备114514号",
  // 建站日期
  since: "2020-07-28",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://blog.imsyy.top/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "문서",
      items: [
        { text: "모든 게시물", link: "/pages/archives", icon: "article" },
        { text: "모든 분류", link: "/pages/categories", icon: "folder" },
        { text: "모든 태그", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "전문",
      items: [
        { text: "기술 공유", link: "/pages/categories/기술 공유", icon: "technical" },
        { text: "내 프로젝트", link: "/pages/project", icon: "code" },
        { text: "효율 도구", link: "/pages/tools", icon: "tools" },
      ],
    },
    {
      text: "友链",
      items: [
        { text: "친구 망", link: "/pages/friends", icon: "fish" },
        { text: "친구 링크", link: "/pages/link", icon: "people" },
      ],
    },
    {
      text: "내 것",
      items: [
        { text: "말하고 싶은 것", link: "/pages/message", icon: "chat" },
        { text: "감사 명단", link: "/pages/thanks", icon: "reward" },
        { text: "이 사이트에 대해", link: "/pages/about", icon: "contacts" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "블로그",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "主站",
          url: "/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "블로그 백업 사이트",
          url: "https://blog-backup.imsyy.top/",
        },
      ],
    },
    {
      name: "서비스",
      list: [
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
          name: "시작 페이지",
          url: "https://nav.imsyy.top/",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
          name: "오늘의 인기 목록",
          url: "https://hot.imsyy.top/",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
          name: "사이트 모니터링",
          url: "https://status.imsyy.top/",
        },
      ],
    },
    {
      name: "프로젝트",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "Curve",
          url: "https://github.com/imsyy/vitepress-theme-curve",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/07/66124f5fc63c8.png",
          name: "SPlayer",
          url: "https://github.com/imsyy/SPlayer",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
          name: "Snavigation",
          url: "https://github.com/imsyy/SPlayer",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "Home",
          url: "https://github.com/imsyy/home",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
          name: "DailyHotApi",
          url: "https://github.com/imsyy/DailyHotApi",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
          name: "site-status",
          url: "https://github.com/imsyy/site-status",
        },
      ],
    },
  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示 文章不设置cover封面会显示异常，可以设置下方默认封面
      enable: true,
      // 封面布局方式: left | right | both
      coverLayout: 'both',
      // 默认封面(随机展示)
      defaultCover: [
        'https://example.com/1.avif',
        'https://example.com/2.avif',
        'https://example.com/3.avif'
      ]
    }
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "mailto:one@imsyy.top",
      },
      {
        icon: "github",
        link: "https://www.github.com/imsyy/",
      },
      {
        icon: "telegram",
        link: "https://t.me/bottom_user",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/98544142",
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=1539250352",
      },
      {
        icon: "twitter-x",
        link: "https://twitter.com/iimmsyy",
      },
    ],
    // sitemap
    sitemap: [
      {
        text: "블로그",
        items: [
          { text: "최근 게시물", link: "/" },
          { text: "모든 분류", link: "/pages/categories" },
          { text: "모든 태그", link: "/pages/tags" },
          { text: "게시물 보관함", link: "/pages/archives", newTab: true },
        ],
      },
      {
        text: "프로젝트",
        items: [
          { text: "Home", link: "https://github.com/imsyy/home/", newTab: true },
          { text: "SPlayer", link: "https://github.com/imsyy/SPlayer/", newTab: true },
          { text: "DailyHotApi", link: "https://github.com/imsyy/DailyHotApi/", newTab: true },
          { text: "Snavigation", link: "https://github.com/imsyy/Snavigation/", newTab: true },
        ],
      },
      {
        text: "전문",
        items: [
          { text: "기술 공유", link: "/pages/categories/기술 공유" },
          { text: "내 프로젝트", link: "/pages/project" },
          { text: "효율 도구", link: "/pages/tools" },
        ],
      },
      {
        text: "페이지",
        items: [
          { text: "말하고 싶은 것", link: "/pages/message" },
          { text: "이 사이트에 대해", link: "/pages/about" },
          { text: "개인정보 처리 방침", link: "/pages/privacy" },
          { text: "저작권 협약", link: "/pages/cc" },
        ],
      },
      {
        text: "서비스",
        items: [
          { text: "사이트 상태", link: "https://status.imsyy.top/", newTab: true },
          { text: "하나의 내비게이션", link: "https://nav.imsyy.top/", newTab: true },
          { text: "사이트 구독", link: "https://blog.imsyy.top/rss.xml", newTab: true },
          {
            text: "피드백 및 신고",
            link: "https://eqnxweimkr5.feishu.cn/share/base/form/shrcnCXCPmxCKKJYI3RKUfefJre",
            newTab: true,
          },
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: false,
    // 评论系统选择
    // artalk / twikoo
    type: "artalk",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: "",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "ap-shanghai",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "여기에는 개발 관련 질문과 의견이 있으며, 대부분 <strong>프론트엔드 개발</strong>에 중점을 둡니다. 여러분이 유용한 지식과 튜토리얼을 찾을 수 있기를 바랍니다.",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "추석",
        date: "2025-01-29",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: false,
    // url
    url: "https://api-meting.example.com",
    // id
    id: 9379831714,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: "",
  },
  // 打赏
  rewardData: {
    enable: true,
    // 微信二维码
    wechat: "https://pic.efefee.cn/uploads/2024/04/07/66121049d1e80.webp",
    // 支付宝二维码
    alipay: "https://pic.efefee.cn/uploads/2024/04/07/661206631d3b5.webp",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "",
  },
};
