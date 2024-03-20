<template>
  <div class="parallaxContain">
    <div class="parallaxEle">
      <div class="backGround1 background"></div>
      <div class="textContain">
        <h2>Climate Change</h2>
        <p>
          Infrastructure has a major role to play in the transition towards net
          zero. That is why we invest in renewable electricity, low emission
          transport and create infrastructure that enables clean mobility. We
          also address the need to reduce our assets’ own greenhouse gas
          emissions.
        </p>
      </div>
    </div>
    <div class="parallaxEle">
      <div class="backGround2 background"></div>
      <div class="textContain">
        <h2>Climate Change</h2>
        <p>
          Infrastructure has a major role to play in the transition towards net
          zero. That is why we invest in renewable electricity, low emission
          transport and create infrastructure that enables clean mobility. We
          also address the need to reduce our assets’ own greenhouse gas
          emissions.
        </p>
      </div>
    </div>
    <div class="parallaxEle">
      <div class="backGround3 background"></div>
      <div class="textContain">
        <h2>Climate Change</h2>
        <p>
          Infrastructure has a major role to play in the transition towards net
          zero. That is why we invest in renewable electricity, low emission
          transport and create infrastructure that enables clean mobility. We
          also address the need to reduce our assets’ own greenhouse gas
          emissions.
        </p>
      </div>
    </div>
    <div class="parallaxEle">
      <div class="backGround4 background"></div>
      <div class="textContain">
        <h2>Climate Change</h2>
        <p>
          Infrastructure has a major role to play in the transition towards net
          zero. That is why we invest in renewable electricity, low emission
          transport and create infrastructure that enables clean mobility. We
          also address the need to reduce our assets’ own greenhouse gas
          emissions.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
}
.background{
  width: 100%;
  height: 100%;
}
.textContain{
 position: absolute;
 top: 0;
 right: 0;
 width: 50%;
 height: 100%;
 box-sizing: border-box;
 padding: 4vw;
 background-color: white;
}
.backGround1 {
  background: url("@/assets/tipsy.jpg") no-repeat left center/contain;
}
.backGround2 {
  background: url("@/assets/tipsy.jpg") no-repeat left center/contain;
  background-attachment: fixed;
}
.backGround3 {
  background: url("@/assets/tipsy.jpg") no-repeat left center/contain;
  background-attachment: fixed;
}
.backGround4 {
  background: url("@/assets/tipsy.jpg") no-repeat left center/contain;
  background-attachment: fixed;
}
.textContain h2 {
  padding-bottom: 3vw;
  font-size: 3vw;
  font-weight: 400;
}
.textContain p {
  font-size: 1.5vw;
  line-height: 1.2;
  font-weight: 300;
}
</style>
