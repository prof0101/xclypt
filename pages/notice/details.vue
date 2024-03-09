<!--
 * @Author: WIN-U2TSP0CEF5J\Administrator 1534860242@qq.com
 * @Date: 2024-05-16 21:40:18
 * @LastEditors: WIN-U2TSP0CEF5J\Administrator 1534860242@qq.com
 * @LastEditTime: 2024-05-19 18:08:17
 * @FilePath: \nodejs-country\client_home\pages\notice\details.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <uni-card
    :title="obj.title"
    :extra="$toTime(obj.create_time, 'yyyy-MM-dd hh:mm:ss')"
    class="notice_details"
  >
    <rich-text
      style="word-break: break-all"
      :nodes="$setRichTextImage(obj.content)"
    ></rich-text>
  </uni-card>
</template>

<script>
import mixin from '@/libs/mixins/page.js'

export default {
  mixins: [mixin],
  data() {
    return {
      url_get_obj: '~/api/notice/get_obj?',
      field: 'notice_id',
      query: {
        notice_id: 0,
      },
      href: 'https://uniapp.dcloud.io/component/README?id=uniui',
      obj: {
        title: '标题',
        create_time: '时间',
        content: '文本',
      },
    }
  },
  methods: {
    get_obj_after(json) {},
  },
}
</script>

<style></style>
