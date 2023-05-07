# Személyek felvétele (2 pont)

A feladat:
- Készíts egy űrlapot, melyen megadhatók egy személy korábban használt adatai (név, kor, nem).
- Az űrlap mutasson ugyanarra a PHP fájlra, amely az űrlapot is tartalmazza.
A beküldés módja (GET vagy POST) szabadon választható.
- Űrlap beküldése esetén a személy adatait mentsd le egy TSV (Tab Seperated Values) fájlba (`persons.tsv`).
A TSV formátum megegyezik a CSV formátummal, azzal a különbséggel, hogy az adatok TAB (`\t`) karakterrel
vannak elválasztva vessző (`,`) helyett.
- Amennyiben a `persons.tsv` fájl még nem létezik, létre kell hozni.
Ez esetben a fájl tartalma egyetlen sor legyen, a beküldött személy adataival.
Fejlécet nem szükséges adni a TSV fájlnak.
- Amennyiben a `persons.tsv` fájl már létezik, a fájlt módosítani kell.
Az új személy a fájl első sorában jelenjen meg.
- Amennyiben a `persons.tsv` fájl már létezik, az oldalon táblázatos (`<table>`) formátumban jelenjenek
meg a fájlban található személyek.
(A táblázatnak tehát annyi sora lesz amennyi a TSV fájlnak és három oszlopa: név, kor, nem.)

Segítség:
- A `file_exists` paranccsal egyszerűen ellenőrizhető, hogy egy fájl létezik-e:
https://www.php.net/manual/en/function.file-exists.php
