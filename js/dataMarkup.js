function allDepartmentsMarkup(data) {
  let markup = "";

  data.forEach((department) => {
    markup += `<div class="swiper-slide">
                  <a class="goto-department" href="#department" data-department-id="${department.id}">
                    <img
                      src="./assets/images/categories/${department.image}"
                      alt="category"
                    />
                    <h3>${department.name}</h3>
                  </a>
                </div>`;
  });

  return markup;
}

function departmentAllProducts(data) {
  let markup = "";

  data.forEach((product) => {
    markup += `<div class="swiper-slide product-card style-2">
                  <div class="product-head">
                    <a class="goto-product" href="#product" data-product-id="${product.id}">
                      <img
                        src="./assets/images/products/${product.cover_image}"
                        alt="${product.name}"
                      />
                    </a>
                    <span class="view-product-image">
                      <i class="far fa-eye"></i>
                    </span>
                    <div class="add-to-cart-wrapper">
                      <span class="cart-minus">-</span>
                      <input
                        class="add-to-cart"
                        type="button"
                        value="Add To Cart"
                        data-product-id="${product.id}"
                      />
                      <span class="cart-plus">+</span>
                    </div>
                  </div>
                  <div class="product-body">
                    <a class="goto-brand" href="#brand">
                      <span class="brand">${product.brand}</span>
                    </a>
                    <h3 class="product-title">
                      <a class="goto-product" href="#product" data-product-id="${product.id}"
                        >${product.name}</a
                      >
                    </h3>
                    <p class="price">$10.99</p>
                    <div class="rating-wrapper">
                      <span class="stars" style="--percent: 5"></span>
                      <span class="rating">(65)</span>
                    </div>
                  </div>
                </div>`;
  });

  return markup;
}

function flashSalesMarkup(data) {
  let markup = "";

  data.forEach((product) => {
    markup += `<div class="swiper-slide product-card style-1">
                  <div class="product-head">
                    <a class="goto-product" href="#product" data-product-id="${product.product_id}">
                      <img
                        src="./assets/images/products/${product.cover_image}"
                        alt="${product.name}"
                      />
                    </a>
                    <span class="discount">-${product.discount}%</span>
                    <span class="add-to-fav">
                      <i class="fa-regular fa-heart"></i>
                    </span>
                    <div class="add-to-cart-wrapper">
                      <span class="cart-minus">-</span>
                      <input
                        class="add-to-cart"
                        type="button"
                        value="Add To Cart"
                        data-product-id="${product.product_id}"
                      />
                      <span class="cart-plus">+</span>
                    </div>
                  </div>
                  <div class="product-body">
                    <a class="goto-brand" href="#brand">
                      <span class="brand">${product.brand}</span>
                    </a>
                    <h3 class="product-title">
                      <a class="goto-product" href="#product" data-product-id="${product.product_id}"
                        >${product.name}</a
                      >
                    </h3>
                    <p class="price">$${product.price}</p>
                    <div class="rating-wrapper">
                      <span class="stars" style="--percent: 4.5"></span>
                      <span class="rating">(88)</span>
                    </div>
                  </div>
                </div>`;
  });
  return markup;
}

function bestSellingMarkup(data) {
  let markup = "";

  data.forEach((product) => {
    markup += `<div class="swiper-slide product-card style-2">
                  <div class="product-head">
                    <a class="goto-product" href="#product" data-product-id="${product.product_id}">
                      <img
                        src="./assets/images/products/${product.cover_image}"
                        alt="${product.name}"
                      />
                    </a>
                    <span class="view-product-image">
                      <i class="far fa-eye"></i>
                    </span>
                    <div class="add-to-cart-wrapper">
                      <span class="cart-minus">-</span>
                      <input
                        class="add-to-cart"
                        type="button"
                        value="Add To Cart"
                        data-product-id="${product.product_id}"
                      />
                      <span class="cart-plus">+</span>
                    </div>
                  </div>
                  <div class="product-body">
                    <a class="goto-brand" href="#brand">
                      <span class="brand">${product.brand}</span>
                    </a>
                    <h3 class="product-title">
                      <a class="goto-product" href="#product" data-product-id="${product.product_id}">${product.name}</a>
                    </h3>
                    <p class="price">$${product.price}</p>
                    <div class="rating-wrapper">
                      <span class="stars" style="--percent: 5"></span>
                      <span class="rating">(65)</span>
                    </div>
                  </div>
                </div>`;
  });

  return markup;
}

