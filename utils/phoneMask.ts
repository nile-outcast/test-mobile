const phoneMask = (value: string): string => {
  let matrix = "+7 (___) ___ __ __",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  return (value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length
      ? val[i++]
      : i >= val.length
        ? ""
        : a;
  }));
};

export default phoneMask;
