const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const streamHash = urlParams.get('v')
console.log(streamHash);

document.body.onload = addElement;

function addElement () {
let newSource = document.createElement("source");

newSource.url = 'https://cdn.riff.cc/ipfs/' + streamHash;
newSource.textContent = "Hello, world!";

var videoContainer = document.querySelector('video'); // Grab the video element
videoContainer.appendChild(newSource);

alert(newSource.url);}
