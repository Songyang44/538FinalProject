// 获取图片容器和解释框元素
var imageContainer = document.querySelector('.image-container.cat1');
var tooltip = imageContainer.querySelector('.tooltip');

// 监听鼠标移入事件
imageContainer.addEventListener('mouseenter', function() {
  // 显示解释框
  tooltip.style.display = 'block';
});

// 监听鼠标移出事件
imageContainer.addEventListener('mouseleave', function() {
  // 隐藏解释框
  tooltip.style.display = 'none';
});