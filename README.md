# Note-App

Ohjelman käyttöopas\
\
Tehty käyttäen Node.js v18.18.0

## Ohjelman käynnistäminen

Ohjelma käynnistyy komentotulkissa:

```bash
# Käynnistä kehitys-modessa
npm run dev
# tai käynnistä ja avaa selaimessa
npm run dev -- --open
```

## Kurssien lisääminen

Kurssien lisääminen tapahtuu 'Add Courses' välilehdeltä.
1. Syötekenttään annetaan haluttu nimi uudelle kurssille.
2. Painetaan 'Save' painiketta, jolloin syötekentän alapuolelle ilmestyy hetkeksi teksti joka ilmoittaa onnistuneesta kurssin lisäämisestä kertoen samalla kurssin nimen ja ID:n.

Huom.\
Tallennus painike on 'disabled' tilassa kunnes syötekenttään on syötetty tekstiä eli siinä on enemmän kuin o merkkiä.

## Muistiinpanojen lisääminen

Muistiinpanijen tekeminen tapahtuu 'Create Notes' välilehdeltä.
1. Valitse haluttu kurssi 'Select Course' alasvetovalikosta.
2. Kirjoita muistiinpano kenttään.
3. Paina 'Save' painiketta, jolloin tekemäsi muistiinpano tallentuu ja listautuu alapuolelle.

Huom.\
Kurssi lukittuu ensimmäisen tallennuksen jälkeen.\
Tallennus painike on 'disabled' tilassa kunnes kurssi on valittu ja muistiinpanokenttään on syötetty tekstiä eli siinä on enemmän kuin 0 merkkiä.

## Muistiinpanojen listaus ja poisto

Muistiinpanojen listaus tapahtuu 'List Notes' välilehdeltä.\
valitse 'Course Filter' alasvetovalikosta kurssi jonka muistiinpanot haluat näyttää tai 'All' jos haluat näyttää kaikki muistiinpanot (oletus). \
\
Yksittäisen muistiinpanon poisto tapahtuu klikkaamalla sen muistiinpanon oikeassa yläkulmassa olevasta &times; -painikkeesta.