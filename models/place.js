export class Place {
  constructor(title, imageUrl, loaction, id) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = loaction.address;
    this.loaction = { lat: loaction.lat, lng: loaction.lng };
  }
}
