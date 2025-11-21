const apikey = "ad0ee1ecbc5c740b8e43e93b0769b752";

const weatherDataEl = document.querySelector("#weather-data");

const cityInputEl = document.querySelector("#cityInput");

const formEl = document.querySelector("form");

addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
    cityInputEl.value = ""
})

async function getWeatherData(cityValue){
   try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

    if(!response.ok){
        throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const cityname = data.name;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
        `Feels like : ${Math.round(data.main.feels_like)}°C`,
        `Humidity : ${data.main.humidity}`,
        `Wind speed : ${data.wind.speed} m/s`,
    ];

    // گرفتن المنت description در هر دو حالت (چه error باشه چه description)
    const desc = weatherDataEl.querySelector(".error") 
              || weatherDataEl.querySelector(".description");

    // اگر error بود، حذفش کن
    desc.classList.remove("error");

    // و مطمئن شو کلاس description اضافه بشه
    desc.classList.add("description");


    // آپدیت UI
    document.querySelector("h1").innerHTML = `${cityname}`;

    weatherDataEl.querySelector(".icon").innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
    `;

    weatherDataEl.querySelector(".temperature").innerHTML = `${temperature}°C`;

    desc.innerHTML = description;

    weatherDataEl.querySelector(".details").innerHTML =
        details.map(detail => `<div>${detail}</div>`).join("");

} catch (error) {
    // پاک کردن اطلاعات قبلی
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").innerHTML = "";
    weatherDataEl.querySelector(".details").innerHTML = "";

    // اضافه کردن کلاس قرمز
    const desc = weatherDataEl.querySelector(".description");
    desc.classList.remove("description")
    desc.classList.add("error")

    // نمایش پیام خطا
    desc.innerHTML = "An error happened! please try again";

    }
}