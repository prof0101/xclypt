;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/uni-pagination/uni-pagination'],
  {
    '2f9a': function (n, t, e) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var i = {
        name: 'UniPagination',
        components: {
          uniIcons: function () {
            Promise.all([
              e.e('common/vendor'),
              e.e('components/uni-icons/uni-icons'),
            ])
              .then(
                function () {
                  return resolve(e('9972'))
                }.bind(null, e)
              )
              .catch(e.oe)
          },
        },
        props: {
          prevText: { type: String, default: '上一页' },
          nextText: { type: String, default: '下一页' },
          current: { type: [Number, String], default: 1 },
          total: { type: [Number, String], default: 0 },
          pageSize: { type: [Number, String], default: 10 },
          showIcon: { type: [Boolean, String], default: !1 },
        },
        data: function () {
          return { currentIndex: 1 }
        },
        computed: {
          maxPage: function () {
            var n = 1,
              t = Number(this.total),
              e = Number(this.pageSize)
            return t && e && (n = Math.ceil(t / e)), n
          },
        },
        watch: {
          current: function (n) {
            this.currentIndex = +n
          },
        },
        created: function () {
          this.currentIndex = +this.current
        },
        methods: {
          clickLeft: function () {
            1 !== Number(this.currentIndex) &&
              ((this.currentIndex -= 1), this.change('prev'))
          },
          clickRight: function () {
            Number(this.currentIndex) !== this.maxPage &&
              ((this.currentIndex += 1), this.change('next'))
          },
          change: function (n) {
            this.$emit('change', { type: n, current: this.currentIndex })
          },
        },
      }
      t.default = i
    },
    3150: function (n, t, e) {
      'use strict'
      var i = e('de2b'),
        r = e.n(i)
      r.a
    },
    '5a70': function (n, t, e) {
      'use strict'
      e.d(t, 'b', function () {
        return r
      }),
        e.d(t, 'c', function () {
          return u
        }),
        e.d(t, 'a', function () {
          return i
        })
      var i = {
          uniIcons: function () {
            return Promise.all([
              e.e('common/vendor'),
              e.e('components/uni-icons/uni-icons'),
            ]).then(e.bind(null, '9972'))
          },
        },
        r = function () {
          var n = this.$createElement
          this._self._c
        },
        u = []
    },
    '828f': function (n, t, e) {
      'use strict'
      e.r(t)
      var i = e('2f9a'),
        r = e.n(i)
      for (var u in i)
        ['default'].indexOf(u) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return i[n]
            })
          })(u)
      t['default'] = r.a
    },
    de2b: function (n, t, e) {},
    ec07: function (n, t, e) {
      'use strict'
      e.r(t)
      var i = e('5a70'),
        r = e('828f')
      for (var u in r)
        ['default'].indexOf(u) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return r[n]
            })
          })(u)
      e('3150')
      var c = e('f0c5'),
        o = Object(c['a'])(
          r['default'],
          i['b'],
          i['c'],
          !1,
          null,
          '08f4d62b',
          null,
          !1,
          i['a'],
          void 0
        )
      t['default'] = o.exports
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/uni-pagination/uni-pagination-create-component',
  {
    'components/uni-pagination/uni-pagination-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('ec07')
      )
    },
  },
  [['components/uni-pagination/uni-pagination-create-component']],
])
