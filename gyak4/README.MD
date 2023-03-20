A magyar nyelvben viszonylag sok ötbetűs szó van.
Ezekkel lehet olyan játékot játszani, hogy a játékmester gondol egy ötbetűs szóra, a többiek pedig megpróbálják ezt
kitalálni úgy, hogy ötbetűs szavakat mondanak.
A játékmester mindegyik tippre megmondja, hogy *hány betű van benne a megfelelő helyen*.
Ez alapján kell a többieknek beszűkíteniük és kitalálniuk a szót.

Ezt a játékot ültetjük át a böngészőbe.
Az `index.html` állományban behúzzuk a `words.js` állományt, ami a lehetséges ötbetűs szavakat tárolja egy
`wordList` nevű tömbben.
Az `index.js` állományban pedig a következő lépésekben oldjuk meg a feladatot:

- a. (1 pont) Válassz egy véletlen szót a `wordList` tömbből, és jelenítsd meg a `details` elemen belüli div-ben (`divTheWord`)! (Ezt használhatod később a megoldás megtekintéséhez.)
- b. (1 pont) Jelenleg a beviteli mezőben ENTER-t nyomva vagy a gombra kattintva az űrlap elküldésre kerül. Akadályozd meg ezt a viselkedést JavaScript segítségével! 
  Az űrlap elküldésekor a tényleges küldés helyett jelöld ki a beviteli mezőben lévő szöveget és töröld az űrlapon belüli `span` elem tartalmát!
- c. (1 pont) Az űrlap elküldésekor ellenőrizd, hogy a beírt szó pontosan 5 karakterből áll-e, és ha nem, akkor jelezd ezt az űrlapon belüli `span` elemben ("The length of the word is not 5!")!
- d. (1 pont) Az űrlap elküldésekor ellenőrizd, hogy a beírt szó szerepel-e a `wordList` tömbben, és ha nem, akkor jelezd ezt az űrlapon belüli `span` elemben ("The word is not considered acceptable!")!
- e. (1 pont) Számold meg, hogy a kitalált és a tippelt szóban hány karakter szerepel ugyanazon a helyen, majd írd ki ezt a számot konzolra!
- f. (1 pont) A táblázat első soraként szúrd be a tippelt szót és a hozzá tartozó egyezőségi számot!
- g. (1 pont) Ha kitaláltuk a szót, akkor azt jelezzük a táblázatsorban a `correct` stílusosztállyal, és jelenítsük meg az `end-of-game` azonosítójú div-et!
- h. (1 pont) Az `end-of-game` azonosítójú div-ben lévő gombra kattintva töltsük újra az oldalt, így újrakezdve a játékot!

