const products = [
  {
    name: "Wireless Headphones",
    headline: "Crystal Clear Audio",
    price: "$49.99",
    image:
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smartwatch",
    headline: "Stay Connected at a Glance",
    price: "$199.99",
    image:
      "https://images.unsplash.com/photo-1595590677969-becff900f5f0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gaming Laptop",
    headline: "Level Up Your Performance",
    price: "$1299.99",
    image:
      "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Portable Projector",
    headline: "Big Screen, Anywhere",
    price: "$249.99",
    image:
      "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Instant Camera",
    headline: "Capture Memories Instantly",
    price: "$79.99",
    image:
      "https://images.unsplash.com/photo-1526170286768-b3c80b34b036?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const popProducts = [
  {
    name: "Mechanical Keyboard",
    headline: "The Tactile Typing Experience",
    price: "$149.99",
    image:
      "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Noise-Cancelling Headphones",
    headline: "Focus on What Matters",
    price: "$299.99",
    image:
      "https://images.unsplash.com/photo-1612478120623-0acf9e231d27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fitness Tracker",
    headline: "Track Your Every Move",
    price: "$99.99",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var cartProducts = [];

function addProducts() {
  var clutter = "";
  products.forEach((product, ind) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img src=${product.image} class="h-full object-cover"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-ind=${ind} class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-ind=${ind} class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

function addPopProducts() {
  var clutter = "";
  popProducts.forEach((product) => {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src=${product.image}
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (dets) {
      if (dets.target.classList.contains("add")) {
        cartProducts.push(products[dets.target.dataset.ind]);
      }
    });
}

function showCarts() {
  document.querySelector(".carticon").addEventListener("click", function () {
    var cartexpnd = document.querySelector(".cartexpnd");
    var clutter = "";
    if (cartProducts.length == 0) {
      if (cartexpnd.classList.contains("hidden")) {
        cartexpnd.classList.remove("hidden")
        cartexpnd.innerHTML = "add items to see them here";
      }
      else {
        cartexpnd.classList.add("hidden");
      }
    }
    else if (cartexpnd.classList.contains("hidden")) {
      cartProducts.forEach(function (product, ind) {
        clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
        <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500 overflow-hidden">
        <img class="w-screen h-full object-cover" src="${product.image}">
        </div>

         <div>
              <h3 class="text-semibold">${product.name}</h3>
        <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
          </div>
    </div>`;
      });
      cartexpnd.innerHTML = clutter;
      cartexpnd.classList.remove("hidden");
    }
    else {
      cartexpnd.classList.add("hidden");
    }
  });
}

addProducts();
addPopProducts();
addToCart();
showCarts();
