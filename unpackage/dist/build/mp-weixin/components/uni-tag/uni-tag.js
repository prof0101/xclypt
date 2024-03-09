;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-tag/uni-tag'],
  {
    '05a3': function (t, e, n) {
      'use strict'
      n.r(e)
      var a = n('ade0'),
        i = n.n(a)
      for (var u in a)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t]
            })
          })(u)
      e['default'] = i.a
    },
    '075b': function (t, e, n) {
      'use strict'
      n.r(e)
      var a = n('3bd7'),
        i = n('05a3')
      for (var u in i)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t]
            })
          })(u)
      n('e6ca')
      var r = n('f0c5'),
        o = Object(r['a'])(
          i['default'],
          a['b'],
          a['c'],
          !1,
          null,
          '72e5620e',
          null,
          !1,
          a['a'],
          void 0
        )
      e['default'] = o.exports
    },
    '3bd7': function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return a
      }),
        n.d(e, 'c', function () {
          return i
        }),
        n.d(e, 'a', function () {})
      var a = function () {
          var t = this.$createElement
          this._self._c
        },
        i = []
    },
    5506: function (t, e, n) {},
    ade0: function (t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0)
      var a = {
        name: 'UniTag',
        props: {
          type: { type: String, default: 'default' },
          size: { type: String, default: 'normal' },
          text: { type: String, default: '' },
          disabled: { type: [Boolean, String], default: !1 },
          inverted: { type: [Boolean, String], default: !1 },
          circle: { type: [Boolean, String], default: !1 },
          mark: { type: [Boolean, String], default: !1 },
        },
        methods: {
          onClick: function () {
            !0 !== this.disabled &&
              'true' !== this.disabled &&
              this.$emit('click')
          },
        },
      }
      e.default = a
    },
    e6ca: function (t, e, n) {
      'use strict'
      var a = n('5506'),
        i = n.n(a)
      i.a
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-tag/uni-tag-create-component',
  {
    'components/uni-tag/uni-tag-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('075b')
      )
    },
  },
  [['components/uni-tag/uni-tag-create-component']],
])
