//create 5 rowing items and the data structure, then export them to productApp

const oarPort = {
    id: 'oar',
    name: 'Port oars',
    image: 'photos/oartulips.jpg',
    description: 'This is designed to go faster than starboard oars no matter what',
    category: 'equipment',
    price: 20,
    cost: 19.99
};

const oarStar = {
    id: 'oar',
    name: 'Starboard oars',
    image: 'photos/oartulips.jpg',
    description: 'Data shows that these oars don\'t go as fast as Port oars',
    category: 'equipment',
    price: 20,
    cost: 19.99
};

const boat8 = {
    id: 'v3sp001e',
    name: 'Vespoli v8',
    image: 'photos/shell8.jpg',
    description: 'Go fast with your buds in this quick rig',
    category: 'equipment',
    price: 55,
    cost: 10
};

const boat4 = {
    id: 'p0c0ck13',
    name: 'Pocock 4',
    image: 'photos/rowing4.gif',
    description: 'Zoom along with your closest buds in a 4 person boat',
    category: 'equipment',
    price: 70,
    cost: 3
};

const mensGear = {
    id: 'tr0uz35z4d00ds',
    name: 'Mens trou',
    image: 'photos/mensTrou.jpg',
    description: 'This will save you 3 splits on your 2k',
    category: 'gear',
    price: 15,
    cost: 5
};

const womensGear = {
    id: 'tr0uz35z4L4d13s',
    name: 'Womens trou',
    image: 'photos/womensTrou.jpg',
    description: 'Instantly 15 seconds faster on your 2k',
    category: 'gear',
    price: 15,
    cost: 5
};

const items = [
    oarPort,
    oarStar,
    boat8,
    boat4, 
    mensGear,
    womensGear
];

export default items;