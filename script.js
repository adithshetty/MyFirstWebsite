window.onscroll = function () {
    if(document.documentElement.scrollTop<100){
        document.getElementById("scroll").style.display="none"
    }
    else{
        document.getElementById("scroll").style.display="block"
    }
}

function backToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}