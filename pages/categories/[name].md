---
title: 카테고리
aside: false
padding: false
---

<script setup>
import { onMounted } from "vue";
import { useData } from "vitepress"
import Home from "@/views/Home.vue"

const { params, site } = useData();

onMounted(() => {
  document.title = `카테고리：${params.value.name} | ${site.value.title}`;
});
</script>

<Home :showHeader="false" :showCategories="params.name" />
