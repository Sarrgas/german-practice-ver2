const words = [
    {
        id: 1,
        the: 'der',
        german: 'Junge',
        swedish: 'Pojke',
    },
    {
        id: 2,
        the: 'die',
        german: 'Zeitung',
        swedish: 'Tidning'
    },
    {
        id: 3,
        the: 'das',
        german: 'Mädchen',
        swedish: 'Flicka'
    },
    {
        id: 4,
        the: 'der',
        german: 'Apfel',
        swedish: 'Äpple',
    },
    {
        id: 5,
        the: 'die',
        german: 'Frau',
        swedish: 'Kvinna',
    },
    {
        id: 6,
        the: 'das',
        german: 'Wasser',
        swedish: 'Vatten',
    },
    {
        id: 7,
        the: 'der',
        german: 'Mann',
        swedish: 'Man',
    },
    {
        id: 8,
        the: 'die',
        german: 'Milch',
        swedish: 'Mjölk',
    },
    {
        id: 9,
        the: 'das',
        german: 'Kind',
        swedish: 'Barn',
    },
    {
        id: 10,
        the: 'der',
        german: 'Wein',
        swedish: 'Vin',
    },
    {
        id: 11,
        the: 'die',
        german: 'Orange',
        swedish: 'Apelsin',
    },
    {
        id: 12,
        the: 'das',
        german: 'Buch',
        swedish: 'Bok',
    },
    {
        id: 13,
        the: 'der',
        german: 'Kaffee',
        swedish: 'Kaffe',
    },
    {
        id: 14,
        the: 'die',
        german: 'Banane',
        swedish: 'Banan',
    },
    {
        id: 15,
        the: 'das',
        german: 'Bier',
        swedish: 'Öl',
    },
    {
        id: 16,
        the: 'der',
        german: 'Saft',
        swedish: 'Juice',
    },
    {
        id: 17,
        the: 'die',
        german: 'Kartoffel',
        swedish: 'Potatis',
    },
    {
        id: 18,
        the: 'das',
        german: 'Obst',
        swedish: 'Frukt',
    },
    {
        id: 19,
        the: 'der',
        german: 'Käse',
        swedish: 'Ost',
    },
    {
        id: 20,
        the: 'die',
        german: 'Erdbeere',
        swedish: 'Jordgubbe',
    },
    {
        id: 21,
        the: 'das',
        german: 'Ei',
        swedish: 'Ägg',
    },
    {
        id: 22,
        the: 'der',
        german: 'Zucker',
        swedish: 'Socker',
    },
    {
        id: 23,
        the: 'die',
        german: 'Schokolade',
        swedish: 'Choklad',
    },
    {
        id: 24,
        the: 'das',
        german: 'Fleisch',
        swedish: 'Kött',
    },
    {
        id: 25,
        the: 'der',
        german: 'Reis',
        swedish: 'Ris',
    },
    {
        id: 26,
        the: 'die',
        german: 'Nudeln',
        swedish: 'Pasta',
    },
    {
        id: 27,
        the: 'das',
        german: 'Gemüse',
        swedish: 'Grönsak',
    },
    {
        id: 28,
        the: 'die',
        german: 'Suppe',
        swedish: 'Soppa',
    },
    {
        id: 29,
        the: 'das',
        german: 'Öl',
        swedish: 'Olja',
    },
    {
        id: 30,
        the: 'das',
        german: 'Salz',
        swedish: 'Salt',
    },
    {
        id: 31,
        the: 'der',
        german: 'Fisch',
        swedish: 'Fisk',
    },
    {
        id: 32,
        the: 'das',
        german: 'Essen',
        swedish: 'Mat',
    },
    {
        id: 33,
        the: 'der',
        german: 'Tee',
        swedish: 'Te',
    },
    {
        id: 34,
        the: 'die',
        german: 'Pizza',
        swedish: 'Pizza',
    },
    {
        id: 35,
        the: 'der',
        german: 'Bär',
        swedish: 'Björn',
    },
    {
        id: 36,
        the: 'die',
        german: 'Katze',
        swedish: 'Katt',
    },
    {
        id: 37,
        the: 'das',
        german: 'Tier',
        swedish: 'Djur',
    },
    {
        id: 38,
        the: 'der',
        german: 'Hund',
        swedish: 'Hund',
    },
    {
        id: 39,
        the: 'die',
        german: 'Maus',
        swedish: 'Mus',
    },
    {
        id: 40,
        the: 'der',
        german: 'Vogel',
        swedish: 'Fågel',
    },
    {
        id: 41,
        the: 'das',
        german: 'Pferd',
        swedish: 'Häst',
    },
    {
        id: 42,
        the: 'die',
        german: 'Ente',
        swedish: 'Anka',
    },
    {
        id: 43,
        the: 'das',
        german: 'Schwein',
        swedish: 'Gris',
    },
    {
        id: 44,
        the: 'die',
        german: 'Kuh',
        swedish: 'Ko',
    },
    {
        id: 45,
        the: 'das',
        german: 'Haustier',
        swedish: 'Husdjur',
    },
    {
        id: 46,
        the: 'die',
        german: 'Spinne',
        swedish: 'Spindel',
    },
    {
        id: 47,
        the: 'das',
        german: 'Insekt',
        swedish: 'Insekt',
    },
    {
        id: 48,
        the: 'die',
        german: 'Biene',
        swedish: 'Bi',
    },
    {
        id: 49,
        the: 'der',
        german: 'Käfer',
        swedish: 'Skalbagge',
    },
    {
        id: 50,
        the: 'die',
        german: 'Fliege',
        swedish: 'Fluga',
    },
];

export default words;
