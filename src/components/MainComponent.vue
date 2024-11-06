<template>
    <!-- доделать paralax эфект в banner -->
    <div id="paralaxTopGlow" class="TopGlowForBanner"></div>
    <div id="Banner_parallax-inner" @mousemove="parallax" class="section banner__section">
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

    <div class="section">
        <div class="container opportunities__container">
            <div class="opportunities_box opportunities_box--1">
                <h3>Генерация <span class="violet-lite">текста</span>, анализ <span class="violet-lite">изображений</span> и <span class="violet-lite">файлов</span></h3>
                <p>Последние версии нейросетей с анализом файлов могут обрпбатывать текста </p>
            </div>
            <div class="opportunities_box opportunities_box--2"></div>
            <div class="opportunities_box opportunities_box--3"></div>
            <div class="opportunities_box opportunities_box--4"></div>
            <div class="opportunities_box opportunities_box--5"></div>
            <div class="opportunities_box opportunities_box--6"></div>
            <div class="opportunities_box opportunities_box--7"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue'

    // доделать paralax эфект в баннер
</script>

<style scoped>

</style>