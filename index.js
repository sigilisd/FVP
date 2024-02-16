const array1 = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']; // 1

array1.forEach((name) => console.log('Привет ' + name));


const numbers = [1, 2, 3, 4, 5]; // 2

const numbers1 = numbers.map((x) => x * 10);
console.log(numbers1);


const array2 = [5, 12, 8, 130, 44]; // 3

const result = array2.filter((number) => number > 10);
console.log(result);


const nameAge = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}]; // 4

const filter1 = nameAge.filter((object) => object.age > 18);

const map1 = filter1.map((y) => `${y.name} (${y.age} лет)`);

console.log(map1);


const reduce1 = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}]; // 5

const sumObj = reduce1.reduce((acc, products) => {
    acc += products.quantity * products.price;
    return acc;
}, 0);

console.log(sumObj);