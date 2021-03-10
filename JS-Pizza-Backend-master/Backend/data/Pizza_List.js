/**
 * Created by diana on 12.01.16.
 */

var pizza_info = [
{
            id: 1,
            icon: 'assets/images/pizza_7.jpg',
            title: "Імпреза",
            type: 'М’ясна піца',
            content: {
                meat: ['Балик', 'салямі'],
                chicken: ['куриця'],
                cheese: ['сир моцарелла',
                    'сир рокфорд'
                ],
                pineapple: ['ананаси'],
                additional: ['томатна паста',
                    'петрушка'
                ]
            },
            small_size: {
                weight: 370,
                size: 30,
                price: 99
            },
            big_size: {
                weight: 660,
                size: 40,
                price: 169
            },
            is_new: true,
            is_popular: true
        }, {
            id: 2,
            icon: 'assets/images/pizza_2.jpg',
            title: "BBQ",
            type: 'М’ясна піца',
            content: {
                meat: ['Мисливські ковбаски',
                    'ковбаски папероні',
                    'шинка'
                ],
                cheese: ['сир моцарелла'],
                mushroom: ['шампінйони'],
                additional: ['петрушка', 'оливки']
            },
            small_size: {
                weight: 460,
                size: 30,
                price: 139
            },
            big_size: {
                weight: 840,
                size: 40,
                price: 199
            },
            is_popular: true
        }, {
            id: 3,
            icon: 'assets/images/pizza_1.jpg',
            title: "Міксовий поло",
            type: 'М’ясна піца',
            content: {
                meat: ['Вітчина',
                    'куриця копчена'
                ],
                cheese: ['сир моцарелла'],
                pineapple: ['ананаси'],
                additional: ['кукурудза',
                    'петрушка',
                    'соус томатний'
                ]
            },
            small_size: {
                weight: 430,
                size: 30,
                price: 115
            },
            big_size: {
                weight: 780,
                size: 40,
                price: 179
            }
        }, {
            id: 17,
            icon: 'assets/images/pizza_3.jpg',
            title: "Маргарита",
            type: 'Вега піца',
            content: {
                cheese: ['Сир моцарелла'],
                tomato: ['помідори'],
                additional: ['базилік', 'орегано',
                    'соус томатний'
                ]
            },
            small_size: {
                weight: 370,
                size: 30,
                price: 89
            },
            big_size: {
                weight: 790,
                size: 40,
                price: 169
            }
        }, {
            id: 4,
            icon: 'assets/images/pizza_5.jpg',
            title: "Діабло",
            type: 'М’ясна піца',
            content: {
                meat: ['Вітчина', 'салямі'],
                cheese: ['сир моцарелла'],
                mushroom: ['шампінйони'],
                additional: ['перець болгарський',
                    'гострий соус'
                ]
            },
            small_size: {
                weight: 450,
                size: 30,
                price: 115
            },
            big_size: {
                weight: 790,
                size: 40,
                price: 179
            }
        }, {
            id: 43,
            icon: 'assets/images/pizza_6.jpg',
            title: "Неаполітанська",
            type: 'М’ясна піца',
            content: {
                meat: ['Мисливські ковбаси'],
                cheese: ['сир пармезан'],
                mushroom: ['шампінйони'],
                additional: ['цибуля',
                    'огірки солені',
                    'соус селянський'
                ]
            },
            small_size: {
                weight: 470,
                size: 30,
                price: 139
            },
            big_size: {
                weight: 780,
                size: 40,
                price: 199
            }
        }, {
            id: 34,
            icon: 'assets/images/pizza_9.jpg',
            title: "Маринара",
            type: 'М’ясна піца',
            content: {
                meat: ['Ветчіна', 'салямі'],
                chicken: ['копчене курине філе'],
                cheese: ['сир чеддер',
                    'сир моцарелла'
                ],
                additional: ['салат айсберг',
                    'соус селянський'
                ]
            },
            small_size: {
                weight: 470,
                size: 30,
                price: 115
            },
            big_size: {
                weight: 780,
                size: 40,
                price: 179
            }
        }, {
            id: 90,
            icon: 'assets/images/pizza_8.jpg',
            title: "Дольче Маре",
            type: 'Морська піца',
            content: {
                ocean: ['Криветки тигрові',
                    'мідії', 'ікра червона',
                    'червона риба'
                ],
                cheese: ['сир моцарелла'],
                additional: ['соус вершковий']
            },
            big_size: {
                weight: 845,
                size: 40,
                price: 399
            }
        }, {
            id: 6,
            icon: 'assets/images/pizza_4.jpg',
            title: "Россо Густо",
            type: 'Морська піца',
            content: {
                ocean: ['Червона риба',
                    'ікра червона'
                ],
                cheese: ['сир моцарелла'],
                additional: ['соус вершковий']
            },
            small_size: {
                weight: 400,
                size: 30,
                price: 189
            },
            big_size: {
                weight: 700,
                size: 40,
                price: 299
            }
        }
];

module.exports = pizza_info;