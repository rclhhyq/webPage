<template>
  <div class="parallaxContain">
    <div class="parallaxEle">
      <div class="backGround1 background">
        <img src="@/assets/20240321234353.jpg" alt="">
      </div>
      <div class="textContain">
        <h2>Cascading Style Sheets</h2>
        <p>
          Cascading Style Sheets (CSS) is a stylesheet language used to describe
          the presentation of a document written in HTML or XML (including XML
          dialects such as SVG, MathML or XHTML). CSS describes how elements
          should be rendered on screen, on paper, in speech, or on other media.
        </p>
      </div>
    </div>
    <div class="parallaxEle">
      <div class="backGround2 background">
        <img src="@/assets/20240321234532.jpg" alt="">
      </div>
      <div class="textContain">
        <h2>JavaScript</h2>
        <p>
          JavaScript (JS) is a lightweight interpreted (or just-in-time
          compiled) programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          single-threaded, dynamic language, supporting object-oriented,
          imperative, and declarative (e.g. functional programming) styles.
        </p>
      </div>
    </div>
    <div class="parallaxEle">
      <div class="backGround3 background">
        <img src="@/assets/20240322000924.jpg" alt="">
      </div>
      <div class="textContain">
        <h2>Cascading Style Sheets</h2>
        <p>
          Cascading Style Sheets (CSS) is a stylesheet language used to describe
          the presentation of a document written in HTML or XML (including XML
          dialects such as SVG, MathML or XHTML). CSS describes how elements
          should be rendered on screen, on paper, in speech, or on other media.
        </p>
      </div>
    </div>
    <div class="parallaxEle">
      <div class="backGround4 background">
        <img src="@/assets/20240321234530.jpg" alt="">
      </div>
      <div class="textContain">
        <h2>JavaScript</h2>
        <p>
          JavaScript (JS) is a lightweight interpreted (or just-in-time
          compiled) programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          single-threaded, dynamic language, supporting object-oriented,
          imperative, and declarative (e.g. functional programming) styles.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'parallaxScroll',
  mounted () {
    const backGround1 = document.querySelector('.backGround1')
    const backGround2 = document.querySelector('.backGround2')
    const backGround3 = document.querySelector('.backGround3')
    const backGround4 = document.querySelector('.backGround4')
    gsap.to(backGround1, {
      yPercent: -40,
      scrollTrigger: {
        trigger: backGround2,
        start: 'top bottom',
        end: 'top top',
        scrub: 1
      }
    })
    gsap.to(backGround2, {
      yPercent: -40,
      scrollTrigger: {
        trigger: backGround3,
        start: 'top bottom',
        end: 'top top',
        scrub: 1
      }
    })
    gsap.to(backGround3, {
      yPercent: -40,
      scrollTrigger: {
        trigger: backGround4,
        start: 'top bottom',
        end: 'top top',
        scrub: 1
      }
    })
  }
}
</script>

<style scoped>
.parallaxContain {
  padding-top: 30vh;
}
.parallaxEle {
  width: 100vw;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  overflow: hidden;
}
.background, .textContain {
  width: 50%;
  height: 150%;
  background-color: white;
}
.textContain {
  box-sizing: border-box;
  padding: 4vw;
  border: 1px solid #d1cfcf;
}
.background img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 10%;
}
.textContain h2 {
  padding-bottom: 3vw;
  font-size: clamp(30px, 3vw, 50px);
  font-weight: 300;
}
.textContain p {
  font-size: clamp(16px, 1.5vw, 30px);
  line-height: 1.2;
  font-weight: 200;
}
</style>
