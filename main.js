const url= 'https://api.openweathermap.org/data/2.5/'
const key = 'dd64e5a5dc99aaaaee614fe43df4fe66'


const setQuery = (e) =>{
    if(e.keyCode == '13')
    getResult(searchBar.value)

}

const getResult = (countryName) =>{
    // console.log(countryName)
    let query = `${url}weather?q=${countryName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query)
    .then(weather =>{
        return weather.json()
    }
    )
    .then(displayResult).catch((error)=> console.log('veri çekme hatası', error));
}

const displayResult = (result) => {
    // console.log(result);
    let country = document.querySelector('.country')
    country.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector ('.temp')
    temp.innerText= `${Math.round(result.main.temp)} °C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText =`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)} °C`

    c
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)