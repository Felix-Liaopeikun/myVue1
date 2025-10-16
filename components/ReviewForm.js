const reviewForm = {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>   
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label for="recommend">Would you recommend this product?</label>
      <select id="recommend" v-model="recommend">
        <option>Yes</option>
        <option>No</option>
      </select>

      <input class="button" type="submit" value="Submit">
    </form>`,
    setup(props, {emit}) {
        const form = Vue.reactive({
            name: '',
            review: '',
            rating: null,
            recommend: null
        })
        const { name, review, rating, recommend } = Vue.toRefs(form)
        function onSubmit(){
            if (name.value === '' || review.value === '' || rating.value === null || recommend.value === null){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            const productReview = {
                name: name.value,
                review: review.value,
                rating: rating.value,
                recommend: recommend.value
            }
            emit('review-submitted', productReview)
            name.value = ''
            review.value = ''
            rating.value = null
            recommend.value = null
        }
        return {
            name,
            review,
            rating,
            recommend,
            onSubmit
        }
    }

}