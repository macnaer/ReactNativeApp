const GOOGLE_API_KEY = "AIzaSyDdU9WYpzlUs5a_1ELnaMarjMxZjD8ngKw";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&maptype=roadmap&markers=color:red&7Clabel${lat},${lng}&key${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
