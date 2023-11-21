<script setup lang="ts">
import RootLayout from "@/Layouts/RootLayout.vue";
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps<{
    searchProduct: any;
}>();
</script>

<template>
    <RootLayout>
        <p>Search</p>
        {{ searchProduct }}
    </RootLayout>
</template>
