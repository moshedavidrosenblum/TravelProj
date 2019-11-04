let destenations = [
    { dest_code: 2, dest_name: 'australia', dest_price: 1600 },
    { dest_code: 3, dest_name: 'new zeeland', dest_price: 1800 },
    { dest_code: 4, dest_name: 'the karibian', dest_price: 1200 },
    { dest_code: 5, dest_name: 'zimbabooe', dest_price: 1000 },
    { dest_code: 6, dest_name: 'england', dest_price: 1100 }
];
let orders = [
    { total: 3200, passenger: 2, detenation: "australia", id: "5453", name: "avi", number: 2 },
    { total: 3600, passenger: 2, detenation: "new zeland", id: "45654", name: "david", number: 3 },
    { total: 1200, passenger: 1, detenation: "the karibian", id: "456463", name: "moshe", number: 4 }

]

try {
    let myTableData = document.querySelector('.mytable-travel-deatals tbody');
    myTableData.innerHTML = "";
    console.log(myTableData.innerHTML)
    destenations.forEach(function (dest) {
        console.log(dest);

        myTableData.innerHTML += "<tr><td>" + dest.dest_code + "</td>" +
            "<td>" + dest.dest_name + "</td>" +
            "<td>" + dest.dest_price + "</td></tr>";
    })
} catch (error) {
    console.error("מה העניין יש בעיה ", error)
}

displayOrders();
function displayOrders() {
    try {
        console.log("display order start");
        let tableOrder = document.querySelector(".table_orders tbody")
        tableOrder.innerHTML = ""
        let templateOrder = "<tr><td>#TOTAL</td><td>#PASSANGERS</td><td>#DESTENATION</td>" +
            "<td>#PASID</td><td>#NAME</td><td>#ORDER</td>"
        orders.forEach((order) => {
            tableOrder.innerHTML += templateOrder.replace("#TOTAL", order.total)
                .replace("#PASSANGERS", order.passenger)
                .replace("#DESTENATION", order.detenation)
                .replace("#PASID", order.id)
                .replace("#NAME", order.name)
                .replace("#ORDER", order.number);
        });
    } catch (error) {
        console.error("an eroro as ecord", error)

    }
}
function findOrder() {

    let searchName = document.querySelector("#find-order-name").value;
    let tablFind = document.querySelector(".find_order_table tbody");
    tablFind.innerHTML = "";
    let templateOrder = "<tr><td>#TOTAL</td><td>#PASSANGERS</td><td>#DESTENATION</td>" +
        "<td>#PASID</td><td>#NAME</td><td>#ORDER</td><td>"
    orders.forEach((order) => {
        if (order.name == searchName) {
            tablFind.innerHTML += templateOrder.replace("#TOTAL", order.total)
                .replace("#PASSANGERS", order.passenger)
                .replace("#DESTENATION", order.detenation)
                .replace("#PASID", order.id)
                .replace("#NAME", order.name)
                .replace("#ORDER", order.number);

        }

    });

}
function addOrderToTable() {
    let nameInput = document.querySelector("#inputName").value;
    let pesonalIdInput = document.querySelector("#inputPersonalId").value;
    let travelIdInput = document.querySelector("#inputTravelId").value;
    let passangerInput = document.querySelector("#inputPassangers").value;
    let userDestnationName;
    let userPriceForDestenation;
    destenations.forEach(function (dest) {
        if (dest.dest_code == travelIdInput) {
            userDestnationName = dest.dest_name;
            userPriceForDestenation = dest.dest_price * passangerInput;

        }
    });
    let newOrder = {
        total: userPriceForDestenation, passenger: passangerInput,
        detenation: userDestnationName, id: pesonalIdInput, name: nameInput
    }
    orders.push(newOrder);
    let orderTable = document.querySelector(".table_orders tbody ");
    orderTable.innerHTML += "<tr><td>" + userPriceForDestenation + "</td><td>" + passangerInput + "</td>" +
        "<td>" + userDestnationName + "</td><td>" + pesonalIdInput + "</td><td>" + nameInput + "</td><td>" + travelIdInput + "<td></tr>"


}
function findOrde(){
    let selectedDestenation= document.getElementById("order-search").value
    let tableFind=document.querySelector(".box-find-order-destenation tbody")
    tableFind.innerHTML=""
    let templateOrder = "<tr><td>#TOTAL</td><td>#PASSANGERS</td><td>#DESTENATION</td>" +
        "<td>#PASID</td><td>#NAME</td><td>#ORDER</td><td>"
    orders.forEach((order) => {
        if (order.detenation == selectedDestenation) {
            tableFind.innerHTML += templateOrder
                .replace("#TOTAL", order.total)
                .replace("#PASSANGERS", order.passenger)
                .replace("#DESTENATION", order.detenation)
                .replace("#PASID", order.id)
                .replace("#NAME", order.name)
                .replace("#ORDER", order.number);

        }

    });


}
