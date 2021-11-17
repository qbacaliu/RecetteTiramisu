(function () {
    /*Declare variables and link them to existing IDs on our HTML */
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
    /*On Submit the VALUE of our ITEM goes inside of an LI element
    and prepared to be stored with the function Store located somewhere below*/
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        list.innerHTML += '<li>' + item.value + '</li>';
        store();
        item.value = "";
    }, false)
    /*VERY self explanatory*/
    list.addEventListener('click', function (e) {
        var t = e.target;
        if (t.classList.contains('checked')) {
            t.parentNode.removeChild(t);
        } else {
            t.classList.add('checked');
        }
        store();
    }, false)
    /*All the values inserted are ready to go to LocalStorage Heaven*/
    function store() {
        window.localStorage.myitems = list.innerHTML;
    }
    function getValues() {
        var storedValues = window.localStorage.myitems;
        if (!storedValues) {
            /*Those are the preloaded values that we want to appear by default
            you can write whatever the hell you want inside those <li> tags and when everything is erased from LocalStorage
            Those values will appear automatically*/
            list.innerHTML = '<li>Séparer les blancs des jaunes d\'oeufs</li>'
                + '<li>Mélanger les jaunes avec le sucre roux et le sucre vanillé.</li>'
                + '<li>Ajouter le mascarpone au fouet.</li>'
                + '<li>Monter les blancs en neige et les incorporer délicatement à la spatule au mélange précédent. Réserver.</li>'
                + '<li>Mouiller les biscuits dans le café rapidement avant d\'en tapisser le fond du plat.</li>'
                + '<li> Recouvrir d\'une couche de crème au mascarpone puis répéter l\'opération en alternant couche de biscuits et couche de crème en terminant par cette dernière.</li>'
                + '<li>Saupoudrer de cacao.</li>'
                + '<li>Mettre au réfrigérateur 4 heures minimum puis déguster frais.</li>';
        }
        else {
            list.innerHTML = storedValues;
        }
    }
    getValues();
})();