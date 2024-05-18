export default function generateRandomID() {
  return 'id-' + Math.random().toString(36).slice(2, 16);
}
