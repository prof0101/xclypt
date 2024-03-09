;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-badge/uni-badge'],
  {
    '1beb': function (t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0)
      var i = {
        name: 'UniBadge',
        props: {
          type: { type: String, default: 'default' },
          inverted: { type: Boolean, default: !1 },
          text: { type: [String, Number], default: '' },
          size: { type: String, default: 'normal' },
        },
        data: function () {
          return { badgeStyle: '' }
        },
        watch: {
          text: function () {
            this.setStyle()
          },
        },
        mounted: function () {
          this.setStyle()
        },
        methods: {
          setStyle: function () {
            this.badgeStyle = 'width: '.concat(
              8 * String(this.text).length + 12,
              'px'
            )
          },
          onClick: function () {
            this.$emit('click')
          },
        },
      }
      e.default = i
    },
    '21f2': function (t, e, n) {},
    6437: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return i
      }),
        n.d(e, 'c', function () {
          return u
        }),
        n.d(e, 'a', function () {})
      var i = function () {
          var t = this.$createElement
          this._self._c
        },
        u = []
    },
    '7e21': function (t, e, n) {
      'use strict'
      var i = n('21f2'),
        u = n.n(i)
      u.a
    },
    bc66: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = n('6437'),
        u = n('c50f')
      for (var a in u)
        ['default'].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t]
            })
          })(a)
      n('7e21')
      var c = n('f0c5'),
        f = Object(c['a'])(
          u['default'],
          i['b'],
          i['c'],
          !1,
          null,
          'bc381f7e',
          null,
          !1,
          i['a'],
          void 0
        )
      e['default'] = f.exports
    },
    c50f: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = n('1beb'),
        u = n.n(i)
      for (var a in i)
        ['default'].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t]
            })
          })(a)
      e['default'] = u.a
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-badge/uni-badge-create-component',
  {
    'components/uni-badge/uni-badge-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('bc66')
      )
    },
  },
  [['components/uni-badge/uni-badge-create-component']],
])
