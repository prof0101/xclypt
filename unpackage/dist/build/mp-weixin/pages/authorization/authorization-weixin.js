;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/authorization/authorization-weixin'],
  {
    '0b98': function (n, t, e) {
      'use strict'
      e.r(t)
      var u = e('9707'),
        c = e.n(u)
      for (var o in u)
        ['default'].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return u[n]
            })
          })(o)
      t['default'] = c.a
    },
    2131: function (n, t, e) {
      'use strict'
      ;(function (n, t) {
        var u = e('4ea4')
        e('e411')
        u(e('66fd'))
        var c = u(e('c8a9'))
        ;(n.__webpack_require_UNI_MP_PLUGIN__ = e), t(c.default)
      }).call(this, e('bc2e')['default'], e('543d')['createPage'])
    },
    9707: function (n, t, e) {
      'use strict'
      ;(function (n) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var e = {
          data: function () {
            return { titem: '', accname: '', Account: 0, authorization: !1 }
          },
          onReady: function () {},
          methods: {
            open: function () {
              this.$refs.popup.open('center')
            },
            close: function () {
              this.$refs.popup.close()
            },
            aut: function () {
              ;(this.authorization = !0),
                n.reLaunch({ url: '../account/login' })
            },
            returns: function () {
              n.navigateBack({})
            },
          },
          onLoad: function (t) {
            ;(this.Account = t.id),
              2 == this.Account
                ? ((this.titem = '你同意将以下信息授权给微信'),
                  (this.accname = '微信账号'))
                : n.navigateBack({})
          },
        }
        t.default = e
      }).call(this, e('543d')['default'])
    },
    a7c6: function (n, t, e) {},
    b4d3: function (n, t, e) {
      'use strict'
      var u = e('a7c6'),
        c = e.n(u)
      c.a
    },
    c8a9: function (n, t, e) {
      'use strict'
      e.r(t)
      var u = e('dc06'),
        c = e('0b98')
      for (var o in c)
        ['default'].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return c[n]
            })
          })(o)
      e('b4d3')
      var i = e('f0c5'),
        a = Object(i['a'])(
          c['default'],
          u['b'],
          u['c'],
          !1,
          null,
          '16249f8c',
          null,
          !1,
          u['a'],
          void 0
        )
      t['default'] = a.exports
    },
    dc06: function (n, t, e) {
      'use strict'
      e.d(t, 'b', function () {
        return c
      }),
        e.d(t, 'c', function () {
          return o
        }),
        e.d(t, 'a', function () {
          return u
        })
      var u = {
          uniPopup: function () {
            return Promise.all([
              e.e('common/vendor'),
              e.e('components/uni-popup/uni-popup'),
            ]).then(e.bind(null, '800b'))
          },
        },
        c = function () {
          var n = this.$createElement
          this._self._c
        },
        o = []
    },
  },
  [['2131', 'common/runtime', 'common/vendor']],
])
