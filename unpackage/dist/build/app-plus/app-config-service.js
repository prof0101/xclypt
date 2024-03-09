var isReady = false
var onReadyCallbacks = []
var isServiceReady = false
var onServiceReadyCallbacks = []
var __uniConfig = {
  pages: [
    'pages/index/index',
    'pages/webview/webview',
    'pages/authorization/authorization',
    'pages/authorization/authorization-weixin',
    'pages/authorization/authorization-weibo',
    'pages/comment/edit',
    'pages/comment/view',
    'pages/media/music',
    'pages/media/image',
    'pages/media/video',
    'pages/account/forgot',
    'pages/account/login',
    'pages/account/register',
    'pages/article/list',
    'pages/article/index',
    'pages/article/details',
    'pages/forum/index',
    'pages/forum/list',
    'pages/forum/details',
    'pages/forum/view',
    'pages/forum/table',
    'pages/forum/edit',
    'pages/forum/add',
    'pages/comment/table',
    'pages/notice/list',
    'pages/notice/details',
    'pages/attraction_information/list',
    'pages/attraction_information/details',
    'pages/ticket_orders/edit',
    'pages/restaurant_information/list',
    'pages/restaurant_information/details',
    'pages/restaurant_orders/edit',
    'pages/hotel_information/list',
    'pages/hotel_information/details',
    'pages/hotel_orders/edit',
    'pages/homestay_information/list',
    'pages/homestay_information/details',
    'pages/homestay_orders/edit',
    'pages/regular_users/table',
    'pages/regular_users/view',
    'pages/merchant_users/table',
    'pages/merchant_users/view',
    'pages/attraction_information/table',
    'pages/attraction_information/view',
    'pages/ticket_orders/table',
    'pages/ticket_orders/view',
    'pages/restaurant_information/table',
    'pages/restaurant_information/view',
    'pages/restaurant_orders/table',
    'pages/restaurant_orders/view',
    'pages/hotel_information/table',
    'pages/hotel_information/view',
    'pages/hotel_orders/table',
    'pages/hotel_orders/view',
    'pages/homestay_information/table',
    'pages/homestay_information/view',
    'pages/homestay_orders/table',
    'pages/homestay_orders/view',
    'pages/user/collect',
    'pages/user/index',
    'pages/user/password',
    'pages/user/info',
    'pages/user_center/index',
  ],
  window: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '项目',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
    background: '#efeff4',
  },
  tabBar: {
    color: '#8a8a8a',
    selectedColor: '#3388FF',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/img/home_a.png',
        selectedIconPath: 'static/img/home_b.png',
      },
      {
        pagePath: 'pages/forum/index',
        text: '旅游论坛',
        iconPath: 'static/img/forum_a.png',
        selectedIconPath: 'static/img/forum_b.png',
      },
      {
        pagePath: 'pages/article/index',
        text: '旅游资讯',
        iconPath: 'static/img/article_a.png',
        selectedIconPath: 'static/img/article_b.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: 'static/img/my_a.png',
        selectedIconPath: 'static/img/my_b.png',
      },
    ],
  },
  darkmode: false,
  nvueCompiler: 'uni-app',
  nvueStyleCompiler: 'weex',
  renderer: 'auto',
  splashscreen: { alwaysShowBeforeRender: true, autoclose: false },
  appname: '项目程序开发',
  compilerVersion: '4.08',
  entryPagePath: 'pages/index/index',
  networkTimeout: {
    request: 60000,
    connectSocket: 60000,
    uploadFile: 60000,
    downloadFile: 60000,
  },
}
var __uniRoutes = [
  {
    path: '/pages/index/index',
    meta: { isQuit: true, isTabBar: true },
    window: { navigationBarTitleText: '首页' },
  },
  {
    path: '/pages/webview/webview',
    meta: {},
    window: { navigationBarTitleText: '网址跳转' },
  },
  {
    path: '/pages/authorization/authorization',
    meta: {},
    window: {
      navigationBarTitleText: 'QQ授权登录',
      enablePullDownRefresh: false,
    },
  },
  {
    path: '/pages/authorization/authorization-weixin',
    meta: {},
    window: {
      navigationBarTitleText: '微信授权登录',
      enablePullDownRefresh: false,
    },
  },
  {
    path: '/pages/authorization/authorization-weibo',
    meta: {},
    window: {
      navigationBarTitleText: '微博授权登录',
      enablePullDownRefresh: false,
    },
  },
  {
    path: '/pages/comment/edit',
    meta: {},
    window: { navigationBarTitleText: '评论' },
  },
  {
    path: '/pages/comment/view',
    meta: {},
    window: { navigationBarTitleText: '查看评论' },
  },
  {
    path: '/pages/media/music',
    meta: {},
    window: { navigationBarTitleText: '音乐', backgroundColor: '#000000' },
  },
  {
    path: '/pages/media/image',
    meta: {},
    window: { navigationBarTitleText: '图片预览', backgroundColor: '#000000' },
  },
  {
    path: '/pages/media/video',
    meta: {},
    window: { navigationBarTitleText: '视频', backgroundColor: '#000000' },
  },
  {
    path: '/pages/account/forgot',
    meta: {},
    window: { navigationBarTitleText: '找回密码' },
  },
  {
    path: '/pages/account/login',
    meta: {},
    window: { navigationBarTitleText: '登录' },
  },
  {
    path: '/pages/account/register',
    meta: {},
    window: { navigationBarTitleText: '注册' },
  },
  {
    path: '/pages/article/list',
    meta: {},
    window: { navigationBarTitleText: '旅游资讯' },
  },
  {
    path: '/pages/article/index',
    meta: { isQuit: true, isTabBar: true },
    window: { navigationBarTitleText: '旅游资讯列表' },
  },
  {
    path: '/pages/article/details',
    meta: {},
    window: { navigationBarTitleText: '旅游资讯详情' },
  },
  {
    path: '/pages/forum/index',
    meta: { isQuit: true, isTabBar: true },
    window: { navigationBarTitleText: '旅游论坛' },
  },
  {
    path: '/pages/forum/list',
    meta: {},
    window: { navigationBarTitleText: '旅游论坛列表' },
  },
  {
    path: '/pages/forum/details',
    meta: {},
    window: { navigationBarTitleText: '旅游论坛详情' },
  },
  {
    path: '/pages/forum/view',
    meta: {},
    window: { navigationBarTitleText: '发布内容' },
  },
  {
    path: '/pages/forum/table',
    meta: {},
    window: { navigationBarTitleText: '论坛管理' },
  },
  {
    path: '/pages/forum/edit',
    meta: {},
    window: { navigationBarTitleText: '论坛详情' },
  },
  {
    path: '/pages/forum/add',
    meta: {},
    window: { navigationBarTitleText: '论坛添加' },
  },
  {
    path: '/pages/comment/table',
    meta: {},
    window: { navigationBarTitleText: '评论管理' },
  },
  {
    path: '/pages/notice/list',
    meta: {},
    window: { navigationBarTitleText: '网站公告列表' },
  },
  {
    path: '/pages/notice/details',
    meta: {},
    window: { navigationBarTitleText: '网站公告' },
  },
  {
    path: '/pages/attraction_information/list',
    meta: {},
    window: { navigationBarTitleText: '景点信息列表' },
  },
  {
    path: '/pages/attraction_information/details',
    meta: {},
    window: { navigationBarTitleText: '景点信息' },
  },
  {
    path: '/pages/ticket_orders/edit',
    meta: {},
    window: { navigationBarTitleText: '门票订单' },
  },
  {
    path: '/pages/restaurant_information/list',
    meta: {},
    window: { navigationBarTitleText: '餐厅信息列表' },
  },
  {
    path: '/pages/restaurant_information/details',
    meta: {},
    window: { navigationBarTitleText: '餐厅信息' },
  },
  {
    path: '/pages/restaurant_orders/edit',
    meta: {},
    window: { navigationBarTitleText: '餐厅订单' },
  },
  {
    path: '/pages/hotel_information/list',
    meta: {},
    window: { navigationBarTitleText: '酒店信息列表' },
  },
  {
    path: '/pages/hotel_information/details',
    meta: {},
    window: { navigationBarTitleText: '酒店信息' },
  },
  {
    path: '/pages/hotel_orders/edit',
    meta: {},
    window: { navigationBarTitleText: '酒店订单' },
  },
  {
    path: '/pages/homestay_information/list',
    meta: {},
    window: { navigationBarTitleText: '民宿信息列表' },
  },
  {
    path: '/pages/homestay_information/details',
    meta: {},
    window: { navigationBarTitleText: '民宿信息' },
  },
  {
    path: '/pages/homestay_orders/edit',
    meta: {},
    window: { navigationBarTitleText: '民宿订单' },
  },
  {
    path: '/pages/regular_users/table',
    meta: {},
    window: { navigationBarTitleText: '普通用户列表' },
  },
  {
    path: '/pages/regular_users/view',
    meta: {},
    window: { navigationBarTitleText: '普通用户详情' },
  },
  {
    path: '/pages/merchant_users/table',
    meta: {},
    window: { navigationBarTitleText: '商家用户列表' },
  },
  {
    path: '/pages/merchant_users/view',
    meta: {},
    window: { navigationBarTitleText: '商家用户详情' },
  },
  {
    path: '/pages/attraction_information/table',
    meta: {},
    window: { navigationBarTitleText: '景点信息列表' },
  },
  {
    path: '/pages/attraction_information/view',
    meta: {},
    window: { navigationBarTitleText: '景点信息详情' },
  },
  {
    path: '/pages/ticket_orders/table',
    meta: {},
    window: { navigationBarTitleText: '门票订单列表' },
  },
  {
    path: '/pages/ticket_orders/view',
    meta: {},
    window: { navigationBarTitleText: '门票订单详情' },
  },
  {
    path: '/pages/restaurant_information/table',
    meta: {},
    window: { navigationBarTitleText: '餐厅信息列表' },
  },
  {
    path: '/pages/restaurant_information/view',
    meta: {},
    window: { navigationBarTitleText: '餐厅信息详情' },
  },
  {
    path: '/pages/restaurant_orders/table',
    meta: {},
    window: { navigationBarTitleText: '餐厅订单列表' },
  },
  {
    path: '/pages/restaurant_orders/view',
    meta: {},
    window: { navigationBarTitleText: '餐厅订单详情' },
  },
  {
    path: '/pages/hotel_information/table',
    meta: {},
    window: { navigationBarTitleText: '酒店信息列表' },
  },
  {
    path: '/pages/hotel_information/view',
    meta: {},
    window: { navigationBarTitleText: '酒店信息详情' },
  },
  {
    path: '/pages/hotel_orders/table',
    meta: {},
    window: { navigationBarTitleText: '酒店订单列表' },
  },
  {
    path: '/pages/hotel_orders/view',
    meta: {},
    window: { navigationBarTitleText: '酒店订单详情' },
  },
  {
    path: '/pages/homestay_information/table',
    meta: {},
    window: { navigationBarTitleText: '民宿信息列表' },
  },
  {
    path: '/pages/homestay_information/view',
    meta: {},
    window: { navigationBarTitleText: '民宿信息详情' },
  },
  {
    path: '/pages/homestay_orders/table',
    meta: {},
    window: { navigationBarTitleText: '民宿订单列表' },
  },
  {
    path: '/pages/homestay_orders/view',
    meta: {},
    window: { navigationBarTitleText: '民宿订单详情' },
  },
  {
    path: '/pages/user/collect',
    meta: {},
    window: { navigationBarTitleText: '我的收藏' },
  },
  {
    path: '/pages/user/index',
    meta: { isQuit: true, isTabBar: true },
    window: { navigationBarTitleText: '我' },
  },
  {
    path: '/pages/user/password',
    meta: {},
    window: { navigationBarTitleText: '修改密码' },
  },
  {
    path: '/pages/user/info',
    meta: {},
    window: { navigationBarTitleText: '基本信息' },
  },
  {
    path: '/pages/user_center/index',
    meta: {},
    window: { navigationBarTitleText: '', enablePullDownRefresh: false },
  },
]
__uniConfig.onReady = function (callback) {
  if (__uniConfig.ready) {
    callback()
  } else {
    onReadyCallbacks.push(callback)
  }
}
Object.defineProperty(__uniConfig, 'ready', {
  get: function () {
    return isReady
  },
  set: function (val) {
    isReady = val
    if (!isReady) {
      return
    }
    const callbacks = onReadyCallbacks.slice(0)
    onReadyCallbacks.length = 0
    callbacks.forEach(function (callback) {
      callback()
    })
  },
})
__uniConfig.onServiceReady = function (callback) {
  if (__uniConfig.serviceReady) {
    callback()
  } else {
    onServiceReadyCallbacks.push(callback)
  }
}
Object.defineProperty(__uniConfig, 'serviceReady', {
  get: function () {
    return isServiceReady
  },
  set: function (val) {
    isServiceReady = val
    if (!isServiceReady) {
      return
    }
    const callbacks = onServiceReadyCallbacks.slice(0)
    onServiceReadyCallbacks.length = 0
    callbacks.forEach(function (callback) {
      callback()
    })
  },
})
service.register('uni-app-config', {
  create(a, b, c) {
    if (!__uniConfig.viewport) {
      var d = b.weex.config.env.scale,
        e = b.weex.config.env.deviceWidth,
        f = Math.ceil(e / d)
      Object.assign(__uniConfig, {
        viewport: f,
        defaultFontSize: Math.round(f / 20),
      })
    }
    return {
      instance: {
        __uniConfig: __uniConfig,
        __uniRoutes: __uniRoutes,
        global: void 0,
        window: void 0,
        document: void 0,
        frames: void 0,
        self: void 0,
        location: void 0,
        navigator: void 0,
        localStorage: void 0,
        history: void 0,
        Caches: void 0,
        screen: void 0,
        alert: void 0,
        confirm: void 0,
        prompt: void 0,
        fetch: void 0,
        XMLHttpRequest: void 0,
        WebSocket: void 0,
        webkit: void 0,
        print: void 0,
      },
    }
  },
})
