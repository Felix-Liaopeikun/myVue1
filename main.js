const { createApp, ref } = Vue

createApp({
  setup() {
    const cart = ref(0)
    const premium = ref(true)
    return { 
      cart,
      premium 
    }
  }
})
  .component('product-display', productDisplay)
  .mount('#app')

