
<template>
    <div class="section">
        <div class="container faq-container">
            <h3 class="faq_h3">FAQ</h3>
            <Accordion value="0" class="accordion">
                <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value" class="accordionpanel">
                    <AccordionHeader class="accordionHeader">{{ tab.title }}</AccordionHeader>
                    <AccordionContent class="accordioncontent">
                        <p class="m-0">{{ tab.content }}</p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Accordion from 'primevue/accordion';
    import AccordionPanel from 'primevue/accordionpanel';
    import AccordionHeader from 'primevue/accordionheader';
    import AccordionContent from 'primevue/accordioncontent';
    import { ref } from 'vue';

    const tabs = ref([
        { 
            title: 'Что такое нейросети?',
            content: 'Нейросеть — это тип машинного обучения, при котором компьютерная программа имитирует работу человеческого мозга. Подобно тому, как нейроны в мозге передают сигналы друг другу, в нейросети информацией обмениваются вычислительные элементы.',
            value: '0' 
        },
        {
            title: 'Зачем они нужны?',
            content: `В нашей команде число участников вуалируется от 3 до 4 в зависимости от мероприятия и степени загруженности в школе, но как правило это одни и те же юные разработчики:
                - Федосенко Илья Андреевич: Тимлид | Fullstack разработчик. TG: @ffilann
                - Утяцкий Владислав Сергеевич: Дизайнер | Frontend разработчик. TG: @Cent1ck
                - Черных Владислав Михайлович: Душа команды | Backend разработчик. TG: @chedislav
                - Жёлтиков Виталий Иванович: Любитель красить кнопки | Frontend разработчик. TG: @fastergame888`,
            value: '1'
        },
        {
            title: 'Кто является наставником команды?',
            content: 'Само собой ни одно наше участие не обходится без нашего наставника, педагога дополнительного образования по компетенции "Веб-технологии" Булохова Александра Николаевича. Его программа обучения в тандеме с авторской платформой JuniorSkills позволило нам в кратчайшие сроки овладеть основами и замотивироваться на дальнейшее совершенствование своих навыков.',
            value: '2'
        }
    ]);
</script>

<style>
    .faq_h3{
        color: var(--colorViolet);
        font-size: 50px;
        font-weight: 700;
    }

    .faq-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 45px;
    }

    .card{
        width: 100%;
    }

    .accordion{
        background-color: #ffffff08;
        padding: 48px 60px;
        border-radius: 50px;
        border: #ffffff1a 1px solid;
        width: 100%;
        
    }

    .accordionpanel{
        padding: 10px;
        border: unset !important;
    }

    .accordionHeader{
        font-size: 34px !important;
        border: unset !important;
        padding: 0 20px !important;
    }

    .p-accordioncontent-content{
        border: unset !important;
    }

    .p-accordionpanel{
        padding: 30px;
        border-bottom: 1px solid rgb(110, 110, 110) !important;
    }

    .p-accordionpanel:last-child{
        border-bottom: unset !important;
    }

    .m-0{
        padding: 20px;
        font-size: 20px;
        color: rgb(176, 176, 176)
    }

    .p-accordionheader-toggle-icon{
        width: 30px !important;
    }
</style>