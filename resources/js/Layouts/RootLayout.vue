<script setup lang="ts">
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import CartItem from "@/components/cart-item.vue";
import { GithubIcon, SearchIcon, ShoppingCart } from "lucide-vue-next";
import { Link } from "@inertiajs/vue3";
import { Input } from "@/components/ui/input";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button/Button.vue";

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
        class="container max-w-3xl sticky z-[5] top-0 flex justify-between items-center py-5 bg-white border-b gap-2"
    >
        <Link href="/">
            <h1 class="text-2xl font-extrabold flex-1">My Store</h1>
        </Link>

        <div class="flex items-center border p-1 px-2 rounded-lg w-44 md:w-fit">
            <Input
                placeholder="Search Product..."
                class="border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
            />
            <SearchIcon class="w-4 h-4 text-neutral-500 flex-none" />
        </div>

        <div class="flex items-center gap-2 md:gap-6">
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
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button
                        variant="outline"
                        class="rounded-full w-8 h-8 p-0 flex items-center justify-center overflow-hidden border"
                    >
                        <img src="/profile.jpeg" class="w-full h-full" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-min font-semibold" align="end">
                    <DropdownMenuItem>
                        <Link
                            href="/profile"
                            class="text-xs cursor-pointer w-full"
                            >Profile</Link
                        >
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link
                            href="/logout"
                            class="text-xs cursor-pointer w-full text-red-500"
                            >Logout</Link
                        >
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav>

    <main
        class="container max-w-3xl space-y-5 md:space-y-10 mb-20 min-h-[90vh] overflow-x-hidden"
    >
        <slot />
    </main>

    <footer
        class="container max-w-3xl py-4 border-t mb-4 font-semibold flex justify-between items-center"
    >
        <p>© Agus Wesly 2023. All rights reserved</p>

        <a
            href="https://github.com/agus-wesly/uts-laravel-ecommerce-app"
            target="_blank"
        >
            <GithubIcon />
        </a>
    </footer>
</template>
