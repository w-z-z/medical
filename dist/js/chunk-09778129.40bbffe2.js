(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09778129"],{4020:function(e,t,a){"use strict";var o=a("0e6f"),i=a("03bd").includes,n=a("8276");o({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},6106:function(e,t,a){"use strict";var o=a("0e6f"),i=a("20aa"),n=a("350f"),r=a("f1c6");o({target:"String",proto:!0,forced:!r("includes")},{includes:function(e){return!!~String(n(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},"8f21":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"company-step"},[a("div",{staticClass:"company-reg ptb55 mr0auto bgcfff"},[a("h1",{staticClass:"tc fs24 c333 mb30 fw400"},[e._v("申请会员")]),a("el-form",{ref:"regcompanyform",staticClass:"mr0auto",attrs:{"label-position":"top","label-width":"80px","hide-required-asterisk":"",model:e.regcompanyform,rules:e.rules}},[a("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"请输入手机号码",clearable:""},model:{value:e.regcompanyform.mobile,callback:function(t){e.$set(e.regcompanyform,"mobile",t)},expression:"regcompanyform.mobile"}})],1),a("el-form-item",{attrs:{label:"验证码",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入短信验证码"},model:{value:e.regcompanyform.code,callback:function(t){e.$set(e.regcompanyform,"code",t)},expression:"regcompanyform.code"}}),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.timeShow,expression:"!timeShow"}],staticClass:"get-code",on:{click:e.sendcode}},[e._v("获取验证码")]),a("a",{directives:[{name:"show",rawName:"v-show",value:e.timeShow,expression:"timeShow"}],staticClass:"get-code countdown",on:{click:e.sendcode}},[e._v(e._s(e.time)+" 秒")])],1),a("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[a("el-input",{attrs:{"suffix-icon":e.isOpen?"iconfont icon-faxian-yanjing":"iconfont icon-guanbi-yanjing",type:e.isOpen?"text":"password",placeholder:"请设置登录密码，不少于6位"},nativeOn:{click:function(t){return e.changeEye(t)}},model:{value:e.regcompanyform.password,callback:function(t){e.$set(e.regcompanyform,"password",t)},expression:"regcompanyform.password"}})],1),a("el-form-item",{attrs:{label:"电子邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"请输入常用电子邮箱",clearable:""},model:{value:e.regcompanyform.email,callback:function(t){e.$set(e.regcompanyform,"email",t)},expression:"regcompanyform.email"}})],1),a("el-form-item",{attrs:{label:"企业名称",prop:"companyName"}},[a("el-input",{attrs:{placeholder:"请输入企业全称",clearable:""},model:{value:e.regcompanyform.companyName,callback:function(t){e.$set(e.regcompanyform,"companyName",t)},expression:"regcompanyform.companyName"}})],1),a("el-form-item",{attrs:{label:"企业规模",prop:"companyNum"}},[a("el-select",{attrs:{placeholder:"请选择企业规模"},model:{value:e.regcompanyform.companyNum,callback:function(t){e.$set(e.regcompanyform,"companyNum",t)},expression:"regcompanyform.companyNum"}},[a("el-option",{attrs:{label:"1-30人",value:"1-30人"}}),a("el-option",{attrs:{label:"30-100人",value:"30-100人"}}),a("el-option",{attrs:{label:"101-300人",value:"101-300人"}}),a("el-option",{attrs:{label:"301-1000人",value:"301-1000人"}}),a("el-option",{attrs:{label:"1000人以上",value:"1000人以上"}})],1)],1),a("el-form-item",[a("input",{staticClass:"regular-check repaytype argee",attrs:{type:"checkbox",id:"checkbox",name:"type"}}),a("label",{attrs:{for:"checkbox"},on:{click:e.argee}}),a("label",{staticClass:"check-label"},[e._v(" 我同意并接受用户 "),a("a",{staticClass:"url-tag",on:{click:function(t){return e.nextStep("/service")}}},[e._v("《服务条款》")]),e._v("和 "),a("a",{staticClass:"url-tag",on:{click:function(t){return e.nextStep("/privacyStatement")}}},[e._v("《隐私声明》")])])]),a("el-form-item",[a("el-button",{staticClass:"fl",on:{click:function(t){return e.nextStep("/register")}}},[e._v("上一步")]),a("el-button",{staticClass:"fr",attrs:{type:"primary",disabled:e.ischecked},on:{click:function(t){return e.nextStep("model")}}},[e._v("提交申请")])],1),a("div",{staticClass:"lh30 c999"},[a("p",[e._v("感谢您的申请，我们将在7*24小时内完成审核！")]),a("p",[e._v("服务热线：400-123-123")])])],1)],1),a("el-dialog",{staticClass:"message-reg",attrs:{title:"申请已提交",visible:e.centerDialogVisible,width:"740px",top:"30vh",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("span",[e._v("我们将在7*24小时内完成审核，请您注意查收短信消息!")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("我知道了")])],1)])],1)},i=[],n=(a("4020"),a("6106"),a("61f7")),r={data:function(){return{isOpen:!1,timeShow:!1,time:59,ischecked:!0,centerDialogVisible:!1,regcompanyform:{mobile:"",code:"",password:"",email:"",companyName:"",companyNum:""},rules:{mobile:[n["a"].verifyRequired("手机不能为空！"),{validator:n["a"].verifyPhone,trigger:"change"}],password:[n["a"].verifyRequired("密码不能为空！"),{validator:n["a"].verifyPwd,trigger:"change"}],code:[n["a"].verifyRequired("短信验证码不能为空！")],email:[n["a"].verifyRequired("邮箱不能为空！")],companyName:[n["a"].verifyRequired("企业名称不能为空！")],companyNum:[n["a"].verifyRequired("企业规模不能为空！")]}}},methods:{changeEye:function(e){e.target.className.includes("yanjing")&&(this.isOpen=!this.isOpen)},sendcode:function(){if(""===this.regcompanyform.mobile)return this.$showMsg("手机号不能为空"),!1;this.timeShow=!0,this.countdown(),this.getRegCode()},getRegCode:function(){var e=this;this.$api["SendCompanyRegisterCode"]({mobile:this.regcompanyform.mobile}).then((function(e){})).catch((function(t){e.$showMsg("发送验证码错误，请稍后再试！"),e.timeShow=!1,e.time=59}))},countdown:function(){var e=this,t=setInterval((function(){e.time--,0===e.time&&(clearInterval(t),e.timeShow=!1,e.time=59)}),1e3)},argee:function(){this.ischecked=!this.ischecked},nextStep:function(e){var t=this;"model"===e?this.$refs.regcompanyform.validate((function(e){if(!e)return!1;t.$api["CompanyRegister"]().then((function(e){})).catch((function(e){t.$showMsg(e)}))})):this.$router.push("".concat(e))}}},c=r,s=(a("bf08"),a("5511")),l=Object(s["a"])(c,o,i,!1,null,null,null);t["default"]=l.exports},a0cf:function(e,t,a){},bf08:function(e,t,a){"use strict";var o=a("a0cf"),i=a.n(o);i.a}}]);
//# sourceMappingURL=chunk-09778129.40bbffe2.js.map