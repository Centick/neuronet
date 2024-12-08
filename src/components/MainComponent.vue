<template>
    <!-- доделать paralax эфект в banner -->
    <div id="paralaxTopGlow" class="TopGlowForBanner"></div>
    <div id="Banner_parallax-inner" class="section banner__section">
        <div  class="container banner__container">
            <h1><span class="violet">Нейросети</span> – ключ к умным решениям.</h1>
            <span class="banner_text">Используй мощь всех передовых нейросетей</span>
            <div class="banner__wrap-neuronet">
                <ButtonListComponent/>
            </div>
            <div class="number_wrap">
                <div class="number_block">
                    <span>99.8k+</span>
                    <span>Пользователей</span>
                </div>
                <div class="number_block">
                    <span>50k+</span>
                    <span>Запросов</span>
                </div>

                <div class="number_block"></div>
            </div>
        </div>
    </div>

    <AboutNeuronetComponent/>

    <div class="section">
        <div class="container using__container">
            <div class="using__wrap">
                <QweComponent/>
                <div class="btn using__wrap_btn" type="button">Попробовать пямо сейчас</div>
            </div>
            <img class="using__img" src="../assets/img/soundLine.gif" alt="img">
        </div>
    </div>

    <div class="section section__container">
        <div id="cpt_on_bg" class="cpt_on_bg--1 cpt_on_bg"></div>
        <div id="cpt_on_bg" class="cpt_on_bg--2 cpt_on_bg"></div>
        <div id="cpt_on_bg" class="cpt_on_bg--3 cpt_on_bg"></div>
        <div class="container WWimage__container">
            <div class="WWimage__box">
                <div class="WWimage__box_text">
                    <h4><span class="gadient-pink">Генерируйте</span> копии вашего изображения</h4>
                    <a class="link WWimage__link" href="#">В Reimagine XL</a>
                </div>
                <img class="WWimage_image" src="../assets/img/work_with_image/reimagine.gif">
            </div>
            <div class="WWimage__box">
                <img class="WWimage_image" src="../assets/img/work_with_image/Remove_background.gif">
                <div class="WWimage__box_text WWimage__box_text--reverse">
                    <h4><span class="gradient-violet"> Удаляйте фон </span>с ваших фото</h4>
                    <a class="link WWimage__link" href="#">В Remove Background</a>
                </div>
            </div>
            <div class="WWimage__box">
                <div class="WWimage__box_text">
                    <h4><span class="gradient-violet">Дорисовывайте </span>ваши изображения</h4>
                    <a class="link WWimage__link" href="#">В Uncrop</a>
                </div>
                <img class="WWimage_image" src="../assets/img/work_with_image/Uncrop.gif">
            </div>
            <div class="WWimage__box">
                <img class="WWimage_image" src="../assets/img/work_with_image/image-to-video.gif">
                <div class="WWimage__box_text WWimage__box_text--reverse">
                    <h4><span class="gradient-blue">Превращайте</span> ваши фото в короткие видео</h4>
                    <a class="link WWimage__link" href="#">В Image-to-Video</a>
                </div>
            </div>
            <div class="WWimage__box">
                <div class="WWimage__box_text">
                    <h4><span class="gradient-blue">Улучшайте</span> качество ваших фотографий</h4>
                    <a class="link WWimage__link" href="#">В Upscale</a>
                </div>
                <img class="WWimage_image" src="../assets/img/work_with_image/UpScale.gif">
            </div>
            <div class="WWimage__box">
                <img class="WWimage_image" src="../assets/img/work_with_image/CleanUp.gif">
                <div class="WWimage__box_text WWimage__box_text--reverse">
                    <h4><span class="gadient-pink">Удаляйте</span> любые объекты с фото</h4>
                    <a class="link WWimage__link" href="#">В CleanUP</a>
                </div>
            </div>
        </div>
    </div>

    <FAQComponent/>

    <div class="section">
        <div class="container footer__container">
            <img class="footer__img" src="../assets/img/window.webp" alt="img">
            <p><span class="gradient-blue">Нейронные сети - это</span> как дети. Они быстро учатся, но нуждаются в <span class="gadient-pink">правильном воспитании. </span></p>
            <span><span class="violet">© </span>Ян Лекун, иследователь ИИ</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import QweComponent from '@/components/QweComponent.vue' 
    import AboutNeuronetComponent from '@/components/AboutNeuronetComponent.vue';
    import ButtonListComponent from '@/components/ButtonListComponent.vue'
    import FAQComponent from '@/components/FAQComponent.vue';
    // доделать paralax эфект в баннер

    
    // parallax WWimage


</script>

<style lang="css" scoped>
    .section__container{
        position: relative;
    }
    .cpt_on_bg--1{
        position: absolute;
        transform: rotate(1000px);
        left: -250px;
        width: 60vw;
        height: 60vw;
        background-image: url("../assets/img/parallax/parallax1.webp");
        background-position: center;
        background-size: cover;
        z-index: -1;
        mix-blend-mode: lighten;
    }

    .cpt_on_bg--2{
        position: absolute;
        right: -250px;
        top: 600px;
        width: 60vw;
        height: 60vw;
        background-image: url("../assets/img/parallax/parallax2.webp");
        background-position: center;
        background-size: cover;
        z-index: -1;
        mix-blend-mode: lighten;
    }

    .cpt_on_bg--3{
        position: absolute;
        top: 1400px;
        left: -250px;
        width: 60vw;
        height: 60vw;
        background-image: url("../assets/img/parallax/parallax2.webp");
        background-position: center;
        background-size: cover;
        z-index: -1;
        mix-blend-mode: lighten;
    }

    .number_wrap{
        margin-top: 30px;
        font-size: 50px;
        display: flex;
        gap: 50px;
    }

    .number_block{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .number_block > span{
        font-weight: 700;

    }

    .number_block > span:last-child{
        font-size: 20px;
        color: gray;
        font-weight: 500;
    }
</style>