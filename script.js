/* =====================================================
   FIELD MARKET V3
   USER FLOW:
   HOME
   → MARKET
   → BOUNTIES
   → POST A BOUNTY
   → LIVE DISCUSSION
===================================================== */

const marketItems = [
  {
    id: "#0501",
    title: "FLATIRON / 8:42 PM",
    category: "PLACE",
    image: "assets/01.JPG",
    price: 5,
    contributor: "@nightwalk",
    edition: "07 / 25",
    location: "Flatiron District",
    type: "Place / Landmark",
    date: "2026.10.10 / 20:42",
    context: "Night / Street",
    views: 184,
    description: "A contributed field record of a familiar landmark at one specific nighttime condition."
  },
  {
    id: "#0502",
    title: "PARKING METER / STICKER LAYERS",
    category: "TRACE",
    image: "assets/02.JPG",
    price: 3,
    contributor: "@surface.log",
    edition: "14 / 40",
    location: "New York City",
    type: "Sticker / Street Object",
    date: "2026.10.10 / 15:18",
    context: "Layered / Temporary",
    views: 221,
    description: "A temporary accumulation of stickers, tags, and residue on a working piece of street infrastructure."
  },
  {
    id: "#0503",
    title: "HOUSE CLEANING FLYER / 2ND AVE",
    category: "TRACE",
    image: "assets/03.JPG",
    price: 3,
    contributor: "@field88",
    edition: "09 / 30",
    location: "2nd Ave, NYC",
    type: "Flyer / Street Notice",
    date: "2026.10.10 / 13:06",
    context: "Temporary / Paper Trace",
    views: 143,
    description: "A short-lived street notice catalogued before it could be removed, covered, or torn away."
  },
  {
    id: "#0504",
    title: "CORNER SURFACE / EAST VILLAGE",
    category: "TRACE",
    image: "assets/04.JPG",
    price: 5,
    contributor: "@mia_nyc",
    edition: "11 / 25",
    location: "East Village",
    type: "Sticker / Street Surface",
    date: "2026.10.10 / 16:22",
    context: "Accumulated",
    views: 205,
    description: "A public surface formed through repeated stickers, marks, removal, and visual occupation."
  },
  {
    id: "#0505",
    title: "PUBLIC MACHINE / STICKER TRACE",
    category: "OBJECT",
    image: "assets/05.JPG",
    price: 5,
    contributor: "@surface.log",
    edition: "05 / 25",
    location: "New York City",
    type: "Street Object / Sticker",
    date: "2026.10.10 / 16:41",
    context: "Altered / Public",
    views: 196,
    description: "An everyday city machine catalogued after years of public intervention changed its surface."
  },
  {
    id: "#0506",
    title: "NUBLU / AUG 22 / 11:34 PM",
    category: "EVENT",
    image: "assets/06.JPG",
    price: 7,
    contributor: "@mia_nyc",
    edition: "03 / 20",
    location: "East Village",
    type: "Music / Street Event Trace",
    date: "2026.08.22 / 23:34",
    context: "One Night / Temporary",
    views: 282,
    description: "A time-specific music trace connecting a venue, a night, and a neighborhood before the street surface changes."
  },
  {
    id: "#0507",
    title: "STOREFRONT / BEFORE CLOSING",
    category: "PLACE",
    image: "assets/07.JPG",
    price: 5,
    contributor: "@daniel",
    edition: "12 / 25",
    location: "New York City",
    type: "Storefront / Neighborhood",
    date: "2026.10.09 / 18:11",
    context: "Everyday Place / Change",
    views: 173,
    description: "A neighborhood storefront recorded as a version of the block that may not remain the same."
  },
  {
    id: "#0508",
    title: "EAST RIVER / 6:41 PM",
    category: "SCENE",
    image: "assets/08.JPG",
    price: 7,
    contributor: "@riverwatch",
    edition: "08 / 20",
    location: "East River",
    type: "Waterfront / Scene",
    date: "2026.10.10 / 18:41",
    context: "Temporary Light",
    views: 316,
    description: "A field record tied to one temporary combination of light, skyline, water, and people at the river edge."
  },
  {
    id: "#0509",
    title: "LIVE PERFORMANCE / OCT 10",
    category: "EVENT",
    image: "assets/09.JPG",
    price: 9,
    contributor: "@one_night",
    edition: "01 / 15",
    location: "New York City",
    type: "Live Performance",
    date: "2026.10.10 / 22:16",
    context: "One-Time Event",
    views: 342,
    description: "A one-time live event recorded from one physical position inside the crowd."
  },
  {
    id: "#0510",
    title: "SIDEWALK MARKET / AFTERNOON",
    category: "SCENE",
    image: "assets/10.JPG",
    price: 5,
    contributor: "@streetindex",
    edition: "16 / 30",
    location: "New York City",
    type: "Street Market / Scene",
    date: "2026.10.10 / 14:27",
    context: "Temporary Occupation",
    views: 198,
    description: "An informal market temporarily changing how a sidewalk is occupied and used."
  },
  {
    id: "#0511",
    title: "GALLERY INSTALLATION / TEMPORARY",
    category: "OBJECT",
    image: "assets/11.JPG",
    price: 7,
    contributor: "@gallerywalk",
    edition: "04 / 20",
    location: "New York City",
    type: "Installation / Exhibition",
    date: "2026.10.10 / 17:03",
    context: "Temporary Exhibition",
    views: 257,
    description: "A temporary installation catalogued together with the physical conditions in which it was encountered."
  },
  {
    id: "#0512",
    title: "TIMES SQUARE / 3:18 PM",
    category: "SCENE",
    image: "assets/12.JPG",
    price: 9,
    contributor: "@lin24",
    edition: "02 / 15",
    location: "Times Square",
    type: "Street Scene / Screens",
    date: "2026.10.10 / 15:18",
    context: "Crowd / Screens / Traffic",
    views: 391,
    description: "A time-specific Times Square record shaped by screens, crowds, traffic, and afternoon light."
  }
];

