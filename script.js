
const phone = "77053535338";

let lang = "kk";
let cart = [];

const translations = {
    kk: {
        welcomeTitle: "Кофеден ләззат ал!",
        welcomeText: "Сіздің сүйікті кофе дүкеніңіз",
        startBtn: "Бастау",
        locationLabel: "Біздің мекенжай",
        search: "Кофе іздеу...",
        promoLabel: "АРНАЙЫ ҰСЫНЫС",
        promoTitle: "Бір кофе ал, екіншісі тегін!",
        promoText: "Кофеңізден ләззат алыңыз ☕",
        categoryTitle: "Кофе санаттары",
        all: "Барлығы",
        espresso: "Эспрессо",
        milk: "Сүтті кофе",
        cold: "Салқын кофе",
        popularTitle: "Танымал кофелер",
        cartTitle: "🛒 Сіздің себетіңіз",
        empty: "Себетіңіз бос",
        total: "Жалпы",
        customerLabel: "Сіздің атыңыз",
        customerPlaceholder: "Атыңызды жазыңыз",
        addressLabel: "Жеткізу мекенжайы",
        addressPlaceholder: "Мекенжайыңызды жазыңыз",
        orderBtn: "WhatsApp арқылы тапсырыс беру",
        aboutTitle: "☕ Біз туралы",
        aboutText: "Brew Bliss — хош иісті кофе мен жайлы атмосфераны бағалайтын жандарға арналған кофе дүкені. Әр шыныаяқ сізге қуаныш сыйласын!",
        mapTitle: "📍 Бізді табыңыз",
        mapAddress: "Алматы қаласы, Шевченко көшесі, 97",
        mapButtonText: "Картадан ашу",
        footerText: "Тапсырыс беру және байланыс",
        size: "Өлшемі",
        add: "Себетке қосу",
        remove: "Өшіру",
        added: "Кофе себетке қосылды!",
        choose: "Алдымен кофе таңдаңыз!",
        nameError: "Атыңызды енгізіңіз!",
        addressError: "Мекенжайды енгізіңіз!",
        description: "Сипаттамасы",
        sizeNames: { S: "Кіші", L: "Үлкен", XL: "Өте үлкен" }
    },

    ru: {
        welcomeTitle: "Влюбись в кофе!",
        welcomeText: "Ваша любимая кофейня",
        startBtn: "Начать",
        locationLabel: "Наш адрес",
        search: "Поиск кофе...",
        promoLabel: "СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ",
        promoTitle: "Покупай один, второй бесплатно!",
        promoText: "Наслаждайтесь любимым кофе ☕",
        categoryTitle: "Категории кофе",
        all: "Все",
        espresso: "Эспрессо",
        milk: "Молочный кофе",
        cold: "Холодный кофе",
        popularTitle: "Популярные напитки",
        cartTitle: "🛒 Ваша корзина",
        empty: "Корзина пуста",
        total: "Итого",
        customerLabel: "Ваше имя",
        customerPlaceholder: "Введите имя",
        addressLabel: "Адрес доставки",
        addressPlaceholder: "Введите адрес",
        orderBtn: "Заказать через WhatsApp",
        aboutTitle: "☕ О нас",
        aboutText: "Brew Bliss — кофейня для тех, кто ценит ароматный кофе и уютную атмосферу. Пусть каждая чашка приносит радость!",
        mapTitle: "📍 Найдите нас",
        mapAddress: "Алматы, улица Шевченко, 97",
        mapButtonText: "Открыть карту",
        footerText: "Заказы и контакты",
        size: "Размер",
        add: "В корзину",
        remove: "Удалить",
        added: "Кофе добавлен в корзину!",
        choose: "Сначала выберите кофе!",
        nameError: "Введите ваше имя!",
        addressError: "Введите адрес доставки!",
        description: "Описание",
        sizeNames: { S: "Маленький", L: "Большой", XL: "Очень большой" }
    },

    en: {
        welcomeTitle: "Fall in Love with Coffee!",
        welcomeText: "Your favorite coffee shop",
        startBtn: "Get Started",
        locationLabel: "Our location",
        search: "Search coffee...",
        promoLabel: "SPECIAL OFFER",
        promoTitle: "Buy one, get one FREE!",
        promoText: "Enjoy your favorite coffee ☕",
        categoryTitle: "Coffee categories",
        all: "All Coffee",
        espresso: "Espresso",
        milk: "Milk Coffee",
        cold: "Cold Coffee",
        popularTitle: "Popular Coffee",
        cartTitle: "🛒 Your Cart",
        empty: "Your cart is empty",
        total: "Total",
        customerLabel: "Your name",
        customerPlaceholder: "Enter your name",
        addressLabel: "Delivery address",
        addressPlaceholder: "Enter your address",
        orderBtn: "Order via WhatsApp",
        aboutTitle: "☕ About Us",
        aboutText: "Brew Bliss is a cozy coffee shop for people who love aromatic coffee and a welcoming atmosphere. Let every cup bring you joy!",
        mapTitle: "📍 Find Us",
        mapAddress: "97 Shevchenko Street, Almaty",
        mapButtonText: "Open Map",
        footerText: "Orders and contact",
        size: "Size",
        add: "Add to Cart",
        remove: "Remove",
        added: "Coffee added to cart!",
        choose: "Please select a coffee first!",
        nameError: "Please enter your name!",
        addressError: "Please enter your address!",
        description: "Description",
        sizeNames: { S: "Small", L: "Large", XL: "Extra Large" }
    }
};

