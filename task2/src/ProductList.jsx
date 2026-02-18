import React from "react";
import Card from "./Card";

const Products = [
    { id: 1, name: "Widget", price: 9.99 },
    { id: 2, name: "Gadget", price: 14.99 },
    { id: 3, name: "Doohickey", price: 7.5 },
];

const ProductList = () => {
    return (
        <>
            {Products.map(product => (
                <Card key={product.id} title={product.name}>
                    <p>Price: ${product.price}</p>
                </Card>
            ))}
        </>
    );
}
export default ProductList;