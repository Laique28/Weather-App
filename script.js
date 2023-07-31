const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '498d9d1460mshe4bbdba1f208943p1743ddjsnc58f4d3016a7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{
	cityname.innerHTML=city
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= '+city , options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		temp.innerHTML=response.temp
		temp2.innerHTML=response.feels_like
		wind.innerHTML=response.wind_speed
		hum.innerHTML=response.humidity
		min.innerHTML=response.min_temp
		max.innerHTML=response.max_temp
		wind2.innerHTML=response.wind_speed
		windspeed.innerHTML=response.wind_speed
		winddegree.innerHTML=response.wind_degrees
		hum2.innerHTML=response.humidity
		sunr.innerHTML=response.sunrise
		suns.innerHTML=response.sunset
		

	})
	.catch(err=>console.error(err))
};
	// const result =  response.text();
	// console.log(result);
 
	// cloud_pct
	// feels_like
	// humidity
	// max_temp5
	// min_temp
	// sunrise
	// sunset
	// temp
	// wind_degrees
	// wind_speed

submit.addEventListener("click",(e)=>{
	    e.preventDefault()
        getweather(city.value)
		
	})
getweather("Chennai")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai' , options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		ctemp.innerHTML=response.temp
		cwind.innerHTML=response.wind_speed
		chum.innerHTML=response.humidity
		

	})
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=madurai' , options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		mtemp.innerHTML=response.temp
		mwind.innerHTML=response.wind_speed
		mhum.innerHTML=response.humidity
		

	})
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=madurai' , options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		mtemp.innerHTML=response.temp
		mwind.innerHTML=response.wind_speed
		mhum.innerHTML=response.humidity
		

	})
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=trichy' , options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		ttemp.innerHTML=response.temp
		twind.innerHTML=response.wind_speed
		thum.innerHTML=response.humidity
		

	})
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=puducherry' , options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		ptemp.innerHTML=response.temp
		pwind.innerHTML=response.wind_speed
		phum.innerHTML=response.humidity
		

	})
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore' , options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		btemp.innerHTML=response.temp
		bwind.innerHTML=response.wind_speed
		bhum.innerHTML=response.humidity
		

	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kanyakumari' , options)
	.then(response=>response.json())
	.then((response) =>{
		console.log(response)
		ktemp.innerHTML=response.temp
		kwind.innerHTML=response.wind_speed
		khum.innerHTML=response.humidity
		

	})