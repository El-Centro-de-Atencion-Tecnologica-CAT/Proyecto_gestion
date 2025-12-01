export const orders = [];

export function createOrder(userId) {
  orders.push({ userId, status: "pendiente" });
}