const coffees = [
    {
        id: 1, name: "Caffe Mocha", category: "milk",
        price: 2200, rating: 4.8,
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=500&q=80",
        kk: "Шоколад, эспрессо және сүт қосылған жұмсақ кофе.",
        ru: "Нежный кофе с шоколадом, эспрессо и молоком.",
        en: "Smooth coffee with chocolate, espresso and milk."
    },
    {
        id: 2, name: "Flat White", category: "milk",
        price: 1800, rating: 4.7,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
        kk: "Қою эспрессо мен жұқа сүт көбігі.",
        ru: "Крепкий эспрессо с тонким слоем молочной пены.",
        en: "Strong espresso topped with silky steamed milk."
    },
    {
        id: 3, name: "Cappuccino", category: "milk",
        price: 1900, rating: 4.9,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80",
        kk: "Эспрессо, ыстық сүт және қалың көбік.",
        ru: "Эспрессо, горячее молоко и густая пена.",
        en: "Espresso, steamed milk and creamy foam."
    },
    {
        id: 4, name: "Americano", category: "espresso",
        price: 1300, rating: 4.6,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80",
        kk: "Ыстық сумен дайындалған классикалық кофе.",
        ru: "Классический кофе с добавлением горячей воды.",
        en: "Classic espresso diluted with hot water."
    },
    {
        id: 5, name: "Latte", category: "milk",
        price: 1900, rating: 4.8,
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=500&q=80",
        kk: "Эспрессо мен көпіршітілген сүт.",
        ru: "Эспрессо с большим количеством молока.",
        en: "Espresso combined with steamed milk."
    },
    {
        id: 6, name: "Espresso", category: "espresso",
        price: 1000, rating: 4.7,
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=80",
        kk: "Қою әрі хош иісті классикалық эспрессо.",
        ru: "Крепкий и ароматный классический эспрессо.",
        en: "A rich and aromatic classic espresso shot."
    },
    {
        id: 7, name: "Macchiato", category: "espresso",
        price: 1500, rating: 4.6,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
        kk: "Аздап сүт көбігі қосылған эспрессо.",
        ru: "Эспрессо с небольшим количеством молочной пены.",
        en: "Espresso with a small amount of milk foam."
    },
    {
        id: 8, name: "Caramel Latte", category: "milk",
        price: 2300, rating: 4.9,
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=500&q=80",
        kk: "Карамель сиропы мен жұмсақ сүтті кофе.",
        ru: "Молочный кофе с нежным карамельным сиропом.",
        en: "Creamy latte with sweet caramel syrup."
    },
    {
        id: 9, name: "Iced Latte", category: "cold",
        price: 2100, rating: 4.8,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
        kk: "Мұз бен сүт қосылған салқын кофе.",
        ru: "Холодный кофе с молоком и льдом.",
        en: "Chilled coffee with milk and ice."
    },
    {
        id: 10, name: "Cold Brew", category: "cold",
        price: 2000, rating: 4.7,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
        kk: "Салқын суда ұзақ дайындалатын кофе.",
        ru: "Кофе длительного настаивания в холодной воде.",
        en: "Coffee slowly brewed in cold water."
    },
    {
        id: 11, name: "Vanilla Latte", category: "milk",
        price: 2200, rating: 4.8,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
        kk: "Ваниль хош иісі бар сүтті кофе.",
        ru: "Молочный кофе с ароматной ванилью.",
        en: "Creamy latte with fragrant vanilla."
    },
    {
        id: 12, name: "Affogato", category: "cold",
        price: 2400, rating: 4.9,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
        kk: "Эспрессо мен балмұздақтан жасалған десерт.",
        ru: "Десерт из эспрессо и мороженого.",
        en: "A dessert made with espresso and ice cream."
    }
];

