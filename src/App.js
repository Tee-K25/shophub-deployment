import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import ProductList from "./ProductsList";
import ProductCollection from "./ProductCollection";
import SelectedProduct from "./SelectedProduct";
import Login from "./Login";
import Signin from "./Signin";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([
    {
      created: "",
      product_description: "",
      product_full_image: "",
      product_name: "",
      product_thumbnail: "",
      ranking: null,
      unit_price: null,
      updated: null,
    },
  ]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch("http://ecommerce.muersolutions.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const navigate = useNavigate();
  function handleLogout() {
    setIsLoggedIn(false);
    setIsSignedIn(false);
    navigate("/");
  }

  return (
    <div>
      <div className="logging">
        {isSignedIn ? (
          <div className="sign">
            {" "}
            <h4> Welcome {name}</h4>
          </div>
        ) : (
          <div className="sign">
            {" "}
            <Link to="/signin">
              <button>Sign Up</button>
            </Link>{" "}
          </div>
        )}
        {isLoggedIn ? (
          <div className="sign">
            {" "}
            <button onClick={handleLogout}>Log Out</button>{" "}
          </div>
        ) : (
          <div className="sign">
            {" "}
            <Link to="/logIn">
              {" "}
              <button>Log In</button>
            </Link>{" "}
          </div>
        )}
      </div>
      <Routes>
        <Route
          path="/*"
          element={
            <ProductCollection products={products} isSignedIn={isSignedIn} />
          }
        />
        <Route
          path="/:index/*"
          element={
            <SelectedProduct
              products={products}
              isSignedin={isSignedIn}
              isLoggedIn={isLoggedIn}
            />
          }
        ></Route>
        <Route path="/cart/" element={<Cart products={products} />} />
        <Route
          path="/signIn"
          element={
            <Signin
              changeIssigned={setIsSignedIn}
              isSignedIn={isSignedIn}
              isLoggedIn={isLoggedIn}
              changeIslogged={setIsLoggedIn}
              name={name}
              changeName={setName}
            />
          }
        />
        <Route />
        <Route
          path="/logIn"
          element={
            <Login
              changeIssigned={setIsSignedIn}
              isSignedIn={isSignedIn}
              isLoggedIn={isLoggedIn}
              changeIslogged={setIsLoggedIn}
              name={name}
              changeName={setName}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
