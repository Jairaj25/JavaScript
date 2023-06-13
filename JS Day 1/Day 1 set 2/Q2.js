const object1 = {
    name: "Jairaj",
    roll: 10
};
const object2 = {
    name: "Upadhyay",
    roll: 15,
    location: "ahemdabad"
};

const merged = {}

merged.keys = object1.keys + object2.keys;
const object_3 = Object.assign(object1,object2);
console.log(object_3);