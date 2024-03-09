;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/notice/details'],
  {
    '0089': function (t, e, n) {
      'use strict'
      var i = n('4ea4')
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0)
      var o = i(n('813d')),
        a = {
          mixins: [o.default],
          data: function () {
            return {
              url_get_obj: '~/api/notice/get_obj?',
              field: 'notice_id',
              query: { notice_id: 0 },
              href: 'https://uniapp.dcloud.io/component/README?id=uniui',
              obj: { title: '标题', create_time: '时间', content: '文本' },
            }
          },
          methods: {
            get_obj_after: function (t) {
              console.log(JSON.stringify(t))
            },
          },
        }
      e.default = a
    },
    '74de': function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return o
      }),
        n.d(e, 'c', function () {
          return a
        }),
        n.d(e, 'a', function () {
          return i
        })
      var i = {
          uniCard: function () {
            return n
              .e('components/uni-card/uni-card')
              .then(n.bind(null, '8252'))
          },
        },
        o = function () {
          var t = this.$createElement,
            e =
              (this._self._c,
              this.$toTime(this.obj.create_time, 'yyyy-MM-dd hh:mm:ss')),
            n = this.$setRichTextImage(this.obj.content)
          this.$mp.data = Object.assign({}, { $root: { m0: e, m1: n } })
        },
        a = []
    },
    a7c2: function (t, e, n) {
      'use strict'
      ;(function (t, e) {
        var i = n('4ea4')
        n('e411')
        i(n('66fd'))
        var o = i(n('f6d2'))
        ;(t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
    f6d2: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = n('74de'),
        o = n('fac7')
      for (var a in o)
        ['default'].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t]
            })
          })(a)
      var c = n('f0c5'),
        u = Object(c['a'])(
          o['default'],
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
      e['default'] = u.exports
    },
    fac7: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = n('0089'),
        o = n.n(i)
      for (var a in i)
        ['default'].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t]
            })
          })(a)
      e['default'] = o.a
    },
  },
  [['a7c2', 'common/runtime', 'common/vendor']],
])
