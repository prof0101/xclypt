;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-icons/uni-icons'],
  {
    '071f': function (n, t, e) {
      'use strict'
      e.d(t, 'b', function () {
        return i
      }),
        e.d(t, 'c', function () {
          return u
        }),
        e.d(t, 'a', function () {})
      var i = function () {
          var n = this.$createElement
          this._self._c
        },
        u = []
    },
    '2ef3': function (n, t, e) {
      'use strict'
      var i = e('895e'),
        u = e.n(i)
      u.a
    },
    5967: function (n, t, e) {
      'use strict'
      e.r(t)
      var i = e('cfb4'),
        u = e.n(i)
      for (var c in i)
        ['default'].indexOf(c) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return i[n]
            })
          })(c)
      t['default'] = u.a
    },
    '895e': function (n, t, e) {},
    9972: function (n, t, e) {
      'use strict'
      e.r(t)
      var i = e('071f'),
        u = e('5967')
      for (var c in u)
        ['default'].indexOf(c) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return u[n]
            })
          })(c)
      e('2ef3')
      var o = e('f0c5'),
        r = Object(o['a'])(
          u['default'],
          i['b'],
          i['c'],
          !1,
          null,
          null,
          null,
          !1,
          i['a'],
          void 0
        )
      t['default'] = r.exports
    },
    cfb4: function (n, t, e) {
      'use strict'
      var i = e('4ea4')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var u = i(e('c5a9')),
        c = {
          name: 'UniIcons',
          emits: ['click'],
          props: {
            type: { type: String, default: '' },
            color: { type: String, default: '#333333' },
            size: { type: [Number, String], default: 16 },
            customPrefix: { type: String, default: '' },
          },
          data: function () {
            return { icons: u.default.glyphs }
          },
          computed: {
            unicode: function () {
              var n = this,
                t = this.icons.find(function (t) {
                  return t.font_class === n.type
                })
              return t ? unescape('%u'.concat(t.unicode)) : ''
            },
            iconSize: function () {
              return (function (n) {
                return 'number' === typeof n || /^[0-9]*$/g.test(n)
                  ? n + 'px'
                  : n
              })(this.size)
            },
          },
          methods: {
            _onClick: function () {
              this.$emit('click')
            },
          },
        }
      t.default = c
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-icons/uni-icons-create-component',
  {
    'components/uni-icons/uni-icons-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('9972')
      )
    },
  },
  [['components/uni-icons/uni-icons-create-component']],
])
