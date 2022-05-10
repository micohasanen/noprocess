export default defineNuxtPlugin((nuxtApp) => {
  function playAnimations () {
    const items = document.querySelectorAll('[data-animate]')
    items.forEach((item) => {
      const windowHeight = window.innerHeight
      const rect = item.getBoundingClientRect()

      const isVisible = rect.bottom >= 0 && rect.top <= windowHeight

      const animation = item.getAttribute('data-animate')

      if (isVisible) {
        item.classList.add('animate__animated')
        item.classList.add(animation)
      } else {
        item.classList.remove("animate__animated")
        item.classList.remove(animation)
      }
    })
  }

  window.addEventListener('scroll', playAnimations)
  playAnimations()
})