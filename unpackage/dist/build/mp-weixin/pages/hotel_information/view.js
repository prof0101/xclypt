;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/hotel_information/view'],
  {
    '3bfc': function (e, t, o) {
      'use strict'
      ;(function (e, t) {
        var n = o('4ea4')
        o('e411')
        n(o('66fd'))
        var i = n(o('a360'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = o), t(i.default)
      }).call(this, o('bc2e')['default'], o('543d')['createPage'])
    },
    '6e6e': function (e, t, o) {
      'use strict'
      ;(function (e, n) {
        var i = o('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var r = i(o('2eee')),
          l = i(o('c973')),
          s = i(o('813d')),
          _ = {
            mixins: [s.default],
            data: function () {
              return {
                field: 'hotel_information_id',
                url_add: '~/api/hotel_information/add?',
                url_set: '~/api/hotel_information/set?',
                url_get_obj: '~/api/hotel_information/get_obj?',
                url_upload: '~/api/hotel_information/upload?',
                merchant_users: null,
                merchant_name: null,
                hotel_name: null,
                hotel_pictures: null,
                hotel_star_rating: null,
                hotel_category: null,
                room_type: null,
                one_night_amount: null,
                booking_amount: null,
                hotel_phone_number: null,
                hotel_introduction: null,
                hotel_address: null,
                query: { hotel_information_id: 0 },
                form: {
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
                  hotel_information_id: 0,
                },
                disabledObj: {
                  merchant_users_isDisabled: !1,
                  merchant_name_isDisabled: !1,
                  hotel_name_isDisabled: !1,
                  hotel_pictures_isDisabled: !1,
                  hotel_star_rating_isDisabled: !1,
                  hotel_category_isDisabled: !1,
                  room_type_isDisabled: !1,
                  hotel_phone_number_isDisabled: !1,
                  hotel_introduction_isDisabled: !1,
                  hotel_address_isDisabled: !1,
                },
                list_user_merchant_users: [],
                group_user_merchant_users: '',
                list_hotel_star_rating: [],
              }
            },
            methods: {
              submit_check: function (e) {
                return e.hotel_phone_number &&
                  !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
                    e.hotel_phone_number
                  )
                  ? '手机号格式错误'
                  : null
              },
              changeLog: function (e, t) {
                this.form[t] = e
              },
              uploadFile_: function (t) {
                var o = this
                'mp-weixin' != e.getSystemInfoSync().uniPlatform ||
                'devtools' == e.getSystemInfoSync().platform
                  ? e.chooseImage({
                      count: 1,
                      success: function (e) {
                        var n = e.tempFilePaths
                        o.successChoose(n[0], t)
                      },
                    })
                  : n.chooseMessageFile({
                      count: 1,
                      success: function (e) {
                        var n = e.tempFiles
                        o.successChoose(n[0].path, t)
                      },
                    })
              },
              successChoose: function (t, o) {
                var n = this
                e.uploadFile({
                  url:
                    getApp().globalData.host + '/api/hotel_information/upload',
                  filePath: t,
                  name: 'file',
                  success: function (t) {
                    t.data.error
                      ? e.showToast({
                          title: t.data.error.message,
                          icon: 'none',
                        })
                      : (n[o] = JSON.parse(t.data).result.url)
                  },
                })
              },
              close_: function (e) {
                'merchant_users' == e &&
                  (this['merchant_users'] = this.form['merchant_users'] = ''),
                  'merchant_name' == e &&
                    (this['merchant_name'] = this.form['merchant_name'] = ''),
                  'hotel_name' == e &&
                    (this['hotel_name'] = this.form['hotel_name'] = ''),
                  'hotel_pictures' == e &&
                    (this['hotel_pictures'] = this.form['hotel_pictures'] = ''),
                  'hotel_star_rating' == e &&
                    (this['hotel_star_rating'] = this.form[
                      'hotel_star_rating'
                    ] =
                      ''),
                  'hotel_category' == e &&
                    (this['hotel_category'] = this.form['hotel_category'] = ''),
                  'room_type' == e &&
                    (this['room_type'] = this.form['room_type'] = ''),
                  'one_night_amount' == e &&
                    (this['one_night_amount'] = this.form['one_night_amount'] =
                      ''),
                  'booking_amount' == e &&
                    (this['booking_amount'] = this.form['booking_amount'] = ''),
                  'hotel_phone_number' == e &&
                    (this['hotel_phone_number'] = this.form[
                      'hotel_phone_number'
                    ] =
                      ''),
                  'hotel_introduction' == e &&
                    (this['hotel_introduction'] = this.form[
                      'hotel_introduction'
                    ] =
                      ''),
                  'hotel_address' == e &&
                    (this['hotel_address'] = this.form['hotel_address'] = '')
              },
              submit_: function () {
                null !== this['merchant_users'] &&
                  (this.form['merchant_users'] = this['merchant_users']),
                  null !== this['merchant_name'] &&
                    (this.form['merchant_name'] = this['merchant_name']),
                  null !== this['hotel_name'] &&
                    (this.form['hotel_name'] = this['hotel_name']),
                  null !== this['hotel_pictures'] &&
                    (this.form['hotel_pictures'] = this['hotel_pictures']),
                  null !== this['hotel_star_rating'] &&
                    (this.form['hotel_star_rating'] =
                      this['hotel_star_rating']),
                  null !== this['hotel_category'] &&
                    (this.form['hotel_category'] = this['hotel_category']),
                  null !== this['room_type'] &&
                    (this.form['room_type'] = this['room_type']),
                  null !== this['one_night_amount'] &&
                    (this.form['one_night_amount'] = this['one_night_amount']),
                  null !== this['booking_amount'] &&
                    (this.form['booking_amount'] = this['booking_amount']),
                  null !== this['hotel_phone_number'] &&
                    (this.form['hotel_phone_number'] =
                      this['hotel_phone_number']),
                  null !== this['hotel_introduction'] &&
                    (this.form['hotel_introduction'] =
                      this['hotel_introduction']),
                  null !== this['hotel_address'] &&
                    (this.form['hotel_address'] = this['hotel_address']),
                  console.log(this.form),
                  this.submit()
              },
              change_file: function (t) {
                var o = this
                e.chooseFile({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (n) {
                    var i = n.tempFilePaths,
                      r = e.uploadFile({
                        url: o.$fullUrl('/api/hotel_information/upload?'),
                        filePath: i[0],
                        name: 'file',
                        formData: { i_want_to_customize: 'test' },
                        header: { 'x-auth-token': o.$store.state.user.token },
                        success: function (e) {
                          var n = JSON.parse(e.data).result.url
                          o.form[t] = n
                        },
                      })
                    r.onProgressUpdate(function (e) {
                      ;(o.percent = e.progress),
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
                var o = this
                ;(o.upload_img_flag = !1),
                  e.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success: function (n) {
                      var i = n.tempFilePaths,
                        r = e.uploadFile({
                          url: o.$fullUrl('/api/hotel_information/upload?'),
                          filePath: i[0],
                          name: 'file',
                          formData: { i_want_to_customize: 'test' },
                          header: { 'x-auth-token': o.$store.state.user.token },
                          success: function (e) {
                            var n = JSON.parse(e.data).result.url
                            o.form[t] = n
                          },
                        })
                      r.onProgressUpdate(function (e) {
                        ;(o.percent = e.progress),
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
                var o = e.db.get('form')
                o &&
                  (delete o.examine_state,
                  delete o.examine_reply,
                  (this.obj = e.push(this.obj, o)),
                  (this.form = e.push(this.form, o)))
                var n = []
                for (var i in o) n.push(i)
                for (var r = 0; r < n.length; r++)
                  this.disabledObj[n[r] + '_isDisabled'] = !0
                return e.db.del('form'), t
              },
              get_list_user_merchant_users: function () {
                var e = this
                return (0, l.default)(
                  r.default.mark(function t() {
                    var o
                    return r.default.wrap(function (t) {
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
                                ? o.result.list.map(function (t) {
                                    return e.list_user_merchant_users.push({
                                      value: t.user_id,
                                      text: t.nickname + '-' + t.username,
                                    })
                                  })
                                : o.error && console.error(o.error)
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
                return (0, l.default)(
                  r.default.mark(function t() {
                    var o
                    return r.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.form['merchant_users'] = e.user.user_id),
                              (t.next = 3),
                              e.$get('~/api/user_group/get_obj?name=商家用户')
                            )
                          case 3:
                            ;(o = t.sent),
                              o.result && o.result.obj
                                ? ((e.group_user_merchant_users = o.result.obj),
                                  e.get_user_session_merchant_users(
                                    e.form['merchant_users']
                                  ))
                                : o.error && console.error(o.error)
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
                  o = { user_id: e },
                  n =
                    '~/api/' +
                    t.group_user_merchant_users.source_table +
                    '/get_obj?'
                this.$get(n, o, function (o) {
                  if (o.result && o.result.obj) {
                    var n = []
                    for (var i in o.result.obj) n.push(i)
                    var r = []
                    for (var l in t.form) r.push(l)
                    ;(t.form['merchant_users'] = e),
                      (t.disabledObj['merchant_users_isDisabled'] = !0)
                    for (var s = 0; s < n.length; s++)
                      if ('examine_state' !== n[s] && 'examine_reply' !== n[s])
                        for (var _ = 0; _ < r.length; _++)
                          if (n[s] === r[_]) {
                            if ('merchant_users' !== n[s]) {
                              ;(t.form[r[_]] = o.result.obj[n[s]]),
                                (t.disabledObj[r[_] + '_isDisabled'] = !0)
                              break
                            }
                            t.disabledObj[r[_] + '_isDisabled'] = !0
                          }
                  }
                })
              },
              get_list_hotel_star_rating: function () {
                var e = this
                return (0, l.default)(
                  r.default.mark(function t() {
                    return r.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            ;['五星级', '四星级'].map(function (t) {
                              return e.list_hotel_star_rating.push({
                                value: t,
                                text: t,
                              })
                            })
                          case 1:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              get_obj_after: function (e, t) {},
              is_view: function () {
                var e = '管理员' == this.user_group
                return (
                  e ||
                    ((e = this.$check_action(
                      '/hotel_information/table',
                      'add'
                    )),
                    console.log(
                      e
                        ? '你有表格添加权限视作有添加权限'
                        : '你没有表格添加权限'
                    )),
                  e ||
                    ((e = this.$check_action(
                      '/hotel_information/table',
                      'set'
                    )),
                    console.log(
                      e
                        ? '你有表格添加权限视作有修改权限'
                        : '你没有表格修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/hotel_information/view', 'add')),
                    console.log(
                      e
                        ? '你有视图添加权限视作有添加权限'
                        : '你没有视图添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/hotel_information/view', 'set')),
                    console.log(
                      e
                        ? '你有视图修改权限视作有修改权限'
                        : '你没有视图修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/hotel_information/view', 'get')),
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
                this.get_group_user_merchant_users(),
                this.get_list_hotel_star_rating()
            },
          }
        t.default = _
      }).call(this, o('543d')['default'], o('bc2e')['default'])
    },
    '7f15': function (e, t, o) {
      'use strict'
      o.d(t, 'b', function () {
        return i
      }),
        o.d(t, 'c', function () {
          return r
        }),
        o.d(t, 'a', function () {
          return n
        })
      var n = {
          uniForms: function () {
            return Promise.all([
              o.e('common/vendor'),
              o.e('components/uni-forms/uni-forms'),
            ]).then(o.bind(null, '2a9e'))
          },
          uniFormsItem: function () {
            return o
              .e('components/uni-forms-item/uni-forms-item')
              .then(o.bind(null, '4423'))
          },
          uniDataSelect: function () {
            return Promise.all([
              o.e('common/vendor'),
              o.e('components/uni-data-select/uni-data-select'),
            ]).then(o.bind(null, '1b47'))
          },
          uniEasyinput: function () {
            return Promise.all([
              o.e('common/vendor'),
              o.e('components/uni-easyinput/uni-easyinput'),
            ]).then(o.bind(null, '4a17'))
          },
        },
        i = function () {
          var e = this,
            t = e.$createElement,
            o = (e._self._c, e.is_view()),
            n = o
              ? e.$check_field('get', 'merchant_users') ||
                e.$check_field('add', 'merchant_users') ||
                e.$check_field('set', 'merchant_users')
              : null,
            i =
              o && n
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'merchant_users')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'merchant_users'))
                : null,
            r = o && n && !i ? e.$check_field('get', 'merchant_users') : null,
            l = o
              ? e.$check_field('get', 'merchant_name') ||
                e.$check_field('add', 'merchant_name') ||
                e.$check_field('set', 'merchant_name')
              : null,
            s =
              o && l
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'merchant_name')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'merchant_name'))
                : null,
            _ = o && l && !s ? e.$check_field('get', 'merchant_name') : null,
            a = o
              ? e.$check_field('get', 'hotel_name') ||
                e.$check_field('add', 'hotel_name') ||
                e.$check_field('set', 'hotel_name')
              : null,
            h =
              o && a
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'hotel_name')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'hotel_name'))
                : null,
            c = o && a && !h ? e.$check_field('get', 'hotel_name') : null,
            u = o
              ? e.$check_field('get', 'hotel_pictures') ||
                e.$check_field('add', 'hotel_pictures') ||
                e.$check_field('set', 'hotel_pictures')
              : null,
            m =
              o && u
                ? e.form['hotel_pictures'] &&
                  e.$check_field('set', 'hotel_pictures')
                : null,
            d =
              o && u && m && e.disabledObj['hotel_pictures_isDisabled']
                ? e.$fullUrl(e.form['hotel_pictures'])
                : null,
            f =
              o && u && m && !e.disabledObj['hotel_pictures_isDisabled']
                ? e.$fullUrl(e.form['hotel_pictures'])
                : null,
            g =
              o && u && !m
                ? !e.form['hotel_pictures'] &&
                  e.$check_field('add', 'hotel_pictures')
                : null,
            p =
              o && u && !m && !g
                ? e.$check_field('get', 'hotel_pictures')
                : null,
            b =
              o && u && !m && !g && p
                ? e.$fullUrl(e.form['hotel_pictures'])
                : null,
            k = o
              ? e.$check_field('get', 'hotel_star_rating') ||
                e.$check_field('add', 'hotel_star_rating') ||
                e.$check_field('set', 'hotel_star_rating')
              : null,
            $ =
              o && k
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'hotel_star_rating')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'hotel_star_rating'))
                : null,
            v =
              o && k && !$ ? e.$check_field('get', 'hotel_star_rating') : null,
            y = o
              ? e.$check_field('get', 'hotel_category') ||
                e.$check_field('add', 'hotel_category') ||
                e.$check_field('set', 'hotel_category')
              : null,
            w =
              o && y
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'hotel_category')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'hotel_category'))
                : null,
            j = o && y && !w ? e.$check_field('get', 'hotel_category') : null,
            x = o
              ? e.$check_field('get', 'room_type') ||
                e.$check_field('add', 'room_type') ||
                e.$check_field('set', 'room_type')
              : null,
            D =
              o && x
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'room_type')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'room_type'))
                : null,
            P = o && x && !D ? e.$check_field('get', 'room_type') : null,
            O = o
              ? e.$check_field('get', 'one_night_amount') ||
                e.$check_field('add', 'one_night_amount') ||
                e.$check_field('set', 'one_night_amount')
              : null,
            F =
              o && O
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'one_night_amount')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'one_night_amount'))
                : null,
            S = o && O && !F ? e.$check_field('get', 'one_night_amount') : null,
            U = o
              ? e.$check_field('get', 'booking_amount') ||
                e.$check_field('add', 'booking_amount') ||
                e.$check_field('set', 'booking_amount')
              : null,
            I =
              o && U
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'booking_amount')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'booking_amount'))
                : null,
            T = o && U && !I ? e.$check_field('get', 'booking_amount') : null,
            J = o
              ? e.$check_field('get', 'hotel_phone_number') ||
                e.$check_field('add', 'hotel_phone_number') ||
                e.$check_field('set', 'hotel_phone_number')
              : null,
            N =
              o && J
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'hotel_phone_number')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'hotel_phone_number'))
                : null,
            z =
              o && J && !N ? e.$check_field('get', 'hotel_phone_number') : null,
            B = o
              ? e.$check_field('get', 'hotel_introduction') ||
                e.$check_field('add', 'hotel_introduction') ||
                e.$check_field('set', 'hotel_introduction')
              : null,
            E =
              o && B
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'hotel_introduction')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'hotel_introduction'))
                : null,
            C =
              o && B && !E ? e.$check_field('get', 'hotel_introduction') : null,
            M = o
              ? e.$check_field('get', 'hotel_address') ||
                e.$check_field('add', 'hotel_address') ||
                e.$check_field('set', 'hotel_address')
              : null,
            q =
              o && M
                ? '管理员' === e.user_group ||
                  (e.form['hotel_information_id'] &&
                    e.$check_field('set', 'hotel_address')) ||
                  (!e.form['hotel_information_id'] &&
                    e.$check_field('add', 'hotel_address'))
                : null,
            L = o && M && !q ? e.$check_field('get', 'hotel_address') : null,
            A =
              e.$check_action('/hotel_information/view', 'set') ||
              e.$check_action('/hotel_information/view', 'add') ||
              e.$check_option('/hotel_information/table', 'examine')
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: o,
                m1: n,
                m2: i,
                m3: r,
                m4: l,
                m5: s,
                m6: _,
                m7: a,
                m8: h,
                m9: c,
                m10: u,
                m11: m,
                m12: d,
                m13: f,
                m14: g,
                m15: p,
                m16: b,
                m17: k,
                m18: $,
                m19: v,
                m20: y,
                m21: w,
                m22: j,
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
                m36: E,
                m37: C,
                m38: M,
                m39: q,
                m40: L,
                m41: A,
              },
            }
          )
        },
        r = []
    },
    '9fa9': function (e, t, o) {
      'use strict'
      var n = o('b770'),
        i = o.n(n)
      i.a
    },
    a360: function (e, t, o) {
      'use strict'
      o.r(t)
      var n = o('7f15'),
        i = o('f2b5')
      for (var r in i)
        ['default'].indexOf(r) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return i[e]
            })
          })(r)
      o('9fa9')
      var l = o('f0c5'),
        s = Object(l['a'])(
          i['default'],
          n['b'],
          n['c'],
          !1,
          null,
          '3ce021e5',
          null,
          !1,
          n['a'],
          void 0
        )
      t['default'] = s.exports
    },
    b770: function (e, t, o) {},
    f2b5: function (e, t, o) {
      'use strict'
      o.r(t)
      var n = o('6e6e'),
        i = o.n(n)
      for (var r in n)
        ['default'].indexOf(r) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return n[e]
            })
          })(r)
      t['default'] = i.a
    },
  },
  [['3bfc', 'common/runtime', 'common/vendor']],
])
