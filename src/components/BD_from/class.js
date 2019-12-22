
/**
 * form参数设置
 */
class FormConfigClass {
  constructor({
    rules = null,
    inline = false,
    ref = 'ruleForm',
    labelWidth = '80px',
    size = 'default',
    labelPosition = 'right',
    okBtn = {
      label: "确 定",
      type: "primary"
    },
    noBtn = { label: "取 消" },
    disabled = false
  } = {}) {
    this.rules = rules
    this.inline = inline
    this.ref = ref
    this.labelWidth = labelWidth
    this.size = size
    this.labelPosition = labelPosition
    this.okBtn = okBtn
    this.noBtn = noBtn
    this.disabled = disabled
  }
}


export { FormConfigClass }