const sizePrices = {
    S: 0.8,
    L: 1,
    XL: 1.3
};

let selectedCategory = "all";
let searchText = "";

const $ = id => document.getElementById(id);

function money(amount) {
    return Math.round(amount).toLocaleString("ru-RU") + " ₸";
}

function getPrice(coffee, size) {
    return Math.round(coffee.price * sizePrices[size]);
}

// Change language
function changeLanguage() {
    const t = translations[lang];

    const textIds = [
        "welcomeTitle", "welcomeText", "startBtn",
        "locationLabel", "promoLabel", "promoTitle",
        "promoText", "categoryTitle", "popularTitle",
        "cartTitle", "customerLabel", "addressLabel",
        "orderBtn", "aboutTitle", "aboutText",
        "mapTitle", "mapAddress", "mapButtonText",
        "footerText"
    ];

    textIds.forEach(function(id) {
        $(id).textContent = t[id];
    });

    $("search").placeholder = t.search;
    $("customerName").placeholder = t.customerPlaceholder;
    $("customerAddress").placeholder = t.addressPlaceholder;

    const categoryNames = {
        all: t.all,
        espresso: t.espresso,
        milk: t.milk,
        cold: t.cold
    };

    document.querySelectorAll(".category").forEach(function(button) {
        button.textContent = categoryNames[button.dataset.category];
    });

    renderProducts();
    renderCart();
}

$("language").addEventListener("change", function() {
    lang = this.value;
    changeLanguage();
});

// Welcome screen
$("startBtn").addEventListener("click", function() {
    $("welcome").classList.add("hidden");
    $("home").classList.remove("hidden");
    window.scrollTo(0, 0);
});

