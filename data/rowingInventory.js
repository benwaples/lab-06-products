//create 5 rowing items and the data structure, then export them to productApp

const oarPort = {
    id: '0aRP0rt',
    name: 'Port oars',
    image: 'photos/oartulips.jpg',
    description: 'This is designed to go faster than starboard oars no matter what',
    category: 'equipment',
    price: 20,
    cost: 19.99,
    invAmount: 8
};

const oarStar = {
    id: '0Ar57aR',
    name: 'Starboard oars',
    image: 'photos/oartulips.jpg',
    description: 'Data shows that these oars don\'t go as fast as Port oars',
    category: 'equipment',
    price: 20,
    cost: 19.99,
    invAmount: 8
};

const boat8 = {
    id: 'v3sp001e',
    name: 'Vespoli v8',
    image: 'photos/shell8.jpg',
    description: 'Go fast with your buds in this quick rig',
    category: 'equipment',
    price: 55,
    cost: 10,
    invAmount: 3
};

const boat4 = {
    id: 'p0c0ck13',
    name: 'Pocock 4',
    image: 'photos/rowing4.gif',
    description: 'Zoom along with your closest buds in a 4 person boat',
    category: 'equipment',
    price: 70,
    cost: 3,
    invAmount: 5
};

const mensGear = {
    id: 'tr0uz35z4d00ds',
    name: 'Mens Uni',
    image: 'photos/mensTrou.jpg',
    description: 'This will save you 3 splits on your 2k',
    category: 'gear',
    price: 15,
    cost: 5,
    invAmount: 6
};

const womensGear = {
    id: 'tr0uz35z4L4d13s',
    name: 'Womens Uni',
    image: 'photos/womensTrou.jpg',
    description: 'Instantly 15 seconds faster on your 2k',
    category: 'gear',
    price: 15,
    cost: 5,
    invAmount: 12
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