let bounties = [
  {
    id: "#B031",
    title: "TIMES SQUARE FAN CHECK-IN",
    reward: 12,
    where: "Times Square, NYC",
    when: "Completed",
    what: "Go to Times Square during the scheduled billboard display. Hold the requester’s fan ID or photo in front of the screen and take one clear photo.",
    proof: "Fan ID and billboard must both be visible in one clear photo.",
    owner: "@lin24",
    runner: "@runner17",
    proofImage: "assets/proof_times_square.png",
    pendingProofImage: "",
    status: "FULFILLED",
    missionStage: 5
  },
  {
    id: "#B032",
    title: "MUSEUM T. REX ANGLE",
    reward: 8,
    where: "Natural History Museum, NYC",
    when: "Completed",
    what: "Visit the T. rex display and document it from the requested low-angle position.",
    proof: "One clear photo from the requested viewpoint.",
    owner: "@noah",
    runner: "@alex.nyc",
    proofImage: "assets/proof_trex.jpg",
    pendingProofImage: "",
    status: "FULFILLED",
    missionStage: 5
  },
  {
    id: "#B033",
    title: "RAINY STREET VERIFICATION",
    reward: 8,
    where: "New York State",
    when: "Completed",
    what: "Document the main street during rain to verify the requested weather condition and street atmosphere.",
    proof: "One street-wide image showing wet pavement and the surrounding block.",
    owner: "@emily",
    runner: "@fieldwalker",
    proofImage: "assets/proof_rain.jpg",
    pendingProofImage: "",
    status: "FULFILLED",
    missionStage: 5
  },
  {
    id: "#B034",
    title: "FIND THE TEMPORARY POSTER",
    reward: 5,
    where: "East Village, NYC",
    when: "Today / Before 8:00 PM",
    what: "Find the temporary poster described by the requester before it is removed or covered.",
    proof: "One clear photo of the poster plus one wider photo showing the surrounding block.",
    owner: "@mia",
    proofImage: "",
    pendingProofImage: "",
    status: "OPEN",
    missionStage: 0
  },
  {
    id: "#B035",
    title: "MIDNIGHT SCREEN DOCUMENT",
    reward: 12,
    where: "Times Square, NYC",
    when: "11:57 PM–12:00 AM",
    what: "Go to Times Square during the specified screen event and document the display while it is actually happening.",
    proof: "One photo or short video showing the screen and surrounding Times Square context.",
    owner: "@screenwatch",
    proofImage: "",
    pendingProofImage: "",
    status: "OPEN",
    missionStage: 0
  },
  {
    id: "#B036",
    title: "EAST RIVER SUNSET REVISIT",
    reward: 8,
    where: "East River, NYC",
    when: "Today / Before Sunset",
    what: "Return to the requested river location and document what the same view looks like at sunset today.",
    proof: "One wide photo showing the river edge, skyline, and current light conditions.",
    owner: "@daniel",
    runner: "@runner04",
    proofImage: "",
    pendingProofImage: "",
    status: "IN PROGRESS",
    missionStage: 1
  }
];

const watched = new Set();
const cart = new Set();
const sold = new Set();
const purchasedHistory = [];
let pendingRecordImageData = "";

let currentBountyFilter = "ALL";
let selectedIndex = 0;
let currentProductIndex = 0;
let currentBountyIndex = 0;
let pendingProofDataUrl = "";

const pages = {
  home: document.querySelector("#brandPage"),
  market: document.querySelector("#marketPage"),
  product: document.querySelector("#productPage"),
  bounties: document.querySelector("#bountyPage"),
  bountyDetail: document.querySelector("#bountyDetailPage"),
  postBounty: document.querySelector("#postBountyPage"),
  sellRecord: document.querySelector("#sellRecordPage"),
  collection: document.querySelector("#collectionPage"),
  discussion: document.querySelector("#discussionPage")
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function money(value) {
  return `$${Number(value).toFixed(2)}`;
}

function twoDigits(value) {
  return String(value).padStart(2, "0");
}

const routeLabels = {
  home: "FIELD MARKET",
  market: "LIVE MARKET",
  product: "FIELD RECORD",
  bounties: "BOUNTY BOARD",
  bountyDetail: "BOUNTY DETAIL",
  postBounty: "POST A BOUNTY",
  sellRecord: "LIST A FIELD RECORD",
  collection: "MY COLLECTION",
  discussion: "LIVE DISCUSSION"
};

let routeTimerA = null;
let routeTimerB = null;

function switchPageNow(name) {
  Object.values(pages).forEach(page => page.classList.add("hidden"));
  pages[name].classList.remove("hidden");

  window.scrollTo(0, 0);

  if (name === "market") renderCarousel();
  if (name === "bounties") renderBounties();
  if (name === "collection") renderCollection();
  if (name === "discussion") renderDiscussion();
}

function showPage(name, options = {}) {
  closeCart();

  const reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (options.instant || reducedMotion) {
    switchPageNow(name);
    return;
  }

  const overlay = $("#pageTransition");
  const label = $("#transitionLabel");

  if (!overlay || !label) {
    switchPageNow(name);
    return;
  }

  clearTimeout(routeTimerA);
  clearTimeout(routeTimerB);

  label.textContent = routeLabels[name] || "FIELD MARKET";

  overlay.classList.remove("exit", "show");
  void overlay.offsetWidth;
  overlay.classList.add("show");

  routeTimerA = setTimeout(() => {
    switchPageNow(name);

    overlay.classList.remove("show");
    overlay.classList.add("exit");
  }, 340);

  routeTimerB = setTimeout(() => {
    overlay.classList.remove("exit");
  }, 780);
}

$$("[data-route]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.route);
  });
});

/* =====================================================
   HOME — LIVE STATUS PREVIEW
===================================================== */

const homeStatusPresets = {
  market: () => ({
    kicker: "FOUND / CURRENT MARKET",
    live: "LIVE",
    number: String(marketItems.length).padStart(2, "0"),
    title: "FOUND<br>FIELD RECORDS<br>AVAILABLE",
    label: "FIELD RECORDS IN DROP",
    value: String(marketItems.length).padStart(2, "0"),
    footer: "FIELD MARKET / NYC",
    edition: "FOUND / COLLECT / ACQUIRE"
  }),

  bounties: () => {
    const open = bounties.filter(item => item.status === "OPEN").length;
    const active = bounties.filter(
      item => item.status === "IN PROGRESS" || item.status === "WAITING APPROVAL"
    ).length;

    return {
      kicker: "WANTED / BOUNTY STATUS",
      live: "UPDATED",
      number: String(open).padStart(2, "0"),
      title: "OPEN<br>BOUNTIES<br>NOW",
      label: "ACTIVE IN FIELD",
      value: String(active).padStart(2, "0"),
      footer: "FIELD MARKET / BOUNTIES",
      edition: "TAKE / GO / PROVE / GET PAID"
    };
  },

  postBounty: () => ({
    kicker: "REQUESTER MODE",
    live: "READY",
    number: "+",
    title: "POST<br>A NEW<br>BOUNTY",
    label: "WORKFLOW",
    value: "05 STEPS",
    footer: "FIELD MARKET / REQUEST",
    edition: "WHAT / WHERE / WHEN / REWARD / PROOF"
  }),

  discussion: () => ({
    kicker: "FIELD NETWORK / LIVE",
    live: "ONLINE",
    number: "18",
    title: "PEOPLE<br>ONLINE<br>NOW",
    label: "CURRENT CHANNEL",
    value: "LIVE",
    footer: "FIELD MARKET / NETWORK",
    edition: "MARKET ITEMS + BOUNTIES"
  })
};

