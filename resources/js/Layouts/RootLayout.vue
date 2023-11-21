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
import { ref, computed } from "vue";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Button from "@/components/ui/button/Button.vue";
import { router } from "@inertiajs/vue3";
import useUser from "@/composable/useUser";

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

const inputValue = ref("");
const openModal = ref(false);

const hrefSearch = computed(() => {
    if (!inputValue.value) return "#";
    return `/search?q=${inputValue.value}`;
});

function handleSearch() {
    router.visit(hrefSearch.value);
}

const { user } = useUser();
</script>

<template>
    <nav
        class="container max-w-3xl sticky z-[5] top-0 flex justify-between items-center py-5 bg-white border-b gap-2"
    >
        <Link href="/">
            <h1 class="text-2xl font-extrabold flex-1">My Store</h1>
        </Link>

        <form
            @submit.prevent="handleSearch"
            class="flex items-center border p-1 px-2 rounded-lg w-44 md:w-fit"
        >
            <Input
                v-model="inputValue"
                placeholder="Search Product..."
                class="border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
            />
            <button type="submit">
                <SearchIcon class="w-4 h-4 text-neutral-500 flex-none" />
            </button>
        </form>

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
                        <img
                            :src="user.profile_url ?? '/img/profile.jpeg'"
                            class="w-full h-full object-cover"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-min font-semibold" align="end">
                    <DropdownMenuLabel class="text-neutral-600">
                        <p>@{{ user.username }}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Link
                            href="/profile"
                            class="text-xs cursor-pointer w-full"
                            >Profile</Link
                        >
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <button
                            @click="openModal = true"
                            variant="outline"
                            class="text-xs text-left cursor-pointer w-full text-red-500"
                        >
                            Logout
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog v-model:open="openModal">
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle
                            >Yakin ingin log out ?</AlertDialogTitle
                        >
                        <AlertDialogDescription>
                            Anda harus login kembali untuk dapat masuk ke
                            aplikasi.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction as-child>
                            <Link
                                href="/logout"
                                class="text-xs cursor-pointer bg-red-600 w-fit"
                                >Logout</Link
                            >
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
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
