---
title: 재접속 중
---

<script setup>
import { onMounted } from "vue"
import { useRouter } from "vitepress"
    
const router = useRouter();

onMounted(() => router.go("/"));
</script>