function getHomeDefaultPreset() {
  return {
    kicker: "FIELD STATUS",
    live: "LIVE",
    number: "12",
    title: "FOUND<br>FIELD RECORDS<br>AVAILABLE",
    label: "BOUNTY BOARD",
    value: String(bounties.length).padStart(2, "0"),
    footer: "FIELD MARKET / NYC",
    edition: "COLLECT / REQUEST / VERIFY"
  };
}

function applyHomeStatusPreset(preset) {
  const card = $("#homeStatusCard");
  if (!card) return;

  card.classList.add("is-updating");

  setTimeout(() => {
    $("#homeStatusKicker").textContent = preset.kicker;
    $("#homeStatusLive").textContent = preset.live;
    $("#homeStatusNumber").textContent = preset.number;
    $("#homeStatusTitle").innerHTML = preset.title;
    $("#homeStatusLabel").textContent = preset.label;
    $("#homeBountyCount").textContent = preset.value;
    $("#homeStatusFooter").textContent = preset.footer;
    $("#homeStatusEdition").textContent = preset.edition;

    card.classList.remove("is-updating");
  }, 70);
}

$$(".home-action").forEach(button => {
  button.addEventListener("mouseenter", () => {
    const route = button.dataset.route;
    const presetFactory = homeStatusPresets[route];

    $$(".home-action").forEach(item => {
      item.classList.toggle("is-previewing", item === button);
    });

    $("#homeStatusCard")?.classList.add("preview-shift");

    if (presetFactory) {
      applyHomeStatusPreset(presetFactory());
    }
  });

  button.addEventListener("mouseleave", () => {
    $$(".home-action").forEach(item => {
      item.classList.remove("is-previewing");
    });

    $("#homeStatusCard")?.classList.remove("preview-shift");
    applyHomeStatusPreset(getHomeDefaultPreset());
  });
});

/* =====================================================
   MARKET CAROUSEL
===================================================== */

const stage = $("#stage");
const ring = $("#ring");
let total = marketItems.length;
let step = 360 / total;

let cards = [];
let rotation = 0;
let velocity = 0;
let dragging = false;
let moved = false;
let pointerStartX = 0;
let previousX = 0;
let previousTime = 0;
let previousSelectedIndex = -1;
let snapping = false;
let snapTarget = 0;

function buildCards() {
  total = marketItems.length;
  step = 360 / total;
  ring.innerHTML = "";

  const fragment = document.createDocumentFragment();

  marketItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" draggable="false">

      <div class="card-category">${item.category}</div>

      <div class="card-meta">
        <span>${item.id}</span>
        <span>${money(item.price)}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      if (moved) return;

      if (selectedIndex === index) {
        showProductPage(index);
      } else {
        snapTo(index);
      }
    });

    fragment.appendChild(card);
  });

  ring.appendChild(fragment);
  cards = $$(".card");
}

function getRadius() {
  if (window.innerWidth < 520) return 220;
  if (window.innerWidth < 900) return 320;
  return 440;
}

function getSelectedIndex() {
  const normalized = (((-rotation) % 360) + 360) % 360;
  return Math.round(normalized / step) % total;
}

function updateSelectedUI() {
  selectedIndex = getSelectedIndex();

  if (selectedIndex === previousSelectedIndex) return;
  previousSelectedIndex = selectedIndex;

  const item = marketItems[selectedIndex];

  $("#focusCategory").textContent = item.category;
  $("#focusId").textContent = item.id;
  $("#focusTitle").textContent = item.title;
  $("#focusContributor").textContent = `CONTRIBUTED BY ${item.contributor || "@FIELD_NETWORK"}`;
  $("#focusPrice").textContent = sold.has(selectedIndex)
    ? "SOLD"
    : money(item.price);

  $("#focusCount").textContent =
    `${twoDigits(selectedIndex + 1)} / ${twoDigits(total)}`;

  cards.forEach((card, index) => {
    card.classList.toggle("active", index === selectedIndex);
    card.classList.toggle("sold", sold.has(index));
  });
}

function renderCarousel() {
  if (!cards.length) return;

  const radius = getRadius();

  cards.forEach((card, index) => {
    const angle = index * step + rotation;
    const rad = angle * Math.PI / 180;

    const x = Math.sin(rad) * radius;
    const z = Math.cos(rad);
    const y = Math.abs(Math.sin(rad)) * 18;

    const depth = (z + 1) / 2;
    const scale = 0.56 + depth * 0.58;
    const opacity = 0.15 + depth * 0.85;
    const tilt = Math.sin(rad) * -16;

    card.style.transform =
      `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${scale}) rotate(${tilt}deg)`;

    card.style.opacity = opacity;
    card.style.zIndex = Math.round(depth * 1000);
    card.style.filter = `brightness(${0.52 + depth * 0.58})`;
  });

  updateSelectedUI();
}

function startSnap() {
  snapTarget = Math.round(rotation / step) * step;
  snapping = true;
}

function snapTo(index) {
  index = ((index % total) + total) % total;

  const base = -index * step;
  const revolutions = Math.round((rotation - base) / 360);

  snapTarget = base + revolutions * 360;
  snapping = true;
}

stage.addEventListener("pointerdown", event => {
  if (event.target.closest("#inspectButton")) return;

  dragging = true;
  moved = false;
  snapping = false;

  pointerStartX = previousX = event.clientX;
  previousTime = performance.now();
  velocity = 0;

  stage.setPointerCapture(event.pointerId);
});

