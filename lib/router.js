export function bestFill(book, amount) {
  let remaining = Number(amount);
  let filled = 0;
  let spent = 0;

  for (const o of book) {
    if (remaining <= 0) break;
    const qty = Math.min(remaining, Number(o.quantity));
    remaining -= qty;
    filled += qty;
    spent += qty * Number(o.price);
  }

  return {
    filled,
    avgPrice: spent / filled
  };
}
