;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/forum/details'],
  {
    '067f': function (t, e, n) {
      'use strict'
      ;(function (t) {
        var o = n('4ea4')
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0)
        var i = o(n('813d')),
          r = {
            mixins: [i.default],
            components: {
              bar_title: function () {
                n.e('components/diy/bar_title')
                  .then(
                    function () {
                      return resolve(n('a5c1'))
                    }.bind(null, n)
                  )
                  .catch(n.oe)
              },
              div_forum: function () {
                n.e('components/diy/div_forum')
                  .then(
                    function () {
                      return resolve(n('0822'))
                    }.bind(null, n)
                  )
                  .catch(n.oe)
              },
              list_comment: function () {
                n.e('components/diy/list_comment')
                  .then(
                    function () {
                      return resolve(n('af50'))
                    }.bind(null, n)
                  )
                  .catch(n.oe)
              },
            },
            data: function () {
              return {
                url_get_obj: '~/api/forum/get_obj?',
                field: 'forum_id',
                query: { forum_id: 0 },
                obj: {
                  forum_id: 0,
                  display: 0,
                  user_id: 0,
                  nickname: '',
                  hits: 0,
                  title: '',
                  keywords: '',
                  description: '',
                  url: '',
                  tag: '',
                  img: '',
                  content: '',
                  create_time: '',
                  update_time: '',
                  avatar: '',
                  type: '',
                  praise_len: 0,
                },
                list_comment: [],
                form: { content: '' },
                form_comment: {
                  source_table: 'forum',
                  source_field: 'forum_id',
                  source_id: 0,
                  reply_to_id: 0,
                },
              }
            },
            methods: {
              onEditorReady: function () {
                var e = this
                t.createSelectorQuery()
                  .select('#editor')
                  .context(function (t) {
                    ;(e.editorCtx = t.context),
                      e.editorCtx.setContents({
                        html: e.form.content,
                        success: function (t) {
                          console.log(t)
                        },
                        fail: function (t) {
                          console.log(t)
                        },
                      })
                  })
                  .exec()
              },
              get_comment: function () {
                var t = this,
                  e = getCurrentPages()[getCurrentPages().length - 1].options,
                  n = {
                    source_table: 'forum',
                    source_field: 'forum_id',
                    source_id: e.forum_id,
                    orderby: 'create_time desc',
                    reply_to_id: '0',
                  }
                this.$get('~/api/comment/get_list?', n, function (e) {
                  if (e.result) {
                    var n = e.result.list
                    n.map(function (t) {
                      t.list_reply = []
                    }),
                      t.add_reply(n).then(function (e) {
                        t.list_comment = e
                      })
                  }
                })
              },
              add_reply: function (t) {
                var e = this
                return new Promise(function (n) {
                  for (
                    var o = function (n) {
                        var o = t[n]
                        e.$get(
                          '~/api/comment/get_list?',
                          {
                            source_table: 'forum',
                            source_field: 'forum_id',
                            source_id: o.forum_id,
                            orderby: 'create_time desc',
                            reply_to_id: o.comment_id,
                          },
                          function (t) {
                            t.result && (o.list_reply = t.result.list)
                          }
                        )
                      },
                      i = 0;
                    i < t.length;
                    i++
                  )
                    o(i)
                  n(t)
                }).catch(function (t) {})
              },
              editorChange: function (t) {
                this.gongsijieshao = t.detail.html
              },
              get_obj_after: function (t) {
                this.add_hits(this.obj),
                  this.get_comment(this.obj),
                  (this.form_comment.source_id = this.obj.article_id)
              },
              add_hits: function (t) {
                this.$post(
                  '~/api/forum/set?forum_id=' + t.forum_id,
                  { hits: t.hits + 1 },
                  function (e) {
                    ;(t.hits += 1), console.log(e)
                  }
                )
              },
            },
            onLoad: function () {
              this.get_comment()
            },
          }
        e.default = r
      }).call(this, n('543d')['default'])
    },
    '292d': function (t, e, n) {
      'use strict'
      var o = n('fb1f'),
        i = n.n(o)
      i.a
    },
    '398f': function (t, e, n) {
      'use strict'
      n.r(e)
      var o = n('067f'),
        i = n.n(o)
      for (var r in o)
        ['default'].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t]
            })
          })(r)
      e['default'] = i.a
    },
    affe: function (t, e, n) {
      'use strict'
      n.r(e)
      var o = n('b0b6'),
        i = n('398f')
      for (var r in i)
        ['default'].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t]
            })
          })(r)
      n('292d')
      var c = n('f0c5'),
        u = Object(c['a'])(
          i['default'],
          o['b'],
          o['c'],
          !1,
          null,
          '900dc372',
          null,
          !1,
          o['a'],
          void 0
        )
      e['default'] = u.exports
    },
    b0b6: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return i
      }),
        n.d(e, 'c', function () {
          return r
        }),
        n.d(e, 'a', function () {
          return o
        })
      var o = {
          uniCard: function () {
            return n
              .e('components/uni-card/uni-card')
              .then(n.bind(null, '8252'))
          },
        },
        i = function () {
          var t = this.$createElement,
            e = (this._self._c, this.$check_action('/forum/details', 'get')),
            n = e ? this.$check_action('/comment/list', 'get') : null,
            o = e && n ? this.$check_action('/comment/list', 'get') : null,
            i = e ? this.$check_action('/comment/list', 'add') : null
          this.$mp.data = Object.assign(
            {},
            { $root: { m0: e, m1: n, m2: o, m3: i } }
          )
        },
        r = []
    },
    fb1f: function (t, e, n) {},
    fd10: function (t, e, n) {
      'use strict'
      ;(function (t, e) {
        var o = n('4ea4')
        n('e411')
        o(n('66fd'))
        var i = o(n('affe'))
        ;(t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
  },
  [['fd10', 'common/runtime', 'common/vendor']],
])
