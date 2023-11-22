import { ref, readonly } from "vue";

export type CartItem = Omit<Product, "type_id" | "type">;

let cartItem = ref<CartItem[]>([]);

export default function useCart() {
    function addItemToCart(newItem: CartItem) {
        let foundItem = cartItem.value.find(
            (cartItem) => cartItem.id === newItem.id
        );
        if (foundItem) {
            foundItem.qty += 1;
            return;
        }
        cartItem.value.push(newItem);
    }

    function decreaseItem(id: number) {
        let foundItem = cartItem.value.find((cartItem) => cartItem.id === id);
        if (!foundItem) return;
        if (foundItem.qty === 1) {
            removeItemFromCart(foundItem.id);
            return;
        }
        foundItem.qty -= 1;
    }

    function increaseItem(id: number) {
        let foundItem = cartItem.value.find((cartItem) => cartItem.id === id);
        if (!foundItem) return;
        foundItem.qty += 1;
    }

    function removeItemFromCart(id: number) {
        cartItem.value = cartItem.value.filter(
            (cartItem) => cartItem.id !== id
        );
    }

    function getItemById(id: number) {
        return cartItem.value.find((item) => item.id === id);
    }

    function isProductInCart(id: number) {
        let foundItem = cartItem.value.find((cartItem) => cartItem.id === id);
        return !!foundItem;
    }

    return {
        decreaseItem,
        increaseItem,
        removeItemFromCart,
        addItemToCart,
        getItemById,
        isProductInCart,
        cartItemData: readonly(cartItem),
    };
}
