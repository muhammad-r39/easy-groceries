// Initialize cart in localStorage if it doesn't exist
function initCart() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  updateCartCount();
}

// Add item to cart with specified quantity
function addToCart(productId, quantity = 1) {
  // Ensure quantity is a number and at least 1
  quantity = parseInt(quantity) || 1;
  if (quantity < 1) quantity = 1;

  // Get current cart
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product is already in cart
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex >= 0) {
    // Add quantity to existing product
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Add new product to cart
    cart.push({
      id: productId,
      quantity: quantity,
    });
  }

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart UI
  updateCartCount();

  // Log for debugging
  console.log("Cart updated:", cart);
}

// Remove item from cart
function removeFromCart(productId) {
  // Get current cart
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Find product in cart
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex >= 0) {
    // Decrement quantity
    cart[existingProductIndex].quantity -= 1;

    // Remove product if quantity is 0
    if (cart[existingProductIndex].quantity <= 0) {
      cart.splice(existingProductIndex, 1);
    }

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart UI
    updateCartCount();

    // Log for debugging
    console.log("Cart updated:", cart);
  }
}

// Update cart count badge
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  $(".cart-count").text(totalItems);
}

// Event handlers
$(document).ready(function () {
  // Initialize cart
  initCart();

  // Add to cart button click (for product listings)
  $(document).on("click", ".add-to-cart", function (e) {
    const productId = $(this).data("product-id");
    addToCart(productId);
  });

  // Cart plus click (for product listings)
  $(document).on("click", ".cart-plus", function (e) {
    const productId = $(this).siblings(".add-to-cart").data("product-id");
    addToCart(productId);
  });

  // Cart minus click (for product listings)
  $(document).on("click", ".cart-minus", function (e) {
    const productId = $(this).siblings(".add-to-cart").data("product-id");
    removeFromCart(productId);
  });

  // Add to cart button click (for product detail page)
  $(document).on("click", "#addToCart", function (e) {
    const productId = $(this).data("product-id");
    const quantity =
      parseInt(
        $(this)
          .closest(".cart-options")
          .siblings(".quantity-input")
          .find("input")
          .val()
      ) || 1;
    addToCart(productId, quantity);
  });

  // Quantity plus button click (for product detail page)
  $(document).on("click", ".quantity-input .plus", function (e) {
    const input = $(this).siblings("input");
    const currentValue = parseInt(input.val()) || 0;
    input.val(currentValue + 1);
  });

  // Quantity minus button click (for product detail page)
  $(document).on("click", ".quantity-input .minus", function (e) {
    const input = $(this).siblings("input");
    const currentValue = parseInt(input.val()) || 0;
    if (currentValue > 1) {
      input.val(currentValue - 1);
    }
  });

  // Handle direct input in quantity field
  $(document).on("change", ".quantity-input input", function (e) {
    const value = parseInt($(this).val()) || 0;
    if (value < 1) {
      $(this).val(1);
    }
  });

  // Delete item from cart
  function deleteFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Find product in cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex >= 0) {
      // Decrement quantity
      cart[existingProductIndex].quantity = 0;

      // Remove product if quantity is 0
      if (cart[existingProductIndex].quantity <= 0) {
        cart.splice(existingProductIndex, 1);
      }

      // Save updated cart
      localStorage.setItem("cart", JSON.stringify(cart));

      // Update cart UI
      updateCartCount();

      location.reload();
    }
  }

  // Remove item from cart
  $(document).on("click", ".cart-remove-item", function (e) {
    const productId = e.target.getAttribute("data-product-id");
    deleteFromCart(parseInt(productId));
    // Remove the item from DOM if this is on the cart page
    $(this).closest(".cart-product-wrapper").remove();
  });

  $(document).on(
    "click",
    ".quantity-adjust .cart-minus, .quantity-adjust .cart-plus",
    function (e) {
      location.reload();
    }
  );

  /*
  // Buy Now button click (for product detail page)
  $(document).on("click", "#buyNow", function (e) {
    const productId = $(this).siblings("#addToCart").data("product-id");
    const quantity =
      parseInt(
        $(this)
          .closest(".cart-options")
          .siblings(".quantity-input")
          .find("input")
          .val()
      ) || 1;

    // Add to cart
    addToCart(productId, quantity);

    // Redirect to cart page
    window.location.href = "#cart";
  });
  */
});
