<script setup lang="ts">
import RootLayout from "@/Layouts/RootLayout.vue";
import ProductList from "@/components/product-list.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <RootLayout>
        <Link href="/product/1" class="mt-5 inline-block">
            <img src="/banner.jpg" alt="banner" class="object-cover"
        /></Link>

        <ProductList type="shirt" />
        <ProductList type="shirt" />
        <ProductList type="shirt" />
        <ProductList type="shirt" />
    </RootLayout>
</template>