function singleProductDetailsMarkup(product) {
  let thumbMarkup = "";
  let fullMarkup = "";
  product.images.forEach((pair, index) => {
    thumbMarkup += `<img
                    class="${index === 0 ? "active" : ""}"
                    src="./assets/images/products/${
                      pair.thumb
                    }" data-pair="${index}"
                    alt="product thumbnail"
                  />`;
    fullMarkup += `<img
                    class="${index === 0 ? "active" : ""}"
                    src="./assets/images/products/${
                      pair.full
                    }" data-pair="${index}"
                    alt="full image"
                  />`;
  });

  return `<div class="single-product-head">
              <div>
                <h1 class="section-title">${product.name}</h1>
                <p class="price">$${product.price}</p>
              </div>
              <div class="product-sku">${product.sku}</div>
              <!-- <div class="single-product-review">
                <div class="rating-wrapper">
                  <span class="stars" style="--percent: 5"></span>
                  <span class="rating">(54 Reviews)</span>
                </div>
                |
                <span class="in-stock">In Stock</span>
              </div> -->
            </div>
            <div class="product-details">
              <div class="product-gallery">
                <div class="thumb-list">
                  ${thumbMarkup}
                </div>
                <div class="full-image">
                  ${fullMarkup}
                </div>
              </div>
              <div class="product-description">
                <div>
                  <strong class="description-title">DESCRIPTION</strong>
                  <p>
                    ${product.description}
                  </p>
                </div>
                <div>
                  <strong class="description-title">QUANTITY</strong>
                  <div class="quantity-input">
                    <button class="minus ">−</button>
                    <input class="add-to-cart" type="number" value="1" min="1" data-product-id="${product.id}"/>
                    <button class="plus ">+</button>
                  </div>
                  <div class="cart-options">
                    <input
                      id="buyNow"
                      class="btn btn-red"
                      type="button"
                      value="Buy Now"
                    />
                    <input
                      id="addToCart"
                      class="btn btn-red"
                      type="button"
                      value="Add to Cart"
                      data-product-id="${product.id}"
                    />
                  </div>
                </div>
              </div>
            </div>`;
}

function singleProductRelatedItemsMarkup(data) {
  let markup = "";
  data.forEach((product) => {
    markup += `<div class="swiper-slide product-card style-2">
                <div class="product-head">
                  <a class="goto-product" href="#product" data-product-id="${product.id}">
                    <img
                      src="./assets/images/products/${product.cover_image}"
                      alt="${product.name}"
                    />
                  </a>
                  <span class="view-product-image">
                    <i class="far fa-eye"></i>
                  </span>
                  <div class="add-to-cart-wrapper">
                    <span class="cart-minus">-</span>
                    <input class="add-to-cart" type="button" value="Add To Cart" data-product-id="${product.id}"/>
                    <span class="cart-plus">+</span>
                  </div>
                </div>
                <div class="product-body">
                  <a class="goto-department" href="#department">
                    <span class="brand">${product.brand}</span>
                  </a>
                  <h3 class="product-title">
                    <a class="goto-product" href="#product" data-product-id="${product.id}">
                      ${product.name}
                    </a>
                  </h3>
                  <p class="price">$${product.price}</p>
                  <div class="rating-wrapper">
                    <span class="stars" style="--percent: 5"></span>
                    <span class="rating">(65)</span>
                  </div>
                </div>
              </div>`;
  });

  return markup;
}

function cartMarkup(data) {
  let markup = "";
  let totalPrice = 0;

  data.forEach((product) => {
    const itemTotal = product.price * product.quantity;
    totalPrice += itemTotal;

    markup += `<div class="cart-product-wrapper" data-product-id="${
      product.id
    }">
                <img class="cart-product-image" src="./assets/images/products/${
                  product.cover_image
                }" alt="${product.name}">
                <div class="cart-description">
                  <h4>
                    <a class="goto-product" href="#product" data-product-id="${
                      product.id
                    }">
                      ${product.name}
                    </a>
                  </h4>
                </div>
                <div class="unit-price">
                  <div class="quantity-adjust">
                    <span class="cart-minus">-</span>
                    <span class="add-to-cart" data-product-id="${product.id}">
                      ${product.quantity}
                    </span>
                    <span class="cart-plus">+</span>
                  </div>
                  x
                  $${parseFloat(product.price).toFixed(2)}
                </div>
                <div class="total-price">
                  = $${(product.price * product.quantity).toFixed(2)}
                </div>
                <div>
                  <i class="fas fa-trash cart-remove-item" data-product-id="${
                    product.id
                  }"></i>
                </div>
              </div>`;
  });

  // Add total to the cart summary (if it exists)
  $(".cart-summary p").text(`Total: $${totalPrice.toFixed(2)}`);
  return markup;
}
