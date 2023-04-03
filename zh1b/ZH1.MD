# Webprogramozás 2022-2023-1 ZH 1

Eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre zip-elve.

## 1. feladat

Adott egy tömb 2022-es játékokkal és azok adataival.

Az egyes játékokról a következő adatokat tároljuk:
- name: A játék címe.
- genre: A játék műfaja.
- score: A játék értékelése.

Az alábbi alfeladatok eredményét írasd ki a console-re.

1.1 **Készíts egy tömböt, amelyben csak az 'Action' kategóriába tartozó játékot szerepelnek.** (1 pont)

1.2 **Keresd meg azt a játékot, melynek a műfaja 'RPG' viszont kevesebb mint 50 pontot ért el.** (1 pont)

1.3 **Készíts egy tömböt, mely csak a 90 vagy annál nagyobb pontszámot elért játékok nevét (és csak a nevét!)
tartalmazza.** (1 pont)

1.4 **Rendezd az eredeti listát név szerint növekvő sorrendbe (tehát ABC rendbe).** (1 pont)

    Segítség: 

    JavaScriptben sztringek összehasonlítására a localCompare függvény használható.
    Ez a függvény a böngésző nyelve alapján hasonlítja össze a sztringeket, tehát magyar nyelv esetén helyesen kezeli
    az ékezetes karaktereket is.

    Példák a használatára:

    - "alma".localeCompare("körte") eredménye: -1
    - "szilva".localeCompare("füge") eredménye: 1
    - "áfonya".localeCompare("áfonya") eredménye: 0

1.5 **Számold ki az átlagos értékelést.** (1 pont)

    Segítség:

    Átlagszámítás emlékeztető:
    Egy számokat tartalmazó tömb átlagát úgy tudod kiszámolni, ha összeadod az összes számot, majd elosztod a tömb
    méretével (másképp megfogalmazva HOSSZával).

    Példa:
    [1, 1, 2, 4, 5]
    átlaga:
    (1 + 1 + 2 + 4 + 5) / 5 = 2.6


## 2. feladat

A felületen egy jelenleg nem működő villanykapcsolót találsz.

A feladat lényege, hogy megjavítsd a kapcsolót és segítsd a felhasználót a használatában.

1.1 **Amennyiben a felhasználó a burkolatra kattint kapjon egy felugró üzenetet:** (1 pont)

"Hoppá, majdnem eltaláltad a kapcsolót, de pont nem!"

1.2 **A kapcsolóra kattintva NE ugorjon fel a fenti üzenet.** (1 pont)

1.3 **A kapcsoló megnyomásával legyen világos.** (2 pont)

Ehhez 2 dolog szükséges:
- A CSS fájlban definiált "on" stílusosztály kerüljön rá a burkolatnak megfelelelő DOM elemre, ezzel a kapcsoló
állapotot vált.
- Az oldal háttere váltson feketéről sárgára.

A kapcsoló legyen kétállapotú, tehát felkapcsolás után le is lehessen kapcsolni.

1.4 **Linkek deaktiválása** (1 pont)

A villanykapcsoló négy szélén találsz négy linket.

A linkekre kattintva wikipedia oldalak nyílnak meg.

A linkek ne legyenek kattinthatóak, azzaz klikk esetén ne nyíljon meg a href-ben megadott oldal, egyik link esetén sem.

