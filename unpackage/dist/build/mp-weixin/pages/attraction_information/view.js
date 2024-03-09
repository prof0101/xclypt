;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/attraction_information/view'],
  {
    '066a': function (t, e, n) {
      'use strict'
      n.r(e)
      var i = n('0c25'),
        o = n.n(i)
      for (var r in i)
        ['default'].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t]
            })
          })(r)
      e['default'] = o.a
    },
    '0c25': function (t, e, n) {
      'use strict'
      ;(function (t, i) {
        var o = n('4ea4')
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0)
        var r = o(n('2eee')),
          s = o(n('c973')),
          a = o(n('813d')),
          c = {
            mixins: [a.default],
            data: function () {
              return {
                field: 'attraction_information_id',
                url_add: '~/api/attraction_information/add?',
                url_set: '~/api/attraction_information/set?',
                url_get_obj: '~/api/attraction_information/get_obj?',
                url_upload: '~/api/attraction_information/upload?',
                merchant_users: null,
                merchant_name: null,
                attraction_name: null,
                scenic_spot_pictures: null,
                admission_price: null,
                tourist_attraction_phone_number: null,
                attraction_address: null,
                introduction_to_scenic_spots: null,
                query: { attraction_information_id: 0 },
                form: {
                  merchant_users: 0,
                  merchant_name: '',
                  attraction_name: '',
                  scenic_spot_pictures: '',
                  admission_price: 0,
                  tourist_attraction_phone_number: '',
                  attraction_address: '',
                  introduction_to_scenic_spots: '',
                  attraction_information_id: 0,
                },
                disabledObj: {
                  merchant_users_isDisabled: !1,
                  merchant_name_isDisabled: !1,
                  attraction_name_isDisabled: !1,
                  scenic_spot_pictures_isDisabled: !1,
                  tourist_attraction_phone_number_isDisabled: !1,
                  attraction_address_isDisabled: !1,
                  introduction_to_scenic_spots_isDisabled: !1,
                },
                list_user_merchant_users: [],
                group_user_merchant_users: '',
              }
            },
            methods: {
              submit_check: function (t) {
                return t.tourist_attraction_phone_number &&
                  !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
                    t.tourist_attraction_phone_number
                  )
                  ? '手机号格式错误'
                  : null
              },
              changeLog: function (t, e) {
                this.form[e] = t
              },
              uploadFile_: function (e) {
                var n = this
                'mp-weixin' != t.getSystemInfoSync().uniPlatform ||
                'devtools' == t.getSystemInfoSync().platform
                  ? t.chooseImage({
                      count: 1,
                      success: function (t) {
                        var i = t.tempFilePaths
                        n.successChoose(i[0], e)
                      },
                    })
                  : i.chooseMessageFile({
                      count: 1,
                      success: function (t) {
                        var i = t.tempFiles
                        n.successChoose(i[0].path, e)
                      },
                    })
              },
              successChoose: function (e, n) {
                var i = this
                t.uploadFile({
                  url:
                    getApp().globalData.host +
                    '/api/attraction_information/upload',
                  filePath: e,
                  name: 'file',
                  success: function (e) {
                    e.data.error
                      ? t.showToast({
                          title: e.data.error.message,
                          icon: 'none',
                        })
                      : (i[n] = JSON.parse(e.data).result.url)
                  },
                })
              },
              close_: function (t) {
                'merchant_users' == t &&
                  (this['merchant_users'] = this.form['merchant_users'] = ''),
                  'merchant_name' == t &&
                    (this['merchant_name'] = this.form['merchant_name'] = ''),
                  'attraction_name' == t &&
                    (this['attraction_name'] = this.form['attraction_name'] =
                      ''),
                  'scenic_spot_pictures' == t &&
                    (this['scenic_spot_pictures'] = this.form[
                      'scenic_spot_pictures'
                    ] =
                      ''),
                  'admission_price' == t &&
                    (this['admission_price'] = this.form['admission_price'] =
                      ''),
                  'tourist_attraction_phone_number' == t &&
                    (this['tourist_attraction_phone_number'] = this.form[
                      'tourist_attraction_phone_number'
                    ] =
                      ''),
                  'attraction_address' == t &&
                    (this['attraction_address'] = this.form[
                      'attraction_address'
                    ] =
                      ''),
                  'introduction_to_scenic_spots' == t &&
                    (this['introduction_to_scenic_spots'] = this.form[
                      'introduction_to_scenic_spots'
                    ] =
                      '')
              },
              submit_: function () {
                null !== this['merchant_users'] &&
                  (this.form['merchant_users'] = this['merchant_users']),
                  null !== this['merchant_name'] &&
                    (this.form['merchant_name'] = this['merchant_name']),
                  null !== this['attraction_name'] &&
                    (this.form['attraction_name'] = this['attraction_name']),
                  null !== this['scenic_spot_pictures'] &&
                    (this.form['scenic_spot_pictures'] =
                      this['scenic_spot_pictures']),
                  null !== this['admission_price'] &&
                    (this.form['admission_price'] = this['admission_price']),
                  null !== this['tourist_attraction_phone_number'] &&
                    (this.form['tourist_attraction_phone_number'] =
                      this['tourist_attraction_phone_number']),
                  null !== this['attraction_address'] &&
                    (this.form['attraction_address'] =
                      this['attraction_address']),
                  null !== this['introduction_to_scenic_spots'] &&
                    (this.form['introduction_to_scenic_spots'] =
                      this['introduction_to_scenic_spots']),
                  console.log(this.form),
                  this.submit()
              },
              change_file: function (e) {
                var n = this
                t.chooseFile({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (i) {
                    var o = i.tempFilePaths,
                      r = t.uploadFile({
                        url: n.$fullUrl('/api/attraction_information/upload?'),
                        filePath: o[0],
                        name: 'file',
                        formData: { i_want_to_customize: 'test' },
                        header: { 'x-auth-token': n.$store.state.user.token },
                        success: function (t) {
                          var i = JSON.parse(t.data).result.url
                          n.form[e] = i
                        },
                      })
                    r.onProgressUpdate(function (t) {
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
              change_img: function (e) {
                var n = this
                ;(n.upload_img_flag = !1),
                  t.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success: function (i) {
                      var o = i.tempFilePaths,
                        r = t.uploadFile({
                          url: n.$fullUrl(
                            '/api/attraction_information/upload?'
                          ),
                          filePath: o[0],
                          name: 'file',
                          formData: { i_want_to_customize: 'test' },
                          header: { 'x-auth-token': n.$store.state.user.token },
                          success: function (t) {
                            var i = JSON.parse(t.data).result.url
                            n.form[e] = i
                          },
                        })
                      r.onProgressUpdate(function (t) {
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
              get_obj_before: function (e) {
                var n = t.db.get('form')
                n &&
                  (delete n.examine_state,
                  delete n.examine_reply,
                  (this.obj = t.push(this.obj, n)),
                  (this.form = t.push(this.form, n)))
                var i = []
                for (var o in n) i.push(o)
                for (var r = 0; r < i.length; r++)
                  this.disabledObj[i[r] + '_isDisabled'] = !0
                return t.db.del('form'), e
              },
              get_list_user_merchant_users: function () {
                var t = this
                return (0, s.default)(
                  r.default.mark(function e() {
                    var n
                    return r.default.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.$get('~/api/user/get_list?user_group=商家用户')
                            )
                          case 2:
                            ;(n = e.sent),
                              n.result && n.result.list
                                ? n.result.list.map(function (e) {
                                    return t.list_user_merchant_users.push({
                                      value: e.user_id,
                                      text: e.nickname + '-' + e.username,
                                    })
                                  })
                                : n.error && console.error(n.error)
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )()
              },
              get_group_user_merchant_users: function () {
                var t = this
                return (0, s.default)(
                  r.default.mark(function e() {
                    var n
                    return r.default.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.form['merchant_users'] = t.user.user_id),
                              (e.next = 3),
                              t.$get('~/api/user_group/get_obj?name=商家用户')
                            )
                          case 3:
                            ;(n = e.sent),
                              n.result && n.result.obj
                                ? ((t.group_user_merchant_users = n.result.obj),
                                  t.get_user_session_merchant_users(
                                    t.form['merchant_users']
                                  ))
                                : n.error && console.error(n.error)
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )()
              },
              get_user_session_merchant_users: function (t) {
                var e = this,
                  n = { user_id: t },
                  i =
                    '~/api/' +
                    e.group_user_merchant_users.source_table +
                    '/get_obj?'
                this.$get(i, n, function (n) {
                  if (n.result && n.result.obj) {
                    var i = []
                    for (var o in n.result.obj) i.push(o)
                    var r = []
                    for (var s in e.form) r.push(s)
                    ;(e.form['merchant_users'] = t),
                      (e.disabledObj['merchant_users_isDisabled'] = !0)
                    for (var a = 0; a < i.length; a++)
                      if ('examine_state' !== i[a] && 'examine_reply' !== i[a])
                        for (var c = 0; c < r.length; c++)
                          if (i[a] === r[c]) {
                            if ('merchant_users' !== i[a]) {
                              ;(e.form[r[c]] = n.result.obj[i[a]]),
                                (e.disabledObj[r[c] + '_isDisabled'] = !0)
                              break
                            }
                            e.disabledObj[r[c] + '_isDisabled'] = !0
                          }
                  }
                })
              },
              get_obj_after: function (t, e) {},
              is_view: function () {
                var t = '管理员' == this.user_group
                return (
                  t ||
                    ((t = this.$check_action(
                      '/attraction_information/table',
                      'add'
                    )),
                    console.log(
                      t
                        ? '你有表格添加权限视作有添加权限'
                        : '你没有表格添加权限'
                    )),
                  t ||
                    ((t = this.$check_action(
                      '/attraction_information/table',
                      'set'
                    )),
                    console.log(
                      t
                        ? '你有表格添加权限视作有修改权限'
                        : '你没有表格修改权限'
                    )),
                  t ||
                    ((t = this.$check_action(
                      '/attraction_information/view',
                      'add'
                    )),
                    console.log(
                      t
                        ? '你有视图添加权限视作有添加权限'
                        : '你没有视图添加权限'
                    )),
                  t ||
                    ((t = this.$check_action(
                      '/attraction_information/view',
                      'set'
                    )),
                    console.log(
                      t
                        ? '你有视图修改权限视作有修改权限'
                        : '你没有视图修改权限'
                    )),
                  t ||
                    ((t = this.$check_action(
                      '/attraction_information/view',
                      'get'
                    )),
                    console.log(
                      t
                        ? '你有视图查询权限视作有查询权限'
                        : '你没有视图查询权限'
                    )),
                  console.log(
                    t
                      ? '具有当前页面的查看权，请注意这不代表你有字段的查看权'
                      : '无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行'
                  ),
                  t
                )
              },
            },
            created: function () {
              this.get_list_user_merchant_users(),
                this.get_group_user_merchant_users()
            },
          }
        e.default = c
      }).call(this, n('543d')['default'], n('bc2e')['default'])
    },
    '18dd': function (t, e, n) {
      'use strict'
      n.r(e)
      var i = n('9f59'),
        o = n('066a')
      for (var r in o)
        ['default'].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t]
            })
          })(r)
      n('45dd')
      var s = n('f0c5'),
        a = Object(s['a'])(
          o['default'],
          i['b'],
          i['c'],
          !1,
          null,
          '7c398cb7',
          null,
          !1,
          i['a'],
          void 0
        )
      e['default'] = a.exports
    },
    '45dd': function (t, e, n) {
      'use strict'
      var i = n('c226'),
        o = n.n(i)
      o.a
    },
    '9f59': function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return o
      }),
        n.d(e, 'c', function () {
          return r
        }),
        n.d(e, 'a', function () {
          return i
        })
      var i = {
          uniForms: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-forms/uni-forms'),
            ]).then(n.bind(null, '2a9e'))
          },
          uniFormsItem: function () {
            return n
              .e('components/uni-forms-item/uni-forms-item')
              .then(n.bind(null, '4423'))
          },
          uniDataSelect: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-data-select/uni-data-select'),
            ]).then(n.bind(null, '1b47'))
          },
          uniEasyinput: function () {
            return Promise.all([
              n.e('common/vendor'),
              n.e('components/uni-easyinput/uni-easyinput'),
            ]).then(n.bind(null, '4a17'))
          },
        },
        o = function () {
          var t = this,
            e = t.$createElement,
            n = (t._self._c, t.is_view()),
            i = n
              ? t.$check_field('get', 'merchant_users') ||
                t.$check_field('add', 'merchant_users') ||
                t.$check_field('set', 'merchant_users')
              : null,
            o =
              n && i
                ? '管理员' === t.user_group ||
                  (t.form['attraction_information_id'] &&
                    t.$check_field('set', 'merchant_users')) ||
                  (!t.form['attraction_information_id'] &&
                    t.$check_field('add', 'merchant_users'))
                : null,
            r = n && i && !o ? t.$check_field('get', 'merchant_users') : null,
            s = n
              ? t.$check_field('get', 'merchant_name') ||
                t.$check_field('add', 'merchant_name') ||
                t.$check_field('set', 'merchant_name')
              : null,
            a =
              n && s
                ? '管理员' === t.user_group ||
                  (t.form['attraction_information_id'] &&
                    t.$check_field('set', 'merchant_name')) ||
                  (!t.form['attraction_information_id'] &&
                    t.$check_field('add', 'merchant_name'))
                : null,
            c = n && s && !a ? t.$check_field('get', 'merchant_name') : null,
            _ = n
              ? t.$check_field('get', 'attraction_name') ||
                t.$check_field('add', 'attraction_name') ||
                t.$check_field('set', 'attraction_name')
              : null,
            u =
              n && _
                ? '管理员' === t.user_group ||
                  (t.form['attraction_information_id'] &&
                    t.$check_field('set', 'attraction_name')) ||
                  (!t.form['attraction_information_id'] &&
                    t.$check_field('add', 'attraction_name'))
                : null,
            l = n && _ && !u ? t.$check_field('get', 'attraction_name') : null,
            m = n
              ? t.$check_field('get', 'scenic_spot_pictures') ||
                t.$check_field('add', 'scenic_spot_pictures') ||
                t.$check_field('set', 'scenic_spot_pictures')
              : null,
            d =
              n && m
                ? t.form['scenic_spot_pictures'] &&
                  t.$check_field('set', 'scenic_spot_pictures')
                : null,
            f =
              n && m && d && t.disabledObj['scenic_spot_pictures_isDisabled']
                ? t.$fullUrl(t.form['scenic_spot_pictures'])
                : null,
            h =
              n && m && d && !t.disabledObj['scenic_spot_pictures_isDisabled']
                ? t.$fullUrl(t.form['scenic_spot_pictures'])
                : null,
            p =
              n && m && !d
                ? !t.form['scenic_spot_pictures'] &&
                  t.$check_field('add', 'scenic_spot_pictures')
                : null,
            g =
              n && m && !d && !p
                ? t.$check_field('get', 'scenic_spot_pictures')
                : null,
            b =
              n && m && !d && !p && g
                ? t.$fullUrl(t.form['scenic_spot_pictures'])
                : null,
            $ = n
              ? t.$check_field('get', 'admission_price') ||
                t.$check_field('add', 'admission_price') ||
                t.$check_field('set', 'admission_price')
              : null,
            k =
              n && $
                ? '管理员' === t.user_group ||
                  (t.form['attraction_information_id'] &&
                    t.$check_field('set', 'admission_price')) ||
                  (!t.form['attraction_information_id'] &&
                    t.$check_field('add', 'admission_price'))
                : null,
            v = n && $ && !k ? t.$check_field('get', 'admission_price') : null,
            j = n
              ? t.$check_field('get', 'tourist_attraction_phone_number') ||
                t.$check_field('add', 'tourist_attraction_phone_number') ||
                t.$check_field('set', 'tourist_attraction_phone_number')
              : null,
            w =
              n && j
                ? '管理员' === t.user_group ||
                  (t.form['attraction_information_id'] &&
                    t.$check_field('set', 'tourist_attraction_phone_number')) ||
                  (!t.form['attraction_information_id'] &&
                    t.$check_field('add', 'tourist_attraction_phone_number'))
                : null,
            x =
              n && j && !w
                ? t.$check_field('get', 'tourist_attraction_phone_number')
                : null,
            y = n
              ? t.$check_field('get', 'attraction_address') ||
                t.$check_field('add', 'attraction_address') ||
                t.$check_field('set', 'attraction_address')
              : null,
            D =
              n && y
                ? '管理员' === t.user_group ||
                  (t.form['attraction_information_id'] &&
                    t.$check_field('set', 'attraction_address')) ||
                  (!t.form['attraction_information_id'] &&
                    t.$check_field('add', 'attraction_address'))
                : null,
            P =
              n && y && !D ? t.$check_field('get', 'attraction_address') : null,
            O = n
              ? t.$check_field('get', 'introduction_to_scenic_spots') ||
                t.$check_field('add', 'introduction_to_scenic_spots') ||
                t.$check_field('set', 'introduction_to_scenic_spots')
              : null,
            F =
              n && O
                ? '管理员' === t.user_group ||
                  (t.form['attraction_information_id'] &&
                    t.$check_field('set', 'introduction_to_scenic_spots')) ||
                  (!t.form['attraction_information_id'] &&
                    t.$check_field('add', 'introduction_to_scenic_spots'))
                : null,
            S =
              n && O && !F
                ? t.$check_field('get', 'introduction_to_scenic_spots')
                : null,
            U =
              t.$check_action('/attraction_information/view', 'set') ||
              t.$check_action('/attraction_information/view', 'add') ||
              t.$check_option('/attraction_information/table', 'examine')
          t.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: n,
                m1: i,
                m2: o,
                m3: r,
                m4: s,
                m5: a,
                m6: c,
                m7: _,
                m8: u,
                m9: l,
                m10: m,
                m11: d,
                m12: f,
                m13: h,
                m14: p,
                m15: g,
                m16: b,
                m17: $,
                m18: k,
                m19: v,
                m20: j,
                m21: w,
                m22: x,
                m23: y,
                m24: D,
                m25: P,
                m26: O,
                m27: F,
                m28: S,
                m29: U,
              },
            }
          )
        },
        r = []
    },
    c226: function (t, e, n) {},
    ca20: function (t, e, n) {
      'use strict'
      ;(function (t, e) {
        var i = n('4ea4')
        n('e411')
        i(n('66fd'))
        var o = i(n('18dd'))
        ;(t.__webpack_require_UNI_MP_PLUGIN__ = n), e(o.default)
      }).call(this, n('bc2e')['default'], n('543d')['createPage'])
    },
  },
  [['ca20', 'common/runtime', 'common/vendor']],
])
