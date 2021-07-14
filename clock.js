setInterval(showTime,1000)
function showTime(){
   options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  var date=new Date()
  var tithi=date.toLocaleDateString("en-UK",{timezone:"GMT-05:30"} ,options)
  
  var hr=date.getHours()
  var min=date.getMinutes()
  var sec=date.getSeconds()
  if (hr>10) {
    hr= ""+hr;
  }
  else if (hr==24) {
  hr=00;
  }
  else {
  hr= " 0 " +hr;
  }
  if (min>=10) {
  min=""+min;
  }
  else {
  min= "0" + min;
  }
  if (sec>=10) {
  sec= ""+sec;
  }
  else {
  sec="0"+sec;
  }
var currentTime=hr + ":" + min + ":" + sec +" hours "

document.getElementById('time').innerHTML=currentTime+"<br>on "+ tithi;
}