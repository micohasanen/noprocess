<template>
  <div class="block--contact" id="contact">
    <div class="columns">
      <div class="column is-6 p-4">
        <p class="intro-title" data-animate="animate__fadeInLeft">
          Let's make it happen.
        </p>
        <p class="intro-text contact--email animate__delay-500ms" data-animate="animate__fadeIn">
          <img src="@/assets/icons/email.svg" class="icon email" />
          <a class="pl-3 has-text-white" href="mailto:hello@noprocess.co">hello@noprocess.co</a>
        </p>

        <img class="icon-dots animate__delay-1s" src="@/assets/icons/dots.svg" data-animate="animate__fadeIn"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon.email {
  position: relative;
  top: 5px;
}
</style>