
/**
 * form参数设置
 */
class DialogConfigClass {
  constructor({
    visible = false,
    title = "提 示",
    width = "50%",
    okBtn = new BtnConfigClass(),
    noBtn = new BtnConfigClass({ label: '取 消', type: 'default' }),
    beforeClose = null,
    align = 'left',
    btnSize = '',
    fullscreen = false,
    top = '15vh',
    modal = true,
    lockScroll = true,
    customClass = '',
    closeOnClickModal = false,
    closeOnPressEscape = false,
    showClose = true,
    center = false,
    destroyOnClose = false
  } = {}) {
    this.visible = visible
    this.title = title
    this.width = width
    this.okBtn = okBtn
    this.noBtn = noBtn
    this.beforeClose = beforeClose
    this.align = align
    this.btnSize = btnSize
    this.fullscreen = fullscreen
    this.top = top
    this.modal = modal
    this.lockScroll = lockScroll
    this.customClass = customClass
    this.closeOnClickModal = closeOnClickModal
    this.closeOnPressEscape = closeOnPressEscape
    this.showClose = showClose
    this.center = center
    this.destroyOnClose = destroyOnClose
  }
}

/**
 * 按钮基础配置
 * 
 */

class BtnConfigClass {
  constructor({
    label = '确 定',
    type = 'primary',
    show = true,
    plain = false,
    round = false,
    circle = false,
    loading = false,
    disabled = false,
    icon = '',
  } = {}) {
    this.label = label
    this.type = type
    this.show = show
    this.plain = plain
    this.round = round
    this.circle = circle
    this.loading = loading
    this.disabled = disabled
    this.icon = icon
  }
}

export { DialogConfigClass, BtnConfigClass }