function loadHome() {
  // Load all departments
  loadDepartments(".category-list .swiper-wrapper");
  // Load sale
  // Load best selling
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

function loadDepartment() {
  console.log("department load");
  // Load selected department products
}

function loadProduct() {
  console.log("product load");
  // Load product details
  // Load Related Products
}

function loadCart() {
  console.log("Cart load");
  // Load all products in cart
}
