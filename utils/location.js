const GOOGLE_API_KEY = "";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://www.google.com/maps/@?api=1&map_action=map&center=${lat},${lng}&zoom=12&basemap=roadmap&markers=color:red&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
