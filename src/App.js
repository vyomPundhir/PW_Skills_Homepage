import React from "react";
import NavBar from "./Navbar";
import List from "./Listitems";
import Carousel from "./Carousel";
import Hardwork from "./Hardwork"; 
import Achievers from "./Achievers";
import Hall from "./Hall";
import Popular from "./Popular";
import Afford from "./Afford";
import Community from "./Community";
import Products from "./Products";
import Footer from "./Footer";


const App =() => {
  return (
    <>
      <NavBar />
      <List />
      <Carousel />
      <Hardwork/>
      <Achievers />
      <Hall />
      <Popular />
      <Afford />
      <Community />
      <Products />
      <Footer />
    </>
  )
}
export default App;
