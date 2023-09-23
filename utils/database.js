import * as SQLite from "expo-sqlite";

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
