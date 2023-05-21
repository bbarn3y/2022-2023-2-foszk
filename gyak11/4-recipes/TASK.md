## 4. feladat: Receptkövető (4-recipes, 8 pont)

Természetesen az ünnepi hangulatban a sütés-főzés sem maradhat el. Ebben a feladatban egy olyan alkalmazást kell készítened, amely **munkamenetben** számontartja, hogy egy adott étel elkészítéséhez mi található meg a hűtőben. Ehhez a kiindulási csomagban adott a `recipes.json` állomány, amely tartalmazza, hogy néhány közismert ünnepi fogás elkészítéséhez mely hozzávalók szükségesek. (Kódolás előtt érdemes lehet tanulmányozni és megérteni a tárolt adatok szerkezetét.)

- a. (1 pont) Jelenítsd meg az ismert receptek nevét úgy, hogy linkként egy-egy részletező oldalra vezessenek!
- b. (1 pont) Szintén jelenítsd meg a hűtő tartalmát is, amelyet **munkamenetben** tárolunk a feladat során! Amennyiben az oldal betöltésekor nincs még megkezdett munkamenet, inicializáld a hűtőt üresre!
- c. (1 pont) A részletező oldalon jelölőmezők listájaként sorold fel az összes összetevőt, ami a választott recept elkészítéséhez szükséges. A jelölőmező legyen bejelölt és tiltott (`disabled`) abban az esetben, ha a hűtőben már megtalálható az adott hozzávaló.
- d. (2 pont) A részletező oldalon található jelölőmezők listáját lehessen űrlapként elküldeni is! Ilyenkor helyezzük be a hűtőbe azokat a hozzávalókat, amelyeket a felhasználó most jelölt be. (Vigyázat! Attól, hogy egy mező be van pipálva, még nem kell automatikusan a hűtőbe rakni, hiszen lehet eleve bejelölt állapotban került az oldalra a mező.)
- e. (1 pont) A kezdőoldalon jelezd külön (pl. _"Elkészíthető!"_ szöveggel), ha egy recept elkészítéséhez minden hozzávaló elérhető a hűtőben!
- f. (2 pont) Ha minden megtalálható a hűtőben egy recepthez, akkor legyen mód a receptet linkre vagy gombra kattintással elkészíteni! Az elkészítés azt jelenti, hogy a hűtőből eltávolítjuk a receptben szereplő hozzávalókat.
