const cars = [
    {
        id: 1,
        name: '2018 BMW M4 3.0 Coupe Yellow Edition',
        price: '1,700,000,000',
        location: 'Sudirman, Jakarta Pusat',
        image: 'assets/image/BMW.PNG'
    },
    {
        id: 2,
        name: '2020 Mercedes-Benz A-Class - Limited Edition',
        price: '1,100,000,000',
        location: 'Tebet, Jakarta Selatan',
        image: 'assets/image/marcedez-benz.png'
    },
    {
        id: 3,
        name: '2017 Jeep Grand Cherokee 3.6 L Limited',
        price: '5,000,000,000',
        location: 'Kender, Jakarta Timur',
        image: 'assets/image/jeep.png'
    },
    {
        id: 4,
        name: '2019 Mercedes-Benz GLC-Class - SUV',
        price: '2,700,000,000',
        location: 'Pancoran, Jakarta Selatan',
        image: 'assets/image/car.png'
    },
    {
        id: 5,
        name: '2018 Hyundai Tucson 2.0 XG CRDi - SUV - KM 20rb',
        price: '450,000,000',
        location: 'SCBD, Jakarta Pusat',
        image: 'assets/image/hyundai-tucson.png'
    },
    {
        id: 6,
        name: '2024 BMW X6 3.0 xDrive40i M Sport SUV',
        price: '900,000,000',
        location: 'Sampangil, Jakarta Selatan',
        image: 'assets/image/BMW-X6.png'
    },
    {
        id: 7,
        name: '2019 Mercedes-Benz G Class-Class - SUV',
        price: '4,900,000,000',
        location: 'Menteng, Jakarta Selatan',
        image: 'assets/image/marcedez-benz-g.png'
    },
    {
        id: 8,
        name: '2019 Honda Accord Sport/1.5t',
        price: '700,000,000',
        location: 'Lenteng Agung, Jakarta Selatan',
        image: 'assets/image/Honda-Acord.png'
    },
    {
        id: 9,
        name: 'Honda Civic Type R Sedan - Red Edition',
        price: '1,400,000,000',
        location: 'Matraman, Jakarta Timur',
        image: 'assets/image/Honda-Civic.png'
    }
];

function displayCar() {
    const container = document.getElementById('carContainer')
    container.innerHTML = ''
    cars.forEach(item => {
        console.log(item)
        const card = document.createElement('div')
        card.classList.add('bg-[#F7F7F8', 'border', 'rounded-xl', 'm-2')

        card.innerHTML = `
                    <div class="p-3 bg-white rounded-md">
                        <div class="flex gap-2 backdrop-blur-lg bg-gray-400 w-fit items-center py-2 rounded-full px-3">
                            <img src="assets/image/Vector.png" alt="">
                            <p class="text-[12px]">Dealer Terverifikasi</p>
                        </div>
                        <img src="${item.image}" alt="">
                        <div class="flex items-center justify-between py-5">
                            <p class="text-[18px] w-[60%]"> ${item.name}</p>
                            <svg width="18" fill="#red" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.465 14.6075C9.21 14.6975 8.79 14.6975 8.535 14.6075C6.36 13.865 1.5 10.7675 1.5 5.51751C1.5 3.20001 3.3675 1.32501 5.67 1.32501C7.035 1.32501 8.2425 1.98501 9 3.00501C9.7575 1.98501 10.9725 1.32501 12.33 1.32501C14.6325 1.32501 16.5 3.20001 16.5 5.51751C16.5 10.7675 11.64 13.865 9.465 14.6075Z" stroke="#0E1015" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                
                        </div>
                        <h1 class="text-[24px]">Rp <b>${item.price}</b></h1>
                    </div>
                        <div class="flex items-center justify-between px-4 py-5">
                            <div class="flex items-center gap-3">
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.7467 4.63335C11.0467 1.55335 8.36 0.166687 6 0.166687C6 0.166687 6 0.166687 5.99334 0.166687C3.64 0.166687 0.946669 1.54669 0.246669 4.62669C-0.533331 8.06669 1.57334 10.98 3.48 12.8134C4.18667 13.4934 5.09334 13.8334 6 13.8334C6.90667 13.8334 7.81334 13.4934 8.51334 12.8134C10.42 10.98 12.5267 8.07335 11.7467 4.63335ZM6 7.97335C4.84 7.97335 3.9 7.03335 3.9 5.87335C3.9 4.71335 4.84 3.77335 6 3.77335C7.16 3.77335 8.1 4.71335 8.1 5.87335C8.1 7.03335 7.16 7.97335 6 7.97335Z" fill="#8F9498"/>
                                </svg>                            
                                <p class="">${item.location}</p>
                            </div>
                            <button class="border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white transition-all py-1 px-4 rounded-full">Negotiable</button>
                        </div>
    `

        container.appendChild(card)
    })
}

displayCar()




var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);