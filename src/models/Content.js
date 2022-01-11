const list = [{
    title: "Card title",
    content: "Some quick example text to build on the card title and make up the bulk of the car's content.",
    img: "https://github.com/lap-Dmitry/resources-hm/blob/4ee2cbe8ea6482900f11442719b803cdeaa956d4/img/ball.jpg?raw=true",
}, {
    title: "Special title treatment",
    content: "With supporting text below as a natural lead-in to additional content.",
    img: "null",
}];

const news = {
    "Сейчас в СМИ": [
        "Путин упростил получение автомобильных номеров",
        "В команде Зеленского раскрыли план реформ на Украине",
        "«Турпомощь» прокоментировала гибель десятков россиян в Анталье",
        "Суд закрыл дело Демпартии США пртив России",
        "На Украине призвали создать ракеты для удара по Москве",
    ],

    "в Германии": [],
    "Рекомендуем": [],
};

const financialNews = [{
    title: "USD MOEX",
    cource: "63,52",
    exchange: "+0,09",
}, {
    title: "EUR MOEX",
    cource: "70,86",
    exchange: "+0,14",
}, {
    title: "НЕФТЬ",
    cource: "64,90",
    exchange: "+1,63%",
},
];

const categories = [
    "Видео",
    "Картинки",
    "Новости",
    "Карты",
    "Маркет",
    "Переводчик",
    "Эфир",
    "ещё",
];

const articles = [{
    title: "Погода",
    href: "#",
    img: "",
    temperature: "+17",
    periodTemperature: {
        "Утром": "+17",
        "Днём": "+20",
    },
}, {
    title: "Посещаемое",
    href: "#",
    content: {
        "Недвижимость " : "о сталинках",
        "Маркет ": "люстры и светильники",
        "Авто.ру ": "привод 4х4 до 500 000",
    },
}, {
    title: "Карта Германии",
    href: "#",
    content: "Расписания",
}, {
    title: "Телепрограмма",
    href: "#",
    content: [{
        channel: "TNT International",
        time: "02:00 ",
        programm: "TNT.Best ",
    }, {
        channel: "Карусель INT",
        time: "02:15 ",
        programm: "Джинглики ",
    }, {
        channel: "Первый",
        time: "02:25 ",
        programm: "Наедине со всеми ",
    }],
}, {
    title: "Эфир",
    href: "#",
    content: [{
        channel: "Успех",
        programm: "Управление как искусство ",
    }, {
        channel: "earthTV",
        programm: "Ночь. Мир в это время ",
    }, {
        channel: "Совершенно секретно",
        programm: "Андрей Возн... ",
    }],
}
];

export {
    list,
    news,
    financialNews,
    categories,
    articles,
};
