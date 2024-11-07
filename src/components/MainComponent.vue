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
            <!-- 1 секция  -->
            <div class="opportunities_box opportunities_box--1">
                <h3>Генерация <span class="violet-lite">текста</span>, анализ <span class="violet-lite">изображений</span> и <span class="violet-lite">файлов</span></h3>
                <p class="opportunities_box_text">Последние версии нейросетей с анализом файлов могут обрпбатывать текста с невероятной скоростью. <span class="violet-lite">Создавайте</span> логотипы, статьи, проекты <span class="violet-lite"> в 2 клика</span>.</p>
                <div>
                    <div class="wrap_for_files">
                        <div class="box_for_files">
                            <img src="../assets/img/file_types/a.svg" alt="file">
                        </div>
                    
                        <div class="box_for_files">
                            <img class="box_for_files__img-2" src="../assets/img/file_types/word.svg" alt="file">
                        </div>

                        <div class="box_for_files">
                            <img class="box_for_files__img-2" src="../assets/img/file_types/excel.svg" alt="file">
                        </div>

                        <div class="box_for_files">
                            <img src="../assets/img/file_types/pdf.svg" alt="file">
                        </div>
                        <div class="box_for_files">
                            <img src="../assets/img/file_types/jpg.svg" alt="file">
                        </div>
                    </div>
                    <p class="signature"><span class="violet">©</span> Не забывай о человеческих талантах...</p>
                </div>
            </div>

            <!-- 2 секция  -->
            <div class="opportunities_box opportunities_box--2">
                
            </div>

            <!-- 3 секция -->
            <div class="opportunities_box opportunities_box--3">
                <h3>Создание реалистичных <span class="violet-lite">изображений</span> за считанные секунды</h3>
                <p class="opportunities_box_text">Последние версии нейросетей с анализом файлов могут обрпбатывать текста с невероятной скоростью. <span class="violet-lite">Создавайте</span> логотипы, статьи, проекты <span class="violet-lite"> в 2 клика</span>.
                </p>
                <div class="opportunities_box--3_img"></div>
            </div>

            <!-- 4 секция -->
            <div class="opportunities_box opportunities_box--4">
                <h3 class="violet-lite">Нейросеть</h3>
                <p class="opportunities_box--4_text">Построит таблицу, разметит код, нарисует уравнения</p>
                <p>Более 10 видов разметки</p>
                <div class="opportunities_box--4_bg-color"></div>
            </div>
            <div class="opportunities_box opportunities_box--5"></div>

            <!-- 6 секция -->
            <div class="opportunities_box opportunities_box--6">
                <h3><span class="violet-lite">Генерация аудио</span> из текста</h3>
            </div>

            <!-- 7 секция -->
            <div class="opportunities_box opportunities_box--7">
                <p>prod by free AI <span id="AiShedevrumBtn" class="violet-lite AiShedevrumBtn">"Шедеврум"</span></p>
                <h3 class="opportunities_box--7_h3">Качественные <span class="violet-lite">видео</span> из текста и изображений</h3>
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue'

    // доделать paralax эфект в баннер
</script>

<style scoped>

</style>