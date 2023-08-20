const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const discountElement = document.getElementById("discount");
const orderTotalElement = document.getElementById("order-total");
const applyCouponBtn = document.getElementById("applyCouponBtn");
const makePurchaseBtn = document.getElementById("make-purchase");

let cartTotal = parseFloat(cartTotalElement.innerText);
let discount = parseFloat(discountElement.innerText);
let orderTotal = parseFloat(orderTotalElement.innerText);

function updateCart(element) {
  const getProductName = element.querySelector("h2").innerText;
  const productNameLi = document.createElement("li");

  productNameLi.innerText = getProductName;
  productNameLi.classList.add("py-2");
  cartItemsElement.appendChild(productNameLi);

  cartTotal += parseFloat(element.querySelector(".price").innerText);
  orderTotal += parseFloat(element.querySelector(".price").innerText);

  if (orderTotal > 0) {
    enableBtn(makePurchaseBtn);
  }

  if (orderTotal > 200) {
    enableBtn(applyCouponBtn);
  }
  cartTotalElement.innerText = cartTotal.toFixed(2);
  applyCoupon();
}

function applyCoupon() {
  let couponCode = document.getElementById("coupon").value;
  if (couponCode === "SELL200") {
    discount = (20 * cartTotal) / 100;
    orderTotal = cartTotal - discount;
  }
  discountElement.innerText = discount.toFixed(2);
  orderTotalElement.innerText = orderTotal.toFixed(2);
}

function resetCart() {
  cartItemsElement.innerText = "";
  cartTotalElement.innerText = "00.00";
  orderTotalElement.innerText = "00.00";
  discountElement.innerText = "00.00";
  document.getElementById("coupon").value = "";
  cartTotal = 0;
  orderTotal = 0;
  discount = 0;

  disableBtn(applyCouponBtn);
  disableBtn(makePurchaseBtn);
}

function enableBtn(element) {
  element.disabled = false;
  element.classList.remove("bg-[#ea86cf]");
  element.classList.add("bg-[#E527B2]");
}

function disableBtn(element) {
  element.disabled = true;
  element.classList.remove("bg-[#E527B2]");
  element.classList.add("bg-[#ea86cf]");
}
