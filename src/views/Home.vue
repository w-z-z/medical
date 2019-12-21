<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    clickbutton () { },
    getUserList () {
      this.$api
        .userList({
          page: 1,
          page_size: 20
        })
        .then(
          res => {
            console.log(res)
          },
          err => {
            console.log(err)
          }
        )
    }
  },
  created(){
    this.getUserList()
  },
}
</script>
