import lemon from '../lemon dessert.jpg';
import greekSalad from '../greek salad.jpg';
import Bruchetta from '../bruchetta.svg';
import delicon from '../delivery-boy.png';
export const data = [
    {
        id: 1,
        title: "Greek Salad",
        price: '$ 12.99',
        content: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        type: 'Order a Delivery ',
        image: greekSalad,
        icon: delicon,
    },
    {
        id: 2,
        title: "Lemon Dessert",
        price: '$ 6.99',
        content: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        type: 'Order a Delivery ',
        image: lemon,
        icon: delicon,
    },
    {
        id: 3,
        title: "Bruchetta",
        price: '$ 7.99',
        type: 'Order a Delivery ',
        content: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: Bruchetta,
        icon: delicon,
    },
]