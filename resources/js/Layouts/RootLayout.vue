<script setup lang="ts">
import { MenuIcon } from "lucide-vue-next";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import CartItem from "@/components/cart-item.vue";
import { Button } from "@/components/ui/button";

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
];
</script>

<template>
    <nav
        class="container max-w-3xl sticky top-0 flex justify-between items-center py-5"
    >
        <h1>My Store</h1>

        <Sheet>
            <SheetTrigger>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent class="overflow-y-scroll">
                <SheetHeader class="my-5">
                    <SheetTitle class="text-left">CART</SheetTitle>
                </SheetHeader>

                <div class="flex flex-col gap-5">
                    <CartItem
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </div>

                <div class="flex justify-between my-10">
                    <h5>SUBTOTAL</h5>
                    <p class="text-sm font-bold">Rp.200000</p>
                </div>

                <Button class="w-full mb-10 text-xs py-6 font-bold"
                    >CHECKOUT</Button
                >
            </SheetContent>
        </Sheet>
    </nav>

    <main class="container max-w-3xl">
        <slot />
    </main>
</template>
