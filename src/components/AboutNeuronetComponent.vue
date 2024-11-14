<template>
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
            <TabsComponent/>

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

            <!-- 5 секция -->
            <div class="opportunities_box opportunities_box--5">
                <p>Попробуйте нейросеть</p>
                <!-- повесить @click на h3 -->
                <h3 class="violet">ChatGPT </h3>
                <p>прямо сейчас</p>
            </div>

            <!-- 6 секция -->
            <div class="opportunities_box opportunities_box--6">
                <h3><span class="violet-lite">Генерация аудио</span> из текста</h3>
            </div>

            <!-- 7 секция -->
            <div class="opportunities_box opportunities_box--7">
                <p>prod by free AI <span id="AiShedevrumBtn" class="violet-lite AiShedevrumBtn">"Шедеврум"</span></p>
                <h3>Качественные <span class="violet-lite">видео</span> из текста и изображений</h3>
            </div>
        </div>
    </div>
</template>

<script  lang="ts">
    import QweComponent from '@/components/QweComponent.vue' 
</script>

<style>
  .wrap {
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }
    .items-wrap {
        position: relative;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: 20px;
        width: 100%;
    }

    .items {
        flex-shrink: 0;
        display: flex;
        gap: 10px;
        justify-content: space-around;
        min-width: 100%;
    }
    .item {
        transition: all 0.25s ease-in-out;
        transform: scale(0.90);
    }
    .item:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(0.95);
        outline: 1px solid #715de2;
    }

    .marquee {
        animation: scroll 12s linear infinite;
    }
    .reverce {
        animation-direction: reverse;
    }
    .items-wrap:hover .marquee {
        animation-play-state: paused;
    }

    @keyframes scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-100% - 20px));
    }
    }

    .wrap-neuronet_box--description {
        /* transform: scale(1.1); */
        padding: 0;
        margin-bottom: 10px;
    }
</style>