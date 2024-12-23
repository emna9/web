import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import FilterAppBar from "./FilterAppBar";
import Caroussel from "./Caroussel";
import Video from "./Video";
import Card from "./Card";
import Footer from "./Footer";
import Promotions from "./Promotions";
import '../../App.css';
import { ProductContext } from "../../App.js";
import { Button } from "antd";

const Home = () => {
  const { setFilteredProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  
  const handleDisplayAllProducts = () => {
    setFilteredProducts([]);
    navigate("/products"); // Navigate to the /products route
  };

  return (
    <div style={{ 
      backgroundColor: "#FFFFFF", 
      display: "flex", 
      flexDirection: "column", 
      minHeight: "100vh"  // Ensure the main container takes up at least the full height of the screen
    }}>
      <Caroussel />
      
      {/* Sticky Navbar */}
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      {/* Inner Content Section */}
      <div style={{ backgroundColor: "#f8f7f1", flexGrow: 1 }}> {/* Blanc Cassé background */}
        <div
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            backgroundColor: "#f8f7f1", // Blanc Cassé for the content section
          }}
        >
          <Video />
          <Card />
        </div>
      </div>

      {/* Filter App Bar */}
      <FilterAppBar />
      
      {/* Promotions Section */}
      <Promotions /> 

      {/* "View All" Button */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button
          onClick={handleDisplayAllProducts}
          className="view-all-btn" // Apply the class
        >
          View All Products
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
