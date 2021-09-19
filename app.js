
const myloc = document.getElementsByClassName('navButtons');

myloc.addEventListener('click', ()=>{

    navigator.geolocation.getCurrentPosition(success, error);




})

