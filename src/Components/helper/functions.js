export const textSplitter = (value) => {
  const textArray = value.split(" ");
  let result = "";
  if (textArray.length > 10) {
    for (let i = 0; i < 10; i++) {
      if (i === 9) result += `${textArray[i]} ...`;
      else result += `${textArray[i]} `;
    }
    return result;
  } else {
    for (let i = 0; i !== textArray.length; i++) {
      if (i === textArray.length) result += `${textArray[i]}`;
      else result += `${textArray[i]} `;
    }
    return result;
  }
};

export const toInteger = (value) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const n = parseInt(value).toLocaleString();
  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

const setFilters = (items, label, newProducts) => {
  if (label === "brands") {
    if (items.length !== 0) {
      let temp = [];
      items.forEach((item) => {
        if (item === "اپل") {
          const a = newProducts.filter((item) => item.brand === "apple");
          a.map((i) => temp.push(i));
        }
        if (item === "سامسونگ") {
          const a = newProducts.filter((item) => item.brand === "samsung");
          a.map((i) => temp.push(i));
        }
        if (item === "شیائومی") {
          const a = newProducts.filter((item) => item.brand === "xiaomi");
          a.map((i) => temp.push(i));
        }
        if (item === "هواوی") {
          const a = newProducts.filter((item) => item.brand === "huawei");
          a.map((i) => temp.push(i));
        }
      });
      newProducts = temp;
    }
  } else {
    if (items.length !== 0) {
      let temp = [];
      items.forEach((item) => {
        if (item === "قرمز") {
          const a = newProducts.filter((item) => item.colors.includes("bg-red-400"));
          a.forEach((i) => {
            if (!temp.find((item) => item.id === i.id)) {
              temp.push(i);
            }
          });
        }
        if (item === "سفید") {
          const a = newProducts.filter((item) => item.colors.includes("bg-stone-100"));
          a.forEach((i) => {
            if (!temp.find((item) => item.id === i.id)) {
              temp.push(i);
            }
          });
        }
        if (item === "نقره ای") {
          const a = newProducts.filter((item) => item.colors.includes("bg-zinc-200"));
          a.forEach((i) => {
            if (!temp.find((item) => item.id === i.id)) {
              temp.push(i);
            }
          });
        }
        if (item === "سبز") {
          const a = newProducts.filter((item) => item.colors.includes("bg-green-400"));
          a.forEach((i) => {
            if (!temp.find((item) => item.id === i.id)) {
              temp.push(i);
            }
          });
        }
        if (item === "خاکستری") {
          const a = newProducts.filter((item) => item.colors.includes("bg-gray-400"));
          a.forEach((i) => {
            if (!temp.find((item) => item === i)) {
              temp.push(i);
            }
          });
        }
      });
      newProducts = temp;
    }
  }
  return newProducts;
};
export const searchFilter = (state, products) => {
  const { searchInput, category, colors, brands, priceRange } = state;
  let newProducts = products;
  switch (category) {
    case "all":
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);

      break;
    case "mobile":
      newProducts = products.filter((item) => item.model.includes("موبایل"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);

      break;
    case "laptop":
      newProducts = products.filter((item) => item.model.includes("لپ تاپ"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      break;

    case "watch":
      newProducts = products.filter((item) => item.model.includes("ساعت"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      break;

    default:
      break;
  }

  if (searchInput !== "") {
    newProducts = products.filter((item) => item.model.includes(searchInput));
  }
  return newProducts;
};
