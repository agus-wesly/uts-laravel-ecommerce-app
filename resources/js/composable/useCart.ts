import { computed, ref, readonly } from "vue";

export type CartItem = Omit<Product, "type_id" | "type">;

let cartItem = ref<CartItem[]>([
    {
        id: 1,
        name: "Product1",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptates deserunt amet dicta sit, necessitatibus corrupti ex placeat voluptate ducimus?",
        product_url:
            "https://pm1.narvii.com/6829/9377b1ae948d99a8df728f98c0c4366f34e3f6f6v2_hq.jpg",
        qty: 1,
        price: 500,
    },
    {
        id: 2,
        name: "Product2",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptates deserunt amet dicta sit, necessitatibus corrupti ex placeat voluptate ducimus?",
        product_url:
            "https://pm1.narvii.com/6829/9377b1ae948d99a8df728f98c0c4366f34e3f6f6v2_hq.jpg",
        qty: 1,
        price: 200,
    },
]);

export default function useCart() {
    let cartItemLength = computed(() => cartItem.value.length);
    let cartItemTotal = computed(() =>
        cartItem.value.reduce<number>((acc, item) => {
            let totalPerItem = item.qty * item.price;

            return acc + totalPerItem;
        }, 0)
    );

    function addItemToCart({ newItem }: { newItem: CartItem }) {
        cartItem.value.push(newItem);
    }

    function decreaseItem(id: number) {
        let foundItem = cartItem.value.find((cartItem) => cartItem.id === id);
        if (!foundItem) return;
        if (foundItem.qty === 1) {
            removeItem(foundItem.id);
            return;
        }
        // let index = cartItem.value.indexOf(foundItem);
        foundItem.qty -= 1;
    }

    function increaseItem(id: number) {
        let foundItem = cartItem.value.find((cartItem) => cartItem.id === id);
        if (!foundItem) return;
        // let index = cartItem.value.indexOf(foundItem);
        foundItem.qty += 1;
    }

    function removeItem(id: number) {
        cartItem.value = cartItem.value.filter(
            (cartItem) => cartItem.id !== id
        );
    }

    function getItemById(id: number) {
        return cartItem.value.find((item) => item.id === id);
    }

    return {
        cartItemLength,
        decreaseItem,
        increaseItem,
        removeItem,
        addItemToCart,
        getItemById,
        cartItemData: readonly(cartItem),
        cartItemTotal: readonly(cartItemTotal),
    };
}
