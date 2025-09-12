<script setup lang="ts">
  const emit = defineEmits(['set-language']);

  const clickAndSetLanguageBeforeRedirect = () => {
    emit('set-language', 'en');
  }
</script>

<template>
  <p data-test="content">Beware of scams</p>

  <button @click=clickAndSetLanguageBeforeRedirect data-test="english-button">English</button>
</template>