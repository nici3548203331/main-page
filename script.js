// 实时更新时间和日期
function updateTime() {
    const now = new Date();
    // 时间格式化
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

    // 日期格式化（示例为固定格式，可扩展为动态）
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const weekArr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    const week = weekArr[now.getDay()];
    document.getElementById('date').textContent = `${year}年${month}月${day}日 ${week}`;
}

// 初始化并每秒更新时间
updateTime();
setInterval(updateTime, 1000);

// 搜索功能（示例，可扩展为跳转到对应搜索引擎）
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const searchEngine = document.querySelector('.search-engine');

searchBtn.addEventListener('click', () => {
    const keyword = searchInput.value.trim();
    if (!keyword) return;
    let url = '';
    if (searchEngine.value === 'bing') {
        url = `https://cn.bing.com/search?q=${encodeURIComponent(keyword)}`;
    } else {
        url = `https://www.google.com/search?q=${encodeURIComponent(keyword)}`;
    }
    window.open(url, '_blank');
});

// 回车触发搜索
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});
