/* 3. Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
   - `arrayToMap(array)`
   - `arrayToSet(array)`
   - `setToMap(set)`
   - `setToArray(set)`
   - `mapToArray(map)`
   - `mapToSet(map)`

A fenti metódusok értelemszerűen nem másra szolgálnak,
mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba.
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object. */

const objectConverter = {
  arrayToMap(array) {
    const mapFromArray = new Map(array.map((item, index) => [index, item]));
    return mapFromArray;
  },
  arrayToSet(array) {
    const setFromArray = new Set();
    array.map((item) => setFromArray.add(item));
    return setFromArray;
  },
  setToMap(set) {
    const mapFromSet = new Map();
    Array.from(set).forEach((item, index) => mapFromSet.set(index, item));
    return mapFromSet;
  },
  setToArray(set) {
    // const arrayFromSet = [];
    // set.forEach((item, index) => (arrayFromSet[index] = item));
    return Array.from(set);
  },
  mapToArray(map) {
    const arrayFromMap = [];
    map.forEach((item, index) => (arrayFromMap[index] = item));
    return arrayFromMap;
  },
  mapToSet(map) {
    const setFromMap = new Set();
    map.forEach((item) => setFromMap.add(item));
    return setFromMap;
  },
};

export default objectConverter;
