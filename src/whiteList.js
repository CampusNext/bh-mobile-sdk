/**
 * sdk 的控制白名单, 只有存在于白名单中的 api 能够被导出
 * 1. 控制能导出的 module
 * 2. 控制导出 module 里的内部 api
 */

export default {
  UI: {
    setNavHeader: true
  }
}