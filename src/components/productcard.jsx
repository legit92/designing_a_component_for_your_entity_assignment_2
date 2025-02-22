import React from "react";
import ViewProductButton from "./button";

const productCard = () => {
    const product = {
        image: "https://placehold.co/150",
        name: "product",
        price: "$230",
    }
    return (
        <div>
            <img src={product.image} alt="product Image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <ViewProductButton />
        </div>
    );
};

export default productCard;