export const formatearDinero = cantidad => {
  return cantidad.tolocaleString("en-US", {
    style: "currency",
    currency: 'USD'
  });
};