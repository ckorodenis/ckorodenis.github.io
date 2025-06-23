// splash-screen.js
document.addEventListener('DOMContentLoaded', () => {
    // Vytvoření překryvné vrstvy
    const splashScreen = document.createElement('div');
    splashScreen.className = 'splash-screen';

    // Vytvoření obrázku loga
    const logo = document.createElement('img');
    logo.src = './media/icon_mw0rld.png'; // Cesta k logu
    logo.alt = 'MW0rld Icon';

    // Přidání loga do vrstvy
    splashScreen.appendChild(logo);

    // Přidání vrstvy do body
    document.body.appendChild(splashScreen);

    // Odstranění vrstvy po dokončení animace (4s)
    setTimeout(() => {
        splashScreen.remove();
    }, 4000);
});