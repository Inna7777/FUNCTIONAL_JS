"use strict";
const musicCollection = {
  albums: [
    { title: "альбом 1", artist: "11", year: "2015" },
    { title: "альбом 2", artist: "22", year: "2016" },
    { title: "альбома 3", artist: "33", year: "2018" },
  ],
  [Symbol.iterator]: function () {
    let current = 0;
    let limit = this.albums.length;
    return {
      next: function () {
        if (current < limit) {
          return { done: false, value: musicCollection.albums[current++] };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let value of musicCollection) {
  console.log(
    `Название альбома - ${value.title}, Исполнитель -${value.artist}, (Год выпуска ${value.year})`
  );
}
