<script setup lang="ts">
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-vue-next";
import CartItem from "./cart-item.vue";
import { Button } from "./ui/button";
import useCart from "@/composable/useCart";

let { cartItemData, cartItemTotal } = useCart();
</script>

<template>
    <Sheet>
        <SheetTrigger>
            <ShoppingCart />
        </SheetTrigger>
        <SheetContent class="overflow-y-scroll">
            <SheetHeader class="my-5">
                <SheetTitle class="text-left">CART</SheetTitle>
            </SheetHeader>
            <div class="flex flex-col gap-5">
                <CartItem
                    v-for="product in cartItemData"
                    :key="product.id"
                    :product="product"
                />
            </div>
            <div class="flex justify-between my-10">
                <h5>SUBTOTAL</h5>
                <p class="text-sm font-bold">Rp. {{ cartItemTotal }}</p>
            </div>
            <Button class="w-full mb-10 text-xs py-6 font-bold"
                >CHECKOUT</Button
            >
        </SheetContent>
    </Sheet>
</template>
