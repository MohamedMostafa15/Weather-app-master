
let info;
var d = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let search= document.getElementById('search')
search.value="Egypt"



function searchCountery()
{
 c=search.value


async function weatherInfo()
{
    
    
     myRes = await  fetch(`http://api.weatherapi.com/v1/forecast.json?key=fab3cf3aebc441ac84b142600210305&q=${search.value}&days=5`)
    let info = await myRes.json() // data






    var dateObj = new Date(info.forecast.forecastday[0].date)
    var today = dateObj.toLocaleString("default", { weekday: "long" })
    
var tomorrowDay = new Date(info.forecast.forecastday[1].date);
var tomorrow = tomorrowDay.toLocaleString("default", { weekday: "long" })

var afterTomorrow= new Date(info.forecast.forecastday[2].date);
var tomorrow3 = afterTomorrow.toLocaleString("default", { weekday: "long" })




    function disblay ()
    {
        document.querySelector(".day").innerHTML=today;
    document.querySelector(".Ddata").innerHTML=d.getDate();
    
    document.querySelector(".data").innerHTML=months[d.getMonth()];
    
    document.getElementById("countery").innerHTML=info.location.name;
    document.getElementById("temp").innerHTML=info.current.temp_c +"<sup>o</sup>"+"c";
    document.getElementById("custom").innerHTML=info.current.condition.text;
    document.getElementById("myImage").src = "https:"+info.current.condition.icon;
    
    //##############################################################


    document.querySelector(".Tomorrow").innerHTML=tomorrow;

    document.querySelector(".Tomorrow-temp").innerHTML=info.forecast.forecastday[1].day.maxtemp_c +"<sup>o</sup>"+"c";
    document.querySelector("small").innerHTML=info.forecast.forecastday[1].day.mintemp_c +"<sup>o</sup>";
    document.querySelector(".condition").innerHTML=info.forecast.forecastday[1].day.condition.text;
    document.getElementById("Image").src = "https:"+info.forecast.forecastday[1].day.condition.icon;
    
    //##############################################################
  
    document.querySelector(".aftertomorrow").innerHTML=tomorrow3;

    document.querySelector(".afterTomorrowtemp").innerHTML=info.forecast.forecastday[2].day.maxtemp_c +"<sup>o</sup>"+"c";
    document.querySelector(".m").innerHTML=info.forecast.forecastday[2].day.mintemp_c +"<sup>o</sup>";
    document.getElementById("state").innerHTML=info.forecast.forecastday[2].day.condition.text;
    document.getElementById("Imag").src = "https:"+info.forecast.forecastday[2].day.condition.icon;
    }




 disblay()
console.log(info)

}

weatherInfo();
}




searchCountery();

