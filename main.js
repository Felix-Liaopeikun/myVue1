const { createApp, ref, computed } = Vue

createApp({
  setup() {
    const cart = ref([])
    const premium = ref(true)
    function updateCart(id) {
      cart.value.push(id)
    }
    function removeFromCart(id) {
      const index = cart.value.indexOf(id)
      if (index > -1) {
        cart.value.splice(index, 1)
      }
    }
    const cartCount = computed(() => {
      return cart.value.length
    })
    return { 
      cart,
      premium,
      updateCart,
      removeFromCart,
      cartCount
    }
  }
})
  .component('product-display', productDisplay)
  .mount('#app')

