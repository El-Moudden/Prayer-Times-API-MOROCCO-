function getTime(id){


axios.get(`http://api.aladhan.com/v1/timingsByCity?country=MA&city=${id}`)

.then(function (response) {

let timings = response.data.data.timings
let fajr = timings.Fajr
let sunrise =timings.Sunrise
let dhuhr = timings.Dhuhr
let asr = timings.Asr
let maghrib = timings.Maghrib
let isha = timings.Isha
  
let Prayers = document.querySelector(".Prayers")
      Prayers.innerHTML = ""
  
 let content = ` 
<div class="fajr box">
  <h3>الفجر</h3>
  <img src="https://timesprayer.com/images/fajr.svg" alt="">
  <p>${fajr}</p>
</div>
<div class="sunrise box">
  <h3>الشروق</h3>
  <img src="https://timesprayer.com/images/sunrise.svg" alt="">
  <p>${sunrise}</p>
</div>
<div class="dhuhr box">
  <h3>الظهر</h3>
  <img src="https://timesprayer.com/images/dhuhr.svg" alt="">
  <p>${dhuhr}</p>
</div>
<div class="asr box">
  <h3>العصر</h3>
  <img src="https://timesprayer.com/images/asr.svg" alt="">
  <p>${asr}</p>
</div>
<div class="maghrib box">
  <h3>المغرب</h3>
  <img src="https://timesprayer.com/images/maghrib.svg" alt="">
  <p>${maghrib}</p>
</div>
<div class="ishaa box">
  <h3>العشاء</h3>
  <img src="https://timesprayer.com/images/isha.svg" alt="">
  <p>${isha}</p>
</div>
  
          ` 
Prayers.innerHTML = content
  
let today = response.data.data.date.hijri.weekday.ar
let day = response.data.data.date.hijri.day
let month = response.data.data.date.hijri.month.ar
let year = response.data.data.date.hijri.year
  
  
  
    
  
let gregorian = new Date()
let monthsAr = ["يناير","فبراير","	مارس","أبريل","ماي" , "يونيو" , "يوليوز" , "غشت" , "شتنبر" , "أكتوبر" , "نونبر" , "دجنبر"]
gregorianMonth = gregorian.getMonth() + 1
gregorianDate = gregorian.getDate()
gregorianYear = gregorian.getFullYear()
  
document.querySelector(".today").innerHTML = `${today} ${day} ${month} ${year}  الموافق  ${gregorianDate}   ${monthsAr[gregorianMonth]} ${gregorianYear}`
  
  
    
  
  })
  .catch(function (error) {
    console.log(error);
  })

}



function getCity(id) {
  getTime(id)
}
 getCity()





let clock = document.querySelector(".clock");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let date = document.querySelector(".date");

function timeNow(){
    let nowClock = new Date()
    hours.innerHTML = nowClock.getHours().toString().padStart(2,"0") + ": ";
    minutes.innerHTML = nowClock.getMinutes().toString().padStart(2,"0") + ": ";
    seconds.innerHTML = nowClock.getSeconds().toString().padStart(2,"0") ;
    
   
  
}

setInterval(timeNow, 1000);
