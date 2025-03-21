function loadHome() {
  // Load all departments
  loadDepartments(".category-list .swiper-wrapper");
  // Load sale
  loadFlashSales();
  // Load best selling
  loadBestSelling();
}

function loadBestSelling() {
  $.ajax({
    url: "inc/services/bestSelling.php",
    type: "POST",
    success: (data) => {
      if (data) {
        document.querySelector("#sectionMonthsBest .swiper-wrapper").innerHTML =
          bestSellingMarkup(data);
      }
    },
    error: () => {
      console.log("error");
    },
  });
}

function loadFlashSales() {
  $.ajax({
    url: "inc/services/flashSales.php",
    type: "POST",
    success: (data) => {
      if (data) {
        document.querySelector("#sectionSpecials .swiper-wrapper").innerHTML =
          flashSalesMarkup(data);
      }
    },
    error: () => {
      console.log("error");
    },
  });
}

function loadDepartments(selectorOrParams) {
  let target;

  if (typeof selectorOrParams === "string") {
    target = selectorOrParams;
  } else {
    target = "#showAllDepartments .department-list";
  }

  const departmentList = document.querySelector(target);

  if (!departmentList) {
    return;
  }

  $.ajax({
    url: "inc/services/departments.php",
    type: "POST",
    success: (data) => {
      if (data) {
        departmentList.innerHTML = allDepartmentsMarkup(data);
      }
    },
    error: () => {
      console.log("error");
    },
  });
}

function loadDepartment(params) {
  if (params["department-id"] < 1) {
    console.log("Invalid department-id");
    return;
  }
  // Load selected department products
  $.ajax({
    url: "inc/services/departmentsAllProduct.php",
    type: "POST",
    data: {
      department_id: params["department-id"],
    },
    success: (data) => {
      if (data) {
        document.querySelector(
          "#sectionDepartment .section-subtitle"
        ).innerHTML = data.department_name;

        document.querySelector("#sectionDepartment .swiper-wrapper").innerHTML =
          departmentAllProducts(data.products);
      }
    },
    error: () => {
      console.log("error");
    },
  });
}

function loadProduct(params) {
  // Load product details
  loadSingleProductDetails(params["product-id"]);
  // Load Related Products
  loadSingelProductRelatedItems(params["product-id"]);
}

function loadSingelProductRelatedItems(product_id) {
  if (product_id < 1) {
    console.log("Invalid product-id");
    return;
  }

  $.ajax({
    url: "inc/services/singleProductRelatedItems.php",
    type: "POST",
    data: {
      product_id: product_id,
    },
    success: (data) => {
      if (data) {
        document.querySelector(
          "#sectionRelatedItems .swiper-wrapper"
        ).innerHTML = singleProductRelatedItemsMarkup(data);
      }
    },
    error: () => {
      console.log("error");
    },
  });
}

function loadSingleProductDetails(product_id) {
  if (product_id < 1) {
    console.log("Invalid product-id");
    return;
  }

  $.ajax({
    url: "inc/services/singleProductDetails.php",
    type: "POST",
    data: {
      product_id: product_id,
    },
    success: (data) => {
      if (data) {
        document.querySelector("#sectionProductDetails").innerHTML =
          singleProductDetailsMarkup(data);
      }
    },
    error: () => {
      console.log("error");
    },
  });
}

function loadCart() {
  const cartProducts = JSON.parse(localStorage.getItem("cart"));

  // If cart is empty, show empty message
  if (!cartProducts || cartProducts.length === 0) {
    $(".cart-items").html("<p>No items in the cart.</p>");
    return;
  }

  // Load all products in cart
  $.ajax({
    url: "inc/services/cartProducts.php",
    type: "POST",
    data: {
      cart_products: JSON.stringify(cartProducts),
    },
    success: (data) => {
      if (data) {
        // Add quantity to each product based on cart data
        const productsWithQuantity = data.map((product) => {
          const cartItem = cartProducts.find((item) => item.id === product.id);
          return {
            ...product,
            quantity: cartItem ? cartItem.quantity : 1,
          };
        });

        document.querySelector(".cart-items").innerHTML =
          cartMarkup(productsWithQuantity);
      }
    },
    error: (xhr, status, error) => {
      console.log("Error loading cart items:", error);
      $(".cart-items").html(
        "<p>Error loading cart items. Please try again.</p>"
      );
    },
  });
}
