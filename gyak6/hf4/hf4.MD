Házi feladat: Rómeó és Júlia (1 pont)

Rómeónak, miután megölte Tybaltot, menekülnie kell, de utoljára az éj leple alatt még meglátogatja ifjú hitvesét, hogy elbúcsúzzon tőle. A házban már mindenki alszik, csak Júlia álmodozik szerelméről gyertyavilágnál. Rómeó, hogy felhívja magára a figyelmet, egy kővel kocogtatja meg szerelmese ablakát, hogy még egyszer utoljára együtt lehessenek. Segíts Rómeónak a világító ablakot eltalálni! Ennek érdekében egy Canvas-es alkalmazást írunk, ahol először meghatározzuk a lövés erősségét és irányát, majd eldobjuk a követ.

- a. Téglalapokkal jelenítsd meg a követ (`ball`), a bokrot (`bush`) és az ablakokat (`windows`)!
- b. A téglalapok helyett használd a megfelelő képeket (`ball`, `bush`)!
- c. Válassz egy véletlen ablakot (véletlen egész 0 és 2 között), és azt sárgával jelenítsd meg!
- d. Az egeret mozgatva a Canvas fölött, olvasd ki az egérpozíciót (`offsetX`, `offsetY`), és húzz egy 3px vastag piros vonalat az `arrow` objektum `fx, fy` pontjától az egérpozícióig. (Ezt akár el is tárolhatjuk az `arrow` objektum `tx, ty` tulajdonságaiban.)
- e. Kattintásra kezdjük el mozgatni a követ! A piros szakasz iránya lesz a lövés iránya, a szakasz hossza a lövés erőssége. Ehhez adjunk a kőnek vízszintes sebességet és függőleges sebességet és gyorsulást! A sebességeket a piros szakasz x irányú és y irányú kiterjedése adja (azaz az egérpozíciónak x és y koordinátájának és az `arrow` objektum `fx, fy` pontjának különbsége), ezt az értéket érdemes pl. 3-mal felszorozni, hogy megfelelő sebességgel induljon el a kő. A függőleges gyorsulás legyen fix, pl. 300 px/s2!
- f. Ha a kő érintkezik a bokorral, állítsuk meg a kő mozgását, pl. a sebességét és gyorsulását lenullázva, majd írjuk ki, hogy "Oooops!".
- g. Ha a kő ablakkal érintkezik, akkor ugyancsak állítsuk meg a mozgását. Sárga ablak esetén írjuk, hogy "Come, my lover!", sötét ablak esetén "Oooops!" legyen.
- h. Ha a kő eléri a földet ütközés nélkül, akkor is állítsuk meg mozgását az "Oooops!" felirat kiírása mellett!

_A játékállapot követéséhez érdemes bevezetni egy változót. A játékot újraindítani az oldal újratöltésével lehet majd._
