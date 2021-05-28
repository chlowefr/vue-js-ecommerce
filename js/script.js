const app = new Vue({
    el:"#app",
    data: {
        items: [],
    },
    created: function(){
        // console.log('Created app vue js')
        fetch('products.json')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.items.push(...res);

        })
    },
    // IL FAUDRAIT UTILISER LES V-FOR POUR AFFICHER LES CARD PRODUITS
})