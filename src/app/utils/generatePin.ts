export function generatePin(): string {
    const pin = Math.floor(1000 + Math.random() * 9000);
    return pin.toString();
}
