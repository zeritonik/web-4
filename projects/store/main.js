var total_cost = 0;

function calcTotalCost(catalog) {
    let items = catalog.querySelectorAll(".item");
    total_cost = 0;
    for (let i = 0; i < items.length; i++) {
        total_cost += calcCost(items[i]);
    }

    showTotalCost(catalog.parentElement.querySelector(".menu-cost"));
}

function calcCost(item) {
    if (item.querySelector(".checkbox").checked)
        return item.querySelector(".checkbox").value * item.querySelector(".item__number").value;
    return 0;
}

function showTotalCost(menu_cost) {
    menu_cost.querySelector(".menu-cost__p").innerText = "Итого: " + total_cost + "р.";
}

function onNumberInput(obj) {
    let val = +obj.value;
    obj.value = isNaN(val) || val < 0 ? 0 : val;
    calcTotalCost(obj.parentElement.parentElement);
}

function onCheckboxEvent(obj) {
    obj.parentElement.parentElement.querySelector(".item__number").disabled = !obj.checked;
    obj.parentElement.parentElement.querySelector(".item__number").value = Number(obj.checked);
    calcTotalCost(obj.parentElement.parentElement.parentElement)
}

function makeOrder(obj) {
    let menu = obj.parentElement;

    let surname = menu.querySelector(".text-input[name='surname']").value;
    let name = menu.querySelector(".text-input[name='name']").value;
    let cost = total_cost;

    if (surname == "" || name == "" || cost <= 0) {
        alert("Введите имя, фамилию, выберите позиции, что бы заказать.");
        return;
    }

    alert("Заказчик: " + surname + ' ' + name + '.\n' + "Стоимость: " + cost + 'р.');
}