// Display coffee cards
function renderProducts() {
    const t = translations[lang];
    const container = $("products");

    const filtered = coffees.filter(function(coffee) {
        const matchesCategory =
            selectedCategory === "all" ||
            coffee.category === selectedCategory;

        const text = (
            coffee.name + " " + coffee[lang]
        ).toLowerCase();

        return matchesCategory && text.includes(searchText);
    });

    $("coffeeCount").textContent = filtered.length;

    container.innerHTML = filtered.map(function(coffee) {
        return `
            <article class="product">
                <img src="${coffee.image}" alt="${coffee.name}"
                     loading="lazy">

                <p class="rating">★ ${coffee.rating}</p>

                <h3>${coffee.name}</h3>

                <p class="type">${coffee[lang]}</p>

                <strong class="price">
                    ${money(coffee.price)}
                </strong>

                <label>${t.size}</label>

                <select class="sizeSelect" data-id="${coffee.id}">
                    <option value="S">S — ${t.sizeNames.S}</option>
                    <option value="L" selected>L — ${t.sizeNames.L}</option>
                    <option value="XL">XL — ${t.sizeNames.XL}</option>
                </select>

                <button class="addBtn" data-id="${coffee.id}">
                    ${t.add}
                </button>
            </article>
        `;
    }).join("");

    container.querySelectorAll(".sizeSelect").forEach(function(select) {
        select.addEventListener("change", function() {
            const coffee = coffees.find(
                item => item.id === Number(select.dataset.id)
            );

            select.closest(".product").querySelector(".price")
                .textContent = money(getPrice(coffee, select.value));
        });
    });

    container.querySelectorAll(".addBtn").forEach(function(button) {
        button.addEventListener("click", function() {
            const id = Number(button.dataset.id);
            const card = button.closest(".product");
            const size = card.querySelector(".sizeSelect").value;

            const existing = cart.find(
                item => item.id === id && item.size === size
            );

            if (existing) {
                existing.quantity++;
            } else {
                cart.push({
                    id: id,
                    size: size,
                    quantity: 1
                });
            }

            renderCart();
            alert(t.added);
        });
    });
}

// Category filter
$("categories").addEventListener("click", function(event) {
    const button = event.target.closest(".category");
    if (!button) return;

    selectedCategory = button.dataset.category;

    document.querySelectorAll(".category").forEach(function(item) {
        item.classList.toggle("active", item === button);
    });

    renderProducts();
});

// Search
$("search").addEventListener("input", function() {
    searchText = this.value.toLowerCase().trim();
    renderProducts();
});

// Shopping cart
function renderCart() {
    const t = translations[lang];
    const container = $("cartItems");
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = `<p>${t.empty}</p>`;
    } else {
        container.innerHTML = cart.map(function(item, index) {
            const coffee = coffees.find(
                product => product.id === item.id
            );

            const price = getPrice(coffee, item.size) * item.quantity;
            total += price;

            return `
                <div class="cart-item">
                    <div>
                        <strong>${coffee.name}</strong>
                        <p>${t.size}: ${item.size} × ${item.quantity}</p>
                        <strong>${money(price)}</strong>
                    </div>

                    <button data-remove="${index}">
                        ${t.remove}
                    </button>
                </div>
            `;
        }).join("");
    }

    $("cartTotal").textContent = t.total + ": " + money(total);

    container.querySelectorAll("[data-remove]").forEach(function(button) {
        button.addEventListener("click", function() {
            cart.splice(Number(button.dataset.remove), 1);
            renderCart();
        });
    });
}

// Send order to WhatsApp
$("orderBtn").addEventListener("click", function() {
    const t = translations[lang];

    if (cart.length === 0) {
        alert(t.choose);
        return;
    }

    const name = $("customerName").value.trim();
    const address = $("customerAddress").value.trim();

    if (!name) {
        alert(t.nameError);
        $("customerName").focus();
        return;
    }

    if (!address) {
        alert(t.addressError);
        $("customerAddress").focus();
        return;
    }

    let total = 0;

    const items = cart.map(function(item) {
        const coffee = coffees.find(
            product => product.id === item.id
        );

        const price = getPrice(coffee, item.size) * item.quantity;
        total += price;

        return `${coffee.name} (${item.size}) x${item.quantity} — ${money(price)}`;
    });

    const message = [
        "☕ BREW BLISS — NEW ORDER",
        "",
        "Name: " + name,
        "Address: " + address,
        "",
        ...items,
        "",
        t.total + ": " + money(total)
    ].join("\n");

    const url = "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
});

// Initial display
changeLanguage();
renderCart();
