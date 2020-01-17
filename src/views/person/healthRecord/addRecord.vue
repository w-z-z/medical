<!--
 * @Description: 文件描述
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-24 10:29:31
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-14 09:30:26
 -->
<template>
  <div ref="addOreditRecord"
    v-loading="loading"
    class="addOreditRecord">
    <div class="header">
      <p class="title">{{isAdd?'新建':'编辑'}}健康档案</p>
      <p v-if="isAdd"
        class="desc">（请您仔细填写下列信息）</p>
    </div>
    <div class="fromTabBox">
      <div v-if="isAdd"
        class="fromTab">
        <div class="fromTabShaow"></div>
        <!-- 假的进度条 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="第一步 填写基本信息"
            name="1"></el-tab-pane>
          <el-tab-pane label="第二步 填写健康史"
            name="2"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="firstStep">
        <el-form :model="baseFrom"
          :rules="rules"
          ref="baseFrom"
          label-width="110px"
          label-position="left"
          class="baseFrom">
          <!-- 第一步 -->
          <div class="step1"
            v-if="activeName=='1'">
            <div v-for="(item,index) in stepOne"
              :key="index">
              <div v-if="item.type=='input'">
                <el-form-item :label="item.label"
                  :prop="item.valueKey">
                  <el-input :disabled="item.disabled"
                    :maxlength="item.maxLength"
                    :placeholder="'请输入'+item.label"
                    v-model.trim="baseFrom[item.valueKey]"></el-input>
                </el-form-item>
              </div>
              <div v-if="item.type=='date'">
                <el-form-item :label="item.label"
                  :prop="item.valueKey">
                  <el-date-picker v-model="baseFrom[item.valueKey]"
                    type="date"
                    :picker-options="pickerDisabled"
                    value-format="timestamp"
                    :placeholder="'请选择'+item.label"></el-date-picker>
                </el-form-item>
              </div>
              <div v-if="item.type=='select'">
                <el-form-item :label="item.label"
                  :prop="item.valueKey">
                  <el-select v-model="baseFrom[item.valueKey]"
                    :placeholder="'请选择'+item.label">
                    <el-option v-for="(item,index) in item.options"
                      :key="index"
                      :label="item.label"
                      :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </div>
          <!-- 第二步 -->
          <div v-if="!isAdd||activeName=='2'"
            class="step2">
            <div v-for="(item,index) in stepTwoData "
              :key="index"
              class="sectionInfo">
              <div v-if="item.type=='psersonal'">
                <div class="titleInfo">
                  <h3>{{item.title}}</h3>
                  <p>{{item.decs}}</p>
                </div>
                <div class="psersonalFrom">
                  <div>
                    <p>(1) 您是否吸烟？</p>
                    <el-form-item label
                      prop="person.have">
                      <el-radio-group v-model="baseFrom.person.have">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                      </el-radio-group>
                      <div v-if="baseFrom.person.have=='是'"
                        class="isChoose">
                        <el-form-item label="吸烟多少年？"
                          prop="person.smoking_year">
                          <el-input size="mini"
                            v-model.trim="baseFrom.person.smoking_year"></el-input>
                          <span>&nbsp;年</span>
                        </el-form-item>
                        <el-form-item label="每天吸烟多少支？"
                          prop="person.smoking_num">
                          <el-input size="mini"
                            v-model.trim="baseFrom.person.smoking_num"></el-input>
                          <span>&nbsp;支</span>
                        </el-form-item>
                      </div>
                    </el-form-item>
                  </div>
                  <div>
                    <p>(2) 您是否饮酒？</p>
                    <el-form-item label
                      prop="person.drink">
                      <el-radio-group v-model="baseFrom.person.drink">
                        <el-radio label="从不饮酒"></el-radio>
                        <el-radio label="经常饮酒"></el-radio>
                        <el-radio label="偶尔饮酒"></el-radio>
                      </el-radio-group>
                      <div v-if="baseFrom.person.drink=='经常饮酒'||baseFrom.person.drink=='偶尔饮酒'"
                        class="isChoose">
                        <el-form-item label="每天饮酒量"
                          prop="person.drink_num">
                          <el-input size="mini"
                            v-model.trim="baseFrom.person.drink_num"></el-input>
                          <span>{{baseFrom.person.drink_unit}}</span>
                          <el-select size="mini"
                            class="unit"
                            v-model="baseFrom.person.drink_unit">
                            <el-option label="斤"
                              value="斤"></el-option>
                            <el-option label="两"
                              value="两"></el-option>
                            <el-option label="瓶"
                              value="瓶"></el-option>
                          </el-select>
                        </el-form-item>
                      </div>
                    </el-form-item>
                  </div>
                </div>
              </div>
              <div v-if="item.type=='Menstrual'&&baseFrom.sex!=1">
                <div class="titleInfo">
                  <h3>{{item.title}}</h3>
                  <p>{{item.decs}}</p>
                </div>
                <div class="MenstrualBox">
                  <el-form-item label="月经周期(天)"
                    prop="menstrual.menstrual_cycle">
                    <el-input size="mini"
                      v-model.trim="baseFrom.menstrual.menstrual_cycle"></el-input>
                  </el-form-item>
                  <div class="inlineFrom">
                    <el-form-item label="首次月经时间"
                      prop="menstrual.first_menstrual_time">
                      <el-date-picker size="mini"
                        v-model="baseFrom.menstrual.first_menstrual_time"
                        type="date"
                        :picker-options="pickerDisabled"
                        value-format="timestamp"
                        placeholder="请选择首次月经时间"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="末次月经时间"
                      prop="menstrual.last_menstrual_time">
                      <el-date-picker size="mini"
                        v-model="baseFrom.menstrual.last_menstrual_time"
                        type="date"
                        :picker-options="pickerDisabled"
                        value-format="timestamp"
                        placeholder="请选择末次月经时间"></el-date-picker>
                    </el-form-item>
                  </div>
                  <el-form-item label="育有儿女(个)"
                    prop="menstrual.children_num">
                    <el-input size="mini"
                      v-model.trim="baseFrom.menstrual.children_num"></el-input>
                  </el-form-item>
                </div>
              </div>
              <div v-else-if="item.type=='select'">
                <div class="titleInfo">
                  <h3>{{item.title}}</h3>
                  <p>{{item.decs}}</p>
                </div>
                <div class="infoContent">
                  <el-checkbox-group class="coustomCheckbox"
                    v-model="baseFrom[item.dataKey].items">
                    <el-checkbox v-for="iy in item.checkData"
                      :label="iy.label"
                      :key="iy.value">{{iy.label}}</el-checkbox>
                  </el-checkbox-group>
                  <div v-if="item.hasTumour"
                    class="Other">
                    <div class="OtherChecked">
                      <el-checkbox v-model="baseFrom[item.dataKey].tumourStatus">恶性肿瘤</el-checkbox>
                    </div>
                    <div v-if="baseFrom[item.dataKey].tumourStatus"
                      class="OtherInput">
                      <el-form-item label
                        label-width="0"
                        style="margin-bottom:0"
                        :prop="`${item.dataKey}`.tumour">
                        <el-input size="mini"
                          placeholder="恶性肿瘤"
                          v-model="baseFrom[item.dataKey].tumour"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                  <!-- 其他 -->
                  <div class="Other">
                    <div class="OtherChecked">
                      <el-checkbox v-model="baseFrom[item.dataKey].otherStatus">其他</el-checkbox>
                    </div>
                    <div v-if="baseFrom[item.dataKey].otherStatus"
                      class="OtherInput">
                      <el-form-item label-width="0"
                        style="margin-bottom:0"
                        label
                        :prop="`${item.dataKey}`.other">
                        <el-input size="mini"
                          placeholder="其他"
                          v-model="baseFrom[item.dataKey].other"></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </div>
                <div class="opreationS"
                  v-if="item.hasMoreData">
                  <div class="titleInfo">
                    <p>(2)手术名称是？</p>
                  </div>
                  <div class="infoContent">
                    <el-form-item label
                      prop='operation.operation_name'>
                      <el-input :autosize="{ minRows: 5, maxRows:8}"
                        type="textarea"
                        v-model="baseFrom[item.dataKey].operation_name"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="save"
            v-if="isAdd">
            <el-form-item>
              <el-button v-if="activeName=='2'"
                type="primary"
                @click="backStep1('baseFrom')">上一步</el-button>
              <el-button type="primary"
                @click="submitForm('baseFrom')">{{activeName=='2'?'新建档案':"下一步"}}</el-button>
            </el-form-item>
          </div>
          <div class="save"
            v-else>
            <el-form-item>
              <el-button type="primary"
                @click="editRecord('baseFrom')">保存修改</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>

    <!-- 文档数据 -->
  </div>
