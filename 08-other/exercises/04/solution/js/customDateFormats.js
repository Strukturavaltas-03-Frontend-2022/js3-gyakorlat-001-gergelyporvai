/* 4. Írj egy függvényt `customDateFormats` néven, ami paraméterként egy Date objektumot kap,
a visszatérési értéke pedig egy objektum két tulajdonsággal,
ami a következő formátumban tartalmazza a paraméterként kapott dátumot:
- `short`: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul,
    kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
- `long`: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul,
    a nap száma, majd az idő) */

const customDateFormats = (Date = new Date()) => {
  const shortMonth = [
    "jan.",
    "febr.",
    "márc.",
    "ápr.",
    "máj.",
    "jún.",
    "júl.",
    "aug.",
    "szept.",
    "okt.",
    "nov.",
    "dec.",
  ];
  const longMonth = [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december",
  ];

  const shortDate =
    `${Date.getFullYear()}. ${
      shortMonth[Date.getMonth()]
    } ${Date.getDate()}. ` +
    `${Date.getHours() < 10 ? `0${Date.getHours()}` : Date.getHours()}:` +
    `${Date.getMinutes() < 10 ? `0${Date.getMinutes()}` : Date.getMinutes()}`;
  const longDate =
    `${Date.getFullYear()}. ${longMonth[Date.getMonth()]} ${Date.getDate()}. ` +
    `${Date.toLocaleTimeString("hu")}`;

  return {
    short: shortDate,
    long: longDate,
  };
};

export default customDateFormats;
