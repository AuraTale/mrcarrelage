<script setup>
import CountUp from "vue-countup-v3";

const counter_data = [
 
];
</script>

<template>
  <ClientOnly>
    <section id="about" class="about-area">
      <div class="container">
        <div class="row">
          <!-- START ABOUT TEXT DESIGN AREA -->
          <div class="col-lg-3 col-sm-3">
            <h2 class="about-pre-title">NOTRE ETHOS</h2>
          </div>
          <div class="col-lg-9 col-sm-9">
            <div class="about-content-part wow fadeInUp delay-0-2s">
              <p>
Mr Carrelage S'engage à vous apporter le meilleur du monde du carrelage, avec des conseils avisés et une expertise de terrain. Mon objectif est simple : vous guider dans vos choix, que vous soyez un particulier à la recherche du carrelage parfait, un professionnel ou un showroom qui expose des marques internationales. Ensemble, nous allons faire de vos espaces des lieux uniques, en rendant le processus plus clair, plus accessible et surtout, à la hauteur de vos attentes.
              </p>
            </div>
            <!-- START COUNTER DESIGN AREA -->
            <div
              class="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s"
            >
              <div
                v-for="(counter, i) in counter_data"
                :key="i"
                class="counter-item counter-text-wrap"
              >
                <span :class="`count-text d-flex justify-content-center ${counter.cls}`">
                  <count-up
                  :end-val="counter.count" 
                ></count-up>
                </span>
                <span class="counter-title">{{ counter.title }}</span>
              </div>
            </div>
            <!-- / END COUNTER DESIGN AREA -->
          </div>
          <!-- / END ABOUT TEXT DESIGN AREA -->
        </div>
      </div>
    </section>
  </ClientOnly>
</template>