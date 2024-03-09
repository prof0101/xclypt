;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/hotel_information/details'],
  {
    '0892': function (e, t, o) {
      'use strict'
      o.r(t)
      var r = o('8693'),
        i = o('12fe')
      for (var n in i)
        ['default'].indexOf(n) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return i[e]
            })
          })(n)
      o('2958')
      var s = o('f0c5'),
        l = Object(s['a'])(
          i['default'],
          r['b'],
          r['c'],
          !1,
          null,
          null,
          null,
          !1,
          r['a'],
          void 0
        )
      t['default'] = l.exports
    },
    '12fe': function (e, t, o) {
      'use strict'
      o.r(t)
      var r = o('1ba4'),
        i = o.n(r)
      for (var n in r)
        ['default'].indexOf(n) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return r[e]
            })
          })(n)
      t['default'] = i.a
    },
    '1ba4': function (e, t, o) {
      'use strict'
      ;(function (e) {
        var r = o('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var i = r(o('2eee')),
          n = r(o('c973')),
          s = r(o('813d')),
          l = {
            mixins: [s.default],
            components: {
              list_comment: function () {
                o.e('components/diy/list_comment')
                  .then(
                    function () {
                      return resolve(o('af50'))
                    }.bind(null, o)
                  )
                  .catch(o.oe)
              },
              bar_title: function () {
                o.e('components/diy/bar_title')
                  .then(
                    function () {
                      return resolve(o('a5c1'))
                    }.bind(null, o)
                  )
                  .catch(o.oe)
              },
              form_editor: function () {
                o.e('components/diy/form_editor')
                  .then(
                    function () {
                      return resolve(o('2bef'))
                    }.bind(null, o)
                  )
                  .catch(o.oe)
              },
            },
            data: function () {
              return {
                url_get_obj: '~/api/hotel_information/get_obj?',
                field: 'hotel_information_id',
                query: { hotel_information_id: 0 },
                obj: {
                  merchant_users: 0,
                  merchant_name: '',
                  hotel_name: '',
                  hotel_pictures: '',
                  hotel_star_rating: '',
                  hotel_category: '',
                  room_type: '',
                  one_night_amount: 0,
                  booking_amount: 0,
                  hotel_phone_number: '',
                  hotel_introduction: '',
                  hotel_address: '',
                  hits: 0,
                  praise_len: 0,
                  hotel_information_id: 0,
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
              openUrl: function (t) {
                console.log(1111),
                  e.navigateTo({ url: '/pages/webview/webview?url='.concat(t) })
              },
              get_praise: function (e) {
                var t = this,
                  o = this.user.user_id
                ;(this.obj.praise_len = 0),
                  this.$get(
                    '~/api/praise/count?',
                    {
                      source_table: 'hotel_information',
                      source_field: 'hotel_information_id',
                      source_id: e['hotel_information_id'],
                    },
                    function (e) {
                      e.result || 0 === e.result
                        ? ((t.praise = e.result),
                          (t.obj.praise_len = e.result),
                          console.log('点赞数：', e.result))
                        : e.error &&
                          (t.$toast(e.error.message), console.error(e.error))
                    }
                  ),
                  this.$get(
                    '~/api/praise/count?',
                    {
                      source_table: 'hotel_information',
                      source_field: 'hotel_information_id',
                      source_id: e['hotel_information_id'],
                      user_id: o,
                    },
                    function (e) {
                      e.result || 0 === e.result
                        ? ((t.state_praise = !!e.result),
                          console.log('点赞状态：', e.result))
                        : e.error &&
                          (t.$toast(e.error.message), console.error(e.error))
                    }
                  )
              },
              change_praise: function (e) {
                var t = this,
                  o = this.user.user_id,
                  r = {
                    source_table: 'hotel_information',
                    source_field: 'hotel_information_id',
                    source_id: this.obj['hotel_information_id'],
                    user_id: o,
                  },
                  i = this
                ;(i.obj.praise_len = parseInt(i.obj.praise_len)),
                  this.state_praise
                    ? ((this.state_praise = !1),
                      this.$get('~/api/praise/del?', r, function (e) {
                        if (e.result) {
                          var o = i.obj.praise_len - 1
                          t.$post(
                            '~/api/hotel_information/set?hotel_information_id=' +
                              i.obj['hotel_information_id'],
                            { praise_len: o },
                            function (e) {
                              e.result
                                ? ((i.obj.praise_len = o),
                                  console.log('添加点赞数状态：', e.result))
                                : e.error && console.error(e.error)
                            }
                          ),
                            t.$toast('取消点赞')
                        } else
                          e.error &&
                            (t.$toast(e.error.message), console.error(e.error))
                      }))
                    : ((this.state_praise = !0),
                      this.$post('~/api/praise/add?', r, function (e) {
                        if (e.result) {
                          var o = i.obj.praise_len + 1
                          t.$post(
                            '~/api/hotel_information/set?hotel_information_id=' +
                              i.obj['hotel_information_id'],
                            { praise_len: o },
                            function (e) {
                              e.result
                                ? ((i.obj.praise_len = o),
                                  console.log('添加点赞数状态：', e.result))
                                : e.error && console.error(e.error)
                            }
                          ),
                            t.$toast('点赞成功')
                        } else
                          e.error &&
                            (t.$toast(e.error.message), console.error(e.error))
                      }))
              },
              get_collect: function (e) {
                var t = this,
                  o = this.user.user_id,
                  r = {
                    source_table: 'hotel_information',
                    source_field: 'hotel_information_id',
                    source_id: e['hotel_information_id'],
                    user_id: o,
                  }
                this.$get('~/api/collect/count?', r, function (e) {
                  if ((console.log(e), e.result || 0 === e.result)) {
                    var o = !!e.result
                    ;(t.state_collect = o), console.log('收藏状态：' + o)
                  } else e.error && console.error(e.error)
                })
              },
              change_collect: function () {
                var e = this,
                  t = this.user.user_id,
                  o = {
                    source_table: 'hotel_information',
                    source_field: 'hotel_information_id',
                    source_id: this.obj['hotel_information_id'],
                    user_id: t,
                  }
                this.state_collect
                  ? ((this.state_collect = !1),
                    this.$get('~/api/collect/del?', o, function (t) {
                      t.result
                        ? e.$toast('取消收藏')
                        : t.error &&
                          (e.$toast(t.error.message), console.error(t.error))
                    }))
                  : ((this.state_collect = !0),
                    (o.title = this.obj.hotel_name),
                    (o.img = this.obj.hotel_pictures),
                    this.$post('~/api/collect/add?', o, function (t) {
                      t.result
                        ? e.$toast('收藏成功')
                        : t.error &&
                          (e.$toast(t.error.message), console.error(t.error))
                    }))
              },
              get_comment: function (e) {
                var t = this,
                  o = {
                    source_table: 'hotel_information',
                    source_field: 'hotel_information_id',
                    source_id: e['hotel_information_id'],
                    orderby: 'create_time desc',
                    reply_to_id: '0',
                  }
                this.$get(
                  getApp().globalData.host + '/api/comment/get_list?',
                  o,
                  function (o) {
                    if (o.result) {
                      var r = o.result.list
                      r.map(function (e) {
                        e.list_reply = []
                      }),
                        t.add_reply(e, r).then(function (e) {
                          t.list_comment = e
                        })
                    }
                  }
                )
              },
              add_reply: function (e, t) {
                var o = this
                return new Promise(function (e) {
                  for (
                    var r = function (e) {
                        var r = t[e]
                        o.$get(
                          getApp().globalData.host + '/api/comment/get_list?',
                          {
                            source_table: 'hotel_information',
                            source_field: 'hotel_information_id',
                            source_id: r['hotel_information_id'],
                            orderby: 'create_time desc',
                            reply_to_id: r.comment_id,
                          },
                          function (e) {
                            e.result && (r.list_reply = e.result.list)
                          }
                        )
                      },
                      i = 0;
                    i < t.length;
                    i++
                  )
                    r(i)
                  e(t)
                }).catch(function (e) {})
              },
              add_hits: function (e) {
                var t = this
                e['hits'] = e['hits'] + 1
                var o = e['hits']
                this.$post(
                  '~/api/hotel_information/set?hotel_information_id=' +
                    e['hotel_information_id'],
                  { hits: o },
                  function (e) {
                    if (e.result) {
                      console.log('添加访问量状态：', e.result)
                      var o = {
                        source_table: 'hotel_information',
                        source_field: 'hotel_information_id',
                        source_id: t.obj.hotel_information_id,
                        user_id: t.$store.state.user.user_id,
                      }
                      t.$post('~/api/hits/add?', o, function (e) {
                        console.log(e)
                      })
                    } else e.error && console.error(e.error)
                  }
                )
              },
              get_obj_after: function (e) {
                if (this.obj) {
                  var t = this.obj
                  this.get_praise(t),
                    this.get_collect(t),
                    this.get_comment(t),
                    this.add_hits(t)
                }
              },
              get_list_user_merchant_users: function () {
                var e = this
                return (0, n.default)(
                  i.default.mark(function t() {
                    var o
                    return i.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.$get('~/api/user/get_list?user_group=商家用户')
                            )
                          case 2:
                            ;(o = t.sent),
                              o.result && o.result.list
                                ? (e.list_user_merchant_users = o.result.list)
                                : o.error && console.error(o.error)
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              get_user_merchant_users: function (e) {
                for (
                  var t = this.list_user_merchant_users, o = '', r = 0;
                  r < t.length;
                  r++
                )
                  t[r].user_id == e && (o = t[r].nickname + '-' + t[r].username)
                return o
              },
            },
            created: function () {
              this.get_list_user_merchant_users()
            },
            mounted: function () {},
          }
        t.default = l
      }).call(this, o('543d')['default'])
    },
    2958: function (e, t, o) {
      'use strict'
      var r = o('8575'),
        i = o.n(r)
      i.a
    },
    2966: function (e, t, o) {
      'use strict'
      ;(function (e, t) {
        var r = o('4ea4')
        o('e411')
        r(o('66fd'))
        var i = r(o('0892'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = o), t(i.default)
      }).call(this, o('bc2e')['default'], o('543d')['createPage'])
    },
    8575: function (e, t, o) {},
    8693: function (e, t, o) {
      'use strict'
      o.d(t, 'b', function () {
        return i
      }),
        o.d(t, 'c', function () {
          return n
        }),
        o.d(t, 'a', function () {
          return r
        })
      var r = {
          uniIcons: function () {
            return Promise.all([
              o.e('common/vendor'),
              o.e('components/uni-icons/uni-icons'),
            ]).then(o.bind(null, '9972'))
          },
        },
        i = function () {
          var e = this,
            t = e.$createElement,
            o = (e._self._c, e.$check_field('get', 'merchant_users')),
            r = o ? e.get_user_merchant_users(e.obj['merchant_users']) : null,
            i = e.$check_field('get', 'merchant_name'),
            n = e.$check_field('get', 'hotel_name'),
            s = e.$check_field('get', 'hotel_pictures'),
            l = s ? e.$fullUrl(e.obj['hotel_pictures']) : null,
            a = e.$check_field('get', 'hotel_star_rating'),
            c = e.$check_field('get', 'hotel_category'),
            _ = e.$check_field('get', 'room_type'),
            u = e.$check_field('get', 'one_night_amount'),
            h = e.$check_field('get', 'booking_amount'),
            f = e.$check_field('get', 'hotel_phone_number'),
            d = e.$check_field('get', 'hotel_introduction'),
            m = e.$check_field('get', 'hotel_address'),
            p = e.$check_action('/hotel_orders/edit', 'add'),
            g = e.$check_action('/comment/list', 'add'),
            b = e.$check_action('/collect/list', 'add')
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: o,
                m1: r,
                m2: i,
                m3: n,
                m4: s,
                m5: l,
                m6: a,
                m7: c,
                m8: _,
                m9: u,
                m10: h,
                m11: f,
                m12: d,
                m13: m,
                m14: p,
                m15: g,
                m16: b,
              },
            }
          )
        },
        n = []
    },
  },
  [['2966', 'common/runtime', 'common/vendor']],
])
