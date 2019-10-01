const selectMods = document.getElementById("selectMods");
const overlay = document.getElementById("overlay");
const addItemButton = document.getElementById("addItemButton");
const modListJSON = "../items/lists/modList.json"
const modTable = document.getElementById("modTable");
const itemsToCraftPanel = document.getElementById("itemsToCraftPanel");

console.log(overlay);

$.getJSON(modListJSON, function (modListArray) {


    // Formatiert die modTable in ein Grid anhand der länge der modListArray
    modTable.style.gridTemplateRows = `repeat(${modListArray.length}/2) 1fr`;
    modTable.style.gridTemplateColumns = '1fr 1fr';

    modListArray.mods.forEach(mod => {

        $.getJSON(`../items/data/${mod}/${mod}.json`, function (modInformation) {

            // Erstellt die Modbezeichnung 
            var modname = document.createElement('p');
            modname.innerHTML = mod;
            modname.setAttribute('class', 'modname');

            // Erstellt ein img Element mit dem Pfad zu dem Mod Icon
            // var modimage = document.createElement('img');
            // modimage.src = `../items/textures/icons/${mod}.png` 
            // modimage.setAttribute('class', 'modimage');


            // Erstellt den Container für den Mod, der alle Informtationen beinhällt
            var modEntry = document.createElement('div');
            var cookie = getCookie(modInformation.name);
            modEntry.setAttribute('id', modInformation.name);
            if (cookie != 1) {
                if (cookie == "") {
                    createCookie(modInformation.name, 0, 130);
                }
                modEntry.setAttribute('class', 'modEntry');
            } else {
                modEntry.setAttribute('class', 'modEntry active');
            }
            // modEntry.appendChild(modimage);
            modEntry.appendChild(modname);

            modTable.appendChild(modEntry);
            // console.log(modInformation.name);

        });
    });
});