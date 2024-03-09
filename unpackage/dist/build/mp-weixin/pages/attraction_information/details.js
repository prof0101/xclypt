;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/attraction_information/details'],
  {
    2180: function (t, e, r) {
      'use strict'
      ;(function (t, e) {
        var o = r('4ea4')
        r('e411')
        o(r('66fd'))
        var i = o(r('2eeb'))
        ;(t.__webpack_require_UNI_MP_PLUGIN__ = r), e(i.default)
      }).call(this, r('bc2e')['default'], r('543d')['createPage'])
    },
    '2eeb': function (t, e, r) {
      'use strict'
      r.r(e)
      var o = r('ac19'),
        i = r('e00c')
      for (var n in i)
        ['default'].indexOf(n) < 0 &&
          (function (t) {
            r.d(e, t, function () {
              return i[t]
            })
          })(n)
      r('8c01')
      var a = r('f0c5'),
        s = Object(a['a'])(
          i['default'],
          o['b'],
          o['c'],
          !1,
          null,
          null,
          null,
          !1,
          o['a'],
          void 0
        )
      e['default'] = s.exports
    },
    '5faf': function (t, e, r) {},
    '8c01': function (t, e, r) {
      'use strict'
      var o = r('5faf'),
        i = r.n(o)
      i.a
    },
    ac19: function (t, e, r) {
      'use strict'
      r.d(e, 'b', function () {
        return i
      }),
        r.d(e, 'c', function () {
          return n
        }),
        r.d(e, 'a', function () {
          return o
        })
      var o = {
          uniIcons: function () {
            return Promise.all([
              r.e('common/vendor'),
              r.e('components/uni-icons/uni-icons'),
            ]).then(r.bind(null, '9972'))
          },
        },
        i = function () {
          var t = this,
            e = t.$createElement,
            r = (t._self._c, t.$check_field('get', 'merchant_users')),
            o = r ? t.get_user_merchant_users(t.obj['merchant_users']) : null,
            i = t.$check_field('get', 'merchant_name'),
            n = t.$check_field('get', 'attraction_name'),
            a = t.$check_field('get', 'scenic_spot_pictures'),
            s = a ? t.$fullUrl(t.obj['scenic_spot_pictures']) : null,
            c = t.$check_field('get', 'admission_price'),
            _ = t.$check_field('get', 'tourist_attraction_phone_number'),
            l = t.$check_field('get', 'attraction_address'),
            u = t.$check_field('get', 'introduction_to_scenic_spots'),
            f = t.$check_action('/ticket_orders/edit', 'add'),
            d = t.$check_action('/comment/list', 'add'),
            m = t.$check_action('/collect/list', 'add')
          t.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: r,
                m1: o,
                m2: i,
                m3: n,
                m4: a,
                m5: s,
                m6: c,
                m7: _,
                m8: l,
                m9: u,
                m10: f,
                m11: d,
                m12: m,
              },
            }
          )
        },
        n = []
    },
    b4c3: function (t, e, r) {
      'use strict'
      ;(function (t) {
        var o = r('4ea4')
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0)
        var i = o(r('2eee')),
          n = o(r('c973')),
          a = o(r('813d')),
          s = {
            mixins: [a.default],
            components: {
              list_comment: function () {
                r.e('components/diy/list_comment')
                  .then(
                    function () {
                      return resolve(r('af50'))
                    }.bind(null, r)
                  )
                  .catch(r.oe)
              },
              bar_title: function () {
                r.e('components/diy/bar_title')
                  .then(
                    function () {
                      return resolve(r('a5c1'))
                    }.bind(null, r)
                  )
                  .catch(r.oe)
              },
              form_editor: function () {
                r.e('components/diy/form_editor')
                  .then(
                    function () {
                      return resolve(r('2bef'))
                    }.bind(null, r)
                  )
                  .catch(r.oe)
              },
            },
            data: function () {
              return {
                url_get_obj: '~/api/attraction_information/get_obj?',
                field: 'attraction_information_id',
                query: { attraction_information_id: 0 },
                obj: {
                  merchant_users: 0,
                  merchant_name: '',
                  attraction_name: '',
                  scenic_spot_pictures: '',
                  admission_price: 0,
                  tourist_attraction_phone_number: '',
                  attraction_address: '',
                  introduction_to_scenic_spots: '',
                  hits: 0,
                  praise_len: 0,
                  attraction_information_id: 0,
                },
                praise: 0,
                state_praise: !1,
                collect: 0,
                state_collect: !1,
                list_comment: [],
                bar_title: '评论区',
                bar_url: '',
                list_user_merchant_users: [],
              }
            },
            methods: {
              openUrl: function (e) {
                console.log(1111),
                  t.navigateTo({ url: '/pages/webview/webview?url='.concat(e) })
              },
              get_praise: function (t) {
                var e = this,
                  r = this.user.user_id
                ;(this.obj.praise_len = 0),
                  this.$get(
                    '~/api/praise/count?',
                    {
                      source_table: 'attraction_information',
                      source_field: 'attraction_information_id',
                      source_id: t['attraction_information_id'],
                    },
                    function (t) {
                      t.result || 0 === t.result
                        ? ((e.praise = t.result),
                          (e.obj.praise_len = t.result),
                          console.log('点赞数：', t.result))
                        : t.error &&
                          (e.$toast(t.error.message), console.error(t.error))
                    }
                  ),
                  this.$get(
                    '~/api/praise/count?',
                    {
                      source_table: 'attraction_information',
                      source_field: 'attraction_information_id',
                      source_id: t['attraction_information_id'],
                      user_id: r,
                    },
                    function (t) {
                      t.result || 0 === t.result
                        ? ((e.state_praise = !!t.result),
                          console.log('点赞状态：', t.result))
                        : t.error &&
                          (e.$toast(t.error.message), console.error(t.error))
                    }
                  )
              },
              change_praise: function (t) {
                var e = this,
                  r = this.user.user_id,
                  o = {
                    source_table: 'attraction_information',
                    source_field: 'attraction_information_id',
                    source_id: this.obj['attraction_information_id'],
                    user_id: r,
                  },
                  i = this
                ;(i.obj.praise_len = parseInt(i.obj.praise_len)),
                  this.state_praise
                    ? ((this.state_praise = !1),
                      this.$get('~/api/praise/del?', o, function (t) {
                        if (t.result) {
                          var r = i.obj.praise_len - 1
                          e.$post(
                            '~/api/attraction_information/set?attraction_information_id=' +
                              i.obj['attraction_information_id'],
                            { praise_len: r },
                            function (t) {
                              t.result
                                ? ((i.obj.praise_len = r),
                                  console.log('添加点赞数状态：', t.result))
                                : t.error && console.error(t.error)
                            }
                          ),
                            e.$toast('取消点赞')
                        } else
                          t.error &&
                            (e.$toast(t.error.message), console.error(t.error))
                      }))
                    : ((this.state_praise = !0),
                      this.$post('~/api/praise/add?', o, function (t) {
                        if (t.result) {
                          var r = i.obj.praise_len + 1
                          e.$post(
                            '~/api/attraction_information/set?attraction_information_id=' +
                              i.obj['attraction_information_id'],
                            { praise_len: r },
                            function (t) {
                              t.result
                                ? ((i.obj.praise_len = r),
                                  console.log('添加点赞数状态：', t.result))
                                : t.error && console.error(t.error)
                            }
                          ),
                            e.$toast('点赞成功')
                        } else
                          t.error &&
                            (e.$toast(t.error.message), console.error(t.error))
                      }))
              },
              get_collect: function (t) {
                var e = this,
                  r = this.user.user_id,
                  o = {
                    source_table: 'attraction_information',
                    source_field: 'attraction_information_id',
                    source_id: t['attraction_information_id'],
                    user_id: r,
                  }
                this.$get('~/api/collect/count?', o, function (t) {
                  if ((console.log(t), t.result || 0 === t.result)) {
                    var r = !!t.result
                    ;(e.state_collect = r), console.log('收藏状态：' + r)
                  } else t.error && console.error(t.error)
                })
              },
              change_collect: function () {
                var t = this,
                  e = this.user.user_id,
                  r = {
                    source_table: 'attraction_information',
                    source_field: 'attraction_information_id',
                    source_id: this.obj['attraction_information_id'],
                    user_id: e,
                  }
                this.state_collect
                  ? ((this.state_collect = !1),
                    this.$get('~/api/collect/del?', r, function (e) {
                      e.result
                        ? t.$toast('取消收藏')
                        : e.error &&
                          (t.$toast(e.error.message), console.error(e.error))
                    }))
                  : ((this.state_collect = !0),
                    (r.title = this.obj.attraction_name),
                    (r.img = this.obj.scenic_spot_pictures),
                    this.$post('~/api/collect/add?', r, function (e) {
                      e.result
                        ? t.$toast('收藏成功')
                        : e.error &&
                          (t.$toast(e.error.message), console.error(e.error))
                    }))
              },
              get_comment: function (t) {
                var e = this,
                  r = {
                    source_table: 'attraction_information',
                    source_field: 'attraction_information_id',
                    source_id: t['attraction_information_id'],
                    orderby: 'create_time desc',
                    reply_to_id: '0',
                  }
                this.$get(
                  getApp().globalData.host + '/api/comment/get_list?',
                  r,
                  function (r) {
                    if (r.result) {
                      var o = r.result.list
                      o.map(function (t) {
                        t.list_reply = []
                      }),
                        e.add_reply(t, o).then(function (t) {
                          e.list_comment = t
                        })
                    }
                  }
                )
              },
              add_reply: function (t, e) {
                var r = this
                return new Promise(function (t) {
                  for (
                    var o = function (t) {
                        var o = e[t]
                        r.$get(
                          getApp().globalData.host + '/api/comment/get_list?',
                          {
                            source_table: 'attraction_information',
                            source_field: 'attraction_information_id',
                            source_id: o['attraction_information_id'],
                            orderby: 'create_time desc',
                            reply_to_id: o.comment_id,
                          },
                          function (t) {
                            t.result && (o.list_reply = t.result.list)
                          }
                        )
                      },
                      i = 0;
                    i < e.length;
                    i++
                  )
                    o(i)
                  t(e)
                }).catch(function (t) {})
              },
              add_hits: function (t) {
                var e = this
                t['hits'] = t['hits'] + 1
                var r = t['hits']
                this.$post(
                  '~/api/attraction_information/set?attraction_information_id=' +
                    t['attraction_information_id'],
                  { hits: r },
                  function (t) {
                    if (t.result) {
                      console.log('添加访问量状态：', t.result)
                      var r = {
                        source_table: 'attraction_information',
                        source_field: 'attraction_information_id',
                        source_id: e.obj.attraction_information_id,
                        user_id: e.$store.state.user.user_id,
                      }
                      e.$post('~/api/hits/add?', r, function (t) {
                        console.log(t)
                      })
                    } else t.error && console.error(t.error)
                  }
                )
              },
              get_obj_after: function (t) {
                if (this.obj) {
                  var e = this.obj
                  this.get_praise(e),
                    this.get_collect(e),
                    this.get_comment(e),
                    this.add_hits(e)
                }
              },
              get_list_user_merchant_users: function () {
                var t = this
                return (0, n.default)(
                  i.default.mark(function e() {
                    var r
                    return i.default.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.$get('~/api/user/get_list?user_group=商家用户')
                            )
                          case 2:
                            ;(r = e.sent),
                              r.result && r.result.list
                                ? (t.list_user_merchant_users = r.result.list)
                                : r.error && console.error(r.error)
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )()
              },
              get_user_merchant_users: function (t) {
                for (
                  var e = this.list_user_merchant_users, r = '', o = 0;
                  o < e.length;
                  o++
                )
                  e[o].user_id == t && (r = e[o].nickname + '-' + e[o].username)
                return r
              },
            },
            created: function () {
              this.get_list_user_merchant_users()
            },
            mounted: function () {},
          }
        e.default = s
      }).call(this, r('543d')['default'])
    },
    e00c: function (t, e, r) {
      'use strict'
      r.r(e)
      var o = r('b4c3'),
        i = r.n(o)
      for (var n in o)
        ['default'].indexOf(n) < 0 &&
          (function (t) {
            r.d(e, t, function () {
              return o[t]
            })
          })(n)
      e['default'] = i.a
    },
  },
  [['2180', 'common/runtime', 'common/vendor']],
])
