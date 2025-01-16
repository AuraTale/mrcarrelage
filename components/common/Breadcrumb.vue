
 

<script setup>

const props = defineProps({
  title: {
    type: String
  },
  style_2: {
    type: Boolean
  },
  style_3: {
    type: Boolean
  },
  style_4: {
    type: Boolean
  }
})
 
</script>



<template>
  <section class="single-page-hero-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <h2>{{title}}</h2>
         
          <p v-if="style_2">
            "L'art du carrelage au service de vos projets uniques."
          </p>
          
          
          <p v-if="style_3">
            Nous serions ravis de recevoir vos messages et de répondre à vos questions. N'hésitez pas à nous contacter !
          </p>
          
           
          <p v-if="style_4">Stories, Advice, and Inspiration for the Curious Mind</p>
           
        </div>
      </div>
    </div>
  </section>
</template>