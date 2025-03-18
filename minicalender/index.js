 const monthNameEl = document.getElementById("month-name");
 const dayNameEl =document.getElementById("day-name");
 const dayNumberEl=document.getElementById("day-number");
const yearEL =document.getElementById("year");
const date = new Date();
// console.log(date.getMonth);
const month=date.getMonth();

monthNameEl.innerText = date.toLocaleDateString("en",{month:"long"});

dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long",
  });
  
  dayNumberEl.innerText = date.getDate();
  
  yearEL.innerText = date.getFullYear();