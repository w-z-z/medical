<template>
  <div class="layout">
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    clickbutton() {},
    getUserList() {
      // this.$api
      //   .userList({
      //     page: 1,
      //     page_size: 20
      //   })
      //   .then(
      //     res => {
      //       console.log(res);
      //     },
      //     err => {
      //       console.log(err);
      //     }
      //   );
    }
  },
  created() {
    this.getUserList();
  }
};
</script>
