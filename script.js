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
    title: "FLATIRON AFTER DARK",
    category: "PLACE",
    image: "assets/01.JPG",
    price: 22,
    location: "Flatiron District",
    type: "Place / Landmark",
    date: "2026.10.10",
    context: "Night / Street",
    views: 184,
    description: "A familiar New York landmark recorded after the city shifts into night."
  },
  {
    id: "#0502",
    title: "PARKING METER LAYERS",
    category: "TRACE",
    image: "assets/02.JPG",
    price: 14,
    location: "New York City",
    type: "Sticker / Street Object",
    date: "2026.10.10",
    context: "Layered",
    views: 221,
    description: "Stickers, tags, and residue accumulated on a working piece of street infrastructure."
  },
  {
    id: "#0503",
    title: "HOUSE CLEANING",
    category: "TRACE",
    image: "assets/03.JPG",
    price: 11.5,
    location: "New York City",
    type: "Flyer / Street Notice",
    date: "2026.10.10",
    context: "Temporary",
    views: 143,
    description: "A handwritten service notice attached to the street for a short period before being removed, covered, or torn away."
  },
  {
    id: "#0504",
    title: "STREET CORNER ARCHIVE",
    category: "TRACE",
    image: "assets/04.JPG",
    price: 18,
    location: "New York City",
    type: "Sticker / Street Surface",
    date: "2026.10.10",
    context: "Accumulated",
    views: 205,
    description: "A public surface built up through repeated stickers, marks, and small acts of visual occupation."
  },
  {
    id: "#0505",
    title: "PUBLIC MACHINE",
    category: "OBJECT",
    image: "assets/05.JPG",
    price: 16,
    location: "New York City",
    type: "Street Object / Sticker",
    date: "2026.10.10",
    context: "Altered",
    views: 196,
    description: "An everyday city machine transformed by years of stickers, tags, scratches, and public intervention."
  },
  {
    id: "#0506",
    title: "NUBLU / AUGUST 22",
    category: "EVENT",
    image: "assets/06.JPG",
    price: 20,
    location: "East Village",
    type: "Music Poster / Street",
    date: "2026.10.10",
    context: "Music / Temporary",
    views: 282,
    description: "A music-event trace that connects a band, a date, and a neighborhood before the poster disappears from the street."
  },
  {
    id: "#0507",
    title: "STOREFRONT MEMORY",
    category: "PLACE",
    image: "assets/07.JPG",
    price: 19,
    location: "New York City",
    type: "Storefront / Neighborhood",
    date: "2026.10.10",
    context: "Everyday Place",
    views: 173,
    description: "A neighborhood storefront recorded as part of the everyday visual identity of its block."
  },
  {
    id: "#0508",
    title: "EAST RIVER SUNSET",
    category: "SCENE",
    image: "assets/08.JPG",
    price: 24,
    location: "East River",
    type: "Waterfront / Scene",
    date: "2026.10.10",
    context: "Sunset / Temporary Light",
    views: 316,
    description: "A temporary relationship between light, skyline, water, and the people occupying the river edge."
  },
  {
    id: "#0509",
    title: "ONE NIGHT ONLY",
    category: "EVENT",
    image: "assets/09.JPG",
    price: 26,
    location: "New York City",
    type: "Live Performance",
    date: "2026.10.10",
    context: "One-Time Event",
    views: 342,
    description: "A live performance captured from one specific position and one specific moment in the crowd."
  },
  {
    id: "#0510",
    title: "SIDEWALK MARKET",
    category: "SCENE",
    image: "assets/10.JPG",
    price: 17,
    location: "New York City",
    type: "Street Market / Scene",
    date: "2026.10.10",
    context: "Temporary Occupation",
    views: 198,
    description: "An informal street market temporarily occupying the sidewalk and reshaping the normal use of the block."
  },
  {
    id: "#0511",
    title: "EXHIBITION IN MOTION",
    category: "OBJECT",
    image: "assets/11.JPG",
    price: 21,
    location: "New York City",
    type: "Installation / Exhibition",
    date: "2026.10.10",
    context: "Public Encounter",
    views: 257,
    description: "An artwork documented together with the people moving around it, preserving the work as an experienced event."
  },
  {
    id: "#0512",
    title: "TIMES SQUARE / AFTERNOON",
    category: "SCENE",
    image: "assets/12.JPG",
    price: 23,
    location: "Times Square",
    type: "Street Scene / Screens",
    date: "2026.10.10",
    context: "Crowd / Light / Traffic",
    views: 391,
    description: "A specific version of Times Square shaped by afternoon light, screens, crowds, and traffic at one moment."
  }
];

