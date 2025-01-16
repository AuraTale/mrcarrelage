 
 <script setup>
import { onMounted } from "vue";

onMounted(() => {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");
      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (!scrollerInner) return;
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
});


</script>

  <template>
  <div class="company-design-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Entreprises avec lesquelles j'ai travaillé</h2>
          <div class="company-list">
            <div class="scroller" data-direction="left" data-speed="slow">
              <div class="scroller__inner">
                <img
                  src="assets/images/client-logos/cerabora.webp"
                  alt="Company"
                />
                <img
                  src="assets/images/client-logos/italiana.webp"
                  alt="Company"
                />
                <img
                  src="assets/images/client-logos/mallzelij.webp"
                  alt="Company"
                />
                <img
                  src="assets/images/client-logos/sonajib.webp"
                  alt="Company"
                />
                <img
                  src="assets/images/client-logos/strapexlogo.webp"
                  alt="Company"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
