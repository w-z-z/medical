<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-24 10:29:31
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 14:42:40
 -->
<template>
  <div id="messagedetail">
    <div class="msgHeader">
      <p class="msgTitle">{{msgData.title}}</p>
      <p class="msgTime">{{msgData.msgTime}}</p>
    </div>
    <div v-html="msgData.content"
      class="content"></div>
  </div>
</template>

<script>
export default {
  name: "messagedetail",
  data() {
    return {
      msgData: {
        title: "",
        msgTime: "",
        content: ``
      }
    };
  },
  methods: {
    getInfo(apiParam) {
      this.$api["GetNoticeDetail"]({ notice_id: apiParam }).then(res => {
        this.msgData.content = res.content;
        this.$backTop();
      });
    }
  },
  created() {
    this.msgData.title = this.$route.query.notice_name;
    this.msgData.msgTime = this.$route.query.create_time;
    this.getInfo(this.$route.params.id);
  }
};
</script>

<style lang='less'  scoped>
#messagedetail {
  padding: 50px;
  background-color: white;
  margin-bottom: 52px;
  border-radius: 10px;
  .msgHeader {
    line-height: 30px;
    text-align: center;
    .msgTitle {
      font-size: 20px;
      color: rgba(51, 51, 51, 1);
    }
    .msgTime {
      font-size: 12px;
      color: rgba(153, 153, 153, 1);
    }
  }
  .content {
    padding: 20px 0;
  }
}
</style>
