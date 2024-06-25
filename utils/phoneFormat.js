//an exported return function that takes a 10 digit number and returns it in the format (123) 456-7890
export default function phoneFormat(phoneNumber) {
  if (!phoneNumber) return "";
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}
