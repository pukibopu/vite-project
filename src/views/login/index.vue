<template>
    <h1>登录</h1>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api/commons'
import { onMounted, ref } from '@vue/runtime-core'
import type { ILoginInfo } from '@/api/types/commons'
const test = ref <ILoginInfo['slide']>([])
onMounted(() => {
  getLoginInfo().then(res => {
    test.value = res.slide
    console.log(test.value)
  })
})
</script>
