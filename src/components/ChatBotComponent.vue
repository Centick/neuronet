<template>
    <div class="section section__chat-bot">
        
        <div class="container container__chat-bot">
            <h4>Чат-бот</h4>
            <div class="chat-bot_btn-close" @click="emit('closeChatBot')"></div>
            <div class="chating">
                <form class="chating__form" action="#">
                    <img src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img">
                    <textarea class="chating__input" placeholder="Введите ваш запрос..." ref="textarea" v-model="text"></textarea>
                    <input class="btn chating__input--btn" type="button" value="→">
                </form>
                <div class="chatting">
                    <!--  -->
                    <div class="chatting__text chatting__text_user">
                        <img class="chatting__text--img" src="../assets/img/icons/profile.png" alt="img">
                        <p class="chatting__text--text chatting__text_user--text">Привет, как твои дела?</p>
                    </div>

                    <div class="chatting__text">
                        <img class="chatting__text--img" src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img">
                        <p class="chatting__text--text">Добрый вечер, все отлично!</p>
                    </div>

                    <div class="chatting__text">
                        <img class="chatting__text--img" src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img">
                        <p class="chatting__text--text">Сегодня 05.12.2024г погода прохладная ожидаются осадки в виде снега с дождем. Бери</p>
                    </div>
                </div>
            </div>            

        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted  } from 'vue';
    import autosize from 'autosize';
    // эмиты
    const emit = defineEmits(['closeChatBot']);

    const text = ref('');
    const textarea = ref(null);

    onMounted(() => {
        autosize(textarea.value);
    });
</script>

<style>
    .section__chat-bot{
        position: fixed;
        top: 0;
        left: 0;
        padding: 30px;
        height: 100%;
        width: 100%;
        background-color: rgba(44, 44, 44, 0.61);
        z-index: 100;
        display: flex;
        justify-content: flex-end;
    }

    .container__chat-bot{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        width: 40%;
        background-color: var(--colorForBox);
        border: 1px solid var(--colorVioletDarck);
        border-radius: 20px;
        padding: 30px;
    }

    .chat-bot_btn-close{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        background-image: url('../assets/img/icons/cross.png');
        background-position: center;
        background-size: cover;
    }

    .chating{
        display: flex;
        flex-direction: column-reverse;
        height: 100%;
        gap: 30px;
    }

    .chating__form{
        display: flex;
        align-items: flex-end;
        gap: 10px;
        border: 1px solid var(--colorViolet);
        padding: 15px;
        border-radius: 12px;
        position: relative
    }

    .chating__input{
        width: 100%;
        height: 35сpx;
        padding: 0;
        max-height: 120px;
        resize: none;
        padding: 5px;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0);
        outline: 0;
        color: white;
        border: none;
        font-size: 16px;
        scrollbar-width: thin;
        scrollbar-color: hsla(0, 0%, 61%, .5) transparent;
    }

    .chating__form > img{
        width: 40px;
        height: 40px;
    }

    .chating__input--btn{
        background: linear-gradient(125deg, #fff -10%, #62a4f1 20%, #7f4bee 60%, #157ffb 100%);
        position: relative;
        color: white;
        font-size: 25px;
        border-radius: 10px;
        padding: 3px 10px;
    }

    .chatting{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .chatting__text{
        display: flex;
        align-items: flex-start;
        gap: 10px;
    }

    .chatting__text_user{
        flex-direction: row-reverse;
    }

    .chatting__text--img{
        font-size: 16px;
        width: 40px;
        height: 40px;
    }

    .chatting__text--text{
        max-width: 70%;
        font-size: 16px;
        padding: 10px;
        background-color: rgba(83, 83, 83, 0.4);
        border-radius: 10px;
    }

    .chatting__text_user--text{
        background-color: var(--colorViolet);
    }
</style>