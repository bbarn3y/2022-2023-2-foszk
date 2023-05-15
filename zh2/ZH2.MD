# Webprogramozás 2022-2023-2 ZH 2

Az eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre.

## A feladat

Az oldalon találhatsz egy űrlapot könyvek felvételére, összesen három mezővel:
- **title**: A könyv címe.
- **author**: A könyv szerzője.
- **release**: A könyv megjelenésének éve.

A feladat célja, hogy az űrlapot validáld és segítségével fel tudj venni könyveket egy fájlban tárolt adatbázisba.

1.1 **Az űrlap beküldése után validáld a beküldött adatokat. Az űrlap minden mezőjét legyen kötelező megadni.** (2 pont)
Az 1.2, 1.3 és 1.4 feladatokban található validációkhoz kapcsolódó hiba esetén a megfelelő input mező alatt jelenjen meg
egy releváns hibaüzenet.
Fontos: Hiba csak akkor jelenjen meg ha történt POST esemény, az oldal első megnyitása esetén ne!

1.2 **Validáció: A könyv címe legalább 5 karakterből álljon.** (1 pont)
Hiba esetén a könyv címéhez tartozó input mező alatt jelenjen meg egy releváns hibaüzenet.

Segítség: strlen parancs (https://www.php.net/manual/en/function.strlen.php)

1.3 **Validáció: A könyv szerzője mező legalább két szóból álljon.** (1 pont)
Hiba esetén a könyv szerzőjéhez tartozó input mező alatt jelenjen meg egy releváns hibaüzenet.

Segítség: explode parancs (https://www.php.net/manual/en/function.explode.php)

1.4 **Validáció: A könyv megjelenése mező 1900 és 2023 között legyen.** (1 pont)
Hiba esetén a könyv megjelenési évéhez tartozó input mező alatt jelenjen meg egy releváns hibaüzenet.

1.5 **Amennyiben a validáció során egy hiba sem merült fel,
a beküldött könyv adatait mentsd le egy `m_books.csv` nevű fájlba CSV formátumban, a következő módon:** (2 pont)
- **Ha a fájl még nem létezik, hozd létre.**
- **Ha a fájl már létezik, az új könyv adatai a fájl végére (utolsó sorába) kerüljenek.**
- **A fájl első sorába szúrd be a mezőneveket tartalmazó fejlécet.**

Segítség: Használd az `fopen` parancs hozzáfűzési (append, azaz `a`) módját.

Segítség: Az `fopen` parancs előtt a `file_exists` paranccsal meg tudod nézni, hogy eredetileg létezett-e a fájl vagy sem.

1.6 **Az oldal betöltésekor olvasd ki az `m_books.csv` fájl tartalmát és jelenítsd meg táblázatos (`<table>`)
formátumban a könyvek minden mezőjét.** (2 pont)
Kiolvasáshoz használd az előre definiált `readBooksFromCSV` függvényt, ami csak a fájl nevét várja paraméterként.
Fontos: ez csak akkor történjen meg, ha a fájl létezik! Ne dobjon hibát ellenkező esetben.

1.7 **A táblázat alatt listás `<ul> <li>` formátumban írasd ki csak azoknak a könyveknek a címet, amelyek 2000-ben
vagy az után jelentek meg.** (2 pont)

+1 **Számítsd ki az `m_books.csv` fájlban található könyvek megjelenési dátumának mediánját.
A mediánszámító függvény működjön páros és páratlan számú elem esetére is!** (2 pont)

_Segítség_: Páratlan elemszámú tömb esetén a medián a középső elem.
Páros elemszám esetén pedig a két középső elem átlaga.

Tömb átalakítására az `array_map` függvény használható: https://www.php.net/manual/en/function.array-map.php

Tömb rendezése: https://www.php.net/manual/en/function.sort.php

---

Összesen elérhető pontszám: **10 + 3**
