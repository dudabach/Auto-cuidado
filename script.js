
// MENU PARA CELULAR

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});

// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// PESQUISA DE PRODUTOS

const searchInput = document.getElementById("product-search");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const productName = card.textContent.toLowerCase();

        card.style.display = productName.includes(searchTerm)
            ? "block"
            : "none";
    });
});
