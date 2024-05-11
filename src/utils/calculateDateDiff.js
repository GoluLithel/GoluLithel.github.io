export default function calculateDateDiff(startDate, endDate) {

  let years = endDate.getFullYear() - startDate.getFullYear();

  let months;
  if (endDate.getMonth() < startDate.getMonth()) {
    months = (endDate.getMonth() + 12) - startDate.getMonth();
    years--;
  } else if (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate()) {
    years--;
  } else {
    months = endDate.getMonth() - startDate.getMonth();
  }
  if (endDate.getDate() < startDate.getDate()) {
    months--;
  }

  let difference = endDate - startDate;

  let diffSeconds = Math.floor(difference / 1000);
  let seconds = diffSeconds % 60;
  let diffMinutes = Math.floor(diffSeconds / 60);
  let minutes = diffMinutes % 60;
  let diffHours = Math.floor(diffMinutes / 60);
  let hours = diffHours % 24;
  let diffDays = Math.floor(diffHours / 24);
  let days = diffDays - (years * 365) - (months * 30);

  return { years, months, days, hours, minutes, seconds };
}