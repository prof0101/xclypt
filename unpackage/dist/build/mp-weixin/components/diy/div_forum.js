;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['components/diy/div_forum'],
  {
    '0822': function (e, t, o) {
      'use strict'
      o.r(t)
      var i = o('8b7d'),
        r = o('3980')
      for (var c in r)
        ['default'].indexOf(c) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return r[e]
            })
          })(c)
      o('85c7')
      var s = o('f0c5'),
        n = Object(s['a'])(
          r['default'],
          i['b'],
          i['c'],
          !1,
          null,
          '22f78021',
          null,
          !1,
          i['a'],
          void 0
        )
      t['default'] = n.exports
    },
    3980: function (e, t, o) {
      'use strict'
      o.r(t)
      var i = o('4958'),
        r = o.n(i)
      for (var c in i)
        ['default'].indexOf(c) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return i[e]
            })
          })(c)
      t['default'] = r.a
    },
    4958: function (e, t, o) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var i = {
        props: {
          obj: {
            type: Object,
            default: function () {
              return {}
            },
          },
          vm: {
            type: Object,
            default: function () {
              return {
                img: 'img',
                tag: 'tag',
                url: 'url',
                title: 'title',
                source: 'source',
                description: 'description',
                content: 'content',
                create_time: 'create_time',
                hits: 'hits',
                praise_len: 'praise_len',
                nickname: 'nickname',
              }
            },
          },
        },
        data: function () {
          return { check_praised: !1, check_collected: !1, tag_list: [] }
        },
        methods: {
          get_praise: function () {
            var e = this,
              t = this.$store.state.user.user_id
            this.$get(
              getApp().globalData.host + '/api/praise/count?',
              {
                source_table: 'forum',
                source_field: 'forum_id',
                source_id: this.obj.forum_id,
                user_id: t,
              },
              function (t) {
                t.result || 0 === t.result
                  ? ((e.check_praised = !!t.result),
                    console.log('点赞状态：', t.result))
                  : t.error &&
                    (e.$toast(t.error.message), console.error(t.error))
              }
            )
          },
          add_praise: function () {
            var e = this,
              t = {
                source_table: 'forum',
                source_field: 'forum_id',
                source_id: this.obj.forum_id,
                user_id: this.$store.state.user.user_id,
              },
              o = this
            this.check_praised
              ? ((this.check_praised = !1),
                this.$get(
                  getApp().globalData.host + '/api/praise/del',
                  t,
                  function (t) {
                    ;(e.obj.praise_len -= 1),
                      console.log(t),
                      e.$post(
                        getApp().globalData.host +
                          '/api/forum/set?forum_id=' +
                          o.obj.forum_id,
                        { praise_len: o.obj.praise_len },
                        function (e) {
                          e.result
                            ? console.log('添加点赞数状态：', e.result)
                            : e.error && console.error(e.error)
                        }
                      )
                  }
                ))
              : ((o.check_praised = !0),
                this.$post(
                  getApp().globalData.host + '/api/praise/add?',
                  t,
                  function (t) {
                    ;(o.obj.praise_len += 1),
                      console.log(t),
                      e.$post(
                        getApp().globalData.host +
                          '/api/forum/set?forum_id=' +
                          o.obj.forum_id,
                        { praise_len: o.obj.praise_len },
                        function (e) {
                          e.result
                            ? console.log('添加点赞数状态：', e.result)
                            : e.error && console.error(e.error)
                        }
                      )
                  }
                ))
          },
          get_collect: function () {
            var e = this,
              t = this.$store.state.user.user_id,
              o = {
                source_table: 'forum',
                source_field: 'forum_id',
                source_id: this.obj.forum_id,
                user_id: t,
              }
            this.$get(
              getApp().globalData.host + '/api/collect/count?',
              o,
              function (t) {
                if (t.result || 0 === t.result) {
                  var o = !!t.result
                  ;(e.check_collected = o), console.log('收藏状态：' + o)
                } else t.error && console.error(t.error)
              }
            )
          },
          add_collect: function () {
            var e = this,
              t = this.obj,
              o = t.title,
              i = t.img,
              r = t.forum_id,
              c = {
                title: o,
                img: i,
                source_table: 'forum',
                source_field: 'forum_id',
                source_id: r,
                user_id: this.$store.state.user.user_id,
              }
            this.check_collected
              ? ((this.check_collected = !1),
                this.$get(
                  getApp().globalData.host + '/api/collect/del',
                  c,
                  function (t) {
                    e.$toast('取消收藏')
                  }
                ))
              : ((this.check_collected = !0),
                this.$post(
                  getApp().globalData.host + '/api/collect/add?',
                  c,
                  function (t) {
                    e.$toast('收藏成功'), console.log(t)
                  }
                ))
          },
          init_tag: function () {
            this.tag_list = this.obj.tag.split('|')
          },
        },
        computed: {},
        created: function () {
          var e = this
          setTimeout(function () {
            e.init_tag(), e.get_praise(), e.get_collect()
          }, 500)
        },
      }
      t.default = i
    },
    '727c': function (e, t, o) {},
    '85c7': function (e, t, o) {
      'use strict'
      var i = o('727c'),
        r = o.n(i)
      r.a
    },
    '8b7d': function (e, t, o) {
      'use strict'
      o.d(t, 'b', function () {
        return r
      }),
        o.d(t, 'c', function () {
          return c
        }),
        o.d(t, 'a', function () {
          return i
        })
      var i = {
          uniIcons: function () {
            return Promise.all([
              o.e('common/vendor'),
              o.e('components/uni-icons/uni-icons'),
            ]).then(o.bind(null, '9972'))
          },
        },
        r = function () {
          var e = this,
            t = e.$createElement,
            o =
              (e._self._c,
              e.$toTime(e.obj[e.vm.create_time], 'yyyy-MM-dd hh:mm:ss')),
            i = e.obj[e.vm.img] ? e.$fullImgUrl(e.obj[e.vm.img]) : null,
            r = e.$setRichTextImage(e.obj[e.vm.content]),
            c = e.$check_action('/praise/list', 'add') && !e.check_praised,
            s = e.$check_action('/praise/list', 'del') && e.check_praised,
            n = e.$check_action('/collect/list', 'add') && !e.check_collected,
            l = e.$check_action('/collect/list', 'del') && e.check_collected
          e.$mp.data = Object.assign(
            {},
            { $root: { m0: o, m1: i, m2: r, m3: c, m4: s, m5: n, m6: l } }
          )
        },
        c = []
    },
  },
])
;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  'components/diy/div_forum-create-component',
  {
    'components/diy/div_forum-create-component': function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__('543d')['createComponent'](
        __webpack_require__('0822')
      )
    },
  },
  [['components/diy/div_forum-create-component']],
])
