;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/media/video'],
  {
    5884: function (t, n, e) {
      'use strict'
      ;(function (t) {
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.default = void 0)
        var e = {
          data: function () {
            return {
              query: {
                url: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
              },
              danmuList: [
                { text: '第 1s 出现的弹幕', color: '#ff0000', time: 1 },
                { text: '第 3s 出现的弹幕', color: '#ff00ff', time: 3 },
              ],
              danmuValue: '',
            }
          },
          methods: {
            sendDanmu: function () {
              this.videoContext.sendDanmu({
                text: this.danmuValue,
                color: this.getRandomColor(),
              }),
                (this.danmuValue = '')
            },
            videoErrorCallback: function (n) {
              t.showModal({ content: n.target.errMsg, showCancel: !1 })
            },
            getRandomColor: function () {
              for (var t = [], n = 0; n < 3; ++n) {
                var e = Math.floor(256 * Math.random()).toString(16)
                ;(e = 1 == e.length ? '0' + e : e), t.push(e)
              }
              return '#' + t.join('')
            },
          },
          onReady: function (n) {
            this.videoContext = t.createVideoContext('myVideo')
          },
        }
        n.default = e
      }).call(this, e('543d')['default'])
    },
    '7ea1': function (t, n, e) {
      'use strict'
      var o = e('9852'),
        a = e.n(o)
      a.a
    },
    9852: function (t, n, e) {},
    cae9: function (t, n, e) {
      'use strict'
      e.d(n, 'b', function () {
        return a
      }),
        e.d(n, 'c', function () {
          return u
        }),
        e.d(n, 'a', function () {
          return o
        })
      var o = {
          uniEasyinput: function () {
            return Promise.all([
              e.e('common/vendor'),
              e.e('components/uni-easyinput/uni-easyinput'),
            ]).then(e.bind(null, '4a17'))
          },
        },
        a = function () {
          var t = this.$createElement,
            n = (this._self._c, this.$fullUrl(this.query.url))
          this.$mp.data = Object.assign({}, { $root: { m0: n } })
        },
        u = []
    },
    d898: function (t, n, e) {
      'use strict'
      e.r(n)
      var o = e('5884'),
        a = e.n(o)
      for (var u in o)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t]
            })
          })(u)
      n['default'] = a.a
    },
    e38c: function (t, n, e) {
      'use strict'
      ;(function (t, n) {
        var o = e('4ea4')
        e('e411')
        o(e('66fd'))
        var a = o(e('ec7a'))
        ;(t.__webpack_require_UNI_MP_PLUGIN__ = e), n(a.default)
      }).call(this, e('bc2e')['default'], e('543d')['createPage'])
    },
    ec7a: function (t, n, e) {
      'use strict'
      e.r(n)
      var o = e('cae9'),
        a = e('d898')
      for (var u in a)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return a[t]
            })
          })(u)
      e('7ea1')
      var i = e('f0c5'),
        r = Object(i['a'])(
          a['default'],
          o['b'],
          o['c'],
          !1,
          null,
          '23318c3b',
          null,
          !1,
          o['a'],
          void 0
        )
      n['default'] = r.exports
    },
  },
  [['e38c', 'common/runtime', 'common/vendor']],
])
