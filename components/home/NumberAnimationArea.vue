<template>
  <div class="number-animation-container" ref="numberSection">
    <!-- Number 1 -->
    <div class="number-item">
      <span ref="number1">{{ value1 }} +</span>
      <p>Years Of Experience</p>
    </div>
    
    <!-- Number 2 -->
    <div class="number-item">
      <span ref="number2">{{ value2 }}</span>
      <p>Complete Projects</p>
    </div>

    <!-- Number 3 -->
    <div class="number-item">
      <span ref="number3">{{ value3 }} +</span>
      <p>Satisfied Clients</p>
    </div>

    <!-- Number 4 -->
    <div class="number-item">
      <span ref="number4">{{ value4 }}</span>
      <p>AWARDS WIN</p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  data() {
    return {
      // Initial values for the numbers
      value1: 8,
      value2: 58,
      value3: 90,
      value4: 20,
    };
  },
  mounted() {
    // Set up Intersection Observer when the component mounts
    this.setupIntersectionObserver();
  },
  methods: {
    // Set up Intersection Observer to trigger the animation when section is in view
    setupIntersectionObserver() {
      const options = {
        root: null,  // use the viewport as the root
        threshold: 0.5,  // trigger when 50% of the element is visible
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate numbers when the section is in view
            this.animateNumber(this.$refs.number1, this.value1);
            this.animateNumber(this.$refs.number2, this.value2);
            this.animateNumber(this.$refs.number3, this.value3);
            this.animateNumber(this.$refs.number4, this.value4);

            // Stop observing after animation starts
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(this.$refs.numberSection);
    },

    animateNumber(element, value) {
      anime({
        targets: element,
        innerHTML: [0, value],  // Animate from 0 to the final value
        easing: 'easeInOutQuad', // Easing function
        duration: 4000,          // Animation duration in milliseconds
        round: 1,                // Round to nearest integer
      });
    },
  },
};
</script>

<style scoped>
.number-animation-container {
  display: flex;
  justify-content: space-between;  /* Space out the items evenly across the screen */
  align-items: center;
  width: 100%;
  padding: 50px 0;
}

.number-item {
  text-align: center;
  width: 20%;  /* Each number takes up 20% of the screen width */
}

.number-item span {
  display: block;
  font-size: 3rem;  /* Size of the animated number */
  font-weight: bold;
  color: #fff;
}

.number-item p {
  font-size: 1rem;
  color: #fff;
  margin-top: 10px;
}
</style>
