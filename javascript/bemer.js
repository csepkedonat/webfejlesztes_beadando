window.addEventListener('load', function () {
    var nemValaszto = document.getElementsByName("Nem"); // A nemválasztó rádiógombok 
    var szinValaszto = document.getElementById("szinValaszto"); // A színválasztó mező
    var szinCimke = document.getElementById("szinCimke"); // A színválasztó címke

    function nemValasztoKezelo() {
        var nemValasztott = false;

        // Végigmegyünk az összes rádiógombon
        for (var i = 0; i < nemValaszto.length; i++) {
            if (nemValaszto[i].checked) {
                nemValasztott = true;
                break;
            }
        }

        // Ha kiválasztották valamelyiket, megjelenítjük a színválasztót és a címkét
        if (nemValasztott) {
            szinValaszto.style.display = "block";
            szinCimke.style.display = "block";  // A címke megjelenítése
        } else {
            szinValaszto.style.display = "none";
            szinCimke.style.display = "none";  // A címke elrejtése
        }
    }

    // Eseményhozzárendelés az összes rádiógombhoz
    for (var i = 0; i < nemValaszto.length; i++) {
        nemValaszto[i].addEventListener("change", nemValasztoKezelo);
    }
});
