export const formatMoney = function (t, e = "₹ {{amount}}") {
  function o(t, e) {
    return void 0 === t ? e : t
  }
  function i(t, e, i, r) {
    e = o(e, 2);
    i = o(i, ",");
    r = o(r, ".");
    if (isNaN(t) || null == t)
      return 0;
    t = (t / 100).toFixed(e);
    var n = t.split(".");
    return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (n[1] ? r + n[1] : "")
  }
  "string" == typeof t && (t = t.replace(".", ""));
  var r = ""
    , n = /\{\{\s*(\w+)\s*\}\}/
    , a = e || this.money_format;
  switch (a.match(n)[1]) {
    case "amount":
      // r = i(t, 2);
      r = i(t, 0);
      break;
    case "amount_no_decimals":
      r = i(t, 0);
      break;
    case "amount_with_comma_separator":
      r = i(t, 2, ".", ",");
      break;
    case "amount_with_space_separator":
      r = i(t, 2, " ", ",");
      break;
    case "amount_with_period_and_space_separator":
      r = i(t, 2, " ", ".");
      break;
    case "amount_no_decimals_with_comma_separator":
      r = i(t, 0, ".", ",");
      break;
    case "amount_no_decimals_with_space_separator":
      r = i(t, 0, " ");
      break;
    case "amount_with_apostrophe_separator":
      r = i(t, 2, "'", ".")
      break
    default:
      r = i(t, 2);
  }
  return a.replace(n, r)
}


export const getCartData = async () => {
  let url = "/cart.json";
  let result = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  let res = await result.json();
  console.log('first', res);
  if (res) {
    return res
  }
};

export const updateItem = async (formData, cb = undefined) => {
  let url = "/cart/update.js";
  let result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  let res = await result.json();
  if (res) {
    if (cb) {
      cb()
    }
    return res
  }
};
