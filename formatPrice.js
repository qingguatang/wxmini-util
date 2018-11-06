export default function formatPrice(price, fixed) {
  price = price || 0;
  return price % 1 || fixed ? price.toFixed(2) : '' + price;
};
