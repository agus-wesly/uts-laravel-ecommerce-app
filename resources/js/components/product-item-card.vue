<script setup lang="ts">
import { Button } from "./ui/button";

defineProps<{
    product: {
        id: number;
        name: string;
        description: string;
        url: string;
        qty: number;
        price: number;
    };
}>();
</script>

<template>
    <article class="flex flex-col gap-4 w-full">
        <img :src="product.url" class="w-full h-[158px] object-cover" />

        <div class="flex flex-col gap-4">
            <h6 class="text-sm">{{ product.name }}</h6>
            <p class="text-xs line-clamp-4">{{ product.description }}</p>

            <div class="flex justify-between items-center mt-3">
                <p class="font-bold">Rp. {{ product.price }}</p>
                <Button
                    variant="outline"
                    class="border-blue-700 text-blue-800 hover:bg-inherit hover:text-blue-700"
                    >Add to cart</Button
                >
            </div>
        </div>
    </article>
</template>
