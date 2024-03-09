;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/authorization/authorization'],
  {
    '0579': function (n, t, e) {
      'use strict'
      e.r(t)
      var u = e('2878'),
        o = e('06c7')
      for (var a in o)
        ['default'].indexOf(a) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return o[n]
            })
          })(a)
      e('f5a1')
      var c = e('f0c5'),
        i = Object(c['a'])(
          o['default'],
          u['b'],
          u['c'],
          !1,
          null,
          'b36e9a12',
          null,
          !1,
          u['a'],
          void 0
        )
      t['default'] = i.exports
    },
    '06c7': function (n, t, e) {
      'use strict'
      e.r(t)
      var u = e('9036'),
        o = e.n(u)
      for (var a in u)
        ['default'].indexOf(a) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return u[n]
            })
          })(a)
      t['default'] = o.a
    },
    '0b7e': function (n, t, e) {
      'use strict'
      ;(function (n, t) {
        var u = e('4ea4')
        e('e411')
        u(e('66fd'))
        var o = u(e('0579'))
        ;(n.__webpack_require_UNI_MP_PLUGIN__ = e), t(o.default)
      }).call(this, e('bc2e')['default'], e('543d')['createPage'])
    },
    2878: function (n, t, e) {
      'use strict'
      e.d(t, 'b', function () {
        return o
      }),
        e.d(t, 'c', function () {
          return a
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
        o = function () {
          var n = this.$createElement
          this._self._c
        },
        a = []
    },
    '647c': function (n, t, e) {},
    9036: function (n, t, e) {
      'use strict'
      ;(function (n) {
        var u = e('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var o = u(e('2eee')),
          a = u(e('c973')),
          c = {
            data: function () {
              return { titem: '', Account: 0, authorization: !1 }
            },
            onReady: function () {},
            onLoad: function (t) {
              var e = this
              return (0, a.default)(
                o.default.mark(function u() {
                  return o.default.wrap(function (u) {
                    while (1)
                      switch ((u.prev = u.next)) {
                        case 0:
                          ;(e.Account = t.id),
                            1 == e.Account
                              ? (e.titem = '你将同意以下信息授权给QQ')
                              : n.navigateBack({})
                        case 2:
                        case 'end':
                          return u.stop()
                      }
                  }, u)
                })
              )()
            },
            methods: {
              open: function () {
                this.$refs.popup.open('center')
              },
              close: function () {
                this.$refs.popup.close()
              },
              aut: function () {
                ;(this.authorization = !0),
                  n.reLaunch({ url: '../account/login' }),
                  (this.authorization = !1)
              },
              returns: function () {
                n.navigateBack({})
              },
            },
          }
        t.default = c
      }).call(this, e('543d')['default'])
    },
    f5a1: function (n, t, e) {
      'use strict'
      var u = e('647c'),
        o = e.n(u)
      o.a
    },
  },
  [['0b7e', 'common/runtime', 'common/vendor']],
])
