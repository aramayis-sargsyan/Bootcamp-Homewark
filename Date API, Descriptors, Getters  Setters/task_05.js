function getDay(day) {
  let arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day1 = new Date(day).getDay();
  console.log(day1);
  return arr[day1];
}
console.log(getDay("12/07/2016"));