let bounties = [
  {
    id: "#B031",
    title: "TIMES SQUARE FAN CHECK-IN",
    reward: 18,
    where: "Times Square, NYC",
    when: "Completed",
    what: "Go to Times Square during the scheduled billboard display. Hold the requester’s fan ID or photo in front of the screen and take one clear photo.",
    proof: "Fan ID and billboard must both be visible in one clear photo.",
    owner: "@lin24",
    proofImage: "assets/proof_times_square.png",
    pendingProofImage: "",
    status: "FULFILLED",
    missionStage: 5
  },
  {
    id: "#B032",
    title: "MUSEUM T. REX ANGLE",
    reward: 15,
    where: "Natural History Museum, NYC",
    when: "Completed",
    what: "Visit the T. rex display and document it from the requested low-angle position.",
    proof: "One clear photo from the requested viewpoint.",
    owner: "@noah",
    proofImage: "assets/proof_trex.jpg",
    pendingProofImage: "",
    status: "FULFILLED",
    missionStage: 5
  },
  {
    id: "#B033",
    title: "RAINY STREET VERIFICATION",
    reward: 12,
    where: "New York State",
    when: "Completed",
    what: "Document the main street during rain to verify the requested weather condition and street atmosphere.",
    proof: "One street-wide image showing wet pavement and the surrounding block.",
    owner: "@emily",
    proofImage: "assets/proof_rain.jpg",
    pendingProofImage: "",
    status: "FULFILLED",
    missionStage: 5
  },
  {
    id: "#B034",
    title: "FIND THE TEMPORARY POSTER",
    reward: 14,
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
    reward: 20,
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
    reward: 16,
    where: "East River, NYC",
    when: "Today / Before Sunset",
    what: "Return to the requested river location and document what the same view looks like at sunset today.",
    proof: "One wide photo showing the river edge, skyline, and current light conditions.",
    owner: "@daniel",
    proofImage: "",
    pendingProofImage: "",
    status: "IN PROGRESS",
    missionStage: 1
  }
];

const watched = new Set();
const cart = new Set();
const sold = new Set();

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

function showPage(name) {
  closeCart();

  Object.values(pages).forEach(page => page.classList.add("hidden"));
  pages[name].classList.remove("hidden");

  window.scrollTo(0, 0);

  if (name === "market") renderCarousel();
  if (name === "bounties") renderBounties();
  if (name === "discussion") renderDiscussion();
}

$$("[data-route]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.route);
  });
});

/* =====================================================
   MARKET CAROUSEL
===================================================== */

const stage = $("#stage");
const ring = $("#ring");
const total = marketItems.length;
const step = 360 / total;

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

  $("#productLocation").textContent = item.location;
  $("#productType").textContent = item.type;
  $("#productDate").textContent = item.date;
  $("#productContext").textContent = item.context;
  $("#productViews").textContent = item.views;

  $("#productStatus").textContent = isSold ? "SOLD" : "AVAILABLE";
  $("#productStatus").style.color = isSold ? "var(--rose)" : "var(--lemon)";

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
      ? "YOUR FIELD RECORD HAS BEEN ADDED TO YOUR ARCHIVE."
      : `${purchased.length} FIELD RECORDS HAVE BEEN ADDED TO YOUR ARCHIVE.`;

  $("#completePage").classList.add("show");
});

$("#returnToMarket").addEventListener("click", () => {
  $("#completePage").classList.remove("show");
  showPage("market");
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
      : bounty.status === "OPEN"
        ? "var(--lemon)"
        : "var(--white)";

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
    bounty.proofImage = pendingProofDataUrl;
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
