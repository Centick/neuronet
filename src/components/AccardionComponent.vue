<template>
    <p-accordion>
      <p-accordion-tab v-for="(item, index) in items" :key="index" :header="item.title">
        <p>{{ item.content }}</p>
      </p-accordion-tab>
    </p-accordion>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Accordion from 'primevue/accordion';
  import AccordionTab from 'primevue/accordiontab';
  
  export default defineComponent({
    name: 'AccordionComponent',
    components: {
      'p-accordion': Accordion,
      'p-accordion-tab': AccordionTab
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  .p-accordion {
    background-color: black; /* Цвет фона аккордеона */
    border-radius: 8px; /* Скругление углов */
  }
  
  .p-accordion-tab {
    border: none; /* Убираем стандартную границу */
    margin-bottom: 10px; /* Отступ между табами */
  }
  
  .p-accordion-header {
    background-color: #1976d2 !important; /* Цвет фона заголовка */
    color: black; /* Цвет текста заголовка */
    padding: 10px; /* Отступ внутри заголовка */
    font-weight: bold; /* Жирный шрифт для заголовка */
  }
  
  .p-accordion-content {
    padding: 15px; /* Отступ внутри контента */
    background-color: black; /* Цвет фона контента */
    color: black;
  }
  </style>
  