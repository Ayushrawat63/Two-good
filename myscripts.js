const LocomotiveAnimation =()=>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

LocomotiveAnimation();

function navbarAnimation() {
    gsap.to(".nav-logo svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to(".nav-part .nav-links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()

// const playbtn=document.getElementById("play").style;

// playbtn.scale=1;
// playbtn.opacity=1;


// gsap.to("#play",{x:500,duration:1});



function videoPlayAnimation(){
    const videoBox=document.querySelector("#video-container");
    const palybtn=document.querySelector("#play")
    videoBox.addEventListener("mouseenter",()=>{
        gsap.to(palybtn,{scale:1,opacity:1})
    })
    
    videoBox.addEventListener("mouseleave",()=>{
        gsap.to(palybtn,{scale:0,opacity:0})
    })
    
    videoBox.addEventListener("mousemove",(dets)=>{
      gsap.to(palybtn,{
        left:dets.x-80,
        top:dets.y-80
      })
    
    })

    gsap.from(videoBox,
        {
            scale:0.9,
            opacity:0,
            duration:0.5 ,
            delay:1,
        
        })
    
}

videoPlayAnimation();


// const heading=document.querySelectorAll("h1");
// console.log(heading);

const headingAnimation=()=>{

    gsap.from("#page1 h1",
    {
        y:100,
        opacity:0,
        duration:1 ,
        delay:0.2,
        stagger:0.3
    })
}

headingAnimation();


// document.addEventListener("mousemove",(dets)=>{
//   gsap.to(".cursor",{
//     left:dets.x,
//     top:dets.y
//   })
// })

const page3DotAnimation=()=>{
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
          left: dets.x-100,
          top: dets.y-100,
        });
      });
    
    
    const value=document.querySelectorAll(".box2_sub_container");
    value.forEach((elem)=>{
        elem.addEventListener("mouseenter",()=>{
            gsap.to(".cursor",{
                Transform:'scale(1)',
                backgroundColor:`${(elem.className=="box2_sub_container pink")? "rgba(137, 43, 226, 0.316":"rgba(242, 43, 156, 0.316"}`,
               
            })
        })
        elem.addEventListener("mouseleave",()=>{
            gsap.to(".cursor",{
                Transform:'scale(0)',
                backgroundColor:"white"
            })
            
        })
    
    })
    
    
    gsap.from(".box2",{
                scale:0.9,
                opacity:0,
                duration:0.5 ,
                delay:1,
    })
    
}

page3DotAnimation();


const data=document.querySelectorAll(".small_cont");
data.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        alert(elem.id);
    })
    
})




