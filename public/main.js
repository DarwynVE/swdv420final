// public/main.js
document.addEventListener('DOMContentLoaded', () => {
    const carForm = document.getElementById('car-form');
    const carList = document.getElementById('car-list');
    const sortButton = document.getElementById('sort-button');
    const sortCriteria = document.getElementById('sort-criteria')

    carForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const make = document.getElementById('make').value;
        const model = document.getElementById('model').value;
        const year = document.getElementById('year').value;

        const carItem = document.createElement('ul');

        const makeDiv = document.createElement('div');
        makeDiv.className = 'make';
        makeDiv.textContent = `Make: ${make}`;

        const modelDiv = document.createElement('div');
        modelDiv.className = 'model';
        modelDiv.textContent = `Model: ${model}`;

        const yearDiv = document.createElement('div');
        yearDiv.className = 'year';
        yearDiv.textContent = `Year: ${year}`;

        carItem.appendChild(makeDiv);
        carItem.appendChild(modelDiv);
        carItem.appendChild(yearDiv);

        carItem.style.opacity = 1;
        carList.appendChild(carItem);

        // Clear the form fields
        document.getElementById('make').value = '';
        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
    });
    function sortCarList() {
        const cars = Array.from(carList.querySelectorAll('ul'));

        cars.sort((a, b) => {
            const criterion = sortCriteria.value;
            const aValue = a.querySelector(`.${criterion}`).textContent;
            const bValue = b.querySelector(`.${criterion}`).textContent;
            return aValue.localeCompare(bValue);
        });

        cars.forEach(car => carList.appendChild(car));
    }

    sortButton.addEventListener('click', () => {
        sortCarList();
    });
});

