<template>
<div class="slideContain">
    <div class="slideText">
        <p>PHOTO WALL</p>
    </div>
    <div class="slideImg">
        <div class="imgContainer">
            <div class="imgTop">
                <div class="imgItem"><img src="@/assets/20240321234353.jpg" alt=""></div>
                <div class="imgItem"><img src="@/assets/20240321234530.jpg" alt=""></div>
                <div class="imgItem"><img src="@/assets/20240321234536.jpg" alt=""></div>
                <div class="imgItem"><img src="@/assets/20240322000924.jpg" alt=""></div>
                <div class="imgItem"><img src="@/assets/20240322000927.jpg" alt=""></div>
            </div>
            <div class="imgBottom">
                <div class="imgItem"><img src="@/assets/20240321234322.jpg" alt=""></div>
                <div class="imgItem"><img src="@/assets/20240321234535.jpg" alt=""></div>
                <div class="imgItem"><img src="@/assets/20240321234532.jpg" alt=""></div>
                <div class="imgItem"><img src="@/assets/20240321234535.jpg" alt=""></div>
                <div class="imgItem"><img src="@/assets/20240322000926.jpg" alt=""></div>
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
        scrub: 1
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
    0 0 8px #CB5EEE;
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
    box-shadow: 0 0 2px 1px #F06966;
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
    animation-delay: -2s;
}
.imgTop .imgItem:nth-child(2) {
    left: 20%;
    margin-top: 40px;
    width: 216px;
    height: 288px;
    animation-delay: -4s;
}
.imgTop .imgItem:nth-child(3) {
    left: 48%;
    width: 485px;
    height: 273px;
    animation-delay: -6s;
}
.imgTop .imgItem:nth-child(4) {
    left: 70%;
    width: 248px;
    height: 330px;
    animation-delay: -8s;
}
.imgTop .imgItem:nth-child(5) {
    left: 88%;
    width: 133px;
    height: 187px;
    margin-top: 30px;
    animation-delay: -10s;
}

/* imgBottom img */
.imgBottom .imgItem:first-child {
    left: 0;
    width: 485px;
    height: 273px;
    animation-delay: -10s;
}
.imgBottom .imgItem:nth-child(2) {
    left: 24%;
    width: 504px;
    height: 284px;
    animation-delay: -8s;
}
.imgBottom .imgItem:nth-child(3) {
    left: 52%;
    width: 216px;
    height: 288px;
    animation-delay: -6s;
}
.imgBottom .imgItem:nth-child(4) {
    left: 67%;
    width: 330px;
    height: 248px;
    animation-delay: -4s;
}
.imgBottom .imgItem:nth-child(5) {
    left: 82%;
    width: 485px;
    height: 273px;
    animation-delay: -2s;
}
</style>
