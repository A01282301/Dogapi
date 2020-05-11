function fetchDogsImages(){

    let settings = {
        metod : 'GET'
    };

    let url = "https://dog.ceo/api/breeds/image/random/5";

    fetch(url, settings).then( response => {
        console.log(response);
        if(response.status === 200){
            return response.json();
        } 
        throw new Error("Something went wrong!!");
    })
    .then (responseJSON => {
        let dogImages = document.querySelector('.dogimages');
        responseJSON.message.forEach( image => {
            dogImages.innerHTML += `<img src ="${image}" />`;
        })
        
    })
    .catch (errMessage => {
        console.log(errMessage);
    });


}

function Watchform(){
    let dogsform = document.querySelector('.dogsForm')

    dogsform.addEventListener('submit', (event) => {

        event.preventDefault();
        fetchDogsImages();
    });
}

function init (){

    Watchform();

}

init();