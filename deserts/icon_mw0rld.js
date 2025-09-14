document.addEventListener('DOMContentLoaded', () => {


    // Vytvoření překryvné vrstvy
    const splashScreen = document.createElement('div');
    splashScreen.className = 'splash-screen';

    // Vytvoření prvního loga
    const logo1 = document.createElement('img');
    logo1.src = '/deserts/icon_mw0rld.png';
    logo1.alt = 'MW0rld Icon';
    logo1.className = 'logo logo1';

    // Vytvoření druhého loga
    const logo2 = document.createElement('img');
    logo2.src = '/deserts/icon_deserts.png';
    logo2.alt = 'Desert Icon';
    logo2.className = 'logo logo2';

    // Přidání obou log do vrstvy
    splashScreen.appendChild(logo1);
    splashScreen.appendChild(logo2);

    // Přidání vrstvy do body
    document.body.appendChild(splashScreen);

    // Odstranění vrstvy po dokončení všech animací (6s)
    setTimeout(() => {
        splashScreen.remove();
    }, 6000);
});