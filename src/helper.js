export function formatPrice(cents) {
  return (
    (cents / 100)
      .toFixed(2) //allows two decimals
      .replace(".", ",") //replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + " €"
  );
}