stage.addEventListener("pointermove", event => {
  if (!dragging) return;

  const now = performance.now();
  const dx = event.clientX - previousX;
  const dt = Math.max(now - previousTime, 8);

  if (Math.abs(event.clientX - pointerStartX) > 4) {
    moved = true;
  }

  const dragAmount = dx * 0.12;
  rotation += dragAmount;

  const instantVelocity = dragAmount / dt * 16.67;
  velocity = velocity * 0.72 + instantVelocity * 0.28;

  previousX = event.clientX;
  previousTime = now;
});

function endDrag() {
  dragging = false;
}

stage.addEventListener("pointerup", endDrag);
stage.addEventListener("pointercancel", endDrag);

stage.addEventListener("wheel", event => {
  event.preventDefault();

  snapping = false;

  const amount =
    Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.deltaY;

  velocity += -amount * 0.0028;
}, { passive: false });

let lastFrame = performance.now();

function animationLoop(time) {
  const dt = Math.min((time - lastFrame) / 16.67, 2);
  lastFrame = time;

  if (!dragging) {
    if (!snapping) {
      rotation += velocity * dt;
      velocity *= Math.pow(0.94, dt);

      if (Math.abs(velocity) < 0.035) {
        velocity = 0;
        startSnap();
      }
    }

    if (snapping) {
      const difference = snapTarget - rotation;
      rotation += difference * 0.085 * dt;

      if (Math.abs(difference) < 0.012) {
        rotation = snapTarget;
        snapping = false;
        velocity = 0;
      }
    }
  }

  if (!pages.market.classList.contains("hidden")) {
    renderCarousel();
  }

  requestAnimationFrame(animationLoop);
}

/* =====================================================
   MARKET ITEM DETAIL
===================================================== */

function showProductPage(index) {
  currentProductIndex = index;
  selectedIndex = index;
  renderProduct();
  showPage("product");
}

$("#inspectButton").addEventListener("click", () => {
  showProductPage(selectedIndex);
});

function renderProduct() {
  const item = marketItems[currentProductIndex];
  const isSold = sold.has(currentProductIndex);
  const isWatched = watched.has(currentProductIndex);
  const inCart = cart.has(currentProductIndex);

  $("#productImage").src = item.image;
  $("#productImage").alt = item.title;

  $("#productCategory").textContent = item.category;
  $("#productHeaderCenter").textContent = `FIELD MARKET / ${item.category}`;

  $("#productId").textContent = item.id;
  $("#productTitle").textContent = item.title;
  $("#productPrice").textContent = money(item.price);
  $("#productDescription").textContent = item.description;
  $("#productContributor").textContent = item.contributor || "@FIELD_NETWORK";
  $("#productEdition").textContent = `EDITION ${item.edition || "01 / 25"}`;

  $("#productLocation").textContent = item.location;
  $("#productType").textContent = item.type;
  $("#productDate").textContent = item.date;
  $("#productContext").textContent = item.context;
  $("#productViews").textContent = item.views;

  $("#productStatus").textContent = isSold ? "SOLD" : "AVAILABLE";
  $("#productStatus").style.color = isSold ? "var(--rose)" : "var(--night)";

  $("#watchButton").textContent = isWatched ? "WATCHING" : "WATCH";
  $("#watchButton").classList.toggle("active", isWatched);

  if (isSold) {
    $("#addToCartButton").textContent = "SOLD";
    $("#addToCartButton").disabled = true;
    $("#addToCartButton").classList.remove("in-cart");
    $("#productMessage").textContent = "THIS FIELD RECORD HAS BEEN ACQUIRED.";
  } else {
    $("#addToCartButton").disabled = false;
    $("#addToCartButton").textContent = inCart
      ? "REMOVE FROM CART"
      : "ADD TO CART";

    $("#addToCartButton").classList.toggle("in-cart", inCart);
    $("#productMessage").textContent = inCart
      ? "FIELD RECORD ADDED TO YOUR CART."
      : "";
  }
}

$("#watchButton").addEventListener("click", () => {
  if (watched.has(currentProductIndex)) {
    watched.delete(currentProductIndex);
  } else {
    watched.add(currentProductIndex);
  }

  renderProduct();
});

$("#addToCartButton").addEventListener("click", () => {
  if (sold.has(currentProductIndex)) return;

  if (cart.has(currentProductIndex)) {
    cart.delete(currentProductIndex);
  } else {
    cart.add(currentProductIndex);
  }

  renderCart();
  renderProduct();
});

/* =====================================================
   CART / CHECKOUT
===================================================== */

function updateCartCounters() {
  const value = twoDigits(cart.size);
  $("#cartCount").textContent = value;
  $("#productCartCount").textContent = value;
}

function openCart() {
  renderCart();
  $("#cartBackdrop").classList.add("show");
  $("#cartDrawer").classList.add("open");
}

function closeCart() {
  $("#cartBackdrop").classList.remove("show");
  $("#cartDrawer").classList.remove("open");
}

$("#cartButton").addEventListener("click", openCart);
$("#productCartButton").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#cartBackdrop").addEventListener("click", closeCart);

