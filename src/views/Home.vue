<template>
  <div class="layout">
    <layout></layout>
  </div>
</template>

<script>
import layout from "@/layout/index.vue";
export default {
  name: "home",
  components: {
    layout
  },
  methods: {
    clickbutton() {},
    getUserList() {
      this.$api
        .userList({
          page: 1,
          page_size: 20
        })
        .then(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
    }
  },
  created() {
    this.getUserList();
  }
};
</script>
