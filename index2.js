
const apiKey = 'fddf5015b62f541a6fc7f9395fcb8afe';
const url= `https://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&appid=${apiKey}`;
const searchBox=document.querySelector('.search-box');
const temp=document.querySelector('.container .temp #lon');
const cityP=document.querySelector('.container .temp #city');
const nameCity= document.querySelector('.container .temp p');

searchBox.addEventListener('keypress',event);

function event (evt){
   if(evt.keyCode==13){
    evt.preventDefault();
    console.log('the value:', searchBox.value);
		const address=searchBox.value;
		display(address);
}
	}

	function display(nameC){
        console.log(nameC);	
        let queryUrl = url.replace('CITY_NAME', nameC);
	  fetch(queryUrl) 
		  .then((response) => response.json())
		  .then((jsonObject) => {
            temp.innerHTML=(Math.floor(jsonObject.main.temp)-273)+'°c';
            cityP.innerHTML=jsonObject.name;
           icon(jsonObject.weather[0].main);
});

    }
 function icon (main){
  const icon=document.querySelector('#icon');

  switch(main) {
    case 'Clear':
     icon.innerHTML='<i class="fas fa-sun"></i>';
       break;
    case 'Clouds':
    icon.innerHTML='<i class="fas fa-cloud"></i>';
      break;
    case 'Rain':
      icon.innerHTML='<i class="fas fa-cloud-showers-heavy"></i>';
      break;
    case 'Snow':
      icon.innerHTML='<i class="far fa-snowflake"></i>';
      break;
    default:
     icon.innerHTML='i dont know how define this weather';
  }
  
 }
 console.log("aff");
 console.log("benjamin");
 console.log("newbranch");