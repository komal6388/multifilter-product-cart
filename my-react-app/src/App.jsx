import { useState } from "react";

import {
  Search,
  ShoppingBag,
  Heart,
  SlidersHorizontal,
  ChevronDown,
  Star,
  ArrowUpDown,
} from "lucide-react";

import { products, filterGroups } from "./data";

function App() {
  // Wishlist product IDs
  const [likedProducts, setLikedProducts] = useState([]);

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setLikedProducts((prev) => {
      // If product already exists, remove it
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }

      // Otherwise add product
      return [...prev, productId];
    });
  };

  return (
    <div className="nova-app">

      {/* ================= ANNOUNCEMENT ================= */}

      <div className="nova-announcement">
        FREE SHIPPING ON ORDERS ABOVE ₹999
      </div>

      {/* ================= HEADER ================= */}

      <header className="nova-header">

        <div className="nova-container nova-header-inner">

          {/* Logo */}

          <div className="nova-logo">
            NOVA<span>.</span>
          </div>

          {/* Navigation */}

          <nav className="nova-navigation">

            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">New Arrivals</a>
            <a href="#">Collections</a>
            <a href="#">Sale</a>

          </nav>

          {/* Header Actions */}

          <div className="nova-header-actions">

            {/* Search */}

            <div className="nova-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search products..."
              />

            </div>

            {/* Wishlist */}

            <button className="nova-icon-button">

              <Heart
                size={21}
                fill="none"
              />

              {/* Wishlist count */}

              {likedProducts.length > 0 && (
                <span className="nova-header-count">
                  {likedProducts.length}
                </span>
              )}

            </button>

            {/* Cart */}

            <button className="nova-icon-button nova-cart-button">

              <ShoppingBag size={21} />

              {/* Cart count - static for now */}

              <span className="nova-header-count">
                0
              </span>

            </button>

          </div>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="nova-hero">

        <div className="nova-container">

          <p className="nova-small-heading">
            DISCOVER YOUR STYLE
          </p>

          <h1>
            Everything you need.
            <br />
            <span>One place.</span>
          </h1>

          <p className="nova-hero-text">
            Explore our carefully selected collection of
            fashion, electronics, accessories and more.
          </p>

        </div>

      </section>

      {/* ================= MAIN ================= */}

      <main className="nova-container nova-main">

        {/* Top Bar */}

        <div className="nova-topbar">

          <p className="nova-results">
            Showing{" "}
            <strong>{products.length}</strong>{" "}
            products
          </p>

          <div className="nova-top-actions">

            {/* Mobile filter */}

            <button className="nova-filter-mobile">

              <SlidersHorizontal size={18} />

              Filters

            </button>

            {/* Sort */}

            <button className="nova-sort">

              <ArrowUpDown size={17} />

              Sort by

              <ChevronDown size={16} />

            </button>

          </div>

        </div>

        {/* Shop Layout */}

        <div className="nova-shop-layout">

          {/* ================= SIDEBAR ================= */}

          <aside className="nova-sidebar">

            <div className="nova-sidebar-title">

              <div>

                <SlidersHorizontal size={19} />

                <h3>Filters</h3>

              </div>

            </div>

            {/* PRICE FILTER */}

            <div className="nova-filter-section">

              <div className="nova-filter-heading">

                <h4>Price</h4>

                <ChevronDown size={17} />

              </div>

              <div className="nova-price-values">

                <span>₹500</span>

                <span>₹5,000+</span>

              </div>

              <input
                className="nova-price-range"
                type="range"
                min="500"
                max="5000"
                value="2500"
                readOnly
              />

            </div>

            {/* OTHER FILTERS */}

            {filterGroups.map((group) => (

              <div
                className="nova-filter-section"
                key={group.title}
              >

                <div className="nova-filter-heading">

                  <h4>{group.title}</h4>

                  <ChevronDown size={17} />

                </div>

                <div className="nova-filter-options">

                  {group.options.map((option) => (

                    <label
                      className="nova-checkbox-row"
                      key={option}
                    >

                      <input
                        type="checkbox"
                        checked={false}
                        readOnly
                      />

                      <span className="nova-checkbox-custom"></span>

                      <span>{option}</span>

                    </label>

                  ))}

                </div>

              </div>

            ))}

          </aside>

          {/* ================= PRODUCTS ================= */}

          <section className="nova-products">

            <div className="nova-product-grid">

              {products.map((product) => {

                // Check whether current product is liked

                const isLiked = likedProducts.includes(
                  product.id
                );

                return (

                  <article
                    className="nova-product-card"
                    key={product.id}
                  >

                    {/* PRODUCT IMAGE */}

                    <div className="nova-product-image-wrapper">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="nova-product-image"
                      />

                      {/* Product Badge */}

                      {product.badge && (
                        <span className="nova-product-badge">
                          {product.badge}
                        </span>
                      )}

                      {/* Heart */}

                      <button
                        className={`nova-product-heart ${
                          isLiked
                            ? "nova-heart-active"
                            : ""
                        }`}
                        onClick={() =>
                          toggleWishlist(product.id)
                        }
                        aria-label="Add to wishlist"
                      >

                        <Heart
                          size={19}
                          fill={
                            isLiked
                              ? "red"
                              : "none"
                          }
                          color={
                            isLiked
                              ? "red"
                              : "currentColor"
                          }
                        />

                      </button>

                    </div>

                    {/* PRODUCT INFORMATION */}

                    <div className="nova-product-info">

                      {/* Category */}

                      <p className="nova-product-category">
                        {product.category}
                      </p>

                      {/* Name */}

                      <h3>
                        {product.name}
                      </h3>

                      {/* Rating */}

                      <div className="nova-product-rating">

                        <div className="nova-stars">

                          {[1, 2, 3, 4, 5].map(
                            (star) => (

                              <Star
                                key={star}
                                size={14}
                                fill={
                                  star <=
                                  Math.round(
                                    product.rating
                                  )
                                    ? "currentColor"
                                    : "none"
                                }
                              />

                            )
                          )}

                        </div>

                        <span>
                          {product.rating} (
                          {product.reviews})
                        </span>

                      </div>

                      {/* PRICE */}

                      <div className="nova-product-price">

                        <strong>
                          ₹
                          {product.price.toLocaleString(
                            "en-IN"
                          )}
                        </strong>

                        <del>
                          ₹
                          {product.oldPrice.toLocaleString(
                            "en-IN"
                          )}
                        </del>

                      </div>

                      {/* STOCK */}

                      <p
                        className={
                          product.stock === "In Stock"
                            ? "nova-stock nova-in-stock"
                            : "nova-stock nova-low-stock"
                        }
                      >
                        {product.stock}
                      </p>

                      {/* ADD TO CART */}

                      <button className="nova-add-cart">

                        <ShoppingBag size={17} />

                        Add to Cart

                      </button>

                    </div>

                  </article>

                );
              })}

            </div>

          </section>

        </div>

      </main>

      {/* ================= PROMO ================= */}

      <section className="nova-promo">

        <div className="nova-container">

          <div>

            <p>SHOP SMARTER</p>

            <h2>
              Quality products.
              <br />
              Better prices.
            </h2>

          </div>

          <button>
            Explore Collection
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="nova-footer">

        <div className="nova-container nova-footer-grid">

          {/* About */}

          <div>

            <div className="nova-logo">
              NOVA<span>.</span>
            </div>

            <p>
              Modern products for modern lifestyles.
              Discover quality products at great prices.
            </p>

          </div>

          {/* Shop */}

          <div>

            <h4>SHOP</h4>

            <a href="#">All Products</a>
            <a href="#">New Arrivals</a>
            <a href="#">Best Sellers</a>
            <a href="#">Sale</a>

          </div>

          {/* Help */}

          <div>

            <h4>HELP</h4>

            <a href="#">Contact Us</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>

          </div>

          {/* Social */}

          <div>

            <h4>FOLLOW</h4>

            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>

          </div>

        </div>

        <div className="nova-footer-bottom">

          © 2026 NOVA. All rights reserved.

        </div>

      </footer>

    </div>
  );
}

export default App;