
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
            content: `Суть работы нейронных сетей — смоделировать способ решения задачи, присущий людям. Чтобы определить пол человека, изображённого на фотографии, нейросеть будет использовать те же принципы, по которым работает человеческое зрение.
            Использование нейронных сетей опирается на накопленный опыт в виде данных и подходит для решения задач, с которыми человечество уже знакомо. Например, нейросети могут помочь организовать полёт внутри Солнечной системы, а для планирования полёта за её пределы лучше опираться на физическую теорию.`,
            value: '1'
        },
        {
            title: 'Как работает AI?',
            content: 'Само собой ни одно наше участие не обходится без нашего наставника, педагога дополнительного образования по компетенции "Веб-технологии" Булохова Александра Николаевича. Его программа обучения в тандеме с авторской платформой JuniorSkills позволило нам в кратчайшие сроки овладеть основами и замотивироваться на дальнейшее совершенствование своих навыков.',
            value: '2'
        },
        {
            title: 'Когда эффективно применение машинного обучения?',
            content: `Когда есть большой набор статистических данных, но найти в них зависимости экспертными или классическими математическими методами невозможно или очень трудоемко. Так, если на входе есть более тысячи параметров (среди которых как числовые, так и текстовые, а также видео, аудио и картинки), то найти зависимость результата от них без машины невозможно. Например, на химическую реакцию кроме самих вступающих во взаимодействие веществ влияет множество параметров: температура, влажность, материал емкости, в которой она происходит, и т. д. Химику сложно учесть все эти признаки, чтобы точно рассчитать время реакции. Скорее всего, он учтет несколько ключевых параметров и будет основываться на своем опыте. В то же время на основании данных предыдущих реакций машинное обучение сможет учесть все признаки и дать более точный прогноз.`,
            value: '3'
        },
        {
            title: 'Перспективы применения',
            content: `Одной из сфер, которые могут получить значительную пользу от использования ИИ, является медицина. С помощью алгоритмов машинного обучения можно разрабатывать новые методы лечения и диагностики заболеваний, а также улучшать процессы мониторинга состояния пациентов. Возможности ИИ также могут быть полезны в области автомобилестроения и транспорта. С развитием технологий автономных автомобилей, ИИ может стать необходимым элементом для обеспечения безопасности на дорогах. `,
            value: '4'
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