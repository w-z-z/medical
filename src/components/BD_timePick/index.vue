<!--
 * @Author: ranli
 * @Date: 2019-09-24 14:25:18
 * @LastEditors: ranli
 * @LastEditTime: 2019-09-26 15:45:00
 * @Description: 时间组件
 -->
<template>
  <div>
    <template v-if="newOptions.pickType=='timeSelct'">
      <el-time-select v-bind="{...newOptions}"
        v-model="values[0]"
        @change='change'
        @blur='blur'
        @focus='focus'>
      </el-time-select>
    </template>
    <template v-if="newOptions.pickType=='timePicker'">
      <el-time-picker v-bind="{...newOptions}"
        v-model="values[0]"
        @change='change'
        @blur='blur'
        @focus='focus'>
      </el-time-picker>
    </template>
    <template v-if="newOptions.pickType=='dataTimePick'">
      <el-date-picker v-bind="{...newOptions}"
        v-model="values[0]"
        @change='change'
        @blur='blur'
        @focus='focus'>
      </el-date-picker>
    </template>
  </div>
</template>

<script>
export default {
  name: "BD-timePick",
  components: {},
  data() {
    return {};
  },
  model: {
    prop: "values",
    event: "changeValues"
  },
  props: {
    //传入的属性
    option: {
      type: Object,
      default: {}
    },
    //值的合集
    values: {
      type: [String, Number, Array],
      default: () => {
        return {};
      }
    }
  },
  computed: {
    newOptions() {
      let Newoption = this.initProp(this.option);
      if (Newoption) {
        if (
          Newoption.pickType == "timeSelct" ||
          Newoption.pickType == "timePicker"
        ) {
          delete Newoption.type; //删除有影响的属性
        }
        return Newoption;
      } else {
        return this.initProp(Newoption);
      }
    }
  },
  methods: {
    change() {
      this.$emit("changeChooseValue");
    },
    initProp(obj) {
      let customProp = [
        "placeholder",
        "endPlaceholder",
        "startPlaceholder",
        "pickType"
      ];
      customProp.forEach(element => {
        if (!obj[element]) {
          if (element == "placeholder") {
            obj[element] = "请选择时间";
          }
          if (element == "startPlaceholder") {
            obj[element] = "开始时间";
          }
          if (element == "endPlaceholder") {
            obj[element] = "结束时间";
          }
          if (element == "pickType") {
            obj[element] = "timeSelct";
          }
        }
      });
      return obj;
    },
    blur() {
      this.$emit("blurDom");
    },
    focus() {
      this.$emit("focusDom");
    }
  }
};
</script>

<style scoped>
</style>
