(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a937a888"],{"12c5":function(t,e,a){var i=a("8e13");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},1747:function(t,e,a){"use strict";var i=a("0e6f"),n=a("80a3"),o=a("12c5");i({target:"String",proto:!0,forced:o("fixed")},{fixed:function(){return n(this,"tt","","")}})},"2af8":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("66af"),a("e8ce"),a("252c"),a("9743"),a("c41e"),a("79fd"),a("5228");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function n(t){return n="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)},n(t)}},3708:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",t._b({attrs:{model:t.formData}},"el-form",Object.assign({},t.renderFromConfig),!1),[t._t("default"),t._t("slot-btn",[a("el-form-item",[a("el-button",t._b({class:t.renderFromConfig.okBtn.costomClass,on:{click:function(e){return t.submitForm()}}},"el-button",t.renderFromConfig.okBtn,!1),[t._v(t._s(t.renderFromConfig.okBtn.label))]),t.renderFromConfig.noBtn.show?a("el-button",t._b({on:{click:function(e){return t.resetForm()}}},"el-button",t.renderFromConfig.noBtn,!1),[t._v(t._s(t.renderFromConfig.noBtn.label))]):t._e()],1)])],2)},n=[],o=a("7201"),r=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.rules,i=void 0===a?null:a,n=e.inline,r=void 0!==n&&n,l=e.ref,s=void 0===l?"ruleForm":l,c=e.labelWidth,u=void 0===c?"80px":c,h=e.size,f=void 0===h?"default":h,d=e.labelPosition,m=void 0===d?"right":d,g=e.okBtn,p=void 0===g?{label:"确 定",type:"primary",costomClass:"searchFromConfirmBtn"}:g,b=e.noBtn,v=void 0===b?{label:"取 消",show:!0}:b,C=e.disabled,y=void 0!==C&&C;Object(o["a"])(this,t),this.rules=i,this.inline=r,this.ref=s,this.labelWidth=u,this.size=f,this.labelPosition=m,this.okBtn=p,this.noBtn=v,this.disabled=y},l={name:"BD-from",components:{},props:{formData:{type:[Object],default:null},fromConfig:{type:[Object],default:null}},data:function(){return{}},computed:{renderFromConfig:function(){return this.fromConfig?new r(this.fromConfig):new r}},methods:{submitForm:function(){var t=this,e=this.renderFromConfig.ref;this.$refs[e].validate((function(e){if(!e)return!1;t.$emit("submitForm")}))},resetForm:function(){var t=this.renderFromConfig.ref;this.$refs[t].resetFields(),this.$emit("resetForm")}},created:function(){this.$nextTick((function(){}))}},s=l,c=a("5511"),u=Object(c["a"])(s,i,n,!1,null,"bf4d7a7e",null);e["a"]=u.exports},"6d77":function(t,e,a){},"7ae9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"MedicalReports"}},[a("div",{staticClass:"medical-top mb30"},[a("div",{staticClass:"searchFrom bgcfff"},[a("BDfrom",{ref:"medicalFrom",attrs:{fromConfig:t.fromConfig,formData:t.apiData["apiParam"]},on:{submitForm:t.submitForm}},[a("el-form-item",{staticStyle:{width:"166px"},attrs:{label:""}},[a("el-input",{attrs:{clearable:"",placeholder:"输入体检报告名称"},model:{value:t.apiData["apiParam"].report_name,callback:function(e){t.$set(t.apiData["apiParam"],"report_name","string"===typeof e?e.trim():e)},expression:"apiData['apiParam'].report_name"}})],1),a("el-form-item",{staticStyle:{width:"166px"},attrs:{label:""}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"采样日期","value-format":"timestamp"},model:{value:t.apiData["apiParam"].check_time,callback:function(e){t.$set(t.apiData["apiParam"],"check_time",e)},expression:"apiData['apiParam'].check_time"}})],1)],1)],1),a("div",{staticClass:"medical-tatal bgcfff"},[a("p",[t._v("上传体检报告")]),a("p",{staticClass:"tcr"},[a("span",{staticClass:"fs20"},[t._v(t._s(t.total?t.total:0))]),t._v("份 ")])])]),a("div",{staticClass:"resultFrom"},[a("BDtable",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"searchTable",attrs:{tableHead:t.tableHead,tableConfig:t.tableConfig,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{sizeChange:t.sizeChange}})],1),a("BDdialog",{attrs:{dialogParam:t.dialogParam}},[a("upload",{on:{getVal:t.getVal}})],1)],1)},n=[],o=(a("66af"),a("e8ce"),a("252c"),a("c41e"),a("79fd"),a("5228"),a("2af8")),r=a("d54e"),l=a("3708"),s=a("acac"),c=a("22fb"),u={name:"MedicalReports",components:{BDtable:r["a"],BDfrom:l["a"],BDdialog:s["a"],upload:c["a"]},data:function(){var t=this;return{loading:!1,total:0,fromConfig:{inline:!0,ref:"medicalFrom",size:"small",noBtn:{show:!1}},apiData:{apiName:"GetPhysicalExaminationReportList",apiParam:{report_name:"",check_time:""}},tableHead:[{label:"体检日期",width:"200",prop:"check_time"},{label:"体检报告名称",width:"300",prop:"report_name"},{label:"上传日期",prop:"upload_time"},{label:"操作",type:"btn",width:"150",btns:[{label:"删除"}],btnClick:function(e,a,i){var n=a.physical_examination_report_id;t.$api["DeletePhysicalExaminationReport"]({physical_examination_report_id:n}).then((function(e){t.$showMsg("已删除!"),t.GetPhysicalExaminationCount(),t.getData()})).catch((function(e){t.$showMsg(e)}))}}],tableConfig:{showHeader:!0,border:!0,pagingPar:{total:10,layout:"total, sizes, prev, pager, next, jumper",currentPage:1,align:"left",background:!0,isShow:!1},tableData:[],showSummary:null},dialogParam:{title:"上传体检报告",width:"890px",visible:!1,lockScroll:!0,okBtn:{show:!1},noBtn:{show:!1}}}},methods:{submitForm:function(t){this.getData(),this.GetPhysicalExaminationCount()},GetPhysicalExaminationCount:function(){var t=this;this.$api["GetPhysicalExaminationCount"]().then((function(e){t.total=e}))},sizeChange:function(t){this.apiData.apiParam.page_no=t.page,this.apiData.apiParam.page_size=t.pageSize,this.getData(),this.GetPhysicalExaminationCount()},getData:function(){var t=this;this.loading=!0;var e=this.apiData,a=e.apiName,i=e.apiParam;if(a&&"object"===Object(o["a"])(i)){var n=Object.assign({},i);n.check_time=n.check_time/1e3,this.$api[a](n).then((function(e){t.loading=!1;var a=!0,i=!1,n=void 0;try{for(var o,r=e[Symbol.iterator]();!(a=(o=r.next()).done);a=!0){var l=o.value;l.upload_time=t.$formatTime(1e3*l.upload_time),l.check_time=t.$formatTime(1e3*l.check_time)}}catch(s){i=!0,n=s}finally{try{a||null==r.return||r.return()}finally{if(i)throw n}}t.tableConfig.tableData=e}))}else console.error("请传入正确的接口参数")},getVal:function(t){this.dialogParam.visible=t,this.getData(),this.GetPhysicalExaminationCount()}},created:function(){this.getData(),this.GetPhysicalExaminationCount()}},h=u,f=(a("e80c"),a("5511")),d=Object(f["a"])(h,i,n,!1,null,"76482efc",null);e["default"]=d.exports},"80a3":function(t,e,a){var i=a("350f"),n=/"/g;t.exports=function(t,e,a,o){var r=String(i(t)),l="<"+e;return""!==a&&(l+=" "+a+'="'+String(o).replace(n,"&quot;")+'"'),l+">"+r+"</"+e+">"}},"84e1":function(t,e,a){"use strict";var i=a("8ec5"),n=a.n(i);n.a},"8ec5":function(t,e,a){},d54e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",t._b({staticStyle:{width:"100%"},on:{select:t.select,"select-all":t.select}},"el-table",Object.assign({},t.resetTableConfig),!1),[t._l(t.resetTableHead,(function(e,i){return["btn"==e.type?a("el-table-column",t._b({key:i,scopedSlots:t._u([{key:"default",fn:function(i){return t._l(e.btns,(function(n,o){return a("el-button",{key:o,staticClass:"tabelHandelBtn",attrs:{size:"mini"},on:{click:function(t){e.btnClick&&e.btnClick(n,i.row,i.$index)}}},[t._v(t._s("object"==typeof n?n.label:n))])}))}}],null,!0)},"el-table-column",Object.assign({},e),!1)):a("el-table-column",t._b({key:i},"el-table-column",Object.assign({},e),!1))]}))],2),t.resetTableConfig.pagingPar.isShow?a("div",{staticClass:"paging-panel"},[a("el-pagination",t._b({attrs:{"current-page":t.resetTableConfig.pagingPar.currentPage},on:{"update:currentPage":function(e){return t.$set(t.resetTableConfig.pagingPar,"currentPage",e)},"update:current-page":function(e){return t.$set(t.resetTableConfig.pagingPar,"currentPage",e)},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",Object.assign({},t.resetTableConfig.pagingPar),!1))],1):t._e()],1)},n=[],o=(a("e51f"),a("1747"),a("7201")),r=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.label,i=e.prop,n=e.width,r=e.fixed,l=void 0!==r&&r,s=e.align,c=void 0===s?"":s,u=e.headerAlign,h=void 0===u?"":u,f=e.className,d=void 0===f?"":f,m=e.type,g=e.minWidth,p=void 0===g?"":g,b=e.formatter,v=void 0===b?null:b,C=e.showOverflowTooltip,y=void 0!==C&&C,_=e.labelClassName,P=void 0===_?"":_,w=e.selectable,k=void 0===w?null:w,S=e.btns,x=void 0===S?null:S,D=e.btnClick,z=void 0===D?null:D,F=e.sortable,B=void 0!==F&&F;Object(o["a"])(this,t),this.label=a,this.prop=i,this.width=n,this.fixed=l,this.align=c,this.headerAlign=h,this.className=d,this.type=m,this.minWidth=p,this.formatter=v,this.showOverflowTooltip=y,this.labelClassName=P,this.selectable=k,this.btns=x,this.btnClick=z,this.sortable=B},l=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.total,i=void 0===a?100:a,n=e.layout,r=void 0===n?"total, sizes, prev, pager, next, jumper":n,l=e.pageSizes,s=void 0===l?[10,20,50,100]:l,c=e.pageSize,u=void 0===c?10:c,h=e.currentPage,f=void 0===h?1:h,d=e.align,m=void 0===d?"left":d,g=e.background,p=void 0===g||g,b=e.isShow,v=void 0===b||b;Object(o["a"])(this,t),this.total=i,this.layout=r,this.pageSizes=s,this.pageSize=u,this.currentPage=f,this.align=m,this.background=p,this.isShow=v},s=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.tableData,i=void 0===a?[]:a,n=e.height,r=void 0===n?null:n,s=e.maxHeight,c=void 0===s?null:s,u=e.stripe,h=void 0!==u&&u,f=e.border,d=void 0!==f&&f,m=e.size,g=void 0===m?null:m,p=e.showHeader,b=void 0===p||p,v=e.highlightCurrentRow,C=void 0!==v&&v,y=e.showSummary,_=void 0===y||y,P=e.sumText,w=void 0===P?"合计":P,k=e.summaryMethod,S=void 0===k?null:k,x=e.spanMethod,D=void 0===x?null:x,z=e.pagingPar,F=void 0===z?new l:z;Object(o["a"])(this,t),this.data=i,this.height=r,this.maxHeight=c,this.stripe=h,this.border=d,this.size=g,this.showHeader=b,this.highlightCurrentRow=C,this.showSummary=_,this.sumText=w,this.summaryMethod=S,this.spanMethod=D,this.pagingPar=F},c={name:"BD-table",components:{},model:{prop:"tableConfig",event:"returnBack"},props:{tableHead:{type:[Array],default:null},tableConfig:{type:[Object],default:null}},data:function(){return{}},computed:{resetTableHead:function(){return this.tableHead?this.tableHead.map((function(t){return new r(t)})):[]},resetTableConfig:function(){return this.tableConfig?(this.tableConfig.pagingPar&&(this.tableConfig.pagingPar=new l(this.tableConfig.pagingPar)),new s(this.tableConfig)):new s}},methods:{select:function(t,e){this.$emit("select",t)},handleSizeChange:function(t){this.resetTableConfig.pagingPar.currentPage=1,this.resetTableConfig.pagingPar.pageSize=t,this.sizeChange()},handleCurrentChange:function(t){this.sizeChange()},sizeChange:function(){var t=this.resetTableConfig.pagingPar,e=t.currentPage,a=t.pageSize;this.tableConfig.pagingPar.pageSize=a,this.tableConfig.pagingPar.currentPage=e,this.$emit("returnBack",this.tableConfig),this.$emit("sizeChange",{page:e,pageSize:a})}}},u=c,h=(a("84e1"),a("5511")),f=Object(h["a"])(u,i,n,!1,null,"8f4a6a02",null);e["a"]=f.exports},e51f:function(t,e,a){"use strict";var i=a("0e6f"),n=a("31b2").map,o=a("8e13"),r=a("9d72"),l=r("map"),s=l&&!o((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));i({target:"Array",proto:!0,forced:!l||!s},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e80c:function(t,e,a){"use strict";var i=a("6d77"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-a937a888.b83bab31.js.map