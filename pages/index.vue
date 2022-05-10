<template>
  <div class="main-layout">
    <Intro />
    <Catch />
    <Break />
    <div class="block--chains">
      <img src="/images/chains.png" alt="Chains" />
    </div>
    <Contact />
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Blockchain Development Company | No Process',
  description: 'No Process is a software company spesialized in blockchain development.'
})
</script>

<style scoped>
  .main-layout {
    min-height: 100vh;
  }
  .block--catch {
    padding: 4rem 20vw;
  }
  .block--chains {
    padding: 6rem 20vw;
    text-align: center;
  }
  .block--contact {
    padding: 4rem 20vw 8rem 20vw;
  }
  .contact--email {
    margin-top: 0.6rem;
  }
  .icon.email {
    top: 5px;
    position: relative;
  }

  @media screen and (max-width: 1000px) {
    .block--chains {
      padding: 6rem 3rem;
    }
    .block--catch {
      padding: 4rem 3rem;
    }
    .block--contact {
      padding: 4rem 2rem 8rem 2rem;
    }
  }
</style>
