<template>
  <popper trigger="click"
    :options="{
      placement: 'right',
      modifiers: { offset: { offset: '0,10px' } }
    }">
    <div class="BDpopper">
      <div class="aaa"></div>
    </div>
    <button slot="reference">
      Reference Element
    </button>
  </popper>
</template>

<script>
import Popper from "vue-popperjs";
// import "vue-popperjs/dist/vue-popper.css";
export default {
  name: "vue-popover",
  components: { Popper: Popper },
  data() {
    return {
      isShow: false,
      target: "click"
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style>
.aaa {
  width: 100px;
  height: 100px;
  background: red;
}
.BDpopper {
  width: auto;
  background-color: #fafafa;
  color: #212121;
  text-align: center;
  padding: 2px;
  display: inline-block;
  border-radius: 3px;
  position: absolute;
  font-size: 14px;
  font-weight: normal;
  /* border: 1px #ebebeb solid; */
  z-index: 200000;
  -moz-box-shadow: rgb(58, 58, 58) 0 0 6px 0;
  -webkit-box-shadow: rgb(58, 58, 58) 0 0 6px 0;
  box-shadow: rgb(58, 58, 58) 0 0 6px 0;
}
.BDpopper .popper__arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
}
.BDpopper[x-placement^="top"] {
  margin-bottom: 5px;
}
.BDpopper[x-placement^="top"] .popper__arrow {
  border-width: 5px 5px 0 5px;
  border-color: #fafafa transparent transparent transparent;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.BDpopper[x-placement^="bottom"] {
  margin-top: 5px;
}
.BDpopper[x-placement^="bottom"] .popper__arrow {
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent #fafafa transparent;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.BDpopper[x-placement^="right"] {
  margin-left: 5px;
}
.BDpopper[x-placement^="right"] .popper__arrow {
  border-width: 5px 5px 5px 0;
  border-color: transparent #fafafa transparent transparent;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
.BDpopper[x-placement^="left"] {
  margin-right: 5px;
}
.BDpopper[x-placement^="left"] .popper__arrow {
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent #fafafa;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
</style>
