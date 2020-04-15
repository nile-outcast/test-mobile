const phoneMask = (value: string): string => {
  let mask = "+7 (___) ___ __ __";
  let i = 0;
  let def = mask.replace(/\D/g, "");
  let val = value.replace(/\D/g, "");

  if (def.length >= val.length) val = def;

  let maskedPhone: string = mask.replace(/./g, function (match) {
    if (/[_\d]/.test(match) && i < val.length) {
      return val[i++];
    } else if (i < val.length) {
      return match;
    }
    return "";
  });

  return maskedPhone;
};

export default phoneMask;