function renderCart() {
  const container = $("#cartItems");
  container.innerHTML = "";

  const indexes = Array.from(cart);

  $("#cartEmpty").style.display = indexes.length ? "none" : "block";

  let subtotal = 0;

  indexes.forEach(index => {
    const item = marketItems[index];
    subtotal += item.price;

    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
      <img src="${item.image}" alt="${item.title}">

      <div class="cart-item-info">
        <div class="cart-item-top">
          <div class="cart-item-title">
            <strong>${item.title}</strong>
            <span>${item.category} / ${item.id}</span>
          </div>

          <div class="cart-item-price">${money(item.price)}</div>
        </div>

        <button class="remove-item" type="button" data-index="${index}">
          REMOVE
        </button>
      </div>
    `;

    container.appendChild(row);
  });

  $$(".remove-item").forEach(button => {
    button.addEventListener("click", () => {
      cart.delete(Number(button.dataset.index));
      renderCart();

      if (!pages.product.classList.contains("hidden")) {
        renderProduct();
      }
    });
  });

  $("#cartSubtotal").textContent = money(subtotal);
  $("#checkoutButton").disabled = cart.size === 0;

  updateCartCounters();
}

$("#checkoutButton").addEventListener("click", () => {
  if (cart.size === 0) return;

  const totalPrice = Array.from(cart).reduce(
    (sum, index) => sum + marketItems[index].price,
    0
  );

  $("#checkoutQuantity").textContent = cart.size;
  $("#checkoutTotal").textContent = money(totalPrice);

  closeCart();
  $("#checkoutPage").classList.add("show");
});

$("#checkoutBack").addEventListener("click", () => {
  $("#checkoutPage").classList.remove("show");
  openCart();
});

$("#completePurchaseButton").addEventListener("click", () => {
  const purchased = Array.from(cart);
  const purchaseTotal = purchased.reduce(
    (sum, index) => sum + marketItems[index].price,
    0
  );

  const acquiredRecords = purchased.map(index => ({
    ...marketItems[index],
    acquiredAt: new Date().toISOString()
  }));

  purchasedHistory.push(...acquiredRecords);
  purchased.forEach(index => sold.add(index));
  cart.clear();

  renderCart();
  renderProduct();
  renderCarousel();

  const remaining = marketItems.length - sold.size;
  $("#activityText").textContent =
    `LIVE MARKET — ${remaining} FIELD RECORDS AVAILABLE`;

  $("#checkoutPage").classList.remove("show");


  $("#completeText").textContent =
    purchased.length === 1
      ? "THE FIELD RECORD HAS BEEN ADDED TO YOUR COLLECTION."
      : `${purchased.length} FIELD RECORDS HAVE BEEN ADDED TO YOUR COLLECTION.`;

  $("#receiptRecordIds").textContent = acquiredRecords
    .map(record => record.id)
    .join(" / ");
  $("#receiptTotal").textContent = money(purchaseTotal);

  const shippingFields = ["shippingName", "shippingEmail", "shippingAddress", "shippingCity", "shippingZip"];
  shippingFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  $("#shippingStatusLabel").textContent = "WAITING FOR MAILING INFO";
  $("#shippingConfirmation").classList.add("hidden");
  $("#mailStepPurchased").classList.add("active");
  $("#mailStepAddress").classList.remove("active");
  $("#mailStepPacking").classList.remove("active");
  $("#mailStepMailed").classList.remove("active");

  $("#completePage").classList.add("show");

});

$("#returnToMarket").addEventListener("click", () => {
  $("#completePage").classList.remove("show");
  showPage("market");
});

$("#viewCollectionButton").addEventListener("click", () => {
  $("#completePage").classList.remove("show");
  showPage("collection");
});

$("#saveShippingButton").addEventListener("click", () => {
  const required = [
    $("#shippingName"),
    $("#shippingAddress"),
    $("#shippingCity"),
    $("#shippingZip")
  ];

  const hasEmpty = required.some(field => !field.value.trim());

  if (hasEmpty) {
    $("#shippingConfirmation").classList.remove("hidden");
    $("#shippingConfirmation").textContent =
      "PLEASE COMPLETE NAME, ADDRESS, CITY, AND ZIP BEFORE CONTINUING.";
    $("#shippingStatusLabel").textContent = "WAITING FOR MAILING INFO";
    $("#mailStepAddress").classList.remove("active");
    $("#mailStepPacking").classList.remove("active");
    return;
  }

  $("#shippingStatusLabel").textContent = "ADDRESS RECEIVED / READY FOR PACKING";
  $("#shippingConfirmation").classList.remove("hidden");
  $("#shippingConfirmation").textContent =
    "ADDRESS SAVED. NEXT STEP: THE FIELD STAMP ENTERS PACKING, THEN IT WILL BE MAILED.";

  $("#mailStepPurchased").classList.add("active");
  $("#mailStepAddress").classList.add("active");
  $("#mailStepPacking").classList.remove("active");
  $("#mailStepMailed").classList.remove("active");
});



/* =====================================================
   MY COLLECTION
===================================================== */

function renderCollection() {
  const grid = $("#collectionGrid");
  const empty = $("#collectionEmpty");

  if (!grid || !empty) return;

  grid.innerHTML = "";
  empty.classList.toggle("hidden", purchasedHistory.length > 0);

  purchasedHistory.forEach(record => {
    const card = document.createElement("article");
    card.className = "collection-card";

    card.innerHTML = `
      <img src="${record.image}" alt="${record.title}">
      <div class="collection-card-copy">
        <div class="collection-card-top">
          <span>${record.id}</span>
          <span>FIELD STAMP / PROCESSING</span>
        </div>
        <h2>${record.title}</h2>
        <p>${record.location} / CONTRIBUTED BY ${record.contributor}</p>
        <div class="collection-card-foot">
          <span>${money(record.price)}</span>
          <span>EDITION ${record.edition || "01 / 25"}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* =====================================================
   LIST A FIELD RECORD / CONTRIBUTOR FLOW
===================================================== */

$("#newRecordImage").addEventListener("change", event => {
  const file = event.target.files?.[0];
  const preview = $("#newRecordPreview");

  pendingRecordImageData = "";
  preview.classList.add("hidden");
  preview.removeAttribute("src");

  if (!file || !file.type.startsWith("image/")) return;

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    pendingRecordImageData = reader.result;
    preview.src = pendingRecordImageData;
    preview.classList.remove("hidden");
  });

  reader.readAsDataURL(file);
});

$("#sellRecordForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!pendingRecordImageData) {
    $("#sellRecordMessage").textContent = "UPLOAD AN IMAGE BEFORE LISTING.";
    return;
  }

  const contributorRaw = $("#newRecordContributor").value.trim();
  const contributor = contributorRaw.startsWith("@")
    ? contributorRaw
    : `@${contributorRaw}`;

  const newNumber = 501 + marketItems.length;

  const record = {
    id: `#${String(newNumber).padStart(4, "0")}`,
    title: $("#newRecordTitle").value.trim().toUpperCase(),
    category: $("#newRecordType").value,
    image: pendingRecordImageData,
    price: Number($("#newRecordPrice").value),
    contributor,
    edition: "01 / 25",
    location: $("#newRecordLocation").value.trim(),
    type: `${$("#newRecordType").value} / USER CONTRIBUTION`,
    date: $("#newRecordDate").value.trim(),
    context: "CONTRIBUTED / FIELD NETWORK",
    views: 0,
    description: $("#newRecordNote").value.trim()
  };

  marketItems.push(record);

  total = marketItems.length;
  step = 360 / total;
  cards = [];
  buildCards();

  selectedIndex = marketItems.length - 1;
  previousSelectedIndex = -1;
  rotation = -selectedIndex * step;
  velocity = 0;
  snapping = false;

  $("#activityText").textContent =
    `FOUND / ${marketItems.length - sold.size} CONTRIBUTED FIELD RECORDS AVAILABLE`;

  addDiscussionMessage({
    user: contributor.replace("@", ""),
    linkText: record.id,
    linkType: "market",
    linkIndex: selectedIndex,
    text: `${record.title} was contributed to the live market.`
  });

  $("#sellRecordMessage").textContent =
    `${record.id} LISTED / CONTRIBUTED BY ${contributor.toUpperCase()}`;

  event.target.reset();
  pendingRecordImageData = "";
  $("#newRecordPreview").classList.add("hidden");
  $("#newRecordPreview").removeAttribute("src");

  setTimeout(() => {
    showProductPage(selectedIndex);
  }, 450);
});

