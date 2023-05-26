# Webprogramozás 2022-2023-2 ZH 2 Pót A

Az eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre.

## A feladat

Adott két fájl könyvek adataival:
`books.json` és `books.csv`

A fájlok könyvek adatait tartalmazzák, minden könyvről a következőket:
- **title**: A könyv címe.
- **author**: A könyv szerzője.
- **release**: A könyv megjelenésének éve.

1.1 **Az `index.php` fájlban hozz létre egy űrlapot a következő mezővel
és egy submit gombbal:** (1 pont)

- filter (típusa: <select>) a következő opciókkal:
    - '60-as évek
    - '70-es évek
    - '80-as évek
    - '90-es évek
    - 2000-es évek
    - 2010-es évek
    - 2020-as évek

A feladat végső célja, hogy évtizedenként legyenek szűrhetőek a könyvek.

1.2 **A form submit esetén az `index.php` fájl felé indítson HTTP kérést.
A HTTP kérés tartalmazza az űrlap mezőjét.
A HTTP kérés módja (GET/POST) szabadon választható.** (1 pont)

1.3 **Az űrlap legyen állapottartó, azaz submit után maradjon meg a kiválasztott érték.** (1 pont)

1.4 **Készíts egy függvényt, ami könyvek listáját leszűri a megjelenés évtizede alapján.** (2 pont)
Tehát például, ha a `'60-as évek` lett kiválasztva, akkor az egyetlen eredmény a `Dune` lenne, mivel
csak ez jelent meg 1960 és 1969 között.

1.5 **Készítsd egy függvényt, ami beolvassa a `books.csv` és a `books.json` fájlok tartalmát is,
és a két asszociatív tömbből létrehoz egy olyan eredményt, ami tartalmazza mindkét listában
megtalálható könyveket.** (3 pont)
Fontos, hogy vannak könyvek, amelyek mindkét listában szerepelnek. Az eredménylist legyen egyedi,
azaz ne szerepeljenek benne duplán könyvek! (Egyenlőséget elegendő a név mező alapján nézni.)

Amennyiben esetleg a feladat mergelős része nem sikerülne, haladj a többi feladattal egyetlen lista alapján!

1.6 **Írasd ki egy listába (`<ul>`) a leszűrt könyvek nevét.** (1 pont)
A generált listaelemekben a könyv címe legyen egy link, ami a `details.php` fájlra mutat a
könyv nevének átadásával.

1.7 **A listában a könyvek mellé írasd ki azt az információt is, hogy az adott könyv melyik fájlban vagy
fájlokban szerepelt.** (1 pont)

Példa:
`- The Stormlight Archive: Words of Radience (CSV, JSON)`

1.8 **A `details.php` fájlban írasd ki a kiválasztott könyv minden adatát (név, szerző, megjelenés éve).` (2 pont)
Fontos: Működjön akkor is ha a könyv csak a CSV vagy csak a JSON fájlban szerepel!

---

Összesen elérhető pontszám: 10 + 2



