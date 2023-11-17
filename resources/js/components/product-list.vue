<script setup lang="ts">
import ProductItemCard from "./product-item-card.vue";

defineProps<{ type: string }>();
const products = [
    {
        id: 1,
        name: "Product1",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptates deserunt amet dicta sit, necessitatibus corrupti ex placeat voluptate ducimus?",
        url: "https://pm1.narvii.com/6829/9377b1ae948d99a8df728f98c0c4366f34e3f6f6v2_hq.jpg",
        qty: 1,
        price: 500,
    },
    {
        id: 2,
        name: "Product2",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptates deserunt amet dicta sit, necessitatibus corrupti ex placeat voluptate ducimus?",
        url: "https://pm1.narvii.com/6829/9377b1ae948d99a8df728f98c0c4366f34e3f6f6v2_hq.jpg",
        qty: 1,
        price: 200,
    },
    {
        id: 3,
        name: "Product2",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptates deserunt amet dicta sit, necessitatibus corrupti ex placeat voluptate ducimus?",
        url: "https://pm1.narvii.com/6829/9377b1ae948d99a8df728f98c0c4366f34e3f6f6v2_hq.jpg",
        qty: 1,
        price: 200,
    },
];
</script>

<template>
    <section class="flex flex-col gap-6">
        <h3 class="uppercase text-xl font-bold pb-2 border-b border-border">
            {{ type }}
        </h3>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductItemCard
                v-for="product in products"
                :product="product"
                :key="product.id"
            />
        </div>
    </section>
</template>
