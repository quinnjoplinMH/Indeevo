
var imgArray = [
    'res/home_studio_photo.jpg',
    'res/programming_photo.jpeg',
    'res/writing_photo.jpg'];

var curIndex;
var captionClass;
var slideCaption;
var imgDuration;
/**Alternates through slides automatically or when a button
 * is pressed
 *
 * @param num- number of the slide button pressed.
 */

function init() {
    document.getElementById('slide-image-1').src = imgArray[0];
    curIndex = 0;
    slideCaption = null;
    imgDuration = 6000
}

function slideShow() {
    var captionId = 'caption-container-' + (curIndex + 1).toString();
    var slideImage = document.getElementById('slide-image-1');
    var imageClass = slideImage.className;
    if(slideCaption !== null) {
        slideCaption.className = captionClass;
    }
    slideCaption = document.getElementById(captionId);
    captionClass = slideCaption.className;
    slideImage.className += " fadeOut";
    setTimeout(function() {
        slideImage.src = imgArray[curIndex];
        slideImage.width = "600";
        slideImage.className = imageClass;
        slideCaption.className += " fadeIn";
    }, 1500);
    curIndex += 1;
    if (curIndex === imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}

function setSlideShow(num) {
    curIndex = num;
    slideShow();
}

init();
slideShow();