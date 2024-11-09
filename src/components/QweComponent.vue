<template>
      <div class="using_text-container" v-if="displayText">
        <h2 class="violet "><span class="bg_gradient">Используй </span>
            <span class="typing" :key="currentIndex">{{ currentText }}</span>
            <span class="violet caret">_</span>
        </h2>
        
      </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'TypingAnimation',
  
    setup() {
      const texts = [
        'вместе с друзьями',
        'там, где хочешь',
        'ИИ как профессионал',
      ];
  
      const currentIndex = ref(0);
      const currentText = ref('');
      const displayText = ref(false);
  
      const typeText = () => {
        const text = texts[currentIndex.value];
        let charIndex = 0;
        displayText.value = true;
        currentText.value = '';
  
        const typingInterval = setInterval(() => {
          if (charIndex < text.length) {
            currentText.value += text.charAt(charIndex);
            charIndex++;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              // Начинаем удаление текста
              deleteText();
            }, 5000); // Пауза после печати текста
          }
        }, 100); // Скорость печати
      };
  
      const deleteText = () => {
        let charIndex = currentText.value.length;
  
        const deletingInterval = setInterval(() => {
          if (charIndex > 0) {
            currentText.value = currentText.value.slice(0, charIndex - 1);
            charIndex--;
          } else {
            clearInterval(deletingInterval);
            currentIndex.value = (currentIndex.value + 1) % texts.length;
            setTimeout(() => {
              typeText(); // Печатаем следующий текст
            }, 500); // Пауза перед началом печати
          }
        }, 50); // Скорость удаления
      };
  
      onMounted(() => {
        typeText();
      });
  
      return {
        currentText,
        displayText,
        currentIndex,
      };
    },
  });
  </script>
  
  <style scoped>
  .using_text-container {
    white-space: nowrap;
  }
  
  .typing {
    display: inline; /* Убедимся, что текст и курсор выравнены */
  }
  
  .caret {
    font-weight: 500; /* Для визуального выделения курсора */
    animation: blink 0.75s step-end infinite;
    color: #47136f;
  }
  
  @keyframes blink {
    50% {
      opacity: 0; /* Мигающий эффект курсора */
    }
  }

  .bg_gradient{
    background: linear-gradient(145deg, #ffa7a7, #a30cb5, #00173a);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  </style>
  