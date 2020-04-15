const isValidPhone = (phone: string): boolean => {
  const phoneNum: RegExpMatchArray = phone.match(/\d/g) || [];
  const phoneStr: string = phoneNum.join("");
  const isValid: boolean = phoneNum.length == 11 && Number(phoneStr) !== NaN;
  return isValid;
};

export default isValidPhone;
