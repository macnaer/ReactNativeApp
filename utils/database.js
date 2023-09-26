import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const database = SQLite.openDatabase("placeAppl.db");

export function Init() {
  const promise = new Promise((resolve, rejecet) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUrl TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          rejecet(error);
        }
      );
    });
  });
  return promise;
}

export function intertPlace(place) {
  const promise = new Promise((resolve, rejecet) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUrl, address, lat, lng) VALUES(?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUrl,
          place.address,
          place.loaction.lat,
          place.loaction.lng,
        ],
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          rejecet(error);
        }
      );
    });
  });
  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, rejecet) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const places = [];
          for (const item of result.rows._array) {
            places.push(
              new Place(
                item.title,
                item.imageUrl,
                {
                  address: item.address,
                  lat: item.lat,
                  lng: item.lng,
                },
                item.id
              )
            );
          }
          resolve(places);
        },
        (_, error) => {
          rejecet(error);
        }
      );
    });
  });
  return promise;
}

export function fecthPlaceDatails(id) {
  const promise = new Promise((resolve, rejecet) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places WHERE id = ?`,
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          rejecet(error);
        }
      );
    });
  });
  return promise;
}
