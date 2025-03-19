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
