 let menu;
 let modtager = document.querySelector(".templatemodtager");
 let template = document.querySelector(".mytemplate");

 document.addEventListener("DOMContentLoaded", loadJson);

 async function loadJson() {

     // hent json
     let menuList = await fetch("menu.json");
     menu = await menuList.json();
     console.log(menu);


     visMenu(menu, "Menu");
 }

 function visMenu(menu, overskrift) {
     document.querySelector("#overskrift").textContent = overskrift;
     modtager.innerHTML = "";



     // for hver ret
     menu.forEach(hverMenu => {
         let klon = template.cloneNode(true).content;

         klon.querySelector("[data-navn]").textContent = hverMenu.navn;
         klon.querySelector("[data-pris]").textContent = hverMenu.pris + ", -Kr";
         klon.querySelector("[data-kortbeskrivelse]").textContent = hverMenu.kortbeskrivelse;
         klon.querySelector("[data-billede]").src = "imgs/small/" + hverMenu.billede + "-sm.jpg";
         klon.querySelector("[data-billede]").alt = "Billede af" + hverMenu.navn;

         klon.querySelector(".billede").setAttribute("src", "imgs/small/" + hverMenu.billede + "-sm.jpg");
         klon.querySelector("[data-single]").href = "single.html?id=" + hverMenu.id;
         //            klon.querySelector(".filter.html?kategori=alle").href = "filter.html?kategori=" + hverMenu.kategori;

         modtager.appendChild(klon);

     })
 }
