let url = `https://api.github.com/users/`
let form = document.querySelector(`form`);
let userName = form.querySelector('input[type="text"]');


function fetchData(e){
    e.preventDefault()
    fetch(url+userName.value)   
    .then(resp => resp.json())
    .then(data => console.log(data));
}

form.addEventListener(`submit`, fetchData)