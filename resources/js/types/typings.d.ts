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

type TypeProduct = {
    id: number;
    name: string;
};
