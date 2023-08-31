import React, { useState } from "react";
import ProductList from "./ProductsList";
import { Route, Routes } from "react-router";
import SelectedProduct from "./SelectedProduct";

function ProductCollection({products, isSignedIn }){
    
   
    return <div>

        <ProductList products={products} isSignedIn={isSignedIn} />
        
    </div>
}

export default ProductCollection