let inversion = {
    data: [
        {
            A: "INVERSION 1",
            B: "TIPO1",
            C: "30",
            D: "./imagenes/2131495.jpg",
            E: "./inversiones/1.html",
        },
        {
            A: "INVERSION 2",
            B: "TIPO1",
            C: "49",
            D: "./imagenes/2131495.jpg",
            E: "./inversiones/1.html",
        },
        {
            A: "INVERSION 3",
            B: "TIPO1",
            C: "99",
            D: "./imagenes/2131495.jpg",
            E: "./inversiones/1.html",
        },
        {
            A: "INVERSION 4",
            B: "TIPO1",
            C: "29",
            D: "./imagenes/2131495.jpg",
            E: "./inversiones/1.html",
        },
        {
            A: "INVERSION 5",
            B: "TIPO1",
            C: "129",
            D: "./imagenes/2131495.jpg",
            E: "./inversiones/1.html",
        },
        {
            A: "INVERSION 6",
            B: "TIPO1",
            C: "89",
            D: "./imagenes/2131495.jpg",
            E: "./inversiones/1.html",
        },
        {
            A: "INVERSION 7",
            B: "TIPO2",
            C: "189",
            D: "./imagenes/2131495.jpg",
            E: "./inversiones/1.html",
        },
        {
            A: "INVERSION 8",
            B: "TIPO2",
            C: "49",
            D: "./imagenes/2131495.jpg",
            E: "./inversiones/1.html",
        },
    ],
};


//NO CAMBIAR NADA

for (let i of inversion.data) {
    let card = document.createElement("div");
    card.classList.add("card-post", i.B, "hide");

    let containerTop = document.createElement("div");
    containerTop.classList.add("card-post__top");


    let D = document.createElement("img");
    D.classList.add("card-post__img");
    D.setAttribute("src", i.D);

    let containerInfo = document.createElement("div");
    containerInfo.classList.add("card-post__info");

    let title = document.createElement("div");
    let title1 = document.createElement("a");
    title.classList.add("card-post__title");
    title1.setAttribute("href", i.E);
    title1.innerText = i.A.toUpperCase();
    title.appendChild(title1);
    containerInfo.appendChild(title);

    let tag = document.createElement("div");
    let tag1 = document.createElement("a");
    tag.classList.add("card-post__tag");
    tag1.innerText = i.B.toUpperCase();
    tag.appendChild(tag1);
    containerInfo.appendChild(tag);

    let C = document.createElement("div");
    C.innerText = "S/" + i.C;
    containerInfo.appendChild(C);

    card.appendChild(containerTop);
    card.appendChild(D);
    card.appendChild(containerInfo);

    document.getElementById("cards").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card-post");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".card-post__title");
    let cards = document.querySelectorAll(".card-post");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

window.onload = () => {
    filterProduct("all");
};