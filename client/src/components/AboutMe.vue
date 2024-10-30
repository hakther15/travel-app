<template>
    <section id="about">
      <h2 class="about-me">About Me</h2>
      <img :src="getImageUrl('self-stockholm.jpeg')" alt="me-at-stockholm" title="Stockholm, SE" class="me-at-stockholm">
      <p class="about-me-info">
        Hey there! <span class="highlight2">I'm Sina</span> I'm a travel hobbyist - I travel to learn, enjoy, and embrace culture!<br />
        <br />I used to think traveling was not very interesting; it felt as though all places held the 
        same environment - lots of tourists, busy, and the food was overrated. <br />
        <br />I stopped researching and looking up "popular things to do" and started to look at what interested me -
        whether it is related to art, music, certain foods and atmospheres. I became obsessed with traveling and learning
        since! I've traveled around the US and UK (England and Scotland), Canada, Belgium, the Netherlands,
        Denmark, Sweden, France, and Japan! This list is still growing. <br />
        <br />When I am not traveling, I am a mental health therapist and software developer, avid concert goer, craft beer
        enthusiast, and an amateur cook&#128523; 
      </p>
    </section>
</template>

<script>

export default {
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