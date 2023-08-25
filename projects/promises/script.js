// let promise1 = new Promise( (resolve, reject)=> {
//     isReady = [true,false][Math.floor(Math.random() * 2)];
//     setTimeout( () => {
//         isReady ? resolve("Hie Handsome") : reject("Sorry I Do not Talk to Strangers");
//     },2000)
// })
// console.log(
//     promise1.then( ok => console.log({ok}))
//             .catch( error => console.log(error) )   
// )
let $ = (elm) => document.querySelector(elm);
// placeholder
const col = $("#here")
// async /await

const getData = async () => {
        const _URL = "https://daylightmusic.net/api/open-most-played";
        let buildUp = "";
        const response = await fetch( _URL)   
        data = await response.json();
        console.log(data.data)
        data.data.forEach( song => {
            player(song.url);

            buildUp += `
                <div class=" p-2 col-md-2 ">
                    <img src="${song.artwork}" class="img-fluid" alt="${ song.name}">
                    <p class="text-center m-2">  ${ song.name }<span class="badge bg-white text-dark"> plays ${song.streams} </span ></p>
                </div>
            `
          
        })
        return col.innerHTML = buildUp;
}

const player = (url) => {
        // Reference to the video element
        let videoElement;
        window.DOMContentLoaded = () => {

            console.log(url);

            videoElement = $('#audio-player');
                // URL to the MPD (Media Presentation Description) file
            const mpdURL = url;

            // Initialize Dash.js player
            const player = dashjs.MediaPlayer().create();
            
            // Attach player to the video element
            player.initialize(videoElement, mpdURL, true);

            // Optional: Subscribe to player events
            player.on(dashjs.MediaPlayer.events.ERROR, (event) => {
                console.error('Player error:', event.error);
            });

        }
        // console.log(videoElement)

       
}

getData();