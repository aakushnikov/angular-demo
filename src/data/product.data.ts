import { IProduct } from "src/types/product.types";

export const PRODUCTS_DATA: Array<IProduct> = [
{
    id: 1,
    company: 'Apple',
    title: 'Most popular world\'s product',
    image: './assets/images/mlnw.jpg',
    rating: {
        value: 4.5,
        reviews: 7123537978,
       },
    price: {
        value: 50000,
        discount: 10,
    },
    deliveryOptions: {
        delivery: '04.07',
        postmate: true,
        available: 0,
    },
    bage: {
        color: '#009999',
        text: 'Yankies go home!',
    },
    colors: {
        one: {
            color: 'black',
            image: './assets/images/mlnw.jpg',
        },
        two: {
            color: 'purple',
            image: './assets/images/mlnw2.jpg',
        },
    },
},
{
    id: 2,
    company: 'Google',
    title: 'Not so popular in Russia',
    image:  './assets/images/nw.png',
    rating: {
        value: 3,
        reviews: 147654123,
       },
    price: {
        value: 10000,
    },
    deliveryOptions: {
        delivery: '24.02',
        postmate: false,
        available: 666,
    },
    bage: {
        color: 'pink',
        text: 'Under sanctions',
    },
    colors: {
        one: {
            color: 'red',
            image: './assets/images/nw.png',
        },
        two: {
            color: 'brown',
            image: './assets/images/nw2.jpg',
        },
    },
},
{
    id: 3,
    company: 'Santa',
    title: 'New world order',
    image:  './assets/images/smiley.webp',
    rating: {
        value: 5,
        reviews: 543243,
       },
    price: {
        value: 10000,
        discount: 50,
    },
    deliveryOptions: {
        delivery: '01.01',
        postmate: true,
        available: 999999999,
    },
    bage: {
        color: '#0033ff',
        text: 'We believe in honesty',
    },
    colors: {
        one: {
            color: 'yellow',
            image: './assets/images/smiley.webp',
        },
        two: {
            color: 'green',
            image: './assets/images/smiley2.jpg',
        },
    },
},
];

export const EMPTY_PRODUCT = {
    id: 1,
    company: 'Some conpany',
    title: 'Some title',
    image: './assets/images/ques.jpg',
    rating: {
        value: 0,
        reviews: 0,
       },
    price: {
        value: 0,
        discount: 0,
    },
    deliveryOptions: {
        delivery: '01.01.1999',
        postmate: true,
        available: 0,
    },
    bage: {
        color: '#000',
        text: 'Some bage title',
    },
    colors: {
        one: {
            color: '#000',
            image: './assets/images/ques.jpg',
        },
        two: {
            color: '#000',
            image: './assets/images/ques.jpg',
        },
    },
};