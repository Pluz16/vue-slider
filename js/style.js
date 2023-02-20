const { createApp } = Vue

createApp({
    data() {
        return {
            games: {
                title: "Action Games",
                category: "Ecco i giochi in sconto",
                sconto: 16,
                images: [
                    "./img/01.webp",
                    "./img/02.webp",
                    "./img/03.webp",
                    "./img/04.webp",
                    "./img/05.webp"
                ],

                activeImage: 0
            }
        }
    },
    methods: {
        previous() {
            if (this.games.activeImage - 1 < 0) {
                this.games.activeImage = this.games.images.length - 1;
            }
            else {
                this.games.activeImage--;
            }
        },

        next() {
            if (this.games.activeImage + 1 >= this.games.images.length) {
                this.games.activeImage = this.games.activeImage = 0;
            }
            else {
                this.games.activeImage++;
            }
        },

        switchActive(index) {
            this.games.activeImage = index;
        }
    },

    created() {
        setInterval(() => {
            this.next();
        }, 3000)
    },
}).mount('#root')
