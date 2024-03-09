;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/hotel_orders/view'],
  {
    '3ce8': function (e, t, o) {
      'use strict'
      var r = o('597e'),
        s = o.n(r)
      s.a
    },
    '4a62': function (e, t, o) {
      'use strict'
      o.r(t)
      var r = o('5733'),
        s = o('e77a')
      for (var _ in s)
        ['default'].indexOf(_) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return s[e]
            })
          })(_)
      o('3ce8')
      var l = o('f0c5'),
        n = Object(l['a'])(
          s['default'],
          r['b'],
          r['c'],
          !1,
          null,
          '177ce458',
          null,
          !1,
          r['a'],
          void 0
        )
      t['default'] = n.exports
    },
    5733: function (e, t, o) {
      'use strict'
      o.d(t, 'b', function () {
        return s
      }),
        o.d(t, 'c', function () {
          return _
        }),
        o.d(t, 'a', function () {
          return r
        })
      var r = {
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
          uniDatetimePicker: function () {
            return Promise.all([
              o.e('common/vendor'),
              o.e('components/uni-datetime-picker/uni-datetime-picker'),
            ]).then(o.bind(null, '2626'))
          },
        },
        s = function () {
          var e = this,
            t = e.$createElement,
            o = (e._self._c, e.is_view()),
            r = o
              ? e.$check_field('get', 'regular_users') ||
                e.$check_field('add', 'regular_users') ||
                e.$check_field('set', 'regular_users')
              : null,
            s =
              o && r
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'regular_users')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'regular_users'))
                : null,
            _ = o && r && !s ? e.$check_field('get', 'regular_users') : null,
            l = o
              ? e.$check_field('get', 'user_name') ||
                e.$check_field('add', 'user_name') ||
                e.$check_field('set', 'user_name')
              : null,
            n =
              o && l
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'user_name')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'user_name'))
                : null,
            a = o && l && !n ? e.$check_field('get', 'user_name') : null,
            i = o
              ? e.$check_field('get', 'mobile_phone_number') ||
                e.$check_field('add', 'mobile_phone_number') ||
                e.$check_field('set', 'mobile_phone_number')
              : null,
            u =
              o && i
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'mobile_phone_number')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'mobile_phone_number'))
                : null,
            h =
              o && i && !u
                ? e.$check_field('get', 'mobile_phone_number')
                : null,
            m = o
              ? e.$check_field('get', 'merchant_users') ||
                e.$check_field('add', 'merchant_users') ||
                e.$check_field('set', 'merchant_users')
              : null,
            c =
              o && m
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'merchant_users')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'merchant_users'))
                : null,
            f = o && m && !c ? e.$check_field('get', 'merchant_users') : null,
            d = o
              ? e.$check_field('get', 'merchant_name') ||
                e.$check_field('add', 'merchant_name') ||
                e.$check_field('set', 'merchant_name')
              : null,
            g =
              o && d
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'merchant_name')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'merchant_name'))
                : null,
            p = o && d && !g ? e.$check_field('get', 'merchant_name') : null,
            y = o
              ? e.$check_field('get', 'hotel_name') ||
                e.$check_field('add', 'hotel_name') ||
                e.$check_field('set', 'hotel_name')
              : null,
            k =
              o && y
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'hotel_name')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'hotel_name'))
                : null,
            b = o && y && !k ? e.$check_field('get', 'hotel_name') : null,
            $ = o
              ? e.$check_field('get', 'room_type') ||
                e.$check_field('add', 'room_type') ||
                e.$check_field('set', 'room_type')
              : null,
            v =
              o && $
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'room_type')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'room_type'))
                : null,
            x = o && $ && !v ? e.$check_field('get', 'room_type') : null,
            w = o
              ? e.$check_field('get', 'one_night_amount') ||
                e.$check_field('add', 'one_night_amount') ||
                e.$check_field('set', 'one_night_amount')
              : null,
            j =
              o && w
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'one_night_amount')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'one_night_amount'))
                : null,
            D = o && w && !j ? e.$check_field('get', 'one_night_amount') : null,
            F = o
              ? e.$check_field('get', 'days_of_stay') ||
                e.$check_field('add', 'days_of_stay') ||
                e.$check_field('set', 'days_of_stay')
              : null,
            P =
              o && F
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'days_of_stay')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'days_of_stay'))
                : null,
            O = o && F && !P ? e.$check_field('get', 'days_of_stay') : null,
            S = o
              ? e.$check_field('get', 'total_hotel_stay') ||
                e.$check_field('add', 'total_hotel_stay') ||
                e.$check_field('set', 'total_hotel_stay')
              : null,
            T =
              o && S
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'total_hotel_stay')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'total_hotel_stay'))
                : null,
            I = o && S && !T ? e.$check_field('get', 'total_hotel_stay') : null,
            M = o
              ? e.$check_field('get', 'booking_amount') ||
                e.$check_field('add', 'booking_amount') ||
                e.$check_field('set', 'booking_amount')
              : null,
            J =
              o && M
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'booking_amount')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'booking_amount'))
                : null,
            N = o && M && !J ? e.$check_field('get', 'booking_amount') : null,
            U = o
              ? e.$check_field('get', 'time_of_stay') ||
                e.$check_field('add', 'time_of_stay') ||
                e.$check_field('set', 'time_of_stay')
              : null,
            z =
              o && U
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'time_of_stay')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'time_of_stay'))
                : null,
            B = o && U && !z ? e.$check_field('get', 'time_of_stay') : null,
            E = o
              ? e.$check_field('get', 'hotel_remarks') ||
                e.$check_field('add', 'hotel_remarks') ||
                e.$check_field('set', 'hotel_remarks')
              : null,
            C =
              o && E
                ? '管理员' === e.user_group ||
                  (e.form['hotel_orders_id'] &&
                    e.$check_field('set', 'hotel_remarks')) ||
                  (!e.form['hotel_orders_id'] &&
                    e.$check_field('add', 'hotel_remarks'))
                : null,
            q = o && E && !C ? e.$check_field('get', 'hotel_remarks') : null,
            L =
              e.$check_action('/hotel_orders/view', 'set') ||
              e.$check_action('/hotel_orders/view', 'add') ||
              e.$check_option('/hotel_orders/table', 'examine')
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: o,
                m1: r,
                m2: s,
                m3: _,
                m4: l,
                m5: n,
                m6: a,
                m7: i,
                m8: u,
                m9: h,
                m10: m,
                m11: c,
                m12: f,
                m13: d,
                m14: g,
                m15: p,
                m16: y,
                m17: k,
                m18: b,
                m19: $,
                m20: v,
                m21: x,
                m22: w,
                m23: j,
                m24: D,
                m25: F,
                m26: P,
                m27: O,
                m28: S,
                m29: T,
                m30: I,
                m31: M,
                m32: J,
                m33: N,
                m34: U,
                m35: z,
                m36: B,
                m37: E,
                m38: C,
                m39: q,
                m40: L,
              },
            }
          )
        },
        _ = []
    },
    '597e': function (e, t, o) {},
    '95a0': function (e, t, o) {
      'use strict'
      ;(function (e, t) {
        var r = o('4ea4')
        o('e411')
        r(o('66fd'))
        var s = r(o('4a62'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = o), t(s.default)
      }).call(this, o('bc2e')['default'], o('543d')['createPage'])
    },
    bfa6: function (e, t, o) {
      'use strict'
      ;(function (e, r) {
        var s = o('4ea4')
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = void 0)
        var _ = s(o('2eee')),
          l = s(o('c973')),
          n = s(o('813d')),
          a = {
            mixins: [n.default],
            data: function () {
              return {
                field: 'hotel_orders_id',
                url_add: '~/api/hotel_orders/add?',
                url_set: '~/api/hotel_orders/set?',
                url_get_obj: '~/api/hotel_orders/get_obj?',
                url_upload: '~/api/hotel_orders/upload?',
                regular_users: null,
                user_name: null,
                mobile_phone_number: null,
                merchant_users: null,
                merchant_name: null,
                hotel_name: null,
                room_type: null,
                one_night_amount: null,
                days_of_stay: null,
                total_hotel_stay: null,
                booking_amount: null,
                final_payment_for_hotel_stay: null,
                time_of_stay: null,
                hotel_remarks: null,
                query: { hotel_orders_id: 0 },
                form: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  hotel_name: '',
                  room_type: '',
                  one_night_amount: 0,
                  days_of_stay: 0,
                  total_hotel_stay: '',
                  booking_amount: 0,
                  final_payment_for_hotel_stay: '',
                  time_of_stay: this.$toTime(
                    new Date().getTime(),
                    'yyyy-MM-dd'
                  ),
                  hotel_remarks: '',
                  hotel_orders_id: 0,
                },
                disabledObj: {
                  regular_users_isDisabled: !1,
                  user_name_isDisabled: !1,
                  mobile_phone_number_isDisabled: !1,
                  merchant_users_isDisabled: !1,
                  merchant_name_isDisabled: !1,
                  hotel_name_isDisabled: !1,
                  room_type_isDisabled: !1,
                  total_hotel_stay_isDisabled: !1,
                  final_payment_for_hotel_stay_isDisabled: !1,
                  time_of_stay_isDisabled: !1,
                  hotel_remarks_isDisabled: !1,
                },
                list_user_regular_users: [],
                group_user_regular_users: '',
                list_user_merchant_users: [],
              }
            },
            methods: {
              submit_check: function (e) {
                return e.time_of_stay ? null : '住店时间不能为空'
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
                        var r = e.tempFilePaths
                        o.successChoose(r[0], t)
                      },
                    })
                  : r.chooseMessageFile({
                      count: 1,
                      success: function (e) {
                        var r = e.tempFiles
                        o.successChoose(r[0].path, t)
                      },
                    })
              },
              successChoose: function (t, o) {
                var r = this
                e.uploadFile({
                  url: getApp().globalData.host + '/api/hotel_orders/upload',
                  filePath: t,
                  name: 'file',
                  success: function (t) {
                    t.data.error
                      ? e.showToast({
                          title: t.data.error.message,
                          icon: 'none',
                        })
                      : (r[o] = JSON.parse(t.data).result.url)
                  },
                })
              },
              close_: function (e) {
                'regular_users' == e &&
                  (this['regular_users'] = this.form['regular_users'] = ''),
                  'user_name' == e &&
                    (this['user_name'] = this.form['user_name'] = ''),
                  'mobile_phone_number' == e &&
                    (this['mobile_phone_number'] = this.form[
                      'mobile_phone_number'
                    ] =
                      ''),
                  'merchant_users' == e &&
                    (this['merchant_users'] = this.form['merchant_users'] = ''),
                  'merchant_name' == e &&
                    (this['merchant_name'] = this.form['merchant_name'] = ''),
                  'hotel_name' == e &&
                    (this['hotel_name'] = this.form['hotel_name'] = ''),
                  'room_type' == e &&
                    (this['room_type'] = this.form['room_type'] = ''),
                  'one_night_amount' == e &&
                    (this['one_night_amount'] = this.form['one_night_amount'] =
                      ''),
                  'days_of_stay' == e &&
                    (this['days_of_stay'] = this.form['days_of_stay'] = ''),
                  'total_hotel_stay' == e &&
                    (this['total_hotel_stay'] = this.form['total_hotel_stay'] =
                      ''),
                  'booking_amount' == e &&
                    (this['booking_amount'] = this.form['booking_amount'] = ''),
                  'final_payment_for_hotel_stay' == e &&
                    (this['final_payment_for_hotel_stay'] = this.form[
                      'final_payment_for_hotel_stay'
                    ] =
                      ''),
                  'time_of_stay' == e &&
                    (this['time_of_stay'] = this.form['time_of_stay'] = ''),
                  'hotel_remarks' == e &&
                    (this['hotel_remarks'] = this.form['hotel_remarks'] = '')
              },
              submit_: function () {
                null !== this['regular_users'] &&
                  (this.form['regular_users'] = this['regular_users']),
                  null !== this['user_name'] &&
                    (this.form['user_name'] = this['user_name']),
                  null !== this['mobile_phone_number'] &&
                    (this.form['mobile_phone_number'] =
                      this['mobile_phone_number']),
                  null !== this['merchant_users'] &&
                    (this.form['merchant_users'] = this['merchant_users']),
                  null !== this['merchant_name'] &&
                    (this.form['merchant_name'] = this['merchant_name']),
                  null !== this['hotel_name'] &&
                    (this.form['hotel_name'] = this['hotel_name']),
                  null !== this['room_type'] &&
                    (this.form['room_type'] = this['room_type']),
                  null !== this['one_night_amount'] &&
                    (this.form['one_night_amount'] = this['one_night_amount']),
                  null !== this['days_of_stay'] &&
                    (this.form['days_of_stay'] = this['days_of_stay']),
                  null !== this['total_hotel_stay'] &&
                    (this.form['total_hotel_stay'] = this['total_hotel_stay']),
                  null !== this['booking_amount'] &&
                    (this.form['booking_amount'] = this['booking_amount']),
                  null !== this['final_payment_for_hotel_stay'] &&
                    (this.form['final_payment_for_hotel_stay'] =
                      this['final_payment_for_hotel_stay']),
                  null !== this['time_of_stay'] &&
                    (this.form['time_of_stay'] = this['time_of_stay']),
                  null !== this['hotel_remarks'] &&
                    (this.form['hotel_remarks'] = this['hotel_remarks']),
                  console.log(this.form),
                  this.submit()
              },
              change_file: function (t) {
                var o = this
                e.chooseFile({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (r) {
                    var s = r.tempFilePaths,
                      _ = e.uploadFile({
                        url: o.$fullUrl('/api/hotel_orders/upload?'),
                        filePath: s[0],
                        name: 'file',
                        formData: { i_want_to_customize: 'test' },
                        header: { 'x-auth-token': o.$store.state.user.token },
                        success: function (e) {
                          var r = JSON.parse(e.data).result.url
                          o.form[t] = r
                        },
                      })
                    _.onProgressUpdate(function (e) {
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
                    success: function (r) {
                      var s = r.tempFilePaths,
                        _ = e.uploadFile({
                          url: o.$fullUrl('/api/hotel_orders/upload?'),
                          filePath: s[0],
                          name: 'file',
                          formData: { i_want_to_customize: 'test' },
                          header: { 'x-auth-token': o.$store.state.user.token },
                          success: function (e) {
                            var r = JSON.parse(e.data).result.url
                            o.form[t] = r
                          },
                        })
                      _.onProgressUpdate(function (e) {
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
                var r = []
                for (var s in o) r.push(s)
                for (var _ = 0; _ < r.length; _++)
                  this.disabledObj[r[_] + '_isDisabled'] = !0
                return (
                  this.form['time_of_stay'] &&
                    -1 ===
                      JSON.stringify(this.form['time_of_stay']).indexOf('-') &&
                    (this.form['time_of_stay'] = this.$toTime(
                      parseInt(this.form['time_of_stay']),
                      'yyyy-MM-dd'
                    )),
                  e.db.del('form'),
                  t
                )
              },
              get_list_user_regular_users: function () {
                var e = this
                return (0, l.default)(
                  _.default.mark(function t() {
                    var o
                    return _.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.$get('~/api/user/get_list?user_group=普通用户')
                            )
                          case 2:
                            ;(o = t.sent),
                              o.result && o.result.list
                                ? o.result.list.map(function (t) {
                                    return e.list_user_regular_users.push({
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
              get_group_user_regular_users: function () {
                var e = this
                return (0, l.default)(
                  _.default.mark(function t() {
                    var o
                    return _.default.wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.form['regular_users'] = e.user.user_id),
                              (t.next = 3),
                              e.$get('~/api/user_group/get_obj?name=普通用户')
                            )
                          case 3:
                            ;(o = t.sent),
                              o.result && o.result.obj
                                ? ((e.group_user_regular_users = o.result.obj),
                                  e.get_user_session_regular_users(
                                    e.form['regular_users']
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
              get_user_session_regular_users: function (e) {
                var t = this,
                  o = { user_id: e },
                  r =
                    '~/api/' +
                    t.group_user_regular_users.source_table +
                    '/get_obj?'
                this.$get(r, o, function (o) {
                  if (o.result && o.result.obj) {
                    var r = []
                    for (var s in o.result.obj) r.push(s)
                    var _ = []
                    for (var l in t.form) _.push(l)
                    ;(t.form['regular_users'] = e),
                      (t.disabledObj['regular_users_isDisabled'] = !0)
                    for (var n = 0; n < r.length; n++)
                      if ('examine_state' !== r[n] && 'examine_reply' !== r[n])
                        for (var a = 0; a < _.length; a++)
                          if (r[n] === _[a]) {
                            if ('regular_users' !== r[n]) {
                              ;(t.form[_[a]] = o.result.obj[r[n]]),
                                (t.disabledObj[_[a] + '_isDisabled'] = !0)
                              break
                            }
                            t.disabledObj[_[a] + '_isDisabled'] = !0
                          }
                  }
                })
              },
              get_list_user_merchant_users: function () {
                var e = this
                return (0, l.default)(
                  _.default.mark(function t() {
                    var o
                    return _.default.wrap(function (t) {
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
              set_total_hotel_stay: function () {
                this.form.total_hotel_stay =
                  parseFloat(this.form.one_night_amount) *
                  parseFloat(this.form.days_of_stay)
                ;/^\+?[1-9][0-9]*$/.test(this.form.total_hotel_stay) ||
                  (this.form.total_hotel_stay =
                    this.form.total_hotel_stay.toFixed(2))
              },
              set_final_payment_for_hotel_stay: function () {
                this.form.final_payment_for_hotel_stay =
                  parseFloat(this.form.one_night_amount) *
                    parseFloat(this.form.days_of_stay) -
                  parseFloat(this.form.booking_amount)
                ;/^\+?[1-9][0-9]*$/.test(
                  this.form.final_payment_for_hotel_stay
                ) ||
                  (this.form.final_payment_for_hotel_stay =
                    this.form.final_payment_for_hotel_stay.toFixed(2))
              },
              get_obj_after: function (e, t) {
                this.form['time_of_stay'] &&
                  -1 ===
                    JSON.stringify(this.form['time_of_stay']).indexOf('-') &&
                  (this.form['time_of_stay'] = this.$toTime(
                    parseInt(this.form['time_of_stay']),
                    'yyyy-MM-dd'
                  ))
              },
              is_view: function () {
                var e = '管理员' == this.user_group
                return (
                  e ||
                    ((e = this.$check_action('/hotel_orders/table', 'add')),
                    console.log(
                      e
                        ? '你有表格添加权限视作有添加权限'
                        : '你没有表格添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/hotel_orders/table', 'set')),
                    console.log(
                      e
                        ? '你有表格添加权限视作有修改权限'
                        : '你没有表格修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/hotel_orders/view', 'add')),
                    console.log(
                      e
                        ? '你有视图添加权限视作有添加权限'
                        : '你没有视图添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/hotel_orders/view', 'set')),
                    console.log(
                      e
                        ? '你有视图修改权限视作有修改权限'
                        : '你没有视图修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/hotel_orders/view', 'get')),
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
              this.get_list_user_regular_users(),
                this.get_group_user_regular_users(),
                this.get_list_user_merchant_users()
            },
          }
        t.default = a
      }).call(this, o('543d')['default'], o('bc2e')['default'])
    },
    e77a: function (e, t, o) {
      'use strict'
      o.r(t)
      var r = o('bfa6'),
        s = o.n(r)
      for (var _ in r)
        ['default'].indexOf(_) < 0 &&
          (function (e) {
            o.d(t, e, function () {
              return r[e]
            })
          })(_)
      t['default'] = s.a
    },
  },
  [['95a0', 'common/runtime', 'common/vendor']],
])
