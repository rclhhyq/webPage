<template>
  <div class="frostedContainer">
    <div class="screenContain">
      <div class="screen">
        <div class="context">
          <span>ues translate and perspective</span>
          <h1>Three Dimensional</h1>
          <p>Imagination is the only limit</p>
        </div>
        <div class="person">
          <div class="container">
            <img class="circle" src="@/assets/20240321233413.jpg" alt="" />
          </div>
          <img class="img" src="@/assets/20240322004359.png" alt="" />
        </div>
      </div>
      <div class="iconContain">
        <div class="qq frostedIcon">
          <svg-icon icon-class="qq" class-name="qq-style"></svg-icon>
        </div>
        <div class="te frostedIcon">
          <svg-icon icon-class="te" class-name="te-style"></svg-icon>
        </div>
      </div>
      <div class="textBox">
        <p>LIFE IS A</p>
        <span>FUCKING MOVIE</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'frostedScreen',
  mounted () {
    const mouseOverContainer = document.querySelector('.frostedContainer')
    const element = document.querySelector('.frostedContainer .screen')
    const iconContain = document.querySelector('.iconContain')
    // 节流
    mouseOverContainer.addEventListener(
      'mousemove',
      this.throttle((e) => {
        this.transformElement(e.clientX, e.clientY, element, iconContain)
      }, 1000 / 40)
    )
    mouseOverContainer.addEventListener('mouseleave', (e) => {
      setTimeout(() => {
        element.style.transform = 'rotateY(0deg) rotateX(0deg)'
        iconContain.style.transform =
          'translateZ(200px) rotateY(0deg) rotateX(0deg)'
        // element.style.setProperty('--color', 'rgba(255, 255, 255, 1)')
      }, 50)
    })

    // gsap
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.screenContain',
        markers: false,
        start: 'top 80%'
      }
    })
    t1.from('.screenContain', {
      scale: 0.7,
      duration: 0.7
    })
      .from(
        '.context',
        {
          duration: 0.5,
          x: -40,
          opacity: 0,
          ease: 'power3.ease'
        },
        '>-0.3'
      )
      .from('.textBox', {
        duration: 0.5,
        x: 100,
        opacity: 0,
        ease: 'power3.ease'
      })
  },
  methods: {
    transformElement (x, y, element, iconContain) {
      const box = element.getBoundingClientRect()
      const calcy = (x - box.left - box.width / 2) / 35
      const calcx = ((y - box.top - box.height / 2) / 35) * -1
      // const angle = Math.floor(this.getMouseAngle(y - box.top - (box.height / 2), x - box.left - (box.width / 2)))
      element.style.transform = `rotateY(${+calcy}deg) rotateX(${+calcx}deg)`
      iconContain.style.transform = `translateZ(400px) rotateY(${+calcy}deg) rotateX(${+calcx}deg)`
      // element.style.setProperty('--angle', `${-angle}deg`)
      // element.style.setProperty('--color', 'rgba(255, 255, 255, 0.7)')
    },
    getMouseAngle (x, y) {
      const radius = Math.atan2(y, x)
      let angle = radius * (180 / Math.PI)
      if (angle < 0) {
        angle += 360
      }
      return angle
    },
    // 节流函数
    throttle (fn, delay) {
      let timer = null
      return function () {
        const context = this
        const args = arguments
        if (!timer) {
          timer = setTimeout(function () {
            fn.apply(context, args)
            timer = null
          }, delay)
        }
      }
    }
  }
}
</script>

<style scoped>
/* @property --color {
    syntax: "<color>";
    inherits: false;
    initial-value: rgba(255, 255, 255, 1);
} */
.frostedContainer {
  position: relative;
  width: 100vw;
  height: 1000px;
  display: flex;
}
/* .backImg {
    position: absolute;
    width: 100%;
    height: 100%;
}
.backImg img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
} */
.screenContain {
  width: 70%;
  height: 60%;
  /* 会有弯曲的效果 但不好用 */
  padding: 60px;
  margin: auto;
  transform-style: preserve-3d;
  perspective: 1300px;
  overflow: hidden;
  position: relative;
}
.screen {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  backdrop-filter: blur(15px);
  background-color: #000066;
  /* mask-image: linear-gradient(var(--angle), var(--color), #fff,#fff); */
  /* transition:  all 0.5s, --color 1s; */
  transition: 0.5s;
}
.iconContain {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translateZ(200px);
  transition: 0.7s;
}
.qq,
.te {
  position: absolute;
  left: 20%;
  top: 70%;
  width: 80px;
  height: 80px;
  border: 2px solid rgba(19, 226, 218, 0);
  animation: 6s animate infinite;
}
.te {
  left: 60%;
  top: 18%;
}

.frostedIcon::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130%;
  height: 130%;
  border: 2px solid rgba(19, 226, 218, 0);
  animation: 6s animateFirst infinite;
}

.frostedIcon::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160%;
  height: 160%;
  border: 2px solid rgba(19, 226, 218, 0);
  animation: 6s animateSecond infinite;
}
@keyframes animate {
  70% {
    border: 2px solid rgba(19, 226, 218, 0);
  }
  75% {
    border: 2px solid rgba(19, 226, 218, 1);
  }
  80% {
    border: 2px solid rgba(19, 226, 218, 0);
  }
}
@keyframes animateFirst {
  75% {
    border: 2px solid rgba(19, 226, 218, 0);
  }
  80% {
    border: 2px solid rgba(19, 226, 218, 0.8);
  }
  85% {
    border: 2px solid rgba(19, 226, 218, 0);
  }
}
@keyframes animateSecond {
  80% {
    border: 2px solid rgba(19, 226, 218, 0);
  }
  85% {
    border: 2px solid rgba(19, 226, 218, 0.6);
  }
  90% {
    border: 2px solid rgba(19, 226, 218, 0);
  }
}

/* 文字内容 */
.context {
  position: absolute;
  left: 10vw;
  top: 30%;
  transform: translateY(-50%);
}
.context span {
  display: inline-block;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 12px;
}
.context h1 {
  font-size: 6vw;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1;
  color: #fff;
}
.context p {
  display: inline-block;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 20px;
}
.context h3 {
  font-size: 5vw;
  font-weight: 200;
  text-transform: uppercase;
  color: #fff;
}
/* 姓名 */
.textBox {
  position: absolute;
  bottom: 20%;
  right: calc(40% + 60px);
}

.textBox p {
  font-size: 2vw;
  line-height: 1.5;
  margin-top: 20px;
  color: #6699ff;
}
.textBox span {
  margin-left: 6vw;
  color: #2f80ed;
}

/* 头像 */
.person {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 200px;
  height: 300px;
  border-radius: 0 0 100px 100px;
  overflow: hidden;
}
.person .container {
  border-radius: 50%;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.person:hover .circle {
  transform: scale(1.1);
}
.circle {
  border-radius: 50%;
  cursor: pointer;
  width: 100%;
  height: 100%;
  pointer-events: none;
  object-fit: cover;
  transition: 0.3s;
}
.img {
  width: 180px;
  left: 10px;
  pointer-events: none;
  position: relative;
  transform: translateY(30%) scale(1.15);
  transform-origin: 50% bottom;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.person:hover .img {
  transform: translateY(20%) scale(1.2);
}
</style>
