<script setup lang="ts">
import { Content } from '@/server/types'
import { MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'

const { data: posts } = await useFetch<MicroCMSListResponse<Content>>('/api/contentList')
</script>

<template>
  <ul>
    <li v-for="item in posts.contents" :key="item.id">
      <p>{{ item.title}}</p>
    </li>
  </ul>
</template>
