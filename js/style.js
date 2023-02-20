const { createApp } = Vue

createApp({
    data() {
        return {
            movie: {
                title: "Action Games",
                category: "Ecco i giochi in sconto",
                length: 163,
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
    
