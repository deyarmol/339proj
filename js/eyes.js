// get the user's motion preference 
const reducedmotion = window.matchMedia("(prefers-reduced-motion: reduce)") === true;

const eyes = document.querySelectorAll('.eye');

// make eye red when clicked, return to normal when unclicked
eyes.forEach(eye => eye.addEventListener("mousedown", function(){
    this.src = "../images/eye_red.png";
}));
eyes.forEach(eye => eye.addEventListener("mouseup", function(){
    this.src = "../images/eye.png";
}));


window.onmousemove = function(e){
    if(reducedmotion == false){
        eyes.forEach(eye => eyeTrack(e.clientX, e.clientY, eye));
    }
}

var eyeTrack = function(mouseX, mouseY, eye){
    var area = eye.getBoundingClientRect();
    // distance will always be negative inside the eye
    var dist_from_top = area.top - mouseY;
    var dist_from_bottom = mouseY - area.bottom;
    var dist_from_left = area.left - mouseX;
    var dist_from_right = mouseX - area.right;
    var x = "";
    var y = "";
    var alt = "An eye, looking ";
    // there are 9 areas where the mouse could be, time for some ifs
    if (dist_from_top > 0){
        y = "up";
    } else if (dist_from_bottom > 0){
        y = "down";
    } 
    if (dist_from_left > 0){
        x = "left";
    } else if (dist_from_right > 0){
        x = "right";
    }
    // create the alt text based on all this
    if (y != ""){
        alt += y;
        if (x != ""){
            alt = alt + " and to the " + x;
        }
    } else if (x != ""){
        alt = alt + "to the " + x;
    } else {
        alt += "at you"
    }
    alt += "."
    // using those two very conveniently for the filename
    eye.src = "../images/eye" + y + x + ".png";
    eye.alt = alt;
    //console.log(mouseX + " " + mouseY)
    //console.log(y + x + "- " + dist_from_top + " " + dist_from_bottom + " " + dist_from_left + " " + dist_from_right)
}


