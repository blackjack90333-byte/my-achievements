const achievementsData = [
    {
        name: "Бизнес Квест",
        achievements: [
            {
                id: 1,
                text: "Сделать сайт РЕМОНТ КВАРТИР",
                completed: true,
                connectedTo: [6],
                position: { x: 50, y: 50 }
            },
            {
                id: 2,
                text: "Сделать сайт ШТУКАТУРКА",
                completed: true,
                connectedTo: [6],
                position: { x: 250, y: 50 }
            },
            {
                id: 3,
                text: "Сделать сайт КОНСАЛТИНГ БИЗНЕССА",
                completed: true,
                connectedTo: [6],
                position: { x: 450, y: 50 }
            },
            {
                id: 4,
                text: "Сделать сайт РЕМОНТ КВАРТИР №2",
                completed: true,
                connectedTo: [6],
                position: { x: 650, y: 50 }
            },
            {
                id: 5,
                text: "Сделать сайт РЕМОНТ СТИРАЛЬНЫХ МАШИН №3",
                completed: true,
                connectedTo: [6],
                position: { x: 850, y: 50 }
            },
            {
                id: 6,
                text: "Сделать сайт-портфолио",
                completed: false,
                connectedTo: [7],
                position: { x: 450, y: 200 }
            },
            {
                id: 7,
                text: "Настроить автопрозвон по картам",
                completed: false,
                connectedTo: [8],
                position: { x: 450, y: 350 }
            },
            {
                id: 8,
                text: "Получить 1 клиента",
                completed: false,
                connectedTo: [9],
                position: { x: 250, y: 500 }
            },
            {
                id: 9,
                text: "Получить 1 оплату",
                completed: false,
                connectedTo: [],
                position: { x: 650, y: 500 }
            }
        ]
    },
    {
        name: "React",
        achievements: [
            {
                id: 1,
                text: "Изучил основы React",
                completed: true,
                connectedTo: [2, 3],
                position: { x: 50, y: 50 }
            },
            {
                id: 2,
                text: "Освоил хуки (useState, useEffect)",
                completed: true,
                connectedTo: [4],
                position: { x: 300, y: 50 }
            },
            {
                id: 3,
                text: "Изучил React Router",
                completed: true,
                connectedTo: [4],
                position: { x: 50, y: 200 }
            },
            {
                id: 4,
                text: "Создал SPA приложение",
                completed: false,
                connectedTo: [5],
                position: { x: 300, y: 200 }
            },
            {
                id: 5,
                text: "Оптимизировал производительность React",
                completed: false,
                connectedTo: [],
                position: { x: 300, y: 350 }
            }
        ]
    },
    {
        name: "Спорт", 
        achievements: [
            {
                id: 1,
                text: "Начать регулярные тренировки",
                completed: true,
                connectedTo: [2, 3],
                position: { x: 50, y: 50 }
            },
            {
                id: 2,
                text: "Пожать 100кг на 6 раз",
                completed: false,
                connectedTo: [4],
                position: { x: 300, y: 50 }
            },
            {
                id: 3,
                text: "Пробежать 1 км без остановки",
                completed: true,
                connectedTo: [5],
                position: { x: 50, y: 200 }
            },
            {
                id: 4,
                text: "Пожать 120кг на 1 раз",
                completed: false,
                connectedTo: [],
                position: { x: 300, y: 200 }
            },
            {
                id: 5,
                text: "Пробежать 5 км",
                completed: false,
                connectedTo: [],
                position: { x: 50, y: 350 }
            }
        ]
    }
];
