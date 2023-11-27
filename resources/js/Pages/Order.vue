<script setup lang="ts">
import RootLayout from "@/Layouts/RootLayout.vue";
import OrderItemCard from "@/components/order-item-card.vue";
import useCart from "@/composable/useCart";
import { onMounted } from "vue";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

let props = defineProps<{ orders: Order[]; flash?: { message?: string } }>();
let { resetCart } = useCart();

onMounted(() => {
    if (props.flash?.message === "ordered") {
        resetCart();
    }
});
</script>

<template>
    <RootLayout>
        <Alert
            v-if="props.flash?.message === 'ordered'"
            class="my-5 bg-green-600 text-neutral-50"
        >
            <AlertTitle class="text-sm">Sukses</AlertTitle>
            <AlertDescription class="text-xs">
                Produk sukses dipesan
            </AlertDescription>
        </Alert>
        <div class="mt-5">
            <h1>List pesanan anda :</h1>

            <OrderItemCard
                v-for="order in orders"
                :key="order.id"
                :order="order"
                :totalPrice="order.total"
            />
        </div>
    </RootLayout>
</template>
