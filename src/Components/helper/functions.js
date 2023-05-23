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
      items.forEach((feature) => {
        const a = newProducts.filter((item) => item.brand === feature);
        a.map((i) => temp.push(i));
      });
      newProducts = temp;
    }
  } else if (label === "colors") {
    if (items.length !== 0) {
      let temp = [];
      items.forEach((feature) => {
        const a = newProducts.filter((item) => item.colors.includes(feature));
        a.forEach((i) => {
          if (!temp.find((item) => item.id === i.id)) {
            temp.push(i);
          }
        });
      });
      newProducts = temp;
    }
  } else {
    if (!items.min) return newProducts;
    else newProducts = newProducts.filter((product) => product.price >= items.min && product.price <= items.max);
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
      newProducts = setFilters(priceRange, "price", newProducts);
      break;
    case "mobile":
      newProducts = products.filter((item) => item.model.includes("موبایل"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      newProducts = setFilters(priceRange, "price", newProducts);

      break;
    case "laptop":
      newProducts = products.filter((item) => item.model.includes("لپ تاپ"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      newProducts = setFilters(priceRange, "price", newProducts);
      break;

    case "watch":
      newProducts = products.filter((item) => item.model.includes("ساعت"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      newProducts = setFilters(priceRange, "price", newProducts);
      break;

    default:
      break;
  }

  if (searchInput !== "") {
    newProducts = products.filter((item) => item.model.includes(searchInput));
  }
  return newProducts;
};

export const colorExtraction = (item) => {
  console.log("Hello");
  const result = item.split("bg-");
  console.log(result[1]);
  return result[1];
};

export const enTofn = (price) => {
  return new Number(price).toLocaleString("fa-ir");
};

export const ifExist = (list, product) => {
  if (!list.findIndex((i) => i.id === product.id)) return true;
  else return false;
};


