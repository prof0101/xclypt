;(global['webpackJsonp'] = global['webpackJsonp'] || []).push([
  ['pages/homestay_orders/view'],
  {
    2654: function (e, o, t) {
      'use strict'
      ;(function (e, s) {
        var r = t('4ea4')
        Object.defineProperty(o, '__esModule', { value: !0 }),
          (o.default = void 0)
        var a = r(t('2eee')),
          i = r(t('c973')),
          m = r(t('813d')),
          n = {
            mixins: [m.default],
            data: function () {
              return {
                field: 'homestay_orders_id',
                url_add: '~/api/homestay_orders/add?',
                url_set: '~/api/homestay_orders/set?',
                url_get_obj: '~/api/homestay_orders/get_obj?',
                url_upload: '~/api/homestay_orders/upload?',
                regular_users: null,
                user_name: null,
                mobile_phone_number: null,
                merchant_users: null,
                merchant_name: null,
                homestay_name: null,
                homestay_id: null,
                homestay_prices: null,
                accommodation_days: null,
                total_accommodation_amount: null,
                booking_amount: null,
                final_payment_for_homestays: null,
                accommodation_time: null,
                homestay_address: null,
                order_remarks: null,
                query: { homestay_orders_id: 0 },
                form: {
                  regular_users: 0,
                  user_name: '',
                  mobile_phone_number: '',
                  merchant_users: 0,
                  merchant_name: '',
                  homestay_name: '',
                  homestay_id: '',
                  homestay_prices: 0,
                  accommodation_days: 0,
                  total_accommodation_amount: '',
                  booking_amount: 0,
                  accommodation_time: this.$toTime(
                    new Date().getTime(),
                    'yyyy-MM-dd'
                  ),
                  homestay_address: '',
                  order_remarks: '',
                  homestay_orders_id: 0,
                },
                disabledObj: {
                  regular_users_isDisabled: !1,
                  user_name_isDisabled: !1,
                  mobile_phone_number_isDisabled: !1,
                  merchant_users_isDisabled: !1,
                  merchant_name_isDisabled: !1,
                  homestay_name_isDisabled: !1,
                  homestay_id_isDisabled: !1,
                  total_accommodation_amount_isDisabled: !1,
                  final_payment_for_homestays_isDisabled: !1,
                  accommodation_time_isDisabled: !1,
                  homestay_address_isDisabled: !1,
                  order_remarks_isDisabled: !1,
                },
                list_user_regular_users: [],
                group_user_regular_users: '',
                list_user_merchant_users: [],
              }
            },
            methods: {
              submit_check: function (e) {
                return e.accommodation_time ? null : '住宿时间不能为空'
              },
              changeLog: function (e, o) {
                this.form[o] = e
              },
              uploadFile_: function (o) {
                var t = this
                'mp-weixin' != e.getSystemInfoSync().uniPlatform ||
                'devtools' == e.getSystemInfoSync().platform
                  ? e.chooseImage({
                      count: 1,
                      success: function (e) {
                        var s = e.tempFilePaths
                        t.successChoose(s[0], o)
                      },
                    })
                  : s.chooseMessageFile({
                      count: 1,
                      success: function (e) {
                        var s = e.tempFiles
                        t.successChoose(s[0].path, o)
                      },
                    })
              },
              successChoose: function (o, t) {
                var s = this
                e.uploadFile({
                  url: getApp().globalData.host + '/api/homestay_orders/upload',
                  filePath: o,
                  name: 'file',
                  success: function (o) {
                    o.data.error
                      ? e.showToast({
                          title: o.data.error.message,
                          icon: 'none',
                        })
                      : (s[t] = JSON.parse(o.data).result.url)
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
                  'homestay_name' == e &&
                    (this['homestay_name'] = this.form['homestay_name'] = ''),
                  'homestay_id' == e &&
                    (this['homestay_id'] = this.form['homestay_id'] = ''),
                  'homestay_prices' == e &&
                    (this['homestay_prices'] = this.form['homestay_prices'] =
                      ''),
                  'accommodation_days' == e &&
                    (this['accommodation_days'] = this.form[
                      'accommodation_days'
                    ] =
                      ''),
                  'total_accommodation_amount' == e &&
                    (this['total_accommodation_amount'] = this.form[
                      'total_accommodation_amount'
                    ] =
                      ''),
                  'booking_amount' == e &&
                    (this['booking_amount'] = this.form['booking_amount'] = ''),
                  'final_payment_for_homestays' == e &&
                    (this['final_payment_for_homestays'] = this.form[
                      'final_payment_for_homestays'
                    ] =
                      ''),
                  'accommodation_time' == e &&
                    (this['accommodation_time'] = this.form[
                      'accommodation_time'
                    ] =
                      ''),
                  'homestay_address' == e &&
                    (this['homestay_address'] = this.form['homestay_address'] =
                      ''),
                  'order_remarks' == e &&
                    (this['order_remarks'] = this.form['order_remarks'] = '')
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
                  null !== this['homestay_name'] &&
                    (this.form['homestay_name'] = this['homestay_name']),
                  null !== this['homestay_id'] &&
                    (this.form['homestay_id'] = this['homestay_id']),
                  null !== this['homestay_prices'] &&
                    (this.form['homestay_prices'] = this['homestay_prices']),
                  null !== this['accommodation_days'] &&
                    (this.form['accommodation_days'] =
                      this['accommodation_days']),
                  null !== this['total_accommodation_amount'] &&
                    (this.form['total_accommodation_amount'] =
                      this['total_accommodation_amount']),
                  null !== this['booking_amount'] &&
                    (this.form['booking_amount'] = this['booking_amount']),
                  null !== this['final_payment_for_homestays'] &&
                    (this.form['final_payment_for_homestays'] =
                      this['final_payment_for_homestays']),
                  null !== this['accommodation_time'] &&
                    (this.form['accommodation_time'] =
                      this['accommodation_time']),
                  null !== this['homestay_address'] &&
                    (this.form['homestay_address'] = this['homestay_address']),
                  null !== this['order_remarks'] &&
                    (this.form['order_remarks'] = this['order_remarks']),
                  console.log(this.form),
                  this.submit()
              },
              change_file: function (o) {
                var t = this
                e.chooseFile({
                  count: 1,
                  sizeType: ['original', 'compressed'],
                  sourceType: ['album'],
                  success: function (s) {
                    var r = s.tempFilePaths,
                      a = e.uploadFile({
                        url: t.$fullUrl('/api/homestay_orders/upload?'),
                        filePath: r[0],
                        name: 'file',
                        formData: { i_want_to_customize: 'test' },
                        header: { 'x-auth-token': t.$store.state.user.token },
                        success: function (e) {
                          var s = JSON.parse(e.data).result.url
                          t.form[o] = s
                        },
                      })
                    a.onProgressUpdate(function (e) {
                      ;(t.percent = e.progress),
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
              change_img: function (o) {
                var t = this
                ;(t.upload_img_flag = !1),
                  e.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success: function (s) {
                      var r = s.tempFilePaths,
                        a = e.uploadFile({
                          url: t.$fullUrl('/api/homestay_orders/upload?'),
                          filePath: r[0],
                          name: 'file',
                          formData: { i_want_to_customize: 'test' },
                          header: { 'x-auth-token': t.$store.state.user.token },
                          success: function (e) {
                            var s = JSON.parse(e.data).result.url
                            t.form[o] = s
                          },
                        })
                      a.onProgressUpdate(function (e) {
                        ;(t.percent = e.progress),
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
              get_obj_before: function (o) {
                var t = e.db.get('form')
                t &&
                  (delete t.examine_state,
                  delete t.examine_reply,
                  (this.obj = e.push(this.obj, t)),
                  (this.form = e.push(this.form, t)))
                var s = []
                for (var r in t) s.push(r)
                for (var a = 0; a < s.length; a++)
                  this.disabledObj[s[a] + '_isDisabled'] = !0
                return (
                  this.form['accommodation_time'] &&
                    -1 ===
                      JSON.stringify(this.form['accommodation_time']).indexOf(
                        '-'
                      ) &&
                    (this.form['accommodation_time'] = this.$toTime(
                      parseInt(this.form['accommodation_time']),
                      'yyyy-MM-dd'
                    )),
                  e.db.del('form'),
                  o
                )
              },
              get_list_user_regular_users: function () {
                var e = this
                return (0, i.default)(
                  a.default.mark(function o() {
                    var t
                    return a.default.wrap(function (o) {
                      while (1)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2),
                              e.$get('~/api/user/get_list?user_group=普通用户')
                            )
                          case 2:
                            ;(t = o.sent),
                              t.result && t.result.list
                                ? t.result.list.map(function (o) {
                                    return e.list_user_regular_users.push({
                                      value: o.user_id,
                                      text: o.nickname + '-' + o.username,
                                    })
                                  })
                                : t.error && console.error(t.error)
                          case 4:
                          case 'end':
                            return o.stop()
                        }
                    }, o)
                  })
                )()
              },
              get_group_user_regular_users: function () {
                var e = this
                return (0, i.default)(
                  a.default.mark(function o() {
                    var t
                    return a.default.wrap(function (o) {
                      while (1)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (e.form['regular_users'] = e.user.user_id),
                              (o.next = 3),
                              e.$get('~/api/user_group/get_obj?name=普通用户')
                            )
                          case 3:
                            ;(t = o.sent),
                              t.result && t.result.obj
                                ? ((e.group_user_regular_users = t.result.obj),
                                  e.get_user_session_regular_users(
                                    e.form['regular_users']
                                  ))
                                : t.error && console.error(t.error)
                          case 5:
                          case 'end':
                            return o.stop()
                        }
                    }, o)
                  })
                )()
              },
              get_user_session_regular_users: function (e) {
                var o = this,
                  t = { user_id: e },
                  s =
                    '~/api/' +
                    o.group_user_regular_users.source_table +
                    '/get_obj?'
                this.$get(s, t, function (t) {
                  if (t.result && t.result.obj) {
                    var s = []
                    for (var r in t.result.obj) s.push(r)
                    var a = []
                    for (var i in o.form) a.push(i)
                    ;(o.form['regular_users'] = e),
                      (o.disabledObj['regular_users_isDisabled'] = !0)
                    for (var m = 0; m < s.length; m++)
                      if ('examine_state' !== s[m] && 'examine_reply' !== s[m])
                        for (var n = 0; n < a.length; n++)
                          if (s[m] === a[n]) {
                            if ('regular_users' !== s[m]) {
                              ;(o.form[a[n]] = t.result.obj[s[m]]),
                                (o.disabledObj[a[n] + '_isDisabled'] = !0)
                              break
                            }
                            o.disabledObj[a[n] + '_isDisabled'] = !0
                          }
                  }
                })
              },
              get_list_user_merchant_users: function () {
                var e = this
                return (0, i.default)(
                  a.default.mark(function o() {
                    var t
                    return a.default.wrap(function (o) {
                      while (1)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2),
                              e.$get('~/api/user/get_list?user_group=商家用户')
                            )
                          case 2:
                            ;(t = o.sent),
                              t.result && t.result.list
                                ? t.result.list.map(function (o) {
                                    return e.list_user_merchant_users.push({
                                      value: o.user_id,
                                      text: o.nickname + '-' + o.username,
                                    })
                                  })
                                : t.error && console.error(t.error)
                          case 4:
                          case 'end':
                            return o.stop()
                        }
                    }, o)
                  })
                )()
              },
              set_total_accommodation_amount: function () {
                this.form.total_accommodation_amount =
                  parseFloat(this.form.homestay_prices) *
                  parseFloat(this.form.accommodation_days)
                ;/^\+?[1-9][0-9]*$/.test(
                  this.form.total_accommodation_amount
                ) ||
                  (this.form.total_accommodation_amount =
                    this.form.total_accommodation_amount.toFixed(2))
              },
              set_final_payment_for_homestays: function () {
                this.form.final_payment_for_homestays =
                  parseFloat(this.form.homestay_prices) *
                    parseFloat(this.form.accommodation_days) -
                  parseFloat(this.form.booking_amount)
                ;/^\+?[1-9][0-9]*$/.test(
                  this.form.final_payment_for_homestays
                ) ||
                  (this.form.final_payment_for_homestays =
                    this.form.final_payment_for_homestays.toFixed(2))
              },
              get_obj_after: function (e, o) {
                this.form['accommodation_time'] &&
                  -1 ===
                    JSON.stringify(this.form['accommodation_time']).indexOf(
                      '-'
                    ) &&
                  (this.form['accommodation_time'] = this.$toTime(
                    parseInt(this.form['accommodation_time']),
                    'yyyy-MM-dd'
                  ))
              },
              is_view: function () {
                var e = '管理员' == this.user_group
                return (
                  e ||
                    ((e = this.$check_action('/homestay_orders/table', 'add')),
                    console.log(
                      e
                        ? '你有表格添加权限视作有添加权限'
                        : '你没有表格添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/homestay_orders/table', 'set')),
                    console.log(
                      e
                        ? '你有表格添加权限视作有修改权限'
                        : '你没有表格修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/homestay_orders/view', 'add')),
                    console.log(
                      e
                        ? '你有视图添加权限视作有添加权限'
                        : '你没有视图添加权限'
                    )),
                  e ||
                    ((e = this.$check_action('/homestay_orders/view', 'set')),
                    console.log(
                      e
                        ? '你有视图修改权限视作有修改权限'
                        : '你没有视图修改权限'
                    )),
                  e ||
                    ((e = this.$check_action('/homestay_orders/view', 'get')),
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
        o.default = n
      }).call(this, t('543d')['default'], t('bc2e')['default'])
    },
    '38ac': function (e, o, t) {
      'use strict'
      t.r(o)
      var s = t('2654'),
        r = t.n(s)
      for (var a in s)
        ['default'].indexOf(a) < 0 &&
          (function (e) {
            t.d(o, e, function () {
              return s[e]
            })
          })(a)
      o['default'] = r.a
    },
    '3c3f': function (e, o, t) {
      'use strict'
      var s = t('c159'),
        r = t.n(s)
      r.a
    },
    '7f81': function (e, o, t) {
      'use strict'
      t.r(o)
      var s = t('c66d'),
        r = t('38ac')
      for (var a in r)
        ['default'].indexOf(a) < 0 &&
          (function (e) {
            t.d(o, e, function () {
              return r[e]
            })
          })(a)
      t('3c3f')
      var i = t('f0c5'),
        m = Object(i['a'])(
          r['default'],
          s['b'],
          s['c'],
          !1,
          null,
          '1c8dbfa9',
          null,
          !1,
          s['a'],
          void 0
        )
      o['default'] = m.exports
    },
    c159: function (e, o, t) {},
    c66d: function (e, o, t) {
      'use strict'
      t.d(o, 'b', function () {
        return r
      }),
        t.d(o, 'c', function () {
          return a
        }),
        t.d(o, 'a', function () {
          return s
        })
      var s = {
          uniForms: function () {
            return Promise.all([
              t.e('common/vendor'),
              t.e('components/uni-forms/uni-forms'),
            ]).then(t.bind(null, '2a9e'))
          },
          uniFormsItem: function () {
            return t
              .e('components/uni-forms-item/uni-forms-item')
              .then(t.bind(null, '4423'))
          },
          uniDataSelect: function () {
            return Promise.all([
              t.e('common/vendor'),
              t.e('components/uni-data-select/uni-data-select'),
            ]).then(t.bind(null, '1b47'))
          },
          uniEasyinput: function () {
            return Promise.all([
              t.e('common/vendor'),
              t.e('components/uni-easyinput/uni-easyinput'),
            ]).then(t.bind(null, '4a17'))
          },
          uniDatetimePicker: function () {
            return Promise.all([
              t.e('common/vendor'),
              t.e('components/uni-datetime-picker/uni-datetime-picker'),
            ]).then(t.bind(null, '2626'))
          },
        },
        r = function () {
          var e = this,
            o = e.$createElement,
            t = (e._self._c, e.is_view()),
            s = t
              ? e.$check_field('get', 'regular_users') ||
                e.$check_field('add', 'regular_users') ||
                e.$check_field('set', 'regular_users')
              : null,
            r =
              t && s
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'regular_users')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'regular_users'))
                : null,
            a = t && s && !r ? e.$check_field('get', 'regular_users') : null,
            i = t
              ? e.$check_field('get', 'user_name') ||
                e.$check_field('add', 'user_name') ||
                e.$check_field('set', 'user_name')
              : null,
            m =
              t && i
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'user_name')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'user_name'))
                : null,
            n = t && i && !m ? e.$check_field('get', 'user_name') : null,
            _ = t
              ? e.$check_field('get', 'mobile_phone_number') ||
                e.$check_field('add', 'mobile_phone_number') ||
                e.$check_field('set', 'mobile_phone_number')
              : null,
            c =
              t && _
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'mobile_phone_number')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'mobile_phone_number'))
                : null,
            l =
              t && _ && !c
                ? e.$check_field('get', 'mobile_phone_number')
                : null,
            u = t
              ? e.$check_field('get', 'merchant_users') ||
                e.$check_field('add', 'merchant_users') ||
                e.$check_field('set', 'merchant_users')
              : null,
            d =
              t && u
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'merchant_users')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'merchant_users'))
                : null,
            h = t && u && !d ? e.$check_field('get', 'merchant_users') : null,
            f = t
              ? e.$check_field('get', 'merchant_name') ||
                e.$check_field('add', 'merchant_name') ||
                e.$check_field('set', 'merchant_name')
              : null,
            y =
              t && f
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'merchant_name')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'merchant_name'))
                : null,
            g = t && f && !y ? e.$check_field('get', 'merchant_name') : null,
            p = t
              ? e.$check_field('get', 'homestay_name') ||
                e.$check_field('add', 'homestay_name') ||
                e.$check_field('set', 'homestay_name')
              : null,
            k =
              t && p
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'homestay_name')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'homestay_name'))
                : null,
            b = t && p && !k ? e.$check_field('get', 'homestay_name') : null,
            $ = t
              ? e.$check_field('get', 'homestay_id') ||
                e.$check_field('add', 'homestay_id') ||
                e.$check_field('set', 'homestay_id')
              : null,
            v =
              t && $
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'homestay_id')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'homestay_id'))
                : null,
            x = t && $ && !v ? e.$check_field('get', 'homestay_id') : null,
            w = t
              ? e.$check_field('get', 'homestay_prices') ||
                e.$check_field('add', 'homestay_prices') ||
                e.$check_field('set', 'homestay_prices')
              : null,
            D =
              t && w
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'homestay_prices')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'homestay_prices'))
                : null,
            j = t && w && !D ? e.$check_field('get', 'homestay_prices') : null,
            F = t
              ? e.$check_field('get', 'accommodation_days') ||
                e.$check_field('add', 'accommodation_days') ||
                e.$check_field('set', 'accommodation_days')
              : null,
            P =
              t && F
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'accommodation_days')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'accommodation_days'))
                : null,
            O =
              t && F && !P ? e.$check_field('get', 'accommodation_days') : null,
            S = t
              ? e.$check_field('get', 'total_accommodation_amount') ||
                e.$check_field('add', 'total_accommodation_amount') ||
                e.$check_field('set', 'total_accommodation_amount')
              : null,
            T =
              t && S
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'total_accommodation_amount')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'total_accommodation_amount'))
                : null,
            I =
              t && S && !T
                ? e.$check_field('get', 'total_accommodation_amount')
                : null,
            M = t
              ? e.$check_field('get', 'booking_amount') ||
                e.$check_field('add', 'booking_amount') ||
                e.$check_field('set', 'booking_amount')
              : null,
            J =
              t && M
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'booking_amount')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'booking_amount'))
                : null,
            N = t && M && !J ? e.$check_field('get', 'booking_amount') : null,
            U = t
              ? e.$check_field('get', 'accommodation_time') ||
                e.$check_field('add', 'accommodation_time') ||
                e.$check_field('set', 'accommodation_time')
              : null,
            z =
              t && U
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'accommodation_time')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'accommodation_time'))
                : null,
            B =
              t && U && !z ? e.$check_field('get', 'accommodation_time') : null,
            E = t
              ? e.$check_field('get', 'homestay_address') ||
                e.$check_field('add', 'homestay_address') ||
                e.$check_field('set', 'homestay_address')
              : null,
            C =
              t && E
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'homestay_address')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'homestay_address'))
                : null,
            q = t && E && !C ? e.$check_field('get', 'homestay_address') : null,
            L = t
              ? e.$check_field('get', 'order_remarks') ||
                e.$check_field('add', 'order_remarks') ||
                e.$check_field('set', 'order_remarks')
              : null,
            A =
              t && L
                ? '管理员' === e.user_group ||
                  (e.form['homestay_orders_id'] &&
                    e.$check_field('set', 'order_remarks')) ||
                  (!e.form['homestay_orders_id'] &&
                    e.$check_field('add', 'order_remarks'))
                : null,
            G = t && L && !A ? e.$check_field('get', 'order_remarks') : null,
            H =
              e.$check_action('/homestay_orders/view', 'set') ||
              e.$check_action('/homestay_orders/view', 'add') ||
              e.$check_option('/homestay_orders/table', 'examine')
          e.$mp.data = Object.assign(
            {},
            {
              $root: {
                m0: t,
                m1: s,
                m2: r,
                m3: a,
                m4: i,
                m5: m,
                m6: n,
                m7: _,
                m8: c,
                m9: l,
                m10: u,
                m11: d,
                m12: h,
                m13: f,
                m14: y,
                m15: g,
                m16: p,
                m17: k,
                m18: b,
                m19: $,
                m20: v,
                m21: x,
                m22: w,
                m23: D,
                m24: j,
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
                m41: A,
                m42: G,
                m43: H,
              },
            }
          )
        },
        a = []
    },
    fe10: function (e, o, t) {
      'use strict'
      ;(function (e, o) {
        var s = t('4ea4')
        t('e411')
        s(t('66fd'))
        var r = s(t('7f81'))
        ;(e.__webpack_require_UNI_MP_PLUGIN__ = t), o(r.default)
      }).call(this, t('bc2e')['default'], t('543d')['createPage'])
    },
  },
  [['fe10', 'common/runtime', 'common/vendor']],
])
