<script setup lang="ts">
import { Content } from '@/composables/contentList'

const result = ref<Array<Content>>([])
const contents = await contentList()
result.value = contents.contents
</script>

<template>
  <ul>
    <li v-for="item in result" :key="item.id">
      <p>{{ item.title}}</p>
    </li>
  </ul>
</template>