/* =====================================================
   BOUNTY BOARD
===================================================== */

function statusClass(status) {
  if (status === "OPEN") return "status-open";
  if (status === "IN PROGRESS") return "status-progress";
  if (status === "WAITING APPROVAL") return "status-waiting";
  return "status-fulfilled";
}

function getBountyThumbnail(bounty) {
  if (bounty.status !== "FULFILLED") return "";
  return bounty.proofImage || "";
}

function renderBountyCounts() {
  const open = bounties.filter(item => item.status === "OPEN").length;
  const active = bounties.filter(
    item => item.status === "IN PROGRESS" || item.status === "WAITING APPROVAL"
  ).length;
  const fulfilled = bounties.filter(item => item.status === "FULFILLED").length;

  $("#openCount").textContent = twoDigits(open);
  $("#activeCount").textContent = twoDigits(active);
  $("#fulfilledCount").textContent = twoDigits(fulfilled);
  $("#homeBountyCount").textContent = twoDigits(bounties.length);
}

function renderBounties() {
  renderBountyCounts();

  const grid = $("#bountyGrid");
  grid.innerHTML = "";

  const visible = bounties
    .map((bounty, index) => ({ bounty, index }))
    .filter(({ bounty }) => {
      if (currentBountyFilter === "ALL") return true;
      return bounty.status === currentBountyFilter;
    });

  visible.forEach(({ bounty, index }) => {
    const card = document.createElement("article");
    card.className = "bounty-card";

    const thumb = getBountyThumbnail(bounty);

    card.innerHTML = `
      ${
        thumb
          ? `<img class="bounty-card-thumb" src="${thumb}" alt="${bounty.title}">`
          : `<div class="bounty-card-thumb-placeholder ${statusClass(bounty.status)}">${bounty.status.replace(" ", "<br>")}</div>`
      }

      <div class="bounty-card-id">${bounty.id}</div>

      <div class="bounty-card-title">
        ${bounty.title}
        <small>${bounty.owner}</small>
      </div>

      <div class="bounty-card-location">${bounty.where}</div>
      <div class="bounty-card-time">${bounty.when}</div>

      <div class="bounty-card-status ${statusClass(bounty.status)}">
        ${bounty.status}
      </div>

      <div class="bounty-card-reward">${money(bounty.reward)}</div>
      <div class="bounty-card-arrow">↗</div>
    `;

    card.addEventListener("click", () => {
      showBountyDetail(index);
    });

    grid.appendChild(card);
  });
}

$$(".bounty-filter").forEach(button => {
  button.addEventListener("click", () => {
    currentBountyFilter = button.dataset.filter;

    $$(".bounty-filter").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderBounties();
  });
});

/* =====================================================
   BOUNTY DETAIL
===================================================== */

function showBountyDetail(index) {
  currentBountyIndex = index;
  cleanupTemporaryProof();
  renderBountyDetail();
  showPage("bountyDetail");
}

function cleanupTemporaryProof() {
  pendingProofDataUrl = "";

  $("#bountyUpload").value = "";
  $("#proofPreview").classList.add("hidden");
  $("#proofPreviewImage").removeAttribute("src");
  $("#submitProofButton").disabled = true;
}

function setMissionStep(stage) {
  const steps = [
    $("#missionStepTake"),
    $("#missionStepLocation"),
    $("#missionStepComplete"),
    $("#missionStepProof"),
    $("#missionStepApproval")
  ];

  steps.forEach((stepEl, index) => {
    stepEl.classList.remove("done", "active");

    if (index < stage) {
      stepEl.classList.add("done");
    }

    if (index === stage && stage < 5) {
      stepEl.classList.add("active");
    }

    if (stage >= 5) {
      stepEl.classList.add("done");
    }
  });
}

function renderBountyMedia(bounty) {
  const isFulfilled = bounty.status === "FULFILLED" && bounty.proofImage;

  $("#noPublicImageBlock").classList.toggle("hidden", isFulfilled);
  $("#fulfilledProofBlock").classList.toggle("hidden", !isFulfilled);

  if (isFulfilled) {
    $("#fulfilledProofImage").src = bounty.proofImage;
    $("#fulfilledProofImage").alt = `${bounty.title} fulfilled proof`;

    $("#archiveRequestId").textContent = bounty.id;
    $("#archiveRunner").textContent = bounty.runner || "@FIELD_RUNNER";
    $("#archivePayout").textContent = money(bounty.reward);
  } else {
    $("#fulfilledProofImage").removeAttribute("src");

    if (bounty.status === "OPEN") {
      $("#noImageStatus").textContent = "OPEN BOUNTY / NO IMAGE YET";
      $("#noImageMessage").textContent =
        "THE IMAGE DOES NOT EXIST YET. A RUNNER HAS TO GO OUT AND CREATE THE PROOF.";
    } else if (bounty.status === "IN PROGRESS") {
      $("#noImageStatus").textContent = "IN PROGRESS / NO PUBLIC IMAGE";
      $("#noImageMessage").textContent =
        "A RUNNER IS CURRENTLY COMPLETING THIS TASK. THE RESULT APPEARS AFTER APPROVAL.";
    } else if (bounty.status === "WAITING APPROVAL") {
      $("#noImageStatus").textContent = "WAITING APPROVAL / NO PUBLIC IMAGE";
      $("#noImageMessage").textContent =
        "PROOF HAS BEEN SUBMITTED PRIVATELY. IT BECOMES PUBLIC ONLY AFTER APPROVAL.";
    }
  }
}

