;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/homestay_information/view'],
  {
    '0e47': function (e, t, s) {
      'use strict'
      ;(function (e, o) {
        var a = s('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var n = a(s('2eee')),
          i = a(s('c973')),
          r = a(s('813d')),
          m = {
            mixins: [r.default],
            data: function () {
              return {
                field: 'homestay_information_id',
                url_add: '~/api/homestay_information/add?',
                url_set: '~/api/homestay_information/set?',
                url_get_obj: '~/api/homestay_information/get_obj?',
                url_upload: '~/api/homestay_information/upload?',
                merchant_users: null,
                merchant_name: null,
                homestay_name: null,
                homestay_id: null,
                homestay_telephone_number: null,
                homestay_pictures: null,
                homestay_prices: null,
                booking_amount: null,
                homestay_address: null,
                homestay_details: null,
                query: { homestay_information_id: 0 },
                form: {
                  merchant_users: 0,
                  merchant_name: '',
                  homestay_name: '',
                  homestay_id: '',
                  homestay_telephone_number: '',
                  homestay_pictures: '',
                  homestay_prices: 0,
                  booking_amount: 0,
                  homestay_address: '',
                  homestay_details: '',
                  homestay_information_id: 0,
                },
                disabledObj: {
                  merchant_users_isDisabled: !1,
                  merchant_name_isDisabled: !1,
                  homestay_name_isDisabled: !1,
                  homestay_id_isDisabled: !1,
                  homestay_telephone_number_isDisabled: !1,
                  homestay_pictures_isDisabled: !1,
                  homestay_address_isDisabled: !1,
                  homestay_details_isDisabled: !1,
                },
                list_user_merchant_users: [],
                group_user_merchant_users: '',
              }
            },
            methods: {
              submit_check: function (e) {
                return e.homestay_telephone_number &&
                  !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
                    e.homestay_telephone_number
                  )
                  ? '手机号格式错误'
                  : null
              },
              changeLog: function (e, t) {
                this.form[t] = e
              },
              uploadFile_: function (t) {
                var s = this
                'mp-weixin' != e.getSystemInfoSync().uniPlatform ||
                'devtools' == e.getSystemInfoSync().platform
                  ? e.chooseImage({
                      count: 1,
                      success: function (e) {
                        var o = e.tempFilePaths
                        s.successChoose(o[0], t)
                      },
                    })
                  : o.chooseMessageFile({
                      count: 1,
                      success: function (e) {
                        var o = e.tempFiles
                        s.successChoose(o[0].path, t)
                      },
                    })
              },
              successChoose: function (t, s) {
                var o = this
                e.uploadFile({
                  url:
                    getApp().globalData.host +
                    '/api/homestay_information/upload',
                  filePath: t,
                  name: 'file',
                  success: function (t) {
                    t.data.error
                      ? e.showToast({
                          title: t.data.error.message,
                          icon: 'none',
                        })
                      : (o[s] = JSON.parse(t.data).result.url)
                  },
                })
              },
              close_: function (e) {
                'merchant_users' == e &&
                  (this['merchant_users'] = this.form['merchant_users'] = ''),
                  'merchant_name' == e &&
                    (this['merchant_name'] = this.form['merchant_name'] = ''),
                  'homestay_name' == e &&
                    (this['homestay_name'] = this.form['homestay_name'] = ''),
                  'homestay_id' == e &&
                    (this['homestay_id'] = this.form['homestay_id'] = ''),
                  'homestay_telephone_number' == e &&
                    (this['homestay_telephone_number'] = this.form[
                      'homestay_telephone_number'
                    ] =
                      ''),
                  'homestay_pictures' == e &&
                    (this['homestay_pictures'] = this.form[
                      'homestay_pictures'
                    ] =
                      ''),
                  'homestay_prices' == e &&
                    (this['homestay_prices'] = this.form['homestay_prices'] =
                      ''),
                  'booking_amount' == e &&
                    (this['booking_amount'] = this.form['booking_amount'] = ''),
                  'homestay_address' == e &&
                    (this['homestay_address'] = this.form['homestay_address'] =
                      ''),
                  'homestay_details' == e &&
                    (this['homestay_details'] = this.form['homestay_details'] =
                      '')
              },
              submit_: function () {
                null !== this['merchant_users'] &&
                  (this.form['merchant_users'] = this['merchant_users']),
                  null !== this['merchant_name'] &&
                    (this.form['merchant_name'] = this['merchant_name']),
                  null !== this['homestay_name'] &&
                    (this.form['homestay_name'] = this['homestay_name']),
                  null !== this['homestay_id'] &&
                    (this.form['homestay_id'] = this['homestay_id']),
                  null !== this['homestay_telephone_number'] &&
                    (this.form['homestay_telephone_number'] =
                      this['homestay_telephone_number']),
                  null !== this['homestay_pictures'] &&
                    (this.form['homestay_pictures'] =
                      this['homestay_pictures']),
                  null !== this['homestay_prices'] &&
                    (this.form['homestay_prices'] = this['homestay_prices']),
                  null !== this['booking_amount'] &&
                    (this.form['booking_amount'] = this['booking_amount']),
                  null !== this['homestay_address'] &&
                    (this.form['homestay_address'] = this['homestay_address']),
                  null !== this['homestay_details'] &&
                    (this.form['homestay_details'] = this['homestay_details']),
                  console.log(this.form),
                  this.submit()
              },
              change_file: function (t) {
                var s = this
                e.chooseFile({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (o) {
                    var a = o.tempFilePaths,
                      n = e.uploadFile({
                        url: s.$fullUrl('/api/homestay_information/upload?'),
                        filePath: a[0],
                        name: 'file',
                        formData: { i_want_to_customize: 'test' },
                        header: { 'x-auth-token': s.$store.state.user.token },
                        success: function (e) {
                          var o = JSON.parse(e.data).result.url
                          s.form[t] = o
                        },
                      })
                    n.onProgressUpdate(function (e) {
                      ;(s.percent = e.progress),
                        console.log('上传进度' + e.progress),
                        console.log('已经上传的数据长度' + e.totalBytesSent),
                        console.log(
                          '预期需要上传的数据总长度' +
                            e.totalBytesExpectedToSend
                        )
                    })
                  },
                  error: function (e) {
                    console.log(e)
                  },
                })
              },
              change_img: function (t) {
                var s = this
                ;(s.upload_img_flag = !1),
                  e.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success: function (o) {
                      var a = o.tempFilePaths,
                        n = e.uploadFile({
                          url: s.$fullUrl('/api/homestay_information/upload?'),
                          filePath: a[0],
                          name: 'file',
                          formData: { i_want_to_customize: 'test' },
                          header: { 'x-auth-token': s.$store.state.user.token },
                          success: function (e) {
                            var o = JSON.parse(e.data).result.url
                            s.form[t] = o
                          },
                        })
                      n.onProgressUpdate(function (e) {
                        ;(s.percent = e.progress),
                          console.log('上传进度' + e.progress),
                          console.log('已经上传的数据长度' + e.totalBytesSent),
                          console.log(
                            '预期需要上传的数据总长度' +
                              e.totalBytesExpectedToSend
                          )
                      })
                    },
                    error: function (e) {
                      console.log(e)
                    },
                  })
              },
              get_obj_before: function (t) {
                var s = e.db.get('form')
                s &&
                  (delete s.examine_state,
                  delete s.examine_reply,
                  (this.obj = e.push(this.obj, s)),
                  (this.form = e.push(this.form, s)))
                var o = []
                for (var a in s) o.push(a)
                for (var n = 0; n < o.length; n++)
                  this.disabledObj[o[n] + '_isDisabled'] = !0
                return e.db.del('form'), t
              },
              get_list_user_merchant_users: function () {
                var e = this
                return (0, i.default)(
                  n.default.mark(function t() {
                    var s
                    return n.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.$get('~/api/user/get_list?user_group=商家用户')
                            )
                          case 2:
                            ;(s = t.sent),
                              s.result && s.result.list
                                ? s.result.list.map(function (t) {
                                    return e.list_user_merchant_users.push({
                                      value: t.user_id,
                                      text: t.nickname + '-' + t.username,
                                    })
                                  })
                                : s.error && console.error(s.error)
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              get_group_user_merchant_users: function () {
                var e = this
                return (0, i.default)(
                  n.default.mark(function t() {
                    var s
                    return n.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.form['merchant_users'] = e.user.user_id),
                              (t.next = 3),
                              e.$get('~/api/user_group/get_obj?name=商家用户')
                            )
                          case 3:
                            ;(s = t.sent),
                              s.result && s.result.obj
                                ? ((e.group_user_merchant_users = s.result.obj),
                                  e.get_user_session_merchant_users(
                                    e.form['merchant_users']
                                  ))
                                : s.error && console.error(s.error)
                          case 5:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              get_user_session_merchant_users: function (e) {
                var t = this,
                  s = { user_id: e },
                  o =
                    '~/api/' +
                    t.group_user_merchant_users.source_table +
                    '/get_obj?'
                this.$get(o, s, function (s) {
                  if (s.result && s.result.obj) {
                    var o = []
                    for (var a in s.result.obj) o.push(a)
                    var n = []
                    for (var i in t.form) n.push(i)
                    ;(t.form['merchant_users'] = e),
                      (t.disabledObj['merchant_users_isDisabled'] = !0)
                    for (var r = 0; r < o.length; r++)
                      if ('examine_state' !== o[r] && 'examine_reply' !== o[r])
                        for (var m = 0; m < n.length; m++)
                          if (o[r] === n[m]) {
                            if ('merchant_users' !== o[r]) {
                              ;(t.form[n[m]] = s.result.obj[o[r]]),
                                (t.disabledObj[n[m] + '_isDisabled'] = !0)
                              break
                            }
                            t.disabledObj[n[m] + '_isDisabled'] = !0
                          }
                  }
                })
              },
              get_obj_after: function (e, t) {},
              is_view: function () {
                var e = '管理员' == this.user_group
                return (
                  e ||
                    ((e = this.$check_action(
                      '/homestay_information/table',
                      'add'
                    )),
                    console.log(
                      e
                        ? '你有表格添加权限视作有添加权限'
                        : '你没有表格添加权限'
                    )),
                  e ||
                    ((e = this.$check_action(
                      '/homestay_information/table',
                      'set'
                    )),
                    console.log(
                      e
                        ? '你有表格添加权限视作有修改权限'
                        : '你没有表格修改权限'
                    )),
                  e ||
                    ((e = this.$check_action(
                      '/homestay_information/view',
                      'add'
                    )),
                    console.log(
                      e
                        ? '你有视图添加权限视作有添加权限'
                        : '你没有视图添加权限'
                    )),
                  e ||
                    ((e = this.$check_action(
                      '/homestay_information/view',
                      'set'
                    )),
                    console.log(
                      e
                        ? '你有视图修改权限视作有修改权限'
                        : '你没有视图修改权限'
                    )),
                  e ||
                    ((e = this.$check_action(
                      '/homestay_information/view',
                      'get'
                    )),
                    console.log(
                      e
                        ? '你有视图查询权限视作有查询权限'
                        : '你没有视图查询权限'
                    )),
                  console.log(
                    e
                      ? '具有当前页面的查看权，请注意这不代表你有字段的查看权'
                      : '无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行'
                  ),
                  e
                )
              },
            },
            created: function () {
              this.get_list_user_merchant_users(),
                this.get_group_user_merchant_users()
            },
          }
        t.default = m
      }).call(this, s('543d')['default'], s('bc2e')['default'])
    },
    '1a18': function (e, t, s) {
      'use strict'
      ;(function (e, t) {
        var o = s('4ea4')
        s('e411')
        o(s('66fd'))
        var a = o(s('2c7a'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = s), t(a.default)
      }).call(this, s('bc2e')['default'], s('543d')['createPage'])
    },
    '2c7a': function (e, t, s) {
      'use strict'
      s.r(t)
      var o = s('3649'),
        a = s('ad2f')
      for (var n in a)
        ['default'].indexOf(n) < 0 &&
          (function (e) {
            s.d(t, e, function () {
              return a[e]
            })
          })(n)
      s('f838')
      var i = s('f0c5'),
        r = Object(i['a'])(
          a['default'],
          o['b'],
          o['c'],
          !1,
          null,
          '38e4faeb',
          null,
          !1,
          o['a'],
          void 0
        )
      t['default'] = r.exports
    },
    3649: function (e, t, s) {
      'use strict'
      s.d(t, 'b', function () {
        return a
      }),
        s.d(t, 'c', function () {
          return n
        }),
        s.d(t, 'a', function () {
          return o
        })
      var o = {
          uniForms: function () {
            return Promise.all([
              s.e('common/vendor'),
              s.e('components/uni-forms/uni-forms'),
            ]).then(s.bind(null, '2a9e'))
          },
          uniFormsItem: function () {
            return s
              .e('components/uni-forms-item/uni-forms-item')
              .then(s.bind(null, '4423'))
          },
          uniDataSelect: function () {
            return Promise.all([
              s.e('common/vendor'),
              s.e('components/uni-data-select/uni-data-select'),
            ]).then(s.bind(null, '1b47'))
          },
          uniEasyinput: function () {
            return Promise.all([
              s.e('common/vendor'),
              s.e('components/uni-easyinput/uni-easyinput'),
            ]).then(s.bind(null, '4a17'))
          },
        },
        a = function () {
          var e = this,
            t = e.$createElement,
            s = (e._self._c, e.is_view()),
            o = s
              ? e.$check_field('get', 'merchant_users') ||
                e.$check_field('add', 'merchant_users') ||
                e.$check_field('set', 'merchant_users')
              : null,
            a =
              s && o
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'merchant_users')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'merchant_users'))
                : null,
            n = s && o && !a ? e.$check_field('get', 'merchant_users') : null,
            i = s
              ? e.$check_field('get', 'merchant_name') ||
                e.$check_field('add', 'merchant_name') ||
                e.$check_field('set', 'merchant_name')
              : null,
            r =
              s && i
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'merchant_name')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'merchant_name'))
                : null,
            m = s && i && !r ? e.$check_field('get', 'merchant_name') : null,
            _ = s
              ? e.$check_field('get', 'homestay_name') ||
                e.$check_field('add', 'homestay_name') ||
                e.$check_field('set', 'homestay_name')
              : null,
            l =
              s && _
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'homestay_name')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'homestay_name'))
                : null,
            h = s && _ && !l ? e.$check_field('get', 'homestay_name') : null,
            c = s
              ? e.$check_field('get', 'homestay_id') ||
                e.$check_field('add', 'homestay_id') ||
                e.$check_field('set', 'homestay_id')
              : null,
            u =
              s && c
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'homestay_id')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'homestay_id'))
                : null,
            d = s && c && !u ? e.$check_field('get', 'homestay_id') : null,
            f = s
              ? e.$check_field('get', 'homestay_telephone_number') ||
                e.$check_field('add', 'homestay_telephone_number') ||
                e.$check_field('set', 'homestay_telephone_number')
              : null,
            y =
              s && f
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'homestay_telephone_number')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'homestay_telephone_number'))
                : null,
            p =
              s && f && !y
                ? e.$check_field('get', 'homestay_telephone_number')
                : null,
            g = s
              ? e.$check_field('get', 'homestay_pictures') ||
                e.$check_field('add', 'homestay_pictures') ||
                e.$check_field('set', 'homestay_pictures')
              : null,
            b =
              s && g
                ? e.form['homestay_pictures'] &&
                  e.$check_field('set', 'homestay_pictures')
                : null,
            k =
              s && g && b && e.disabledObj['homestay_pictures_isDisabled']
                ? e.$fullUrl(e.form['homestay_pictures'])
                : null,
            $ =
              s && g && b && !e.disabledObj['homestay_pictures_isDisabled']
                ? e.$fullUrl(e.form['homestay_pictures'])
                : null,
            v =
              s && g && !b
                ? !e.form['homestay_pictures'] &&
                  e.$check_field('add', 'homestay_pictures')
                : null,
            j =
              s && g && !b && !v
                ? e.$check_field('get', 'homestay_pictures')
                : null,
            w =
              s && g && !b && !v && j
                ? e.$fullUrl(e.form['homestay_pictures'])
                : null,
            x = s
              ? e.$check_field('get', 'homestay_prices') ||
                e.$check_field('add', 'homestay_prices') ||
                e.$check_field('set', 'homestay_prices')
              : null,
            D =
              s && x
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'homestay_prices')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'homestay_prices'))
                : null,
            P = s && x && !D ? e.$check_field('get', 'homestay_prices') : null,
            O = s
              ? e.$check_field('get', 'booking_amount') ||
                e.$check_field('add', 'booking_amount') ||
                e.$check_field('set', 'booking_amount')
              : null,
            F =
              s && O
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'booking_amount')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'booking_amount'))
                : null,
            S = s && O && !F ? e.$check_field('get', 'booking_amount') : null,
            U = s
              ? e.$check_field('get', 'homestay_address') ||
                e.$check_field('add', 'homestay_address') ||
                e.$check_field('set', 'homestay_address')
              : null,
            I =
              s && U
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'homestay_address')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'homestay_address'))
                : null,
            T = s && U && !I ? e.$check_field('get', 'homestay_address') : null,
            J = s
              ? e.$check_field('get', 'homestay_details') ||
                e.$check_field('add', 'homestay_details') ||
                e.$check_field('set', 'homestay_details')
              : null,
            N =
              s && J
                ? '管理员' === e.user_group ||
                  (e.form['homestay_information_id'] &&
                    e.$check_field('set', 'homestay_details')) ||
                  (!e.form['homestay_information_id'] &&
                    e.$check_field('add', 'homestay_details'))
                : null,
            z = s && J && !N ? e.$check_field('get', 'homestay_details') : null,
            B =
              e.$check_action('/homestay_information/view', 'set') ||
              e.$check_action('/homestay_information/view', 'add') ||
              e.$check_option('/homestay_information/table', 'examine')
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: s,
                m1: o,
                m2: a,
                m3: n,
                m4: i,
                m5: r,
                m6: m,
                m7: _,
                m8: l,
                m9: h,
                m10: c,
                m11: u,
                m12: d,
                m13: f,
                m14: y,
                m15: p,
                m16: g,
                m17: b,
                m18: k,
                m19: $,
                m20: v,
                m21: j,
                m22: w,
                m23: x,
                m24: D,
                m25: P,
                m26: O,
                m27: F,
                m28: S,
                m29: U,
                m30: I,
                m31: T,
                m32: J,
                m33: N,
                m34: z,
                m35: B,
              },
            }
          )
        },
        n = []
    },
    ad2f: function (e, t, s) {
      'use strict'
      s.r(t)
      var o = s('0e47'),
        a = s.n(o)
      for (var n in o)
        ['default'].indexOf(n) < 0 &&
          (function (e) {
            s.d(t, e, function () {
              return o[e]
            })
          })(n)
      t['default'] = a.a
    },
    b805: function (e, t, s) {},
    f838: function (e, t, s) {
      'use strict'
      var o = s('b805'),
        a = s.n(o)
      a.a
    },
  },
  [['1a18', 'common/runtime', 'common/vendor']],
])
