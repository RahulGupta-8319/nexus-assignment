console.log('hi');

let obj = {
    name : '',
    email: '',
    pass: ''
}

console.log(obj);

let newObj = { ...obj, name:'rahul' }
console.log('newobj', newObj);