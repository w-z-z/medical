<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-24 19:10:00
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 18:39:46
 -->
<template>
  <div class="healthRecord">
    <div class="serchFrom">
      <!-- //关联表头数据 -->
      <BDfrom @submitForm="submitForm"
        ref="serchFrom"
        :fromConfig="fromConfig"
        :formData="apiData['apiParam']">
        <el-form-item label
          style="width:166px">
          <el-input clearable
            v-model.trim="apiData['apiParam'].true_name"
            placeholder="输入姓名"></el-input>
        </el-form-item>
        <el-form-item style="width:166px"
          label>
          <el-date-picker v-model="apiData['apiParam'].create_time"
            placeholder="选择日期"
            clearable
            value-format="timestamp"
            style="width: 100%;"></el-date-picker>
        </el-form-item>
      </BDfrom>
    </div>

    <!-- 搜索结果 -->
    <div class="searchResult">
      <BDtableApi ref="staffTable"
        :tableHead="tableHead"
        :apiData="apiData"></BDtableApi>
    </div>
    <!-- 弹窗--详情 -->
    <BDdialog :dialogParam="dialogParam">
      <div class="recorde">
        <!-- <p class="recordeTile">查看健康档案</p> -->
        <div class="baseInfo">
          <div v-for="(item,index) in currentRecord.base"
            :key="index"
            class="infoItem">
            <div class="infoLabel">{{item.label}}：</div>
            <div class="infoContent">
              <p v-if="item.value">{{item.value}}</p>
              <p style='color:#eeeeee'
                v-else>未填写</p>
            </div>
          </div>
        </div>
        <div class="otherInfo">
          <div v-for="(item,index) in currentRecord.otherInfo"
            :key="index"
            class="infoItem">
            <div v-if="item.type=='person'"
              class="person infoItemList">
              <div class="infoLabel">{{item.label}}：</div>
              <div class="infoContent">
                <div v-if="item.data.have==1"
                  class="smokle">
                  <div class="status">
                    <label class="el-radio is-checked">
                      <span class="el-radio__input is-checked">
                        <span class="el-radio__inner"></span>
                      </span>
                      <span class="el-radio__label">是</span></label>
                  </div>
                  <div class="detail">
                    <span v-if="item.data.smoking_year"
                      class="detailList">
                      <span class="label">吸烟</span><span class="num">{{item.data.smoking_year}}</span><span class="unit">年</span>
                    </span>
                    <span v-if="item.data.smoking_year"
                      class="detailList">
                      <span class="label">每天</span><span class="num">{{item.data.smoking_num}}</span><span class="unit">支</span>
                    </span>
                  </div>
                </div>
                <div v-if="item.data.drink!='从不饮酒'"
                  class="drink">
                  <div class="status">
                    <label class="el-radio is-checked">
                      <span class="el-radio__input is-checked">
                        <span class="el-radio__inner"></span>
                      </span>
                      <span class="el-radio__label">{{item.data.drink}}</span></label>
                  </div>
                  <div class="detail">
                    <span class="detailList">
                      <span class="label">每天</span><span class="num">{{item.data.drink_num}}</span><span class="unit">{{item.data.drink_unit}}</span>
                    </span>
                  </div>
                </div>
                <div v-if="item.data.have==2&&item.data.drink=='从不饮酒'">
                  <span class="noData">没有相关数据</span>
                </div>
              </div>
            </div>
            <div v-if="item.type=='menstrual'&&currentRecord.personType==2"
              class="menstrual infoItemList">
              <div class="infoLabel">{{item.label}}：</div>
              <div class="infoContent">
                <div v-if="item.data.menstrual_cycle&&item.data.first_menstrual_time&&item.data.last_menstrual_time&&item.data.children_num"
                  class="detail">
                  <span v-if="item.data.menstrual_cycle"
                    class="detailList">
                    <span class="label">月经周期</span><span class="num">{{item.data.menstrual_cycle}}</span><span class="unit">天</span>
                  </span>
                  <span v-if="item.data.first_menstrual_time"
                    class="detailList">
                    <span class="label">首次月经时间</span><span class="num"> {{item.data.first_menstrual_time?$formatTime(item.data.first_menstrual_time*1000):"" }}</span>
                  </span>
                  <span v-if="item.data.last_menstrual_time"
                    class="detailList">
                    <span class="label">末次月经时间</span><span class="num"> {{item.data.last_menstrual_time?$formatTime(item.data.last_menstrual_time*1000):"" }}</span>
                  </span>
                  <span v-if="item.data.children_num"
                    class="detailList">
                    <span class="label">育有儿女</span><span class="num">{{item.data.children_num}}</span><span class="unit">个</span>
                  </span>
                </div>
                <div v-else>
                  <span class="noData">没有相关数据</span>
                </div>
              </div>
            </div>
            <div class="infoItemList"
              v-if="item.type=='others'">
              <div class="infoLabel">{{item.label}}：</div>
              <div class="infoContent">
                <div v-if="Array.isArray(item.data) && item.data.length != 0">
                  <div v-for="(child,eel) in item.data"
                    :key="eel"
                    class="historyRecode">
                    <label class="el-checkbox is-checked">
                      <span class="el-checkbox__input is-checked">
                        <span class="el-checkbox__inner"></span>
                      </span>
                    </label>
                    {{child}}
                  </div>
                  <div v-if="item.other"
                    class="historyRecode">
                    <label class="el-checkbox is-checked">
                      <span class="el-checkbox__input is-checked">
                        <span class="el-checkbox__inner"></span>
                      </span>
                    </label>
                    <span>
                      其他:
                    </span>
                    <span class="othersData">
                      {{item.other}}
                    </span>
                  </div>
                  <div class="historyRecode"
                    v-if="currentRecord.operation_name&&item.label=='手术史'">
                    <span class="othersData">
                      手术名称：
                      {{currentRecord.operation_name}}
                    </span>
                  </div>
                </div>
                <div v-else>
                  <span class="noData">没有相关数据</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BDdialog>
  </div>
