<template>
    <div class="section section__chat-bot">
        
        <div class="container container__chat-bot">
            <h4 class="chat-bot_h4">Чат-бот GPT4</h4>
            <div class="chat-bot_btn-close" @click="emit('closeChatBot')"></div>
            <div class="chating">
                <form class="chating__form" action="#">
                    <img src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img">
                    <textarea class="chating__input" placeholder="Введите ваш запрос..." ref="textarea" v-model="text"></textarea>
                    <input class="btn chating__input--btn" type="button" @click="addMessage" value="→">
                </form>
                <div class="chatting_wrap">
                    <div class="chatting__text">
                        <img class="chatting__text--img" src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img">
                        <p class="chatting__text--text">Привет! Я - ChatGPT! Задавай мне любой вопрос, и я отвечу на него!</p>
                    </div>

                    <div class="line">Новые сообщения</div>
                    
                    <div class="chatting" v-for="message in arrChatting" :key="message.id">
                        <!--chatting  -->
                        <!-- пользователь -->
                        <div class="chatting__text chatting__text_user">
                            <img class="chatting__text--img" src="../assets/img/icons/profile.png" alt="img">
                            <p class="chatting__text--text chatting__text_user--text">{{ message.text }}</p>
                        </div>

                        <!-- бот -->
                        <div class="chatting__text">
                            <img class="chatting__text--img" src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img">
                            <p class="chatting__text--text"><img src="../assets/img/icons/points.gif" alt="points"></p>
                        </div>

                        <span class="start_chatting" :class="{'start_chatting--none': arrChatting}">Этот чат пуст...</span>
                    </div>
                </div>
            </div>            

        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, reactive  } from 'vue';
    import autosize from 'autosize';
import { json } from 'stream/consumers';
import { couldStartTrivia } from 'typescript';
    // эмиты
    const emit = defineEmits(['closeChatBot']);

    // textarea
    const text = ref('');
    const textarea = ref(null);

    onMounted(() => {
        autosize(textarea.value);
    });

    // chatting
    // массив с реактивными сообщениями
    // localStorage.setItem('user_chating_gpt', '{}');
    let idMassage = 0
    let arrChatting = reactive(JSON.parse(localStorage.getItem('user_chating_gpt')));

    const addMessage = () => {
        if (text.value.trim() != ''){
            let objectMessage = { 
                id: idMassage++,
                text: text.value,
                author: 'user'
            };
            if (localStorage.getItem('user_chating_gpt') != null){
                let arrChatting = localStorage.getItem('user_chating_gpt');   
                arrChatting = JSON.parse(arrChatting);
                arrChatting.push(objectMessage);
                localStorage.setItem('user_chating_gpt', JSON.stringify(arrChatting));
                // console.log()
            }
            else{
                let mass_dop = [];
                mass_dop.push(objectMessage);
                localStorage.setItem('user_chating_gpt', JSON.stringify(mass_dop));
            }
            text.value = ''
        }
        arrChatting = JSON.parse(localStorage.getItem('user_chating_gpt'));
    }
</script>

<style>
    .chatting_wrap{
        overflow-y: scroll;
        flex-direction: column;
        justify-content: flex-end;
        gap: 20px;
    }

    .chatting_wrap::-webkit-scrollbar {
        width: 6px; /* Ширина всего элемента навигации */
    }

    .chatting_wrap::-webkit-scrollbar-thumb {
        background-color: rgb(75, 75, 75);
        border-radius: 50px;
    }

    .start_chatting{
        font-size: 25px;
        text-align: center;
        color: grey;
    }

    .start_chatting--none{
        display: none;
    }

    .chat-bot_h4{
        background-image: var(--colorBlueGradientLeftRight);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
    }

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
        position: relative;
        width: 40%;
        background-color: var(--colorForBox);
        border: 1px solid var(--colorVioletDarck);
        border-radius: 20px;
        padding: 30px;
        justify-content: space-between;

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
        height: 90%;
        gap: 30px;
    }

    .chating__form{
        display: flex;
        align-items: flex-end;
        gap: 10px;
        border: 1px solid var(--colorViolet);
        padding: 15px;
        border-radius: 12px;
        /* position: relative */
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
        margin-right: 10px;
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
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .chatting__text--text > img{
        width: 40px;
        height: 100%;
        mix-blend-mode: multiply;
    }

    .chatting__text_user--text{
        background-color: var(--colorViolet);
    }

    .line{
        height: 1px;
        background-color: rgb(60, 60, 60);
        width: 100%;
        margin: 20px 0;
    }
</style>