display = document.getElementById('displayApp');

//Tạo menu đồ ăn
function showMenu() {
    let drawMenu = '';
    let k = 0;
    drawMenu += "<table id='menuTable'>";
    for (let i = 0; i < menu.rowMenu; i++) {
        drawMenu += "<tr>";
        for (let j = 0; j < menu.colMenu; j++) {
            drawMenu += "<td>";
            drawMenu += "<img src='images/" + listOfFood[k].name + ".jpg'" + "class=" + "'foodPics'" + " onclick='drawCart()' " + ">" + "<br>" +
                "<span>" + listOfFood[k].name + "</span>" + "<br>" +
                "<span>" + listOfFood[k].price + ".000 VND" + "</span>" + "<br>" +
                "<input id='" + k + "' type='text' value='0'>" +
                "<button id='addToCart' onclick='addToCart(listOfFood[" + k + "].name, listOfFood[" + k + "].price, document.getElementById(" + k + ").value)'>Order</button>" +
                "<button onclick='addFood()'>Add</button>" +
                "<button onclick='removeFood(listOfFood[" + k + "])'>Remove</button>";
            k++;
            drawMenu += "</td>";
        }
        drawMenu += "</tr>";
    }
    drawMenu += "</table>";
    display.innerHTML = drawMenu;
}

//Tạo giỏ hàng của khách
let cartContainer = [];

function drawCart() {
    let drawCart = '';
    drawCart += "<table id='cartTable'>";
    drawCart += "<tr class='headTable'>";
    drawCart += "<td>" + "<h3>Giỏ hàng của bạn:</h3>" + "</td>";
    drawCart += "</tr>";
    for (let i = 0; i < cartContainer.length; i++) {
        drawCart += "<tr class='bodyTable'>";
        drawCart += "<td>";
        drawCart += cartContainer[i];
        drawCart += "</td>";
        drawCart += "<td id='removeButton'>" + "<input type='button' value='Remove' onclick='removeUnit(this.id)' id=" + i + ">"
        drawCart += "</td>";
        drawCart += "</tr>";
    }
    drawCart += "<tr class='footTable'>";
    drawCart += "<td>" + "<button type='button' onclick='payCart()'>Thanh Toán</button> " +
        "<span id='totalMoney'></span>" +
        "<button type='button' onclick='printBill()'>Reset</button> " +
        "</td>";
    drawCart += "</tr>";
    drawCart += "</table>";
    document.getElementById('displayCart').innerHTML = drawCart;
}

//Tạo nội dung của giỏ hàng
let listTotal = [];

//Add sản phẩm vào cart
function addToCart(name, price, amount) {
    let total = price * amount;
    listTotal.push(total);
    let unit = name + " x " + amount + " = " + price * amount + ".000 VND";
    cartContainer.push(unit);
    drawCart();
}

//Xóa sản phẩm ở cart
function removeUnit(removeID) {
    let confirmAnswer = confirm("Xóa sản phẩm này?");
    if (confirmAnswer) {
        listTotal.splice(removeID, 1);
        cartContainer.splice(removeID, 1);
        drawCart();
    }
}

//Tính tổng tiền trong giỏ hàng
function payCart() {
    let haveToPay = 0;
    for (let i = 0; i < listTotal.length; i++) {
        haveToPay += listTotal[i];
    }
    document.getElementById('totalMoney').innerHTML = haveToPay + ".000 VND";
    // alert("Mr.Thinh Restaurent - It’s Finger lickin' good" + '<br>' +
    // 'Hóa đơn là')
}

//Làm mới giỏ hàng
function printBill() {
    showMenu();
    cartContainer = [];
    listTotal = [];
    drawCart();
}

//Add sản phẩm mới//chuaxong
function addFood() {
    let newFood = prompt('Nhập tên món ăn mà bạn muốn thêm vào danh sách');
    for (let i = 0; i < listOtherFood.length; i++) {
        if (newFood === listOtherFood[i].name) {
            alert('ok');
            listOfFood.push(listOtherFood[i]);
        } else {
            alert('Nhà hàng chưa có món này, mời nhập món ăn có trong danh sách dự phòng của nhà hàng!');
            break;
        }
    }
    showMenu();
}

//Xóa sản phẩm trong list//chuwa xong
function removeFood(removeFood) {
    let confirmAnswer = confirm('Bạn muốn xóa món ăn này?');
    if (confirmAnswer) {
        listOfFood.splice(removeFood, 1);
    }
    showMenu();
}

