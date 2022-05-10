<template>
    <KinesisContainer class="landing-hero">
    <div class="hash">
      <div class="hash-container">
        <KinesisElement tag="span" type="depth" :strength="20">
          <img src="/images/Hash_Line.svg" id="hash-line-1" />
        </KinesisElement>
        <KinesisElement tag="span" type="depth" :strength="10">
          <img src="/images/Hash_Line.svg" id="hash-line-2" />
        </KinesisElement>
        <KinesisElement tag="span" type="depth" :strength="15">
          <img src="/images/Hash_Line.svg" id="hash-line-3" />
        </KinesisElement>
        <KinesisElement tag="span" type="rotate" :strength="5">
          <img src="/images/Hash_Line.svg" id="hash-line-4" />
        </KinesisElement>
      </div>
    </div>
    <div class="page-intro offset-left">
      <h1 class="intro-title" data-animate="animate__fadeInRight">
        Helping forward-thinking
        companies and protocols bring their
        Web 3.0 visions to life.
      </h1>
      <img class="icon-dots animate__delay-500ms" src="@/assets/icons/dots.svg" data-animate="animate__fadeIn" />
      <p class="intro-text animate__delay-750ms" data-animate="animate__fadeIn">
        We create top quality custom smart contracts, apps and tailored
        blockchain solutions for protocols of all sizes.
        <br><br>
        When it comes to NFTs, tokens and dApps:<br>
        if you can think it, we can build it. 
      </p>
      <a class="button is-primary is-outlined is-rounded np__btn mt-6 animate__delay-750ms" data-animate="animate__fadeIn" href="#contact">
        Get in touch
      </a>
    </div>
  </KinesisContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default defineComponent({
  components: { KinesisContainer, KinesisElement },
  setup() {
  },
})
</script>


<style scoped>
.landing-hero {
    padding: 23vh 20vw 15vh 20vw;
    position: relative;
  }
  .page-intro.offset-left {
    padding: 1rem 1rem 1rem calc(50% + 1rem);
    z-index: 2;
  }

  /* Hash CSS */
  .hash {
   position: absolute;
   height: 100%;
   width: 50%;
   left: 0;
   top: 0;
   display: flex;
   align-items: center;
  }
 .hash-container {
   position: relative;
   width: 100%;
   height: 300px;
   display: flex;
   left: -5%;
   top: 5%;
 }
 .hash-container span {
   position: absolute;
   top: 0;
   left: 0;
 }
 #hash-line-2 {
   transform: rotateZ(50deg) translateY(0px) translateX(20px);
 }
#hash-line-3 {
   transform: rotateZ(100deg) translateX(-20px) translateY(-80px);
 }
#hash-line-4 {
   transform: rotateZ(140deg) translateX(-80px) translateY(-80px);
 }

 @media screen and (min-width: 2000px) {
   .hash-container {
     left: 20vw;
   }
 }

 @media screen and (max-width: 1000px) {
   .hash {
     width: 30%;
   }
  .page-intro.offset-left {
    padding: 1rem 1rem 1rem calc(40% + 1rem);
  }
 }

@media screen and (max-width: 800px) {
  .hash {
    display: none;
  }

  .page-intro.offset-left {
    padding: 1rem;
  }

  .landing-hero {
    padding: 10rem 3rem;
  }
}
</style>