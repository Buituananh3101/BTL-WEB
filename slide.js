const images = document.getElementsByClassName('img');
let index = 0;
let timeoutId;

function showImage(){
    
    for(let i = 0; i < images.length; i++){
        if(!images[i].classList.contains("hidden")){
            images[i].classList.add("hidden");
        }
    }
    images[index].classList.remove("hidden");
    timeoutId = setTimeout(next, 10000);
}
function next(){
    clearTimeout(timeoutId);
    index++;
    if(index >= images.length){
        index = 0;
    }
    showImage();
}

function prev(){
    clearTimeout(timeoutId);
    index--;   
    if(index < 0){
        index = images.length - 1;
    }
    showImage();
}

showImage();
