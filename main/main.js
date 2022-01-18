let options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
}

function getDate(str) {
    let date = new Date(str);
    return date.toLocaleString('ru', options)
}

console.log(getDate('2020-11-26'));


const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

function search ( select, array) {
    let matches = [ ];
    for ( let i = 0; i < array.length;  i++) {
        const data = array [i].country + array [i].city +array  [i].hotel;
        if (data.toLowerCase().includes(select.toLowerCase())) {
            matches.push(array [i]);
        }
    }
    return matches;
}

console.log(search("HOT", data))