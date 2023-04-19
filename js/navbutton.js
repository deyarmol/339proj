function navbutton(){
    const button = document.getElementById("navbutton");
    const navlinks = document.getElementById("navlinks");    
    if (button.innerText == "v"){
        button.innerText = "Navigation >";
        navlinks.style.display = "none";
    } else {
        button.innerText = "v";
        navlinks.style.display = "grid";
    }
}

// for when the nav is hidden and the page is extended
window.addEventListener("resize", function(){
    if(this.window.innerWidth > 450){
        document.getElementById("navbutton").innerText = "v";
        document.getElementById("navlinks").style.display = "grid";
    }
})