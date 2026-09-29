const products = [
    {
        id: 1,
        name: "Classic Hoodie",
        category: "Fashion",
        price: 1490,
        icon: "👕"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2490,
        icon: "🎧"
    },
    {
        id: 3,
        name: "Smartphone Pro",
        category: "Electronics",
        price: 28990,
        icon: "📱"
    },
    {
        id: 4,
        name: "Premium Sneakers",
        category: "Shoes",
        price: 3290,
        icon: "👟"
    },
    {
        id: 5,
        name: "Travel Backpack",
        category: "Accessories",
        price: 1890,
        icon: "🎒"
    },
    {
        id: 6,
        name: "Modern Table Lamp",
        category: "Home",
        price: 1290,
        icon: "💡"
    },
    {
        id: 7,
        name: "Beauty Care Set",
        category: "Beauty",
        price: 1590,
        icon: "💄"
    },
    {
        id: 8,
        name: "Wireless Earbuds",
        category: "Accessories",
        price: 1790,
        icon: "🎧"
    }
];

let cart = [];


/* DISPLAY PRODUCTS */

function displayProducts(list = products) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                ${product.icon}
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <div class="price">
                    ৳${product.price.toLocaleString()}
                </div>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;

        grid.appendChild(card);
    });
}


/* ADD TO CART */

function addToCart(id) {

    const product = products.find(p => p.id === id);

    cart.push(product);

    updateCart();

    alert(`${product.name} added to your cart!`);
}


/* UPDATE CART */

function updateCart() {

    const count = document.getElementById("cartCount");

    count.textContent = cart.length;

    const container = document.getElementById("cartItems");

    const totalElement = document.getElementById("cartTotal");

    if (cart.length === 0) {

        container.innerHTML =
            `<p class="empty-cart">Your cart is empty.</p>`;

        totalElement.textContent = "0";

        return;
    }

    container.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <div class="cart-item-icon">
                ${product.icon}
            </div>

            <div class="cart-item-info">

                <h4>${product.name}</h4>

                <p>৳${product.price.toLocaleString()}</p>

            </div>

            <button
                class="remove-btn"
                onclick="removeFromCart(${index})"
            >
                Remove
            </button>
        `;

        container.appendChild(item);
    });

    totalElement.textContent = total.toLocaleString();
}


/* REMOVE ITEM */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


/* OPEN CART */

function openCart() {

    document.getElementById("cartPanel")
        .classList.add("active");

    document.getElementById("cartOverlay")
        .classList.add("active");
}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cartPanel")
        .classList.remove("active");

    document.getElementById("cartOverlay")
        .classList.remove("active");
}


/* SEARCH */

function openSearch() {

    document.getElementById("searchBox")
        .classList.add("active");

    document.getElementById("searchInput")
        .focus();
}


function closeSearch() {

    document.getElementById("searchBox")
        .classList.remove("active");

    document.getElementById("searchInput").value = "";

    displayProducts();
}


function searchProducts() {

    const query =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    displayProducts(filtered);
}


/* CATEGORY FILTER */

function filterProducts(category) {

    const filtered = products.filter(
        product => product.category === category
    );

    displayProducts(filtered);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* SHOW ALL */

function showAllProducts() {

    displayProducts();

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* SCROLL TO PRODUCTS */

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* CHECKOUT DEMO */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert(
        "Checkout demo\n\n" +
        "The real payment and order system will be added later."
    );
}


/* NEWSLETTER */

function subscribe() {

    const email =
        document.querySelector(".newsletter input").value;

    if (!email) {

        alert("Please enter your email.");

        return;
    }

    alert(
        "Thank you for subscribing to BuyBee!"
    );

    document.querySelector(".newsletter input").value = "";
}


/* INITIAL LOAD */

displayProducts();