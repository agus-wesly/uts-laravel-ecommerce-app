<script setup lang="ts">
import RootLayout from "@/Layouts/RootLayout.vue";

defineProps<{
    product: Product;
}>();
</script>

<template>
    <RootLayout>
        <h1>Product List</h1>
        <div>
            {{ JSON.stringify(product) }}
        </div>
    </RootLayout>
</template>
