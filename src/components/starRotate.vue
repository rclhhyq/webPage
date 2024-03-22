<template>
  <div class="container">
    <div class="logo">
      <div class="blue_"></div>
      <div class="purple_"></div>
    </div>
    <header>
      <nav>
        <ul>
          <li>首页</li>
          <li>详情</li>
          <li>注册</li>
          <li>登录</li>
        </ul>
      </nav>
    </header>
    <div class="content">
      <span>a programmer clud</span>
      <h1>merry<br />FLEX</h1>
      <h3>Life</h3>
      <p>
        Prove your ability<br />Choose your preferred programming language
      </p>
      <div class="cta">Our Featured <i class="bx bxs-leaf"></i></div>
    </div>
    <div class="atomContain">
      <div class="atom" ref="atom">
        <div class="orbit">
          <div class="path">
            <div class="electron"></div>
          </div>
        </div>
        <div class="orbit">
          <div class="path">
            <div class="electron"></div>
          </div>
        </div>
        <div class="orbit">
          <div class="path">
            <div class="electron"></div>
          </div>
        </div>
        <div class="orbit">
          <div class="path">
            <div class="electron"></div>
          </div>
        </div>
        <div class="loader" data-text="loading">
          <span class="loader-circle"></span>
          <span class="loader-circle"></span>
          <span class="loader-circle"></span>
          <span class="loader-circle"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  mounted () {
    const tl = gsap.timeline()
    const atom = this.$refs.atom
    const electron = document.querySelectorAll('.electron')
    const path = document.querySelectorAll('.path')
    const dur = 4
    const del = 1

    tl.fromTo(
      electron,
      { rotationX: 90 },
      {
        rotationZ: -360,
        rotationX: 90,
        ease: 'none',
        duration: dur,
        stagger: {
          each: -del,
          repeat: -1
        }
      },
      0
    )
    tl.to(
      path,
      {
        rotationZ: 360,
        ease: 'none',
        duration: dur,
        stagger: {
          each: -del,
          repeat: -1
        }
      },
      0
    )
    // Add a rotation to the whole atom
    gsap.set(atom, { transformOrigin: 'center center' })
    const atomTween = gsap.to(atom, {
      rotation: 360,
      ease: 'none',
      repeat: -1,
      duration: 200
    })

    // Skip the loading
    tl.progress(0.9999)

    const timeScaleTween = gsap.to(tl, {
      duration: 4,
      timeScale: 3,
      paused: true
    })

    const timeScaleatom = gsap.to(atomTween, {
      duration: 4,
      timeScale: 14,
      paused: true
    })

    // Slow the animation on mouse enter
    const loader = document.querySelector('.loader')
    loader.addEventListener('mouseenter', function () {
      timeScaleTween.play()
      timeScaleatom.play()
      atom.classList.add('changeColor')
    })
    // Set the animation back to normal on mouse leave
    loader.addEventListener('mouseleave', function () {
      timeScaleTween.reverse()
      timeScaleatom.reverse()
      atom.classList.remove('changeColor')
    })
    const span = document.querySelector('.content span')
    const h1 = document.querySelector('.content h1')
    const h3 = document.querySelector('.content h3')
    const p = document.querySelector('.content p')
    const cta = document.querySelector('.cta')
    const header = document.querySelector('header')
    const logo = document.querySelector('.logo')

    const t3 = gsap.timeline()

    t3.from([logo, header], {
      y: -40,
      opacity: 0,
      ease: 'power3.ease',
      duration: 0.5
    })
      .from([span, h1, h3, p, cta], {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.ease',
        stagger: {
          amount: 0.3
        }
      })
      .from(
        '.atomContain',
        {
          x: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.ease'
        },
        '>-0.5'
      )
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 742px;
  position: relative;
  overflow: hidden;
}

header nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 5vw;
  height: 5vw;
  border: 2px dotted rgba(255, 233, 233, 0.3);
  position: absolute;
  left: 5vw;
  top: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: rotate(60deg);
  border-radius: 5vw;
}

.logo .blue_ {
  width: 0.5vw;
  height: 1.5vw;
  background-color: #fff;
  border-radius: 1.5vw;
  margin-bottom: 5px;
}

