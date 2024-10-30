<template>
    
    <PageHeader />
    <NavButtons />

    <section id="info">
      <!--first row-->
      <img :src="getImageUrl('amsterdam.jpeg')" alt="amsterdam" title="Amsterdam, NL" class="amsterdam">
      <div class="travel-info">
        <h3 class="travel-info-header">Traveling can be <span class="highlight">overwhelming</span>!</h3>
        <p class="travel-info-p">
          It can be very challenging to coordinate an itinerary - what to plan for, what to
          see, how to maximize your time away... while also thinking about what to pack! <br />
          <br />This is where you can take a deep breath, relax, and <br />
          <span class="highlight">let me help</span>!<br />
          <br /> You'll be able to find some fun in planning for traveling - as much as it is to 
          travel, BELIEVE ME!
        </p>
      </div>

      <!--second row-->
      <div class="tip-info">
        <h3 class="tip-info-header">Secrets to <span class="highlight">stress-free</span> Traveling</h3>
        <p class="tip-info-p">
          How do you figure out where to go? What to see? Where to eat? Shop? Stay? Lots of questions, I know!<br />
          <br />Step-by-step, you will learn tricks and tips about it all. Maybe, you can start to be the expert 
          traveler amongst your friends and family. <br />
          <br />Be sure to <router-link :to="{name: 'subscribe'}" title="Subscribe to blog"><span class="highlight">subscribe</span></router-link>
           to the blog to stay updated and connected to new finds and tips!
        </p>
      </div>
      <img :src="getImageUrl('nyc.jpeg')" alt="nyc" title="Manhattan Bridge, NYC" class="nyc">
    </section>
    
    <AboutMe />

    <div>
      <a href="#top" id="top-button">Back to the top</a>
    </div>
    <PageFooter />
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import NavButtons from '../components/NavButtons.vue';
import AboutMe from '../components/AboutMe.vue';
import PageFooter from '../components/PageFooter.vue';

export default {
    components: {
        PageHeader,
        NavButtons,
        AboutMe,
        PageFooter
    },
    methods: {
      getImageUrl(imageName) {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
      }
    }
}
</script>

<style>
@import '../assets/style.css';

</style>