/*
 * @Description: 下拉部分的数据
 * @Version: 1.1.0
 * @Autor: ranli
 * @Date: 2019-12-25 11:20:16
 * @LastEditors  : ranli
 * @LastEditTime : 2020-01-10 18:33:17
 */

function forData(data) {
  let newData = []
  data.forEach(element => {
    newData.push({
      label: element,
      value: element
    })
  });
  return newData
}
//性别:
let sexTypeData = [{
    label: "男",
    value: 1,
  },
  {
    label: "女",
    value: 2,
  },
]
//家庭关系
let relationshipTypeData = [
  "本人",
  "父亲",
  "母亲",
  "兄弟姐妹",
  "子女",
  "其他亲属",
]
//医保类别
let MedicalCategoryTypeData = [
  "城镇职工医保",
  "城镇居民医保",
  "新农合医保",
  "其他",
  "无",
]

// 血型
let BloodTypeData = [
  "A型",
  "B型",
  "O型",
  "AB型",
  "RH阳性",
  "RH阴性",
]
//民族
let nationTypeData = [
  "汉族",
  "彝族",
  "藏族",
  "羌族",
  "其他少数民族",
]
//婚姻
let marrageTypeData = [
  "已婚",
  "未婚",
  "离异",
  "丧偶",
]
//学历
let EducationTypeData = [
  "小学",
  "初中",
  "高中/中专/中技",
  "大专",
  "本科",
  "硕士",
  "博士及博士后",
]

let OccupationTypeData = [
  "国家公务员",
  "专业技术人员",
  "职员",
  "企业管理人员",
  "工人",
  "农民",
  "学生",
  "现役军人",
  "自由职业者",
  "个体经营户",
  "无业人员",
  "退（离）休人员",
  "其他",
]
let complayTypeData = [
  "极阈健康科技有限公司",
  "无",
]
//过敏类
let allergyData = [
  '青霉素',
  // '碘胺类',
  '链霉素',
  '头孢类',
  '鸡蛋',
  '牛奶',
  '海鲜',
  '花粉或尘螨',
  '粉尘',
  '化妆品',
  '洗洁剂',
  '磺胺',
]
//药物类
let medicationData = [
  '降糖药',
  '降脂药',
  '降药酸药',
  '抗心律失常药',
  '缓解哮喘药',
  '解热镇痛药',
  '强的松类药物',
  '雌激素类药物',
  '利尿剂',
  '镇静剂或安眠药',
  '中草药',
  '避孕药',
  '抗抑郁药物',
  '降压药',
]
let OperationData = [
  '脑部',
  '眼',
  '耳鼻喉',
  '颌面部和口腔',
  '颈部或甲状腺',
  '胸部（含肺部）',
  '心脏',
  '外周血管',
  '胃肠',
  '肝胆',
  '肾脏',
  '脊柱',
  '四肢及关节',
  '膀胱',
  '妇科',
  '前列腺',
]
//现在的病史
let nowIllnessData = [
  '高血压病',
  '冠心病',
  '糖尿病',
  '慢性肾脏疾病',
  '慢性阻塞性肺病',
  '脑卒中',
  '外周血管病',
  '脂肪肝',
  '慢性胃炎或胃溃疡',
  '幽门螺杆菌感染',
  '胃息肉',
  '肠道息肉',
  '结核病',
  '慢性肝炎或肝硬化',
  '慢性胆囊炎、胆结石',
  '哮喘',
  '慢性胰腺炎',
  '类风湿性关节炎',
  '前列腺炎或肥大',
  '慢性乳腺疾病',
  '血脂异常',
  '尿酸升高',
  '恶性肿瘤',
  '人乳头瘤病毒（HPV）感染',
]
//家族病史
let familyIllnessData = [
  '高血压病',
  '冠心病',
  '糖尿病',
  '慢性肾脏疾病',
  '慢性阻塞性肺病',
  '脑卒中',
  '外周血管病',
  '心力衰竭',
  '骨质疏松',
  '风湿免疫性疾病',
  '痛风',
  '肥胖症',
  '高血脂',
]
let selectData = {
  sexType: sexTypeData,
  //家庭关系
  relationshipType: forData(relationshipTypeData),
  // 医保类别
  MedicalCategoryType: forData(MedicalCategoryTypeData),
  //血型
  BloodType: forData(BloodTypeData),
  //民族
  nationType: forData(nationTypeData),
  //婚姻
  marrageType: forData(marrageTypeData),
  //学历
  EducationType: forData(EducationTypeData),
  //职业
  OccupationType: forData(OccupationTypeData),
  //任职企业
  complayType: forData(complayTypeData),
  //过敏史
  allergy: forData(allergyData),
  //药物
  medication: forData(medicationData),
  //手术
  Operation: forData(OperationData),
  nowIllness: forData(nowIllnessData),
  familyIllness: forData(familyIllnessData),
}
export default selectData