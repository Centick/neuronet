<template>
    <div class="opportunities_box opportunities_box--2">
      <h3>Лучшие<span class="violet-lite"> сервисы</span></h3>
      <div class="items-wrap">
        <div class="items marquee tab">
          <input v-model="selectedTab" id="tab-btn-1" name="tab-btn" type="radio" value="1" />
          <label for="tab-btn-1" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/chatGPT-3_5.svg" alt="img" />
            <span>ChatGPT</span>
          </label>
          <input v-model="selectedTab" id="tab-btn-2" name="tab-btn" type="radio" value="2" />
          <label for="tab-btn-2" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/midjourney.svg" alt="img" />
            <span>Midjourney</span>
          </label>
          <input v-model="selectedTab" id="tab-btn-3" name="tab-btn" type="radio" value="3" />
          <label for="tab-btn-3" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/chatGPT-dalle.svg" alt="img" />
            <span>Dall-E</span>
          </label>
          <input v-model="selectedTab" id="tab-btn-4" name="tab-btn" type="radio" value="4" />
          <label for="tab-btn-4" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/eleven.svg" alt="img" />
            <span>Eleven Labs</span>
          </label>
          <input v-model="selectedTab" id="tab-btn-5" name="tab-btn" type="radio" value="5" />
          <label for="tab-btn-5" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/luma.svg" alt="img" />
            <span>Luma</span>
          </label>
          <input v-model="selectedTab" id="tab-btn-6" name="tab-btn" type="radio" value="6" />
          <label for="tab-btn-6" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/runwayml.svg" alt="img" />
            <span>Runway ML</span>
          </label>
          <input v-model="selectedTab" id="tab-btn-7" name="tab-btn" type="radio" value="7" />
          <label for="tab-btn-7" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/stable-diffusion.svg" alt="img" />
            <span>Stable Diffusion</span>
          </label>
          <input v-model="selectedTab" id="tab-btn-8" name="tab-btn" type="radio" value="8" />
          <label for="tab-btn-8" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/stability.svg" alt="img" />
            <span>Stability</span>
          </label>
          <input v-model="selectedTab" id="tab-btn-9" name="tab-btn" type="radio" value="9" />
          <label for="tab-btn-9" class="item wrap-neuronet_box">
            <img src="../assets/img/neuronet/claude-ai.svg" alt="img" />
            <span>Claudy AI</span>
          </label>
        </div>
  
        <!-- Контент -->
        <div class="tab-content" v-for="tab in tabs" :key="tab.id" v-show="selectedTab === tab.id.toString()">
          <div class="wrap-neuronet_box wrap-neuronet_box--description">
            <img :src="tab.image" alt="img" />
            <span>{{ tab.title }}</span>
          </div>
          <p>{{ tab.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Opportunities',
    setup() {
      const selectedTab = ref('1'); // Устанавливаем первый таб по умолчанию
  
      const tabs = [
        { id: 1, title: 'ChatGPT', image: '../assets/img/neuronet/chatGPT-3_5.svg', description: 'Нейросеть для ответа на любые вопросы.' },
        { id: 2, title: 'Midjourney', image: '../assets/img/neuronet/midjourney.svg', description: 'Нейросеть для создания изображений под ваше описание.' },
        { id: 3, title: 'Dall-E', image: '../assets/img/neuronet/chatGPT-dalle.svg', description: 'Нейросеть для создания изображений.' },
        { id: 4, title: 'Eleven Labs', image: '../assets/img/neuronet/eleven.svg', description: 'Нейросеть для генерации аудио.' },
        { id: 5, title: 'Luma', image: '../assets/img/neuronet/luma.svg', description: 'Нейросеть для создания видео.' },
        { id: 6, title: 'Runway ML', image: '../assets/img/neuronet/runwayml.svg', description: 'Нейросеть для редактирования видео.' },
        { id: 7, title: 'Stable Diffusion', image: '../assets/img/neuronet/stable-diffusion.svg', description: 'Нейросеть для генерации изображений.' },
        { id: 8, title: 'Stability', image: '../assets/img/neuronet/stability.svg', description: 'Нейросеть для генерации изображений.' },
        { id: 9, title: 'Claudy AI', image: '../assets/img/neuronet/claude-ai.svg', description: 'Нейросеть для генерации текста.' },
      ];
  
      return {
        selectedTab,
        tabs,
      };
    },
  });

  console.log(1)
  </script>