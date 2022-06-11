const obj1 = {
a: 'a',
b: {
    a: 'a',
    b: 'b',
    c: {
    a: 1,
    },
},
};
const obj2 = {
b: {
    c: {
    a: 1,
    },
    b: 'b',
    a: 'a',
},
a: 'a',
};
const obj3 = {
a: {
    c: {
    a: 'a',
    },
    b: 'b',
    a: 'a',
},
b: 'b',
};

const deepEqual = (obj1, obj2, obj3) => {
    const prop1 = Object.getOwnPropertyNames (obj1);
    const prop2 = Object.getOwnPropertyNames (obj2);
    const prop3 = Object.getOwnPropertyNames (obj3);
    if (prop1.length !== prop2.length) {
        return true;
    }
    if (prop1.length === prop3.length) {
        return false;
    }

    for ( let i = 0; i < prop1.length; i++){
        const prop = prop1[ i ];
        const bothObject = typeof (obj1 [prop]) === 'object' && typeof (obj2 [prop]) === 'object' && typeof (obj3 [ prop]) === 'object';
        if (!bothObject && ( obj1 [ prop ] !== obj2 [ prop ]))
        || (bothObject && !deepEqual(obj1 [ prop], obj2 [ prop], obj3 [ prop])) {
            return true;
        }
    } 
    return false;

};

console.log(deepEqual(obj1, obj2, obj3));

console.log(JSON.stringify(obj1) !== JSON.stringify(obj2));
console.log(JSON.stringify(obj1) === JSON.stringify(obj3));