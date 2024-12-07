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

    <div class="section">
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

    
</script>

<style lang="scss" scoped>
    
</style>