function renderBountyDetail() {
  const bounty = bounties[currentBountyIndex];

  $("#bountyDetailId").textContent = bounty.id;
  $("#bountyDetailTitle").textContent = bounty.title;
  $("#bountyDetailReward").textContent = money(bounty.reward);

  $("#bountyDetailWhat").textContent = bounty.what;
  $("#bountyDetailWhere").textContent = bounty.where;
  $("#bountyDetailWhen").textContent = bounty.when;
  $("#bountyDetailProof").textContent = bounty.proof;
  $("#bountyDetailOwner").textContent = bounty.owner;

  $("#bountyDetailStatus").textContent = bounty.status;
  $("#bountyDetailStatus").style.color =
    bounty.status === "FULFILLED"
      ? "var(--rose)"
      : "var(--night)";

  $("#bountyRoleLabel").textContent =
    bounty.owner === "YOU"
      ? "YOUR BOUNTY / REQUESTER VIEW"
      : "BOUNTY REQUEST";

  renderBountyMedia(bounty);
  renderBountyFlow(bounty);
}

function renderBountyFlow(bounty) {
  const takeButton = $("#takeBountyButton");
  const missionPanel = $("#missionPanel");
  const requesterReview = $("#requesterReview");
  const fulfilledPanel = $("#fulfilledPanel");

  takeButton.classList.add("hidden");
  missionPanel.classList.add("hidden");
  requesterReview.classList.add("hidden");
  fulfilledPanel.classList.add("hidden");
  $("#privateProofPreview").classList.add("hidden");
  $("#privateProofImage").removeAttribute("src");

  $("#arriveButton").classList.add("hidden");
  $("#completeTaskButton").classList.add("hidden");
  $("#uploadZone").classList.add("hidden");

  if (bounty.status === "OPEN") {
    takeButton.classList.remove("hidden");

    takeButton.innerHTML =
      bounty.owner === "YOU"
        ? `SIMULATE RUNNER TAKING THIS BOUNTY <span>→</span>`
        : `TAKE BOUNTY <span>→</span>`;

    return;
  }

  if (bounty.status === "FULFILLED") {
    fulfilledPanel.classList.remove("hidden");
    $("#paidLabel").textContent = `${money(bounty.reward)} PAID`;
    return;
  }

  missionPanel.classList.remove("hidden");

  const stage = bounty.missionStage || 1;
  setMissionStep(stage);

  if (bounty.status === "WAITING APPROVAL") {
    $("#missionStateLabel").textContent = "PROOF SUBMITTED";
    requesterReview.classList.remove("hidden");

    if (bounty.pendingProofImage) {
      $("#privateProofPreview").classList.remove("hidden");
      $("#privateProofImage").src = bounty.pendingProofImage;
    } else {
      $("#privateProofPreview").classList.add("hidden");
      $("#privateProofImage").removeAttribute("src");
    }

    return;
  }

  if (stage <= 1) {
    $("#missionStateLabel").textContent = "MISSION ACCEPTED";
    $("#arriveButton").classList.remove("hidden");
  } else if (stage === 2) {
    $("#missionStateLabel").textContent = "ON SITE";
    $("#completeTaskButton").classList.remove("hidden");
  } else if (stage >= 3) {
    $("#missionStateLabel").textContent = "TASK COMPLETE / PROOF NEEDED";
    $("#uploadZone").classList.remove("hidden");
  }
}

$("#takeBountyButton").addEventListener("click", () => {
  const bounty = bounties[currentBountyIndex];

  bounty.status = "IN PROGRESS";
  bounty.missionStage = 1;

  if (!bounty.runner) {
    bounty.runner = "@YOU";
  }

  addDiscussionMessage({
    user: "SYSTEM",
    linkText: bounty.id,
    linkType: "bounty",
    linkId: bounty.id,
    linkIndex: currentBountyIndex,
    text: `${bounty.title} was taken by a runner.`
  });

  renderBountyDetail();
  renderBounties();
});

$("#arriveButton").addEventListener("click", () => {
  const bounty = bounties[currentBountyIndex];
  bounty.missionStage = 2;

  renderBountyDetail();
});

$("#completeTaskButton").addEventListener("click", () => {
  const bounty = bounties[currentBountyIndex];
  bounty.missionStage = 3;

  renderBountyDetail();
});

$("#bountyUpload").addEventListener("change", event => {
  const file = event.target.files?.[0];

  if (!file) {
    $("#submitProofButton").disabled = true;
    $("#proofPreview").classList.add("hidden");
    return;
  }

  $("#submitProofButton").disabled = false;

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      pendingProofDataUrl = reader.result;
      $("#proofPreviewImage").src = pendingProofDataUrl;
      $("#proofPreview").classList.remove("hidden");
    });

    reader.readAsDataURL(file);
  } else {
    pendingProofDataUrl = "";
    $("#proofPreview").classList.add("hidden");
  }
});

$("#submitProofButton").addEventListener("click", () => {
  const bounty = bounties[currentBountyIndex];

  if (!$("#bountyUpload").files?.length) return;

  bounty.status = "WAITING APPROVAL";
  bounty.missionStage = 4;

  if (pendingProofDataUrl) {
    bounty.pendingProofImage = pendingProofDataUrl;
  }

  addDiscussionMessage({
    user: "SYSTEM",
    linkText: bounty.id,
    linkType: "bounty",
    linkId: bounty.id,
    linkIndex: currentBountyIndex,
    text: `Proof was submitted for ${bounty.title}.`
  });

  renderBountyDetail();
  renderBounties();
});

$("#approveProofButton").addEventListener("click", () => {
  const bounty = bounties[currentBountyIndex];

  bounty.status = "FULFILLED";
  bounty.missionStage = 5;

  if (bounty.pendingProofImage) {
    bounty.proofImage = bounty.pendingProofImage;
    bounty.pendingProofImage = "";
    proofObjectUrl = null;
  }

  addDiscussionMessage({
    user: "SYSTEM",
    linkText: bounty.id,
    linkType: "bounty",
    linkId: bounty.id,
    linkIndex: currentBountyIndex,
    text: `${bounty.title} was approved and ${money(bounty.reward)} was paid.`
  });

  renderBountyDetail();
  renderBounties();
});

/* =====================================================
   POST A BOUNTY / REQUESTER FLOW
===================================================== */

