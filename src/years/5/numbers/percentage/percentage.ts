export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
export function representations(value: number) {
  if (value === 0) return { fraction: "0", decimal: "0,00" };
  const divisor = gcd(value, 100);
  return {
    fraction: value === 100 ? "1" : `${value / divisor}/${100 / divisor}`,
    decimal: (value / 100).toFixed(2).replace(".", ","),
  };
}
export function money(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
