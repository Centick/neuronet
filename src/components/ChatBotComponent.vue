<template v-if="True">
    <div class="section section__chat-bot">
        
        <div class="container container__chat-bot">
            <h4>Чат-бот</h4>
            <div class="chat-bot_btn-close"></div>
            <div class="chating">
                <form class="chating__form" action="#">
                    <img src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img">
                    <textarea class="chating__input" placeholder="Введите ваш запрос..."></textarea>
                    <input class="btn chating__input--btn" type="button" value="→">
                </form>
                
            </div>

        </div>
    </div>
</template>

<script>

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
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;
        /* background-color: white; */
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
        position: absolute;
        top: -15px;
        left: -15px;
    }

    .chating__input--btn{
        background: linear-gradient(125deg, #fff -10%, #62a4f1 20%, #7f4bee 60%, #157ffb 100%);
        position: relative;
        color: white;
        font-size: 25px;
        border-radius: 10px;
        padding: 3px 10px;
    }
</style>