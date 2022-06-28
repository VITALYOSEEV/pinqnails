let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.058920, 82.914456],
    zoom: 18,
    controls: [],
  });

  let coords = [
      [55.058920, 82.914456],

    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: 'img/MAP1.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);