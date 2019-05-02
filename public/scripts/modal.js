// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
const images = document.querySelectorAll(".img_modal");
const imgBigModal = document.querySelector('#img_big_modal');
var videoBigModal = null;
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const videoDirectory = {
  './img/img_video_animacionLogo.png': './img/LiquidAnimationTest.mov',
  './img/img_video_animacionPsy.png': './img/PSY_R2.mp4'
}

// When the user clicks on the button, open the modal 

images.forEach(element => {
    element.onclick = () => {
        var isVideo = element.classList.contains('video');
        if(isVideo){

          var srcImage = element.getAttribute("src");
          var srcVideo = videoDirectory[srcImage];

          if (videoBigModal) {
            videoBigModal.setAttribute('src', srcVideo);
          } else {
            var myVideo = document.createElement("video");
            myVideo.setAttribute('src', srcVideo);
            myVideo.controls = true;
            videoBigModal = myVideo;

            imgBigModal.replaceWith(myVideo);
          }
          
        }else{

          if (videoBigModal != null) {
            videoBigModal.replaceWith(imgBigModal);
            videoBigModal = null;
          } 
          //imgBigModal.replaceWith(myVideo);
          imgBigModal.setAttribute('src',element.getAttribute("src"))
        }
        modal.style.display = "flex";
    }
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    if (videoBigModal) {
      videoBigModal.pause();
    }
  }
}

//fin script modal