</template>
<script>
import selectData from "@/utils/selectData.js";
import { validate } from "@/utils/validate";
import { mapGetters } from "vuex";
export default {
  name: "addOreditRecord",
  data() {
    return {
      isIndeterminate: true,
      activeName: "1",
      // isAdd: true, //添加/false//编辑
      ...selectData,
      // 表单基础参数
      loading: false,
      pickerDisabled: {
        disabledDate: time => {
          return time.getTime() > new Date().getTime();
        }
      },
      baseFrom: {
        true_name: "",
        medical_insurance: "",
        sex: "",
        age: "",
        nation: "",
        birthday: "",
        marriage: "",
        height: "",
        weight: "",
        education: "",
        blood_type: "",
        profession: "",
        id_card: "",
        address: "",
        mobile: "",
        relation: "",
        family: {
          items: [],
          tumourStatus: false,
          tumour: "",
          other: "",
          otherStatus: false
        },
        current: {
          items: [],
          other: "",
          otherStatus: false
        },
        drug: {
          items: [],
          other: "",
          otherStatus: false
        },
        allergy: {
          items: [],
          other: "",
          otherStatus: false
        },
        operation: {
          items: [],
          other: "",
          otherStatus: false,
          operation_name: ""
        },
        menstrual: {
          children_num: "",
          first_menstrual_time: "",
          last_menstrual_time: "",
          menstrual_cycle: ""
        },
        person: {
          drink: "从不饮酒",
          drink_num: "",
          drink_unit: "两",
          have: "否",
          smoking_num: "",
          smoking_year: ""
        }
      },
      rules: {
        true_name: [
          validate.verifyRequired("请输入姓名"),
          { validator: validate.verifyChinsesName, trigger: "submit" }
        ],
        // medical_insurance: [validate.verifyRequired("请选择医保类别")],
        sex: [validate.verifyRequired("请选择性别")],
        age: [validate.verifyRequired("请选择生日")],
        // nation: [validate.verifyRequired("请选择民族")],
        birthday: [validate.verifyRequired("请选择生日")],
        // marriage: [validate.verifyRequired("请选择婚姻状况")],
        height: [
          validate.verifyRequired("请输入身高"),
          { validator: validate.verifyIsdecimal, trigger: "submit" }
        ],
        weight: [
          validate.verifyRequired("请输入体重"),
          { validator: validate.verifyIsdecimal, trigger: "submit" }
        ],
        // education: [validate.verifyRequired("请选择学历")],
        blood_type: [validate.verifyRequired("请选择血型")],
        // profession: [validate.verifyRequired("请选择职业")],
        id_card: [
          validate.verifyRequired("请输入身份证"),
          { validator: validate.verifyIdcard, trigger: "submit" }
        ],
        // address: [validate.verifyRequired("请输入常住地址")],
        mobile: [
          validate.verifyRequired("请输入手机号"),
          { validator: validate.verifyPhone, trigger: "submit" }
        ],
        relation: [validate.verifyRequired("请选择关系")]
      },
      stepOne: [
        {
          label: "真实姓名",
          valueKey: "true_name",
          type: "input",
          maxLength: "20"
        },
        {
          label: "性别",
          valueKey: "sex",
          type: "select",
          maxLength: "20",
          options: selectData.sexType
        },
        {
          label: "生日",
          valueKey: "birthday",
          type: "date",
          maxLength: "20"
        },
        {
          label: "身高(cm)",
          valueKey: "height",
          type: "input",
          maxLength: "20"
        },
        {
          label: "年龄",
          valueKey: "age",
          disabled: true,
          type: "input",
          maxLength: "20"
        },

        {
          label: "体重(kg)",
          valueKey: "weight",
          type: "input",
          maxLength: "20"
        },
        {
          label: "身份证号",
          valueKey: "id_card",
          type: "input",
          maxLength: "18"
        },

        {
          label: "手机号码",
          valueKey: "mobile",
          type: "input",
          maxLength: "11"
        },
        {
          label: "血型",
          valueKey: "blood_type",
          type: "select",
          maxLength: "20",
          options: selectData.BloodType
        },
        {
          label: "与本人关系",
          valueKey: "relation",
          type: "select",
          maxLength: "20",
          options: selectData.relationshipType
        },

        {
          label: "医保类别",
          valueKey: "medical_insurance",
          type: "select",
          maxLength: "20",
          options: selectData.MedicalCategoryType
        },

        {
          label: "民族",
          valueKey: "nation",
          type: "select",
          maxLength: "20",
          options: selectData.nationType
        },
        {
          label: "常住地址",
          valueKey: "address",
          type: "input",
          maxLength: "50"
        },
        {
          label: "学历",
          valueKey: "education",
          type: "select",
          maxLength: "20",
          options: selectData.EducationType
        },

        {
          label: "婚姻",
          valueKey: "marriage",
          type: "select",
          maxLength: "20",
          options: selectData.marrageType
        },
        {
          label: "职业",
          valueKey: "profession",
          type: "select",
          maxLength: "20",
          options: selectData.OccupationType
        }
      ],
      stepTwoData: [
        {
          title: "个人史",
          type: "psersonal",
          decs: "",
          dataKey: "psersonal"
        },
        {
          title: "现有疾病",
          type: "select",
          decs: "",
          checkData: selectData.nowIllness,
          dataKey: "current"
        },
        {
          title: "手术史",
          type: "select",
          dataKey: "operation",
          decs: "(1)若您做过手术，手术的部位是？",
          checkData: selectData.Operation,
          hasMoreData: true
        },
        {
          title: "过敏史",
          type: "select",
          decs: "",
          dataKey: "allergy",
          checkData: selectData.allergy
        },
        {
          title: "月经及生育史",
          type: "Menstrual",
          decs: "",
          dataKey: "Menstrual"
        },
        {
          title: "用药史",
          type: "select",
          dataKey: "drug",
          decs:
            "若您长期服用药物（连续服用6个月以上，平均每日服用1次以上）药物名称是？",
          checkData: selectData.medication
        },
        {
          title: "家族史",
          type: "select",
          decs: "您的父母或兄弟姐妹患有明确诊断的疾病的名称是",
          checkData: selectData.familyIllness,
          hasTumour: true,
          dataKey: "family"
        }
      ]
    };
  },
  components: {},
  beforeDestroy() {
    this.loading = false;
    this.resetForm("baseFrom");
  },
  watch: {
    $route(val) {
      if (val.name == "addRecord") {
        this.resetForm("baseFrom");
      } else {
        this.getRecordInfo(this.$route.params.id);
      }
    },
    "baseFrom.birthday"(value) {
      this.baseFrom.age = this.$getAge(value);
    },
    activeName(newVal, oldVal) {
      if (newVal === "2") {
        document.getElementsByClassName("addOreditRecord")[0].scrollTo(0, 0);
      }
    }
  },
  methods: {
    transFromString(text, type) {
      //1 num->string
      //2 string=>num
      let _str = text;
      if (type == 1) {
        if (text == 0) {
          _str = "";
        }
      } else if (type == 2) {
        _str = Number(text);
      }
      return _str;
    },
    // 新增
    submitForm(formName) {
      if (this.activeName == "1") {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.activeName = "2";
            this.$backTop();
          } else {
            return false;
          }
        });
      } else {
        this.addHealthRecord(formName);
      }
    },
    //转义提交的数据
    transfromData(obj) {
      let FromData = this._.cloneDeep(obj);
      FromData["birthday"] = FromData["birthday"] / 1000;
      FromData["height"] = Number(FromData["height"]);
      FromData["weight"] = Number(FromData["weight"]);

      //person
      FromData["person"].have = FromData["person"].have == "是" ? 1 : 2;
      if (FromData["person"].have == 2) {
        FromData["person"].smoking_num = 0;
        FromData["person"].smoking_year = 0;
      } else {
        FromData["person"].smoking_num = Number(FromData["person"].smoking_num);
        FromData["person"].smoking_year = Number(
          FromData["person"].smoking_year
        );
      }
      if (FromData["person"].drink == "从不饮酒") {
        FromData["person"].drink_num = 0;
      } else {
        FromData["person"].drink_num = Number(FromData["person"].drink_num);
      }
      // menstrual
      if (FromData.sex == 2) {
        FromData["menstrual"].first_menstrual_time =
          FromData["menstrual"].first_menstrual_time / 1000;
        FromData["menstrual"].last_menstrual_time =
          FromData["menstrual"].last_menstrual_time / 1000;
        FromData["menstrual"].children_num = Number(
          FromData["menstrual"].children_num
        );
        FromData["menstrual"].menstrual_cycle = Number(
          FromData["menstrual"].menstrual_cycle
        );
      } else {
        FromData["menstrual"] = {
          menstrual_cycle: 0,
          first_menstrual_time: 0,
          last_menstrual_time: 0,
          children_num: 0
        };
      }

      // allergy
      let _data = ["allergy", "current", "drug", "family", "operation"];
      _data.forEach(element => {
        let _items = Array.isArray(FromData[element].items)
          ? FromData[element].items
          : [];
        FromData[element].items = this._.compact(_items).join(",");
        if (!FromData[element].otherStatus) {
          FromData[element].other = "";
        }
        if (!FromData[element].tumourStatus) {
          FromData[element].tumour = "";
        }
      });
      return FromData;
    },
    //添加健康档案
    addHealthRecord(formName) {
      this.loading = true;
      let FromData = this.transfromData(this.baseFrom);
      this.$api["CreateHealthRecord"](FromData)
        .then(res => {
          this.$showMsg("添加成功", 3);
          let newPerson = this._.cloneDeep(this.userInfo);
          newPerson.personInfo.has_health_record = 1;
          this.$store.dispatch("INCREMENT_CHANGEUSERINFO", newPerson);
          this.$router.push({
            name: "healthRecordList"
          });
        })
        .catch(err => {
          this.loading = false;
          this.$showMsg("添加失败");
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.clearOtherData();
    },
    backStep1(formName) {
      // this.$refs[formName].resetFields();
      this.activeName = "1";
    },
    //编辑
    editRecord(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          let FromData = this.transfromData(this.baseFrom);
          this.$api["UpdateHealthRecord"](FromData)
            .then(res => {
              this.$showMsg("编辑成功", 3);
              this.$router.push({
                name: "healthRecordList"
              });
            })
            .catch(err => {
              this.loading = false;
              this.$showMsg("编辑失败");
            });
        } else {
          return false;
        }
      });
    },
    clearOtherData() {
      let { baseFrom } = this;

      baseFrom.family = {
        items: [],
        tumourStatus: false,
        tumour: "",
        other: "",
        otherStatus: false
      };
      baseFrom.current = {
        items: [],
        other: "",
        otherStatus: false
      };

      baseFrom.drug = {
        items: [],
        other: "",
        otherStatus: false
      };

      baseFrom.allergy = {
        items: [],
        other: "",
        otherStatus: false
      };

      baseFrom.operation = {
        items: [],
        other: "",
        otherStatus: false,
        operation_name: ""
      };

      baseFrom.menstrual = {
        children_num: "",
        first_menstrual_time: "",
        last_menstrual_time: "",
        menstrual_cycle: ""
      };
      baseFrom.person = {
        drink: "从不饮酒",
        drink_num: "",
        drink_unit: "两",
        have: "否",
        smoking_num: "",
        smoking_year: ""
      };
      // let dataKys = ["allergy", "current", "drug", "family", "operation"];

      // dataKys.map(item => {
      //   baseFrom[item].items = [];
      //   // baseFrom[item].tumourStatus = false;
      //   // baseFrom[item].tumour = "";
      //   // baseFrom[item].other = "";
      //   // baseFrom[item].otherStatus = false;
      //   // if (baseFrom[item].operation_name) {
      //   //   baseFrom[item].operation_name = "";
      //   // }
      // });
      // console.log(baseFrom);
    },
    //初始化获取到的数据
    initData(res) {
      let newFrom = {};
      let dataKys = ["allergy", "current", "drug", "family", "operation"];
      for (let key in res) {
        if (dataKys.indexOf(key) != -1) {
          let obj = {
            items: res[key].items.trim().split(","),
            otherStatus: false,
            other: res[key].other,
            operation_name: res[key].operation_name
          };

          if (res[key].other) {
            obj.otherStatus = true;
          }
          if (key == "family") {
            if (res[key].tumour) {
              obj.tumourStatus = true;
              obj.tumour = res[key].tumour;
            } else {
              obj.tumourStatus = false;
              obj.tumour = "";
            }
          }
          newFrom[key] = obj;
        } else if (key == "person") {
          let m = this._.cloneDeep(res[key]);
          m.have = m.have == 1 ? "是" : "否";
          // console.log(m.have);
          m.drink_num = this.transFromString(m.drink_num, 1);
          m.smoking_num = this.transFromString(m.smoking_num, 1);
          m.smoking_year = this.transFromString(m.smoking_year, 1);
          m.drink_num = this.transFromString(m.drink_num, 1);
          m.drink_unit = m.drink_unit ? m.drink_unit : "两";
          m.drink = m.drink ? m.drink : "从不饮酒";
          newFrom[key] = m;
        } else if (key == "menstrual") {
          let m = this._.cloneDeep(res[key]);
          m.first_menstrual_time = this.transFromString(
            m.first_menstrual_time * 1000,
            1
          );
          m.last_menstrual_time = this.transFromString(
            m.last_menstrual_time * 1000,
            1
          );
          m.children_num = this.transFromString(m.children_num, 1);
          m.menstrual_cycle = this.transFromString(m.menstrual_cycle, 1);
          newFrom[key] = m;
        } else {
          if (key == "birthday") {
            newFrom["birthday"] = res[key] * 1000;
          } else {
            newFrom[key] = res[key];
          }
        }
      }
      return newFrom;
    },
    //编辑获取数据
    getRecordInfo(id) {
      this.loading = true;
      this.$api["GetHealthRecordDetail"]({
        health_record_id: id
      })
        .then(res => {
          this.baseFrom = this.initData(res);
          this.loading = false;
        })
        .catch(err => {
          this.$showMsg("获取数据失败!");
          this.loading = false;
        });
    }
  },
  created() {
    this.$nextTick(() => {
      this.resetForm("baseFrom");
      let { personInfo } = this.userInfo;
      if (personInfo.has_health_record == 0) {
        this.baseFrom.true_name = personInfo.true_name;
        this.baseFrom.sex = this.transFromString(personInfo.sex, 1);
        this.baseFrom.birthday = this.transFromString(
          personInfo.birthday * 1000,
          1
        );
        this.baseFrom.weight = this.transFromString(personInfo.weight, 1);
        this.baseFrom.height = this.transFromString(personInfo.height, 1);
        this.baseFrom.mobile = personInfo.mobile;
      }
    });
    if (this.$route.params.id) {
      this.getRecordInfo(this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
    isAdd() {
      if (this.$route.params.id) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.save {
  margin-top: 50px;
}
.addOreditRecord {
  background-color: white;
  padding: 50px 100px;
  border-radius: 10px;
  margin-bottom: 50px;
  .title {
    text-align: center;
    font-size: 30px;
    color: rgba(51, 51, 51, 1);
  }
  .desc {
    font-size: 12px;
    text-align: center;
    color: rgba(150, 153, 166, 1);
    margin: 27px 0 21px 0;
  }
  .fromTabBox {
    text-align: center;
    position: relative;
    .fromTab {
      margin: 0 auto;
      width: 300px;
    }
    .fromTabShaow {
      position: absolute;
      height: 100px;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 3;
    }
    .firstStep {
      padding-top: 60px;
      .step1 {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-auto-rows: 60px;
        align-items: start;
        // grid-row-gap: 20px;
        grid-column-gap: 40px;
      }
      .step2 {
        text-align: left;
        .sectionInfo {
          > div {
            padding: 50px 0;
            border-bottom: 2px solid rgba(0, 0, 0, 0.12);
          }
          &:last-child {
            border-bottom: none;
          }
          &:first-child {
            padding-top: 0;
          }
          .infoContent {
            padding: 10px 20px;
            .Other {
              display: grid;
              grid-template-columns: 100px 320px;
              justify-items: start;
              align-items: end;
              margin-bottom: 10px;
              align-items: center;
            }
          }
        }
        .titleInfo {
          line-height: 30px;
          margin: 10px 0;
          h3 {
            font-size: 16px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
          p {
            color: rgba(85, 85, 85, 1);
          }
        }

        .coustomCheckbox {
          display: grid;
          grid-template-columns: repeat(5, 20%);
          grid-auto-rows: 50px;
        }
      }
    }
  }
}
</style>
<style lang='less'>
.psersonalFrom {
  .el-form-item__content {
    margin-left: 20px !important;
  }
  .el-form-item__label {
    display: inline-block;
    width: 150px !important;
  }
  .el-input {
    display: inline-block;
    width: 100px;
    margin-right: 20px;
  }
  .unit {
    display: inline-block;
    width: 50px;
    .el-input {
      width: 40px;
    }
  }
}
.MenstrualBox {
  padding-left: 20px;
  .el-form-item__content {
    width: 150px;
  }
  .inlineFrom {
    .el-form-item {
      width: 320px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
.opreationS {
  .el-form-item__content {
    margin-left: 0 !important;
  }
}
</style>