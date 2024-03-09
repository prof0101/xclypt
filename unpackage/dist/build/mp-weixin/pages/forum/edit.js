;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/forum/edit'],
  {
    1819: function (t, e, n) {
      'use strict'
      n.r(e)
      var o = n('c426'),
        i = n('97f3')
      for (var u in i)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t]
            })
          })(u)
      n('d0b5')
      var r = n('f0c5'),
        a = Object(r['a'])(
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
      e['default'] = a.exports
    },
    9714: function (t, e, n) {
      'use strict'
      ;(function (t, e) {
        var o = n('4ea4')
        n('e411')
        o(n('66fd'))
        var i = o(n('1819'))
        ;(t.__webpack_require_UNI_MP_PLUGIN__ = n), e(i.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
    '97f3': function (t, e, n) {
      'use strict'
      n.r(e)
      var o = n('e9df'),
        i = n.n(o)
      for (var u in o)
        ['default'].indexOf(u) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t]
            })
          })(u)
      e['default'] = i.a
    },
    c426: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return i
      }),
        n.d(e, 'c', function () {
          return u
        }),
        n.d(e, 'a', function () {
          return o
        })
      var o = {
          uniDataSelect: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-data-select/uni-data-select'),
            ]).then(n.bind(null, '1b47'))
          },
        },
        i = function () {
          var t = this.$createElement,
            e = (this._self._c, this.$fullImgUrl(this.obj.img))
          this.$mp.data = Object.assign({}, { $root: { m0: e } })
        },
        u = []
    },
    d0b5: function (t, e, n) {
      'use strict'
      var o = n('f85b'),
        i = n.n(o)
      i.a
    },
    e9df: function (t, e, n) {
      'use strict'
      ;(function (t) {
        var o = n('4ea4')
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0)
        var i = o(n('813d')),
          u = {
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
            },
            data: function () {
              return {
                url_get_obj: '~/api/forum/get_obj?',
                url_add: '~/api/forum/add',
                url_set: '~/api/forum/set',
                url_get_type_list: '~/api/forum_type/get_list',
                field: 'forum_id',
                query: { forum_id: 0 },
                obj: {
                  forum_id: 0,
                  title: '',
                  content: '',
                  description: '',
                  display: 0,
                  tag: '',
                  type: '',
                  img: '',
                  nickname: '',
                },
                type_list: [],
              }
            },
            methods: {
              get_forum_type: function () {
                var t = this
                this.$get(this.url_get_type_list, {}, function (e, n) {
                  console.log(e),
                    (t.type_list = e.result.list.map(function (t) {
                      return { value: t.name, text: t.name }
                    }))
                })
              },
              change_avatar: function (e) {
                var n = this
                t.chooseImage({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (o) {
                    var i = o.tempFilePaths,
                      u = t.uploadFile({
                        url: n.$fullUrl('/api/forum/upload?'),
                        filePath: i[0],
                        name: 'file',
                        header: { 'x-auth-token': n.$store.state.user.token },
                        success: function (t) {
                          var o = JSON.parse(t.data).result.url
                          console.log(o)
                          var i = JSON.parse(t.data).result.url
                          n.$post(
                            '~/api/forum/set?forum_id=' + e,
                            { img: i },
                            function (t) {
                              n.obj.img = o
                            }
                          )
                        },
                      })
                    u.onProgressUpdate(function (t) {
                      ;(n.percent = t.progress),
                        console.log('上传进度' + t.progress),
                        console.log('已经上传的数据长度' + t.totalBytesSent),
                        console.log(
                          '预期需要上传的数据总长度' +
                            t.totalBytesExpectedToSend
                        )
                    })
                  },
                  error: function (t) {
                    console.log(t)
                  },
                })
              },
              submit_main: function () {
                var e = this.obj
                delete e.update_time,
                  delete e.create_time,
                  this.$post(
                    this.url_set + '?forum_id=' + e.forum_id,
                    e,
                    function (e, n) {
                      t.showToast({ icon: 'success', title: '保存成功' }),
                        setTimeout(function () {
                          t.hideToast(),
                            t.navigateTo({ url: '/pages/forum/table' })
                        }, 1500)
                    }
                  )
              },
            },
            created: function () {
              this.get_forum_type()
            },
          }
        e.default = u
      }).call(this, n('543d')['default'])
    },
    f85b: function (t, e, n) {},
  },
  [['9714', 'common/runtime', 'common/vendor']],
])
