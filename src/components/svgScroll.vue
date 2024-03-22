<template>
  <div class="svgContain">
    <div class="planeRun">
      <div class="planeContain">
        <svg-icon icon-class="plane" class-name="plane-style"></svg-icon>
      </div>
      <svg
        class="g-svg"
        width="400"
        height="160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="svgpath"
          d="M 350 40 C 1200 1000, -550 1000, 350 1960"
          stroke="black"
          fill="transparent"
        />
      </svg>
      <div class="text text-top">
        R
      </div>
      <div class="text text-center">
        C
      </div>
      <div class="text text-bottom">
        L
      </div>
    </div>
    <div class="finish">
      <div class="pictuire">
        <div class="box"></div>
        <div class="imgItem img1 firstimg">
          <img class="img" src="@/assets/20240321233413.jpg" alt="" />
        </div>
        <div class="imgItem img2">
          <img class="img" src="@/assets/20240321233416.jpg" alt="" />
        </div>
        <div class="imgItem img3">
          <img class="img" src="@/assets/20240321233424.jpg" alt="" />
        </div>
      </div>
      <div class="textContain">
        <div class="closeWord">
          <h2 class="finishTextHead">FOLLOW ME !</h2>
          <p class="finishTextBody">
            If you also like interactive design web pages, please give me suggestion, thank you.
          </p>
          <div class="textBackground"></div>
          <a class="githup" href="https://github.com/rclhhyq/webPage.git">
            <span class="button">获取源码</span>
          </a>
        </div>
      </div>
      <!-- waves -->
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'svgScroll',
  mounted () {
    const planeRun = document.querySelector('.planeRun')
    const planeContain = document.querySelector('.planeContain')
    const svgpath = document.querySelector('#svgpath')
    const img1 = document.querySelector('.firstimg')
    const img2 = document.querySelector('.img2')
    const img3 = document.querySelector('.img3')
    const pictuire = document.querySelector('.pictuire')
    const textTop = document.querySelector('.text-top')
    const textCenter = document.querySelector('.text-center')
    const textBottom = document.querySelector('.text-bottom')
    const closeWord = document.querySelector('.closeWord')
    const textBackground = document.querySelector('.textBackground')
    gsap.to(planeContain, {
      offsetDistance: '100%',
      scrollTrigger: {
        trigger: planeRun,
        start: 'top 40%',
        end: '+=3000 bottom',
        scrub: 0.3
        // markers: true
      }
    })
    gsap.to(svgpath, {
      strokeDashoffset: '0',
      scrollTrigger: {
        trigger: planeRun,
        start: 'top 40%',
        end: '+=3000 bottom',
        scrub: 0.3
      }
    })
    // text
    gsap.from(textTop, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: textTop,
        start: 'top 70%'
      }
    })
    gsap.from(textCenter, {
      x: 200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: textCenter,
        start: 'top 70%'
      }
    })
    gsap.from(textBottom, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: textBottom,
        start: 'top 70%'
      }
    })
    // svg
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: pictuire,
        start: 'top center'
      }
    })
    t1.from(img1, {
      rotate: 15,
      opacity: 0,
      duration: 1.2
    })
      .from(
        img2,
        {
          opacity: 0,
          duration: 1.2,
          rotate: -30
        },
        '<0.2'
      )
      .from(
        img3,
        {
          opacity: 0,
          duration: 1.2,
          rotate: 15
        },
        '<0.2'
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: closeWord,
          start: 'top 70%'
        }
      })
      .from(closeWord, {
        x: 100,
        opacity: 0,
        duration: 1
      })
      .from(textBackground, {
        x: -10,
        y: 10,
        opacity: 0,
        duration: 1
      })
  }
}
</script>

<style scoped>
.svgContain {
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.planeRun {
  position: relative;
  height: 2000px;
  width: 700px;
  /* background-color: black; */
}
.g-svg {
  position: absolute;
  top: 0;
  width: 700px;
  height: 2000px;
  z-index: -1;
}
.planeContain {
  width: 10vh;
  height: 10vh;
  offset-path: path("M 350 40 C 1200 1000, -550 1000, 350 1960");
  transform: rotateZ(50deg);
}
#svgpath {
  stroke-dasharray: 2222, 2222;
  stroke-width: 2px;
  stroke: #ff5722;
  stroke-dashoffset: 2222;
}
/* text */
.text {
  position: absolute;
  box-shadow: 0 0 0 2px black;
  width: 600px;
  height: 400px;
  z-index: -2;
  font-size: 200px;
  font-weight: 200;
  text-align: center;
  line-height: 400px;
}
.text-top {
  left: -30%;
  top: 300px;
}
.text-center {
  top: 40%;
  right: -30%;
}
.text-bottom {
  bottom: 10%;
  left: -10%;
}
/* finish */
.finish {
  position: relative;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 10vw;
  padding-bottom: 300px;
  background-color: black;
}
.pictuire {
  position: relative;
  flex: 1 1 380px;
  height: clamp(520px, 40vw, 600px);
}
.textContain {
  position: relative;
  flex: 1 1 380px;
  height: clamp(520px, 40vw, 600px);
}
.box {
  width: 50%;
  aspect-ratio: 2/3;
  max-height: 430px;
  border: 2px solid white;
  position: absolute;
  inset: 0;
  margin: auto;
}
.imgItem {
  position: absolute;
  height: 30%;
  aspect-ratio: 1/1;
}
.img1 {
  left: 20%;
  top: 5%;
}
.img2 {
  height: 35%;
  top: 0;
  bottom: 0;
  right: 20%;
  margin: auto;
}
.img3 {
  bottom: 5%;
  left: 20%;
}
.img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.closeWord {
  width: 80%;
  max-width: 520px;
  min-height: 258px;
  aspect-ratio: 3/2;
  padding: 4% 0 0 6%;
  position: absolute;
  inset: 0;
  margin: auto;
  background-color: #b79272;
  z-index: 2;
}
.finishTextHead {
  font-size: clamp(30px, 3vw, 40px);
  font-weight: 400;
  padding-bottom: 1vw;
}
.finishTextBody {
  font-size: clamp(16px, 1vw, 22px);
  font-weight: 200;
  line-height: 1.5;
}
.githup {
  position: absolute;
  bottom: 10%;
  width: 20%;
  min-width: 88px;
  aspect-ratio: 5/2;
  background-color: #f1d6bb;
  text-decoration: none;
  font-size: 16px;
  color: #b79272;
}
.button {
  position: absolute;
  width: fit-content;
  height: fit-content;
  margin: auto;
  inset: 0;
}
.textBackground {
  position: absolute;
  width: 100%;
  height: 100%;
  top: -6%;
  left: 6%;
  z-index: -1;
  box-shadow: 0 0 0 2px #ff5722;
}

.waves {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20vh;
  min-height: 150px;
  max-height: 200px;
}
/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
