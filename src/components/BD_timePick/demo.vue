<!--
 * @Author: ranli
 * @Date: 2019-09-25 16:09:18
 * @LastEditors: ranli
 * @LastEditTime: 2019-09-26 15:47:35
 * @Description: Description
 -->
<template>
  <div class="demo">
    <BD-timePick :option='option'
      v-model="values"
      v-on:changeChooseValue='changeValue'
      v-on:blurDom='blurDom'
      v-on:focusDom='focusDom'></BD-timePick>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //整合的element官网的属性   https://element.faas.ele.me/#/zh-CN/component/time-picker
      option: {
        // pickType: "timeSelct", //类型 timeSelct  timePicker dataTimePick,
        // name: "", //name
        type: "datetimerange", //时间类型date week datetime month year datetimerange   dates monthrange daterange
        pickerOptions: {
          /* 1-----------timeSelct 类型有以下属性*/
          // start: "08:30",//开始时间
          // step: "00:15", //间隔
          // end: "18:30" //结束时间，
          // minTime:""//最小时间，小于该时间的时间段将被禁用
          // maxTime:""//最大时间，大于该时间的时间段将被禁用
          /* 2-----------timePicker 类型有以下属性*/
          // selectableRange:['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'],//可选时间段，
          // format:"HH:mm:ss",              //时间格式化(TimePicker)
          /*3-------- dataTimePick 类型有以下属性*/
          //设置禁用状态，参数为当前日期，要求返回 Boolean
          // disabledDate(time) {
          //   return time.getTime() > Date.now();
          // },
          // //设置日期的 className
          // cellClassName() {},
          // firstDayOfWeek: 1, //1-7 周起始日
          // //设置快捷选项
          // shortcuts: [
          //   {
          //     text: "今天", //标题文本
          //     onClick(picker) {
          //       //选中后的回调函数，
          //       picker.$emit("pick", new Date());
          //     }
          //   }
          // ]
        }
        // arrowControl: true, //滚动/点击
        // readonly: false, //完全只读
        // unlinkPanels: false, //在范围选择器里取消两个日期面板之间的联动
        // validateEvent: false, //输入时是否触发表单的校验
        // rangeSeparator: "至", //连结文字
        // disabled: false, //禁用
        // editable: false, //文本框可输入
        // clearable: false, //是否显示清除按钮
        // size: "", //输入框尺寸
        // align: "", //对齐方式
        // format: "", //显示在输入框中的格式
        // // defaultValue: "0:00:00", //默认值
        // popperClass: "", //DateTimePicker 下拉框的类名
        // prefixIcon: "", //prefixicons
        // clearIcon: "", //  clearicons
        // placeholder: "请选择时间",
        // startPlaceholder: "结束时间",
        // endPlaceholder: "结束时间"
      },
      values: []
    };
  },
  methods: {
    changeValue() {
      console.log("改变值");
    },
    blurDom() {
      console.log("失去焦点");
    },
    focusDom() {
      console.log("获取焦点");
    }
  },
  watch: {
    values(a) {
      console.log(a);
    }
  }
};
</script>
