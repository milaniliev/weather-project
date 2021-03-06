

/*  current_temp:66,
  dayhigh:96,daylow:76,
  nighthigh:46,nightlow:20
}
 document.getElementById("currenttemp").textContent=weather.current_temp
 document.getElementById("dayhigh").textContent=weather.dayhigh
 document.getElementById("daylow").textContent=weather.daylow
 document.getElementById("nighthigh").textContent=weather.nighthigh
 document.getElementById("nightlow").textContent=weather.nightlow*/
 let button = document.getElementById("units-button")
 button.addEventListener("click",click_button)
 function click_button( )
  {
    let ctemprequest = new XMLHttpRequest()
      ctemprequest.open("get", "http://api.wunderground.com/api/a07415328ca83d66/conditions/q/ny/queens.json")
      ctemprequest.send( )
      ctemprequest.addEventListener("load",function()
        {
          let cur_temp = JSON.parse(ctemprequest.responseText)
          document.getElementById("curtempdegree").textContent=cur_temp.current_observation.temp_c
         } )
    let htemprequest = new XMLHttpRequest()
      htemprequest.open("get", "http://api.wunderground.com/api/a07415328ca83d66/hourly/q/ny/queens.json")
      htemprequest.send( )
      htemprequest.addEventListener("load",function()
        {
          let h_temp = JSON.parse(htemprequest.responseText)
          document.getElementById("next8degree").textContent=Number(h_temp.hourly_forecast[8].temp.metric)
          document.getElementById("next16degree").textContent=h_temp.hourly_forecast[16].temp.metric
        } )
  }
 let currentrequest = new XMLHttpRequest()
 currentrequest.open("get", "http://api.wunderground.com/api/a07415328ca83d66/conditions/q/ny/queens.json")
 currentrequest.send( )

 currentrequest.addEventListener("load",function()
  {
     let now_temp = JSON.parse(currentrequest.responseText)
     document.getElementById("curtempdegree").textContent=now_temp.current_observation.temp_f
     document.getElementById("date").textContent=now_temp.current_observation.observation_time_rfc822
  } )
 let hourlyrequest = new XMLHttpRequest()
 hourlyrequest.open("get", "http://api.wunderground.com/api/a07415328ca83d66/hourly/q/ny/queens.json")
 hourlyrequest.send( )
 hourlyrequest.addEventListener("load",function()
  {
     let hourly_temp = JSON.parse(hourlyrequest.responseText)
     document.getElementById("next8degree").textContent=Number(hourly_temp.hourly_forecast[8].temp.english)
     document.getElementById("next16degree").textContent=Number(hourly_temp.hourly_forecast[16].temp.english)
  } )
