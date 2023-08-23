// jquery like on element selector
const $ = ( elm ) =>  document.querySelector(elm);
// the api key given after logging in
const apiKey = "853937063022323";
// the main url of the api 
const baseURL = "https://superheroapi.com/api.php/";
// generat rangom ids from 1-243 as hero tables whow ids within that range
const id = Math.floor( Math.random() * 244);
// get all placeholder elements

const img = $("#img");
const namez = $("#name");
let info = $(".info");
const input = $("input");
const fullName = $('.fullName');

const searchResults = $("#results");
// let res ;
// fetch and return the data to the url
const superHero = () => {
    fetch(baseURL + apiKey + '/' + id)
    .then( resp => resp.json())
    .then( data => {
        console.log(data);
        display(data);
    })
}

// search for the super hero
function search (name){
         fetch(`${baseURL}/${apiKey}/search/${name}`).then( response => response.json()).then(
             data => {
                 console.log(data.results);
                 return display(data.results);

         });
} 
// display the super hero
function display(hero){
        let resultsMatched = "";

        for (let i = 0; i < hero.length; i++) {
            // const element = array[i];
            console.log(hero)
            
            resultsMatched +=`<div><img src="${hero[i].image.url}" width="500px" height="500px"> ${ hero[i].name}` 
                              + getApearance(hero[i]) + getBio(hero[i]) +  getStats(hero[i]) +  '</div>';
            
        }

      

        searchResults.innerHTML = resultsMatched;
        img.innerHTML= `<img src="${hero.image.url}" />`;
        info.innerHTML = getApearance(hero);
        info.innerHTML += getBio(hero);
        info.innerHTML += getStats(hero);
        namez.innerText = 'Name : ' + hero.name;
        fullName.innerText = 'Real Name : ' + hero.biography['full-name'];



}

function getSuperHero(){
    return superHero();
}

// get the input value and search eachtime a user presses the keyup function
function getApearance(data){
   let s =  Object.keys(data.appearance).map(appear => {
        //   console.log(appear);
        return `<p>${appear} : ${data.appearance[appear]} </p>`;
    })
    // console.log(s);
    return s.join('');


}
function getBio(data){
    let s =  Object.keys(data.biography).map(bio => {
        // console.log(bio)
        return `<p>${bio} : ${data.biography[bio]} </p>`;
    })
    // console.log(s);
    return s.join('');

}

// 
function getStats(data){
    let s =  Object.keys(data.powerstats).map(stat => {
        // console.log(stat)
        return `<p>${stat} : ${data.powerstats[stat]} </p>`;
    })
    // console.log(s);
    // 
    return s.join('');

}


input.onkeydown = (e) =>{
    console.log(e.key);
    if(e.key === 'Enter'){
        let words = input.value;
        // console.log(words);
        search(words);
    }else{
        return;
    }
    
}


