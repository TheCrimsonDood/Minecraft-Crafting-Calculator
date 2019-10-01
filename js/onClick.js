// Erstell ein Klick-event auf das Overlay, das alle offenen Fenster wieder schließt
$(overlay).click(function () {
    selectMods.classList.remove('active');
    overlay.classList.remove('active');
});

// Erstellt ein Klick Event auf addItemButton
$(addItemButton).click(function () {
    selectMods.classList.add('active');
    overlay.classList.add('active');
});

// Erstellt ein Klick-event auf modTable, das auf die Unterelemente modEntry hört
$('#modTable').on('click', '.modEntry', function (event) {
    var modID = document.getElementById(event.target.id);
    if ($(modID).hasClass('active')) {
        createCookie(modID.id, 0, 130);
        modID.classList.remove('active');
        console.log('if');
    } else {
        createCookie(modID.id, 1, 130);
        modID.classList.add('active');
        console.log('else');
    }//console.log(modID.id);
});