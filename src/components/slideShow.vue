<template>
<div class="slideContain">
    <div class="slideText">
        <p>PHOTO WALL</p>
    </div>
    <div class="slideImg">
        <div class="imgContainer">
            <div class="imgTop">
                <div class="imgItem"><img src="@/assets/tipsy.jpg" alt=""></div>
                <div class="imgItem"><img src="" alt=""></div>
                <div class="imgItem"><img src="" alt=""></div>
                <div class="imgItem"><img src="" alt=""></div>
                <div class="imgItem"><img src="" alt=""></div>
            </div>
            <div class="imgBottom">
                <div class="imgItem"><img src="" alt=""></div>
                <div class="imgItem"><img src="" alt=""></div>
                <div class="imgItem bigImg"><img src="" alt=""></div>
                <div class="imgItem"><img src="" alt=""></div>
                <div class="imgItem"><img src="" alt=""></div>
                <div class="imgItem"><img src="" alt=""></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'slidShow',
  mounted () {
    const slideText = document.querySelector('.slideText p')
    const imgContainer = document.querySelector('.imgContainer')
    gsap.to(slideText, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      duration: 3,
      scrollTrigger: {
        trigger: '.slideText',
        start: 'top top',
        end: '+=800 top',
        scrub: 1
      }
    })
    gsap.to(imgContainer, {
      right: 0,
      duration: 3,
      scrollTrigger: {
        trigger: '.slideImg',
        start: '40% top',
        end: '+=4000 bottom',
        scrub: 1,
        markers: true
      }
    })
  }
}
</script>

<style scoped>
.slideContain {
    position: relative;
    width: 100vw;
    height: 5000px;
}
.slideText {
    position: sticky;
    top: 0;
    height: 800px;
    /* z-index: 9;
    pointer-events: none; */
}
.slideText P {
    white-space: nowrap;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    font-size: 8vw;
    color: white;
    text-shadow: 0 0 4px #CB5EEE,
    0 0 8px #CB5EEE,
    0 0 12px #CB5EEE,
    0 0 18px #CB5EEE;
}
.slideImg {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 800px;
    /* margin-top: 600px; */
    overflow: hidden;
}
.imgContainer {
    position: absolute;
    top: 0;
    /* 解决响应式问题 */
    padding-left: 100vw;
    margin: auto;
    width: 3000px;
    height: 100vh;
}
.imgTop,.imgBottom {
    position: relative;
    width: 100%;
    height: 50%;
}
.imgTop .imgItem {
    position: absolute;
    top: 0;
}
.imgBottom .imgItem {
    position: absolute;
    bottom: 0;
}
/* img元素*/
.imgItem > img{
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 0.8s;
}
.imgItem {
    box-sizing: border-box;
    padding: 1vw;
    filter: blur(10px);
    transition: 0.8s;
}
.imgItem:hover {
    transform: scale(0.9);
    box-shadow: 0 0 2px 0 #CB5EEE,
    0 0 6px 0 #CB5EEE,
    0 0 8px 0 #CB5EEE,
    inset 0 0 6px 0 #CB5EEE;
    filter: none;
}
.imgItem:hover img{
    transform: scale(1.05);
}
/* imgTop img*/
.imgTop .imgItem:first-child {
    left: 200px;
    width: 248px;
    height: 330px;
}
.imgTop .imgItem:nth-child(2) {
    left: 20%;
    margin-top: 40px;
    width: 216px;
    height: 288px;
}
.imgTop .imgItem:nth-child(3) {
    left: 48%;
    width: 485px;
    height: 273px;
}
.imgTop .imgItem:nth-child(4) {
    left: 70%;
    width: 248px;
    height: 330px;
}
.imgTop .imgItem:nth-child(5) {
    left: 88%;
    width: 133px;
    height: 187px;
    margin-top: 30px;
}

/* imgBottom img */
.imgBottom .imgItem:first-child {
    left: 0;
    width: 485px;
    height: 273px;
}
.imgBottom .imgItem:nth-child(2) {
    left: 24%;
    width: 504px;
    height: 284px;
}
.imgBottom .imgItem:nth-child(4) {
    left: 52%;
    width: 216px;
    height: 288px;
}
.imgBottom .imgItem:nth-child(5) {
    left: 67%;
    width: 330px;
    height: 248px;
}
.imgBottom .imgItem:nth-child(6) {
    left: 82%;
    width: 485px;
    height: 273px;
}
.bigImg.bigImg.bigImg {
    left: 42%;
    bottom: 67%;
    width: 200px;
    height: 200px;
    opacity: 0;
}
</style>
