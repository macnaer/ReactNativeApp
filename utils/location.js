const GOOGLE_API_KEY = "AIzaSyDFPzxZxMK3UNQxnfMRotWVMsvmx2lxNwg";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://www.google.com/maps/@?api=1&map_action=map&center=${lat},${lng}&zoom=12&basemap=roadmap&markers=color:red&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch.");
  }

  const data = await response.json();

  const address = data.results[0].formated_address;
  console.log("address ", address);
  return address;
}
