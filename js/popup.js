var popup = document.getElementById("popup-1");
var btn_close = document.getElementsByClassName("btn_close")[0];
var video = document.getElementById("video_player");

function OpenPopup(id){
    popup.style.display = "block";
    select_item(id);
    clear();
    load_details();
}

btn_close.onclick = function() {
  popup.style.display = "none";
  clear();
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
    clear();
  }
}

function clear(){
    const slideshow_container = document.getElementById("slider");
    while(slideshow_container.firstChild){
        slideshow_container.removeChild(slideshow_container.firstChild);
    }

    const content_row = document.getElementsByClassName("content_row");
    const content_row_arr = Array.from(content_row);
    content_row_arr.forEach(row => {
        row.parentNode.removeChild(row);
    });

    const slide_button = document.getElementsByClassName("slide_button");
    const slide_button_arr = Array.from(slide_button);
    slide_button_arr.forEach(btn => {
        btn.parentNode.removeChild(btn);
    });
    
    const video_container = document.getElementById("video_container");
    while(video_container.firstChild){
        video_container.removeChild(video_container.firstChild);
    }
    console.log("clear");
}