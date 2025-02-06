document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const eggType = params.get('type');

    if (eggType) {
        document.getElementById('egg-type').textContent =
            eggType.charAt(0).toUpperCase() + eggType.slice(1) + " Yolk";
    }

    let timeLeft = 0;
    let timer;
    const gif = document.getElementById('egg-gif'); // Lấy phần tử ảnh GIF

    if (eggType === 'runny') {
        timeLeft = 4 * 60;
    } else if (eggType === 'soft') {
        timeLeft = 7 * 60;
    } else if (eggType === 'hard') {
        timeLeft = 10 * 60;
    } else if (eggType === 'over') {
        timeLeft = 12 * 60;
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startTimer() {
        if (timer) clearInterval(timer);
        gif.style.display = "block"; // Hiển thị ảnh GIF khi bắt đầu đếm

        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Time's up!");
                gif.style.display = "none"; // Ẩn GIF khi hết thời gian
                return;
            }

            timeLeft--;
            updateTimerDisplay();
        }, 1000);
    }

    document.querySelector("button").addEventListener("click", startTimer);
    updateTimerDisplay();
});
