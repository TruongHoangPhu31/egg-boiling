// document.querySelectorAll(".boil-sections a").forEach(link => {
//     link.addEventListener("click", function(event) {
//         event.preventDefault(); // Ngăn chặn hành động mặc định
//         const href = this.getAttribute("href");
//         window.open(href, "_blank");
//     });
// });
// // Lấy tham số từ URL
// const params = new URLSearchParams(window.location.search);
// const eggType = params.get("type");

// // Định nghĩa thời gian đếm ngược (giây) cho từng loại trứng
// const times = {
//     runny: 180,   // 3 phút
//     soft: 300,    // 5 phút
//     hard: 600,    // 10 phút
//     over: 900     // 15 phút
// };

// // Cập nhật tiêu đề loại trứng
// document.getElementById("egg-type").innerText = eggType ? eggType.replace(/^\w/, c => c.toUpperCase()) + " Egg" : "Unknown";

// // Cập nhật thời gian ban đầu
// let timeLeft = times[eggType] || 0;
// document.getElementById("timer").innerText = formatTime(timeLeft);

// let countdown;

// function startTimer() {
//     if (countdown) clearInterval(countdown); // Xóa timer cũ nếu có

//     countdown = setInterval(() => {
//         if (timeLeft > 0) {
//             timeLeft--;
//             document.getElementById("timer").innerText = formatTime(timeLeft);
//         } else {
//             clearInterval(countdown);
//             alert("Egg is ready!");
//         }
//     }, 1000);
// }

// // Định dạng thời gian hiển thị
// function formatTime(seconds) {
//     const min = Math.floor(seconds / 60);
//     const sec = seconds % 60;
//     return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
// }
