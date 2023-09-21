export class Place {
  constructor(title, imageUrl, loaction) {
    this.id = new Date().toString() + Math.random().toString();
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = loaction.address;
    this.loaction = { lat: loaction.lat, lng: loaction.lng };
  }
}
