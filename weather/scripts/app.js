const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

 
const updateUI=(data) => {


    //Time to destructure
    const {cityDetails, weather} = data;

    details.innerHTML=`
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    //Update the day/night & icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    }
        else{
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

    //Remove the d-none if present
    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }
};





cityForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with the City Information
    forecast.updateCity(city).then(data => {
        updateUI(data);
    }).catch(err => {
        console.log(err);
    });

    //Set Local Storage (Cache Mechanism)
    localStorage.setItem('city', city);
});

//Update from cache
if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city')).then( (data)=>{
        updateUI(data)
    })
    .catch(
        err=> console.log(err)
    )  
}

