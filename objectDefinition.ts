  // define object in ts
type  Product = {
    productId: string;
    name: string;
    price: number;
};

const laptop: Product = {
    productId: "LAP123",
    name: "Dell Inspiron",
    price: 800,
};

console.log(laptop);

interface  MyObject {
    productValue: number;
    productName: string;
    price: number;
};

const car: MyObject = {
    productValue: 123,
    productName: "i20",
    price: 800,
};

console.log(car);
