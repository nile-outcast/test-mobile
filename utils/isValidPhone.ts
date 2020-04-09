const isValidPhone = (phone: string): boolean => {
  const phoneNum: any = phone.match(/\d/g) || [];
  return phoneNum.length == 11 && isFinite(phoneNum.join(""));
};

export default isValidPhone;
