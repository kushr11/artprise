// 保存数据
function saveData() {
    localStorage.setItem('coin', coin);
    localStorage.setItem('artprise', artprise);
}

// 读取数据
function loadData() {
    coin = parseInt(localStorage.getItem('coin')) || 0;
    artprise = parseInt(localStorage.getItem('artprise')) || 0;
}
function showPage(pageId) {
    document.querySelectorAll('.container').forEach(container => {
        container.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// 在页面加载时读取数据
window.onload = function() {
    loadData();
    showPage('daily-events');
};

function completeDailyEvent() {
    if (!dailyEventCompleted) {
        coin += 10; // 假设每日事件奖励10个coin
        dailyEventCompleted = true;
        alert('完成每日事件，获得10个coin！');
    } else {
        alert('每日事件已完成，请明天再来！');
    }
}

function completeLongTermEvent() {
    coin += 20; // 假设长期事件奖励20个coin
    alert('完成长期事件，获得20个coin！');
}

function purchaseArtprise() {
    const quantity = prompt('请输入购买数量:');
    const totalCost = quantity * 5;
    if (totalCost <= coin) {
        artprise += Number(quantity);
        coin -= totalCost;
        alert(`成功购买 ${quantity} 个artprise！`);
    } else {
        alert('coin不足，无法购买！');
    }
}

function retrieveArtprise() {
    const quantity = prompt('请输入取回数量:');
    if (quantity <= artprise) {
        artprise -= Number(quantity);
        coin += quantity * 5;
        alert(`成功取回 ${quantity} 个artprise！`);
    } else {
        alert('artprise不足，无法取回！');
    }
}

document.getElementById('complete-daily-event').addEventListener('click', completeDailyEvent);
showPage('daily-events');