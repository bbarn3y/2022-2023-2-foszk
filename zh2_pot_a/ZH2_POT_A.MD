# Webprogramozás 2022-2023-2 ZH 2 Pót A

Az eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre.

## A feladat

Adott két fájl könyvek adataival:
`books.json` és `books.csv`

A fájlok könyvek adatait tartalmazzák, minden könyvről a következőket:
- **title**: A könyv címe.
- **author**: A könyv szerzője.
- **release**: A könyv megjelenésének éve.

1.1 **Az `index.php` fájlban hozz létre egy űrlapot a következő két mezővel
és egy submit gombbal:** (1 pont)

- filter (típusa: text)
- file (típusa: select két lehetőséggel: CSV és JSON)

1.2 **A form submit esetén az `index.php` fájl felé indítson HTTP kérést.
A HTTP kérés tartalmazza az űrlap két mezőjét.
A HTTP kérés (GET/POST) szabadon választható.** (1 pont)

1.3 **Az űrlap legyen állapottartó, azaz submit után maradjon meg mindkét mező értéke.** (1 pont)

1.4 **Az `index.php` fájlban validáld is a beérkező értékeket, amennyiben történt kérés.** (2 pont)
Egy validáció szükséges: a filter mező megadása kötelező és a megadott érték legalább 2 karakterből áll.
A hibát jelenítsd is meg a `filter` mezőhöz tartozó input alatt.
Fontos: Hiba csak akkor jelenjen meg ha történt POST esemény, az oldal első megnyitása esetén ne!

1.5 **Készíts egy függvényt, ami könyvek listáját leszűri a filter alapján.** (2 pont)
A szűrés tartalmazásra épüljön és hagyja figyelmen kívül a kis-nagybetűbeli különbségeket.
Tehát például, ha a filter mezőbe beírt érték `lam`, akkor a `The Lies of Locke Lamora` című könyv
kerülj be az eredmények közé.

1.6 **Az űrlap selector mezője határozza meg, hogy melyik fájlból olvasod ki a leszűrendő könyvek listáját.** (3 pont)
Ha a kiválaszott érték `CSV` akkor a `books.csv` fájlt használd, ha `JSON` akkor a `books.json` fájlt.

1.7 **Írasd ki egy listába (`<ul>`) a leszűrt könyvek nevét.** (1 pont)

1.8 **A lista alá írasd ki, hogy a szűrő mennyiből mennyi találatot mutat.** (1 pont)
Például a `books.csv` fájl 13 könyvet tartalmaz, ha a szűrés után ebből csak 1 marad, akkor az `(1/13)`
szöveget írasd ki.

---

Összesen elérhető pontszám: 10 + 2



