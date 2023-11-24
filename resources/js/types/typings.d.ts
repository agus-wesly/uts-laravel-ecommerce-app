type Product = {
    id: number;
    name: string;
    description: string;
    product_url: string;
    qty: number;
    price: number;
    type_id: number;
    type: TypeProduct;
};

type Order = {
    address: string;
};

type TypeProduct = {
    id: number;
    name: string;
};
