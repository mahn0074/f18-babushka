let menu = [];
let modtager = document.querySelector(".templatemodtager");
let template = document.querySelector(".mytemplate");
let id = location.href.split("=")[1];


document.addEventListener("DOMContentLoaded", loadJson);

async function loadJson() {

    // hent json
    let menuList = await fetch("menu.json");
    menu = await menuList.json();
    console.log(menu);


    visMenu(menu, "Menu");
}

function visMenu(menu, overskrift) {
    let dest = document.querySelector(".container");

    // for hver ret
    menu.forEach(hverMenu => {
        if (hverMenu.id == id) {

            dest.querySelector("[data-navn]").textContent = hverMenu.navn;
            dest.querySelector("[data-pris]").textContent = hverMenu.pris + ", -Kr";
            dest.querySelector("[data-kortbeskrivelse]").textContent = hverMenu.kortbeskrivelse;
            dest.querySelector("[data-langbeskrivelse]").textContent = hverMenu.langbeskrivelse;
            dest.querySelector("[data-billede]").src = "imgs/medium/" + hverMenu.billede + "-md.jpg";
            dest.querySelector("[data-billede]").alt = "Billede af" + hverMenu.navn;
        }

    });
}
