let listCars = [
    {
        "name":"Fusca",
        "img": "img/fuscao.webp",
        "description":"O Volkswagen Type 1, popularmente conhecido como Fusca (no Brasil) ou Carocha (em Portugal), foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen, sendo produzido entre 1938 e 2003."
    },
    {
        "name":"Gtr",
        "img": "img/gtr.jpg",
        "description":"A primeira vez que o nome GT-R (Gran Turismo Racing) surgiu na linha Nissan foi para batizar a versão de alta performance do sedan Skyline, em fevereiro de 1969. Os engenheiros da Nissan decidiram colocar um moto r de alta performance em um modelo da linha."
    },
    {
        "name":"Impala 1967",
        "img": "img/impalao.jpg",
        "description":"O Impala é um dos mais belos modelos já criados pela Chevrolet, tanto é que ele virou artista de seriados na tv. Impala 67 é um dos grandes destaques da série Sobrenatural (Supernatural). O modelo é o transporte de Dean e Sam em suas caças a montros e demônios."
    },
    {
        "name":"Opala",
        "img": "img/opalla.jpg",
        "description":"O Chevrolet Opala é o primeiro automóvel de passeio desenvolvido e fabricado pela General Motors do Brasil, de 1968 a 1992."
    },
    {
        "name":"Toyota Z10",
        "img": "img/toyotaz10.jpg",
        "description":"The Toyota Soarer (Japanese: トヨタ・ソアラ, Hepburn: Toyota Soara) is a personal luxury GT coupé produced from 1981 to 2005 by Toyota and sold in Japan."
    },
    {
        "name":"Skyline 1972",
        "img": "img/skyline1972.jpeg",
        "description":"Também conhecida como a quarta geração, essa versão mantinha as opções de sedã, coupé de duas portas e perua de quatro portas. Internamente, era chamada de projeto C110."
    }
]

listCars.map((car,position)=>{
    let cardCar = document.getElementById("cards");
    cardCar.innerHTML += `
            <div class="col-md-4">
                <div class="card m-4">
                    <img src="${car.img}" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${car.name}</h5>
                      
                      <a href="#" class="btn btn-secondary" onClick="zoomImg(${position})" > <i class="bi bi-zoom-in"></i> </a>
                    </div>
                </div>
            </div>
    `
})

function zoomImg(position){
    let selectedCar = listCars[position];
    document.getElementById("nameCar").innerHTML = selectedCar.name;
    document.getElementById("descriptionCar").innerHTML = selectedCar.description;
    document.getElementById("imgModal").src = selectedCar.img;

    new bootstrap.Modal("#zoomImg").show();
}

function changeTheme(){
    let theme = document.querySelector("html").getAttribute("data-bs-theme");
    if (theme === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme","light");
        document.querySelector("#changeTheme").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme","dark");
        document.querySelector("#changeTheme").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}