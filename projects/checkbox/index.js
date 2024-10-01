function calcCost(obj) {
    const catalog = obj.parentElement;
    const items = catalog.querySelectorAll('.catalog-item');

    let total = 0
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.querySelector("input").checked) {
            total += parseInt(item.querySelector(".cost-span").textContent);
        }
    }
    
    catalog.querySelector(".catalog-cost>.cost-span").textContent = total.toString();
}