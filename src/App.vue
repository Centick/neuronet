<template>
    <HeaderComponent
        @openChatBot="openModal"
    />
    <MainComponent />

    <ChatBotComponentVue 
        v-if="showModal"
        @closeChatBot="closeModal"
    />
</template>

<script setup lang="ts">
    import MainComponent from '@/components/MainComponent.vue';
    import HeaderComponent from "@/components/HeaderComponent.vue";
    import ChatBotComponentVue from '@/components/ChatBotComponent.vue';
    import { ref } from 'vue';

    const showModal = ref(false);

    const openModal = () => {
        showModal.value = true;
    };

    const closeModal = () => {
        showModal.value = false;
    }
</script>

<style scoped>

</style>
