export const validateFields = (cin, pin, email) => {
  const isCINValid = /^\w{21}$/.test(cin);
  const isPINValid = /^\d{6}$/.test(pin);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  return isCINValid && isPINValid && isEmailValid;
};
