var container_hour = document.querySelector(".container-hour"),
  container_minute = document.querySelector(".container-minute"),
  container_second = document.querySelector(".container-second");
// Tính số giây còn lại cho đến hết ngày
function secondsUntilEndOfDay() {
  const now = new Date();
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const seconds = Math.floor((endOfDay - now) / 1000);
  return seconds;
}

// Cập nhật hiển thị thời gian đếm ngược
function updateCountdown() {
  const seconds = secondsUntilEndOfDay();
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds - hours * 3600 - minutes * 60;

  // Kiểm tra nếu hết ngày thì dừng đếm ngược
  if (seconds === 0) {
    clearInterval(countdownTimer);
  }
  container_hour.innerHTML = hours;
  container_minute.innerHTML = minutes;
  container_second.innerHTML = remainingSeconds;
}

// Cập nhật hiển thị đếm ngược mỗi giây
setInterval(updateCountdown, 1000);
