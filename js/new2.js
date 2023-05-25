const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

// 假设点击事件触发跳转到page2
function goToPage2() {
  page1.style.left = '-100%'; // 页面向左移动
  page2.style.left = '0';     // 页面从左侧进入
}
