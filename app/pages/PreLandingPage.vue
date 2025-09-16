<script setup lang="ts">
  const emit = defineEmits(['set-language']);

  const clickAndSetLanguageBeforeRedirect = () => {
    emit('set-language', 'en');
  }
</script>

<template>
  <p data-test="content">Beware of scams</p>
  <NuxtLink data-test="english-button" to="/enquiry/landingpage">English</NuxtLink>
</template>