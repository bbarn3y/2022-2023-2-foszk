# Webprogramozás 2022-2023-2 HF2 (1 pont)

## 1. feladat

Adott egy tömb 2022-es játékokkal és azok adataival.

Az egyes játékokról a következő adatokat tároljuk:
- name: A játék címe.
- genre: A játékok műfajai.
- score: A játék értékelése.

Az alábbi alfeladatok eredményét írasd ki a console-re.

1.1 **Készíts egy tömböt, amelyben csak az 50 pontnál kevesebbet és a 85 pontnál többet
elért játékok szerepelnek.**

1.2 **Írd ki azon játékoknak a nevét (és csak a nevét!), melyek legalább 3 szóból vagy számból
állnak.**

    Példa:
    'Dark Souls 3'
    3 szóból áll: ['Dark', 'Souls', '3']

1.3 **Készíts egy tömböt, melyben a játékok műfajai szerepelnek.**

    A tömbnek nem kell egyedinek lennie, a tömbbe kerüljön be minden műfaj.
    A 'games' tömb első három elemére ez lenne az eredmény:
    ['Action', 'RPG', 'FPS', 'RPG']

1.4 **Rendezd az eredeti listát a műfajok száma szerint növekvő sorrendbe.**

    Tehát az a játék legyen az első helyen, melyhez a legtöbb műfaj tartozik, legutolsó helyen
    pedig amihez a legkevesebb.

    Az ugyanannyi műfajjal rendelkezők közötti sorrenddel nem kell foglalkozni.

1.5 **Keresd meg a maximális pontszámot.**

## 2. feladat

A felületen két gombot találsz, egy feketét és egy fehéret.

1.1 **Gombnyomásra a "container" id-val rendelkező elembe szúrj be két fekete vagy két fehér
négyzetet, attól függően, hogy melyik gomb lett megnyomva.**

Ehhez használhatod a CSS-ben előre definiált "rectangle", "black" és "white" osztályokat.

1.2 **A beszúrt négyzet ne írja felül a konténer tartalmát, hanem mindig új elemként
a lista elejére kerüljön.**

1.3 **Bármelyik négyzetre kattintva kapjon egy üzenetet (alert) a felhasználó, hogy az milyen színű
(fekete vagy fehér).**

1.4 **Az oldalon kattintva kiírjuk konzolra a klikk pozícióját.
Ez ne történjen meg amennyiben a fekete négyzetekre kattint,
minden más esetben viszont megjelenhet továbbra is.**

