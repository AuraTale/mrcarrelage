<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { gsap } from "gsap";
const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});

onMounted(() => {
  $ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  });
});

import portfolio_data from "~/data/portfolio_data2";
import Header from "~/layouts/Header.vue";
import Foote from "~/layouts/Footer.vue";
import Breadcrumb from "~/components/common/Breadcrumb.vue";
// import HomePortfolioArea from "~/components/HomePortfolioArea.vue";

useHead({
  title: "MrCarrelage",
});

const router = useRouter();

function handlePortfolioClick(id) {
  router.push(`/single-portfolio`);
}
</script>

<template>
  <div>
    <Header />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <Breadcrumb title="Projets" :style_2="true" />
          <HomePortfolioArea
            :portfolio_data="portfolio_data"
            :handlePortfolioClick="handlePortfolioClick"
          />
        </main>
        <Foote />
      </div>
    </div>
    <CommonScrollToTop />
    <CommonCursorBall />
  </div>
</template>
