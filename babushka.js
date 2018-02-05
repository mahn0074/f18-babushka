 let menu;
 let modtager = document.querySelector(".templatemodtager");
 let template = document.querySelector(".mytemplate");


 document.addEventListener("DOMContentLoaded", loadJson);

 async function loadJson() {

     // hent json
     let menuList = await fetch("menu.json");
     menu = await menuList.json();
     console.log(menu);

     //find rog filtrer etter efter kategori og gem dem i nyt array
     let forretter = menu.filter(ret => ret.kategori == "forretter");
     let hovedretter = menu.filter(ret => ret.kategori == "hovedretter");
     let desserter = menu.filter(ret => ret.kategori == "desserter");
     let drikkevarer = menu.filter(ret => ret.kategori == "drikkevarer");

     document.querySelector("#filter-alle").addEventListener("click", () => {
         visMenu(menu, "Menu")
     });
     document.querySelector("#filter-forretter").addEventListener("click", () => {
         visMenu(forretter, "Forretter")
     });
     document.querySelector("#filter-hovedretter").addEventListener("click", () => {
         visMenu(hovedretter, "Hovedretter")
     });

     document.querySelector("#filter-desserter").addEventListener("click", () => {
         visMenu(desserter, "Desserter")
     });

     document.querySelector("#filter-drikkevarer").addEventListener("click", () => {
         visMenu(drikkevarer, "Drikkevarer")
     });
     //     document.querySelector("#filter-sideorders").addEventListener("click", () => {
     //         visMenu(sideorders, "Sideorders")
     //     });


     visMenu(menu, "Menu");
 }

 function visMenu(menu, overskrift) {

     document.querySelector("[data-overskrift]").textContent = overskrift;
     modtager.innerHTML = "";


     // for hver ret
     menu.forEach(hverMenu => {
         let klon = template.cloneNode(true).content;

         klon.querySelector("[data-navn]").textContent = hverMenu.navn;
         klon.querySelector("[data-pris]").textContent = hverMenu.pris + ", -Kr";
         klon.querySelector("[data-kortbeskrivelse]").textContent = hverMenu.kortbeskrivelse;
         klon.querySelector("[data-billede]").src = "imgs/small/" + hverMenu.billede + "-sm.jpg";
         klon.querySelector("[data-billede]").alt = "Billede af" + hverMenu.navn;

         //            klon.querySelector(".billede").setAttribute("src", "imgs/small/" + hverMenu.billede + "-sm.jpg");

         modtager.appendChild(klon);
     })
 }
