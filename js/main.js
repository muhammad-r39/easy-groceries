const App = {
  // Store active page data
  currentPage: null,
  pageParams: {},

  // Initialize the application
  init: function () {
    this.setupRouting();
    this.setupGlobalEvents();
  },

  // Setup global event delegation for all dynamically loaded content
  setupGlobalEvents: function () {
    // Handle all goto-* links with one delegation
    $(document).on("click", "[class*='goto-']", function (e) {
      e.preventDefault();

      // Extract page name from class
      const classList = this.className.split(" ");
      const gotoClass = classList.find((cls) => cls.startsWith("goto-"));
      const pageName = gotoClass.replace("goto-", "");

      // Get any data attributes to pass as parameters
      const params = {};
      $.each($(this).data(), function (key, value) {
        // Convert camelCase to param-case for URLs (e.g. departmentId -> department-id)
        const paramKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
        params[paramKey] = value;
      });

      // Build URL with parameters
      let url = `#/${pageName}/`;

      // Add parameters to URL if present
      const paramStrings = [];
      for (const [key, value] of Object.entries(params)) {
        paramStrings.push(`${key}=${value}`);
      }

      if (paramStrings.length > 0) {
        url += `?${paramStrings.join("&")}`;
      }

      location.href = url;
    });
  },

  // Setup Sammy.js routing
  setupRouting: function () {
    const pages = [
      "home",
      "departments",
      "department",
      "search",
      "product",
      "cart",
      "register",
      "forgot",
      "reset",
      "shipping",
      "payment",
      "review",
      "complete",
      "location",
    ];

    const app = $.sammy(function () {
      // General route for all pages with optional query parameters
      pages.forEach((page) => {
        this.get(`#/${page}/`, function () {
          App.currentPage = page;
          App.pageParams = this.params;
          App.showPage(page);
        });
      });
    });

    app.run("#/home/");
  },

  // Show page and load data
  showPage: function (page) {
    $(".hideAll").hide();

    // Dynamically call the appropriate function
    const loaderName = `load${page.charAt(0).toUpperCase() + page.slice(1)}`;

    if (typeof window[loaderName] === "function") {
      // Pass the parameters to the loader function
      window[loaderName](this.pageParams);
    } else {
      console.log(`Load function ${loaderName}() not found for page: ${page}`);
    }

    $(`.show-${page}`).show();
  },
};

// Initialize on page load
$(window).on("load", function () {
  App.init();
});

// End Sammy Routing

// Modal Login Functions
function openLoginModal() {
  $("#loginModal").fadeIn(300);
  $("body").css("overflow", "hidden");
}

// Hide the modal with a fade effect
function closeLoginModal() {
  $("#loginModal").fadeOut(300, function () {
    $("body").css("overflow", "auto");
  });
}

// Ensure modal closes if the user clicks outside of it
$(document).on("click", function (event) {
  if ($(event.target).is("#loginModal")) {
    closeLoginModal();
  }
});

// Optional: Bind keypress to close modal with ESC key for better accessibility
$(document).on("keydown", function (event) {
  if (event.key === "Escape") {
    closeLoginModal();
  }
});

// Menu toggle function
$(".menu-toggle").click(() => {
  $("#mainMenu").toggleClass("open");
});
