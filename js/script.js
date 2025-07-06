var swiper = new Swiper(".blogSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 1.5,
    },
  },
});

const blogItems = document.querySelectorAll(".blog-item");
const itemsPerPage = 4;
const totalPages = Math.ceil(blogItems.length / itemsPerPage);
let currentPage = 1;

const paginationContainer = document.getElementById("pagination-numbers");

function showPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  blogItems.forEach((item, index) => {
    item.style.display = index >= start && index < end ? "block" : "none";
  });

  // Update active page buttons
  document.querySelectorAll(".page-number").forEach((btn) => {
    btn.classList.remove("active");
    if (parseInt(btn.textContent) === page) {
      btn.classList.add("active");
    }
  });
}

function createPagination() {
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.innerText = i;
    pageBtn.className = "btn btn-light page-number mx-1";
    if (i === currentPage) pageBtn.classList.add("active");

    pageBtn.addEventListener("click", () => {
      currentPage = i;
      showPage(currentPage);
    });

    paginationContainer.appendChild(pageBtn);
  }
}

// Prev / Next buttons
document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});

// Initialize
createPagination();
showPage(currentPage);
