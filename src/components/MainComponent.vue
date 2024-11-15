<template>
    <!-- доделать paralax эфект в banner -->
    <div id="paralaxTopGlow" class="TopGlowForBanner"></div>
    <div id="Banner_parallax-inner" class="section banner__section">
        <div  class="container banner__container">
            <h1><span class="violet">Нейросети</span> – ключ к умным решениям.</h1>
            <span class="banner_text">Используй мощь всех передовых нейросетей</span>
            <div class="banner__wrap-neuronet">
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img">
                    <span>ChatGPT</span>
                </div>
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/midjourney.svg" alt="img">
                    <span>Midjourney</span>
                </div>
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/chatGPT-dalle.svg" alt="img">
                    <span>Dall-E</span>
                </div>
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/eleven.svg" alt="img">
                    <span>Eleven Labs</span>
                </div>
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/luma.svg" alt="img">
                    <span>Luma</span>
                </div>
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/runwayml.svg" alt="img">
                    <span>Runway ML</span>
                </div>
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/stable-diffusion.svg" alt="img">
                    <span>Stable Diffusion</span>
                </div>
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/stability.svg" alt="img">
                    <span>Stability</span>
                </div>
                <div class="wrap-neuronet_box">
                    <img src="../assets/img/neuronet/claude-ai.svg" alt="img">
                    <span>Claudy AI</span>
                </div>
            </div>
        </div>
    </div>

    <AboutNeuronetComponent/>

    <div class="section">
        <div class="container using__container">
            <QweComponent/>
<<<<<<< HEAD
=======
            <img class="using__img" src="../assets/img/soundLine.gif" alt="img">
>>>>>>> parent of 05fb21c (tabs 70% 😭)
        </div>
    </div>
</template>

<script setup lang="ts">
    import QweComponent from '@/components/QweComponent.vue' 
    import AboutNeuronetComponent from '@/components/AboutNeuronetComponent.vue';
    // доделать paralax эфект в баннер

    
</script>

<style lang="scss" scoped>
    
</style>