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
  return(n.toString().replace(/\d/g, (x) => farsiDigits[x]));
};
