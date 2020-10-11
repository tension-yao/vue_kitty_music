/** 适配方案 `rem.js`，根据屏幕宽度与视口宽度计算出比例。在样式中可通过 `rem` 作为单位访问 */
function setRem() {
  // 设计图尺寸
  const designSize = screen.width

  // 窗口宽度
  const wW = document.documentElement.clientWidth || document.body.clientWidth

  const rem = wW * 100 / designSize;

  document.documentElement.style.fontSize = rem + 'px'
}
window.addEventListener('resize',setRem)

setRem()