.logo .purple_ {
  width: 3vw;
  height: 1vw;
  background-color: #a02cff;
  border-radius: 1vw;
}
header {
  position: absolute;
  z-index: 99;
  right: 2vw;
  top: 2vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-left: 200px;
}

header nav ul {
  list-style: none;
}

header nav ul li {
  padding: 10px 15px;
  text-transform: uppercase;
  counter-reset: #fff;
  font-size: 10px;
  letter-spacing: 1px;
  cursor: pointer;
}

header nav ul li + li {
  margin-left: 25px;
}
.atomContain {
  position: absolute;
  inset: 0;
  left: 50%;
  margin: auto;
  width: 50%;
  aspect-ratio: 1/1;
}
.atom {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  perspective: 1000;
  transform-style: preserve-3d;
  filter: drop-shadow(0 0 10px #402662);
  transition: filter 10s;
}

.orbit {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid #9055ff88;
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(20deg);
}

.orbit:nth-child(2) {
  transform: rotateX(80deg) rotateY(70deg);
}
.orbit:nth-child(3) {
  transform: rotateX(80deg) rotateY(-20deg);
}
.orbit:nth-child(4) {
  transform: rotateX(80deg) rotateY(-50deg);
}

.path {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.electron {
  position: absolute;
  top: -4%;
  left: 50%;
  margin-left: -4%;
  width: 6%;
  height: 6%;
  border-radius: 50%;
  background: #ff0076;
  opacity: 0.5;
  box-shadow: 0 0 16px #13e2da, 0 0 6px #13e2da, 0 0 10px #13e2da;
  // box-shadow: 0 0 4px deeppink;
}
.atom.changeColor {
  filter: drop-shadow(0 0 60px #f40076) hue-rotate(360deg) brightness(5);
}
.loader {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 6%;
  height: 6%;
  border-radius: 50%;
  box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.4),
    0 0 25px rgba(255, 255, 255, 0.8);
  transition: 2s;
}
.loader:hover {
  transform: scale(2);
}
.loader::after {
  color: #cecece;
  position: absolute;
  width: fit-content;
  height: fit-content;
  inset: 0;
  /* text-align: center; */
  margin: auto;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 6px;
}
/* .loader::before{
      content: "";
      float: left;
      padding-top: 100%;
    } */
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader-circle {
  position: absolute;
  border-radius: 50%;
  inset: 0;
  opacity: 0.8;
  mix-blend-mode: screen;
  filter: brightness(120%);
}
.loader-circle:nth-of-type(1) {
  box-shadow: inset 1px 0 0 1px #025bf5, 2px 0 0 2px #035efa;
  animation-direction: reverse;
  transform-origin: 49.6% 49.8%;
  animation: loading 2s infinite both;
}
.loader-circle:nth-of-type(2) {
  box-shadow: inset 1px 0 0 1px #ff1744, 2px 0 0 2px #ff1744;
  animation-direction: reverse;
  transform-origin: 49.5% 49.8%;
  animation: loading 3s infinite both;
}
.loader-circle:nth-of-type(3) {
  box-shadow: inset 1px 0 0 1px #ffff04, 0 2px 0 2px #ffffbd;
  animation-direction: reverse;
  transform-origin: 49.8% 49.8%;
  animation: loading 2s infinite both;
}
.loader-circle:nth-of-type(4) {
  box-shadow: inset 1px 0 0 1px #0beb55, 0 2px 0 2px #0af10a;
  animation-direction: reverse;
  transform-origin: 49.7% 49.7%;
  animation: loading 3s infinite both;
}

// content
.content {
  position: absolute;
  left: 10vw;
  top: 50%;
  transform: translateY(-50%);
}

.content span {
  display: inline-block;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 12px;
}

.content h1 {
  font-size: 6vw;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1;
  color: #fff;
}

.content h3 {
  font-size: 5vw;
  font-weight: 200;
  text-transform: uppercase;
  color: #fff;
}

.content p {
  display: inline-block;
  font-size: 12px;
  line-height: 1.5;
  margin-top: 20px;
}

.content .cta {
  display: flex;
  align-items: center;
  color: #a02cff;
  font-size: 8px;
  text-transform: uppercase;
  margin-top: 20px;
  letter-spacing: 2px;
  position: relative;
}

.content .cta .bx {
  margin-left: 5px;
  color: #a02cff;
  position: relative;
  font-size: 18px;
  top: 1px;
}
</style>>
