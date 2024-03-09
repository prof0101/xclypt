;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-card/uni-card'],
  {
    4610: function (t, e, n) {},
    '63c2': function (t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0)
      var i = {
        name: 'UniCard',
        props: {
          title: { type: String, default: '' },
          subTitle: { type: String, default: '' },
          extra: { type: String, default: '' },
          note: { type: String, default: '' },
          thumbnail: { type: String, default: '' },
          mode: { type: String, default: 'basic' },
          isFull: { type: Boolean, default: !1 },
          isShadow: { type: [Boolean, String], default: !1 },
        },
        methods: {
          onClick: function () {
            this.$emit('click')
          },
        },
      }
      e.default = i
    },
    '693e': function (t, e, n) {
      'use strict'
      n.r(e)
      var i = n('63c2'),
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
    8252: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = n('d4e6'),
        u = n('693e')
      for (var a in u)
        ['default'].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return u[t]
            })
          })(a)
      n('c681')
      var r = n('f0c5'),
        c = Object(r['a'])(
          u['default'],
          i['b'],
          i['c'],
          !1,
          null,
          '4c9ed97e',
          null,
          !1,
          i['a'],
          void 0
        )
      e['default'] = c.exports
    },
    c681: function (t, e, n) {
      'use strict'
      var i = n('4610'),
        u = n.n(i)
      u.a
    },
    d4e6: function (t, e, n) {
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
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-card/uni-card-create-component',
  {
    'components/uni-card/uni-card-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('8252')
      )
    },
  },
  [['components/uni-card/uni-card-create-component']],
])