</template>
<script>
import BDtableApi from "@/components/BD_table/api_table";
import BDfrom from "@/components/BD_from/index";
import BDdialog from "@/components/BD_dialog/index";
import selectData from "@/utils/selectData.js";
export default {
  name: "healthRecord",
  components: { BDtableApi, BDfrom, BDdialog },
  data() {
    return {
      loading: false,
      childchecked: true,
      // 表单基础参数
      fromConfig: {
        // 表单验证规则
        inline: true,
        ref: "ruleForm",
        size: "small",
        okBtn: {
          label: "查 询",
          costomClass: "searchFromConfirmBtn"
        },
        noBtn: { label: "重 置", show: false }
      },
      tableHead: [
        {
          label: "建档日期",
          formatter: (row, column, cellValue, index) => {
            return <span>{this.$formatTime(row.create_time * 1000)}</span>;
          }
        },
        {
          label: "姓名",
          prop: "true_name"
        },
        {
          label: "性别",
          prop: "sex",
          formatter: (row, column, cellValue, index) => {
            return <span>{row.sex == 1 ? "男" : "女"}</span>;
          }
        },
        {
          label: "与本人关系",
          prop: "relation"
        },
        {
          label: "修改日期",
          formatter: (row, column, cellValue, index) => {
            return <span>{this.$formatTime(row.update_time * 1000)}</span>;
          }
        },
        {
          label: "操作",
          type: "btn",
          width: "180px",
          btns: [{ label: "修改" }, { label: "查看" }],
          btnClick: (btn, rown, index) => {
            if (btn.label == "修改") {
              this.$router.push({
                path:
                  "/userCener/healthRecord/editRecord/" + rown.health_record_id
              });
            } else {
              this.getInfo(rown.health_record_id);
            }
          }
        }
      ],
      apiData: {
        apiName: "GetHealthRecordList",
        timeParamsKey: "create_time",
        apiParam: {
          page_no: 1,
          page_size: 10,
          true_name: "",
          create_time: ""
        }
      },
      dialogParam: {
        title: "查看健康档案",
        width: "890px",
        top: "2%",
        center: true,
        // width: "500px",
        visible: false,
        lockScroll: true,
        okBtn: {
          show: false
        },
        noBtn: {
          show: false
        }
      },
      stepOne: [
        {
          label: "真实姓名",
          valueKey: "true_name"
        },
        {
          label: "医保类别",
          valueKey: "medical_insurance"
        },
        {
          label: "性别",
          valueKey: "sex"
        },
        {
          label: "民族",
          valueKey: "nation"
        },
        {
          label: "生日",
          valueKey: "birthday"
        },
        {
          label: "身高(cm)",
          valueKey: "height"
        },
        {
          label: "体重(kg)",
          valueKey: "weight"
        },
        {
          label: "学历",
          valueKey: "education"
        },
        {
          label: "血型",
          valueKey: "blood_type"
        },
        {
          label: "婚姻",
          valueKey: "marriage"
        },
        {
          label: "职业",
          valueKey: "profession"
        },
        {
          label: "身份证号",
          valueKey: "id_card"
        },
        {
          label: "常住地址",
          valueKey: "address"
        },
        {
          label: "手机号码",
          valueKey: "mobile"
        },
        {
          label: "与本人关系",
          valueKey: "relation"
        }
      ],
      stepTwoData: [
        {
          title: "个人史",
          dataKey: "person"
        },
        {
          title: "现有疾病",
          dataKey: "current"
        },
        {
          title: "手术史",
          dataKey: "operation"
        },
        {
          title: "过敏史",
          dataKey: "allergy"
        },
        {
          title: "月经及生育史",
          dataKey: "menstrual"
        },

        {
          title: "用药史",
          dataKey: "drug"
        },
        {
          title: "家族史",
          dataKey: "family"
        }
      ],
      otherData: {}
    };
  },
  computed: {
    currentRecord() {
      let { stepOne, otherData, stepTwoData } = this;
      let newData = {
        base: [],
        otherInfo: [],
        personType: 1, //性别,
        operation_name: ""
      };
      newData.personType = otherData.sex;
      newData.operation_name = otherData.operation
        ? otherData.operation.operation_name
        : "";
      otherData.sex = otherData.sex == 1 ? "男" : "女";
      if (otherData.true_name) {
        //取第一部分数据
        stepOne.forEach(element => {
          newData.base.push({
            label: element.label,
            value: otherData[element.valueKey]
          });
        });
        //取第二部分数据
        stepTwoData.forEach(element => {
          if (element.dataKey == "menstrual") {
            newData.otherInfo.push({
              label: element.title,
              type: "menstrual",
              data: otherData[element.dataKey]
            });
          } else if (element.dataKey == "person") {
            newData.otherInfo.push({
              label: element.title,
              type: "person",
              data: otherData[element.dataKey]
            });
          } else {
            newData.otherInfo.push({
              label: element.title,
              type: "others",
              other: otherData[element.dataKey].other,
              data:
                otherData[element.dataKey].items != ""
                  ? otherData[element.dataKey].items.split(",")
                  : []
            });
          }
        });
      }
      return newData;
    }
  },
  methods: {
    getInfo(id) {
      this.dialogParam.visible = true;
      this.$api["GetHealthRecordDetail"]({
        health_record_id: id
      })
        .then(res => {
          this.otherData = res;
        })
        .catch(err => {
          this.$showMsg("获取数据失败!");
        });
    },
    // 确定回调事件
    submitForm(formName) {
      this.$refs.staffTable.refresh(1);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.healthRecord {
  .pdfUrl {
    height: 550px;
    width: 500px;
  }
  .searchResult {
    margin-bottom: 60px;
  }
}
.recorde {
  padding: 0 15px;
  .recordeTile {
    font-size: 30px;
    text-align: center;
    color: rgba(51, 51, 51, 1);
    margin-top: -10px;
    padding-bottom: 50px;
  }
  .baseInfo {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 50px;
  }
  .infoItem {
    // padding: 10px 0;
    display: flex;
    > .infoItemList {
      width: 100%;
      display: flex;
      .infoLabel {
        width: 120px;
      }
      .status {
        display: inline-block;
        vertical-align: middle;
      }
      .detail {
        display: inline-block;
        vertical-align: middle;

        .detailList {
          display: inline-block;
          vertical-align: middle;
          margin-right: 20px;
          margin-left: 20px;
          // .label {
          // }
          // .unit {
          // }
          .num {
            padding: 0 8px;
            border-bottom: 1px solid #eeeeee;
          }
        }
      }
    }

    .infoLabel {
      width: 100px;
      color: rgba(102, 102, 102, 1);
    }
    .infoContent {
      flex: 1;
      color: rgba(51, 51, 51, 1);
      padding-right: 95px;
      p {
        border-bottom: 1px solid #eeeeee;
        padding-bottom: 5px;
      }
      .noData {
        color: #eeeeee;
      }
    }
  }
  .otherInfo {
    line-height: 30px;
    .infoLabel {
      width: 60px;
    }
    .infoContent {
      .historyRecode {
        display: inline-block;
        margin-right: 15px;
      }
    }
    .othersData {
      padding: 0 8px;
      border-bottom: 1px solid #eeeeee;
    }
  }
}
</style>
