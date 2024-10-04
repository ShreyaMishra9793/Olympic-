

var seactions = document.querySelectorAll(".sec-left")

seactions.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      elem.childNodes[3].style.opacity = 1
      elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
      elem.childNodes[3].style.opacity = 0
      elem.childNodes[3].load()
    })

  })

  var tl= gsap.timeline()

  tl.from(".nav img",{
    y:-40,
    opacity:0,
    duration:1,
    delay:1.5,
  })

  tl.from("#icons ",{
    y:-40,
    opacity:0,
    duration:1,
    delay:0.5,
  })
  tl.from("video",{
    y:20,
    opacity:0,
    duration:2,
    scale:0.2,
  })
  
 