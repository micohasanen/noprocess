<template>
  <div class="block-container">
    <div class="block--break">
      <p class="break--title animate__delay_500ms" data-animate="animate__fadeInUp">
        We create top-quality
      </p>
      <div class="break-items">
        <div class="item" data-animate="animate__fadeInUp">
          Exchanges
        </div>
        <div class="item animate__delay-500ms" data-animate="animate__fadeInUp">
          Marketplaces
        </div>
        <div class="item animate__delay-1s" data-animate="animate__fadeInUp">
          Applications
        </div>
        <div class="item animate__delay-1500ms" data-animate="animate__fadeInUp">
          ICOs
        </div>
        <div class="item animate__delay-2s" data-animate="animate__fadeInUp">
          and more.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .block-container {
    padding-top: 6rem;
  }
  .block--break {
    background: linear-gradient(90deg, #F45F42, #EF9C60);
    padding: 3rem 20vw;
    text-align: center;
  }
  .break--title {
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 2rem;
  }
  .break-items {
    display: flex; 
    justify-content: space-around;
    flex-wrap: wrap;

    .item {
      padding: 7px 33px;
      background: #242730;
      color: #fff;
      height: fit-content;
      border-radius: 999px;
      white-space: nowrap;
      margin: 8px;
    }
  }

  @media screen and (max-width:600px) {
    .block--break {
      padding: 3rem 3rem;
    }

    .break-items .item {
      width: 100%;
    }
  }
</style>