

let Food = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    //
    // this.getId = function () {
    //     return this.id
    // };
    // this.getName = function () {
    //     return this.name
    // };
    // this.getPrice = function () {
    //     return this.price
    // };
    //
    // this.order = function () {
    //
    // }

};

let Milo = new Food('d001', 'Milo', 19);
let Pepsi = new Food('d002', 'Pepsi', 17);
let Water = new Food('d003', 'Water', 15);
let Tea = new Food('d004', 'Tea', 24);
let FriedChicken = new Food('d005', 'FriedChicken', 36);
let BBQChicken = new Food('d006', 'BBQChicken', 68);
let ChickenRice = new Food('d007', 'ChickenRice', 41);
let Hamburger = new Food('d008', 'Hamburger', 47);
let Popcorn = new Food('d009', 'Popcorn', 37);
let Mashies = new Food('d010', 'Mashies', 29);
let FrenchFries = new Food('d011', 'FrenchFries', 38);
let Cheese = new Food('d012', 'Cheese', 39);

//Danh sách đồ ăn dự phòng để thêm vào danh sách chính
let listOtherFood = [Popcorn, Mashies, FrenchFries, Cheese];
//Danh sách đồ ăn chính
let listOfFood = [FriedChicken, BBQChicken, ChickenRice, Hamburger,
    Milo, Pepsi, Water, Tea];
