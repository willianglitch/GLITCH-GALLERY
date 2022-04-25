
let video = document.getElementById("video-01")

function retroceder(){
    video.currentTime -= 15 ;
}

function avancar(){
    video.currentTime += 15;
}

function desacelerar(){

    video.playbackRate -= 0.1;

}

function acelerar(){

    video.playbackRate += 0.1;
}

function pause(){
    video.pause();
}
function play(){
    video.play();
}

function stop(){
    video.currentTime= 0;

}
