# Webprogramozás 2022-2023-2 ZH 1

Az eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre.

## 1. feladat

Adott egy tömb (students) a diákok ZH eredményével.

A diákokról a következő adatokat tároljuk:
- name: A diák neve.
- score: A diák által elért pontszám (10-ből).
- start: Az év amikor a diák a képzést kezdte.
- favouriteTask: A diák kedvenc feladata. Lehetséges értékek: 1 vagy 2

Az alábbi alfeladatok eredményét írasd ki a console-re.

1.1 **Rendezd név alapján ABC rendbe a listát.** (1 pont)

1.2 **Keresd meg azokat a diákokat, akik 2022-ben kezdték a képzést és maximális pontszámot (10 pont) értek el.** (1 pont)

1.3 **Számítsd ki az átlagosan elért pontszámot.** (1 pont)

    Segítség:

    Átlagszámítás emlékeztető:
    Egy számokat tartalmazó tömb átlagát úgy tudod kiszámolni, ha összeadod az összes számot, majd elosztod a tömb
    méretével (másképp megfogalmazva HOSSZával).

    Példa:
    [1, 1, 2, 4, 5]
    átlaga:
    (1 + 1 + 2 + 4 + 5) / 5 = 2.6

1.4 **Gyűjtsd össze azoknak a diákoknak a nevét (és csak a nevét!) akik kedvenc feladata az 1.?
      (Azon diákoknak a neve, ahol a favouriteTask értéke 1.)** (1 pont)

1.5 **Döntsd el, hogy van-e olyan diák, aki 2017 előtt kezdte a képzést.** (1 pont)


## 2. feladat

A felületen találsz egy szöveges input mezőt valamint egy "Háttérszín beállítása" gombot.

A feladat lényege, hogy a gomb lenyomásakor az oldal háttere változzon a beírt színre.

2.1 **Az "Háttérszín beállítása" beállítása gombra kattintva olvasd ki a szöveges input mező tartalmát
    és állítsd be erre az oldal háttérszínét.** (1 pont)

2.2 **Amennyiben a 2.1 feladat során, kiolvasáskor az input mező tartalma üres, a piros ("red")
      háttérszínt állítsd be.** (1 pont)

2.3 **Egy változóban vezesd, hogy a felhasználó hányszor váltott háttérszínt és az aktuális értéket jelenítsd is meg a
    "Színváltoztatások száma" szöveg mellett található "counter" azonosítójú <span> elemben.** (1 pont)

2.4 **Az oldal jobb alsó sarkában találsz egy "További színek keresése" linket.**
    Alapesetben ez egy új tabon megnyit egy linket.
    Amikor a felhasználó már a 3. színváltást hajtja végre, a link legyen deaktiválva a következő módon:
    
- Kerüljön rá a "disabled" osztály, amely szürkére fogja változtatni a link színét. (1 pont)

        Segítség:

        Az osztály hozzáadásához használd az elem "classList" attribútumát:
        https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

- Kattintáskor ne nyíljon meg a link. (1 pont)

        Segítség:

        Ahhoz, hogy a link ne nyíljon meg **akadályozd meg** az **alap** működését.