$("#bountyForm").addEventListener("submit", event => {
  event.preventDefault();

  const title = $("#newBountyTitle").value.trim();
  const what = $("#newBountyWhat").value.trim();
  const where = $("#newBountyWhere").value.trim();
  const when = $("#newBountyWhen").value.trim();
  const reward = Number($("#newBountyReward").value);
  const proof = $("#newBountyProof").value.trim();

  const number = 40 + bounties.length;

  const newBounty = {
    id: `#B${number}`,
    title: title.toUpperCase(),
    reward,
    where,
    when,
    what,
    proof,
    owner: "YOU",
    proofImage: "",
    pendingProofImage: "",
    status: "OPEN",
    missionStage: 0
  };

  bounties.push(newBounty);
  const newIndex = bounties.length - 1;

  discussionMessages.push({
    user: "YOU",
    linkText: newBounty.id,
    linkType: "bounty",
    linkIndex: newIndex,
    text: `${newBounty.title} was just posted and is waiting for a runner.`
  });

  event.target.reset();

  $("#postFormMessage").textContent =
    "BOUNTY PUBLISHED / WAITING FOR RUNNER";

  setTimeout(() => {
    $("#postFormMessage").textContent = "";
  }, 1800);

  currentBountyIndex = newIndex;
  currentBountyFilter = "ALL";

  $$(".bounty-filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === "ALL");
  });

  renderBounties();
  renderBountyCounts();

  setTimeout(() => {
    showBountyDetail(newIndex);
  }, 350);
});

/* =====================================================
   DISCUSSION
===================================================== */

let discussionMessages = [
  {
    user: "lin24",
    linkText: "#B031",
    linkType: "bounty",
    linkId: "#B031",
    text: "Times Square check-in fulfilled — proof verified."
  },
  {
    user: "mia",
    linkText: "#0506",
    linkType: "market",
    linkIndex: 5,
    text: "I would collect this because the poster may be gone next week."
  },
  {
    user: "daniel",
    linkText: "#B036",
    linkType: "bounty",
    linkId: "#B036",
    text: "someone is already on the way to complete the sunset revisit"
  },
  {
    user: "field88",
    linkText: "#B034",
    linkType: "bounty",
    linkId: "#B034",
    text: "this poster request is still open if anyone is nearby"
  }
];

function renderDiscussion() {
  const feed = $("#discussionFeed");
  feed.innerHTML = "";

  discussionMessages.forEach(message => {
    const row = document.createElement("div");
    row.className = "discussion-message";

    row.innerHTML = `
      <span class="discussion-user">${message.user}</span>

      <button class="discussion-link" type="button">
        ${message.linkText} ↗
      </button>

      <span class="discussion-text">${message.text}</span>
    `;

    row.querySelector(".discussion-link").addEventListener("click", () => {
      if (message.linkType === "market") {
        showProductPage(message.linkIndex);
      }

      if (message.linkType === "bounty") {
        const index = message.linkId
          ? bounties.findIndex(bounty => bounty.id === message.linkId)
          : message.linkIndex;

        if (index >= 0) {
          showBountyDetail(index);
        }
      }
    });

    feed.appendChild(row);
  });
}

function addDiscussionMessage(message) {
  discussionMessages.push(message);

  if (!pages.discussion.classList.contains("hidden")) {
    renderDiscussion();
  }
}

$("#discussionForm").addEventListener("submit", event => {
  event.preventDefault();

  const text = $("#discussionInput").value.trim();
  if (!text) return;

  addDiscussionMessage({
    user: "YOU",
    linkText: marketItems[selectedIndex].id,
    linkType: "market",
    linkIndex: selectedIndex,
    text
  });

  $("#discussionInput").value = "";
});


/* =====================================================
   MICRO TYPEWRITER — restrained system detail
===================================================== */

function fieldTypewriter(element, text, speed = 42) {
  if (!element || !text) return;

  element.textContent = "";
  element.classList.add("is-typing");

  let i = 0;

  const tick = () => {
    element.textContent = text.slice(0, i + 1);
    i += 1;

    if (i < text.length) {
      setTimeout(tick, speed);
    } else {
      setTimeout(() => element.classList.remove("is-typing"), 900);
    }
  };

  tick();
}

const homeTypeLine = $("#homeTypeLine");

if (homeTypeLine) {
  fieldTypewriter(
    homeTypeLine,
    homeTypeLine.dataset.text || "READING THE CITY SURFACE...",
    42
  );
}

/* =====================================================
   COUNTDOWN
===================================================== */

let countdownMilliseconds =
  ((23 * 60 * 60) + (59 * 60) + 58) * 1000;

let frame = 24;

setInterval(() => {
  countdownMilliseconds -= 40;

  if (countdownMilliseconds <= 0) {
    countdownMilliseconds = 24 * 60 * 60 * 1000;
  }

  frame -= 1;

  if (frame < 0) {
    frame = 24;
  }

  const totalSeconds = Math.floor(countdownMilliseconds / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  $("#hours").textContent = twoDigits(hours);
  $("#minutes").textContent = twoDigits(minutes);
  $("#seconds").textContent = twoDigits(seconds);
  $("#frames").textContent = twoDigits(frame);
}, 40);

/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if ($("#checkoutPage").classList.contains("show")) {
      $("#checkoutPage").classList.remove("show");
      return;
    }

    if ($("#cartDrawer").classList.contains("open")) {
      closeCart();
      return;
    }

    if (!pages.product.classList.contains("hidden")) {
      showPage("market");
      return;
    }

    if (!pages.bountyDetail.classList.contains("hidden")) {
      showPage("bounties");
      return;
    }
  }

  if (pages.market.classList.contains("hidden")) return;

  if (
    event.target.tagName === "INPUT" ||
    event.target.tagName === "TEXTAREA"
  ) {
    return;
  }

  if (event.key === "ArrowRight") {
    snapTo(selectedIndex + 1);
  }

  if (event.key === "ArrowLeft") {
    snapTo(selectedIndex - 1);
  }

  if (event.key === "Enter") {
    showProductPage(selectedIndex);
  }
});

/* =====================================================
   INIT
===================================================== */

window.addEventListener("resize", renderCarousel);

buildCards();
renderCart();
renderBountyCounts();
renderBounties();
renderDiscussion();
renderCarousel();

requestAnimationFrame(animationLoop);
