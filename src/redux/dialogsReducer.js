const ADD_MESSAGE = "dialogsReducer/ADD-MESSAGE";

let initionalState = {
    dialogsDate: [
        {id: 1,
            name: "Лига выживших диснеевских принцесс",
            avatar: "https://natalyland.ru/wp-content/uploads/b/e/8/be86998f3a51862b04e6e9963e202f90.jpeg"
        },
        {id: 2,
            name: "Владимир Буров",
            avatar: "https://pbs.twimg.com/profile_images/1260892940165165056/DbnIwfQn_400x400.jpg"
        },
        {id: 3,
            name: "Роман Макаров",
            avatar: "https://img.nickpic.host/3kthMb.md.jpg"
        },
        {id: 4,
            name: "Максим Павлов",
            avatar: "https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png"
        },
        {id: 5,
            name: "Мария Сажина",
            avatar: "https://i.pinimg.com/originals/8b/b1/e6/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg"
        },
        {id: 6,
            name: "Софи Колчина",
            avatar: "https://i01.fotocdn.net/s122/e7191cad2f5d6b50/user_l/2796060407.jpg"
        },
        {id: 7,
            name: "Матмоделирование ХТС",
            avatar: "https://pstu.ru/_images/enrollee/htf/htf.jpg"}
    ],

    messagesData: [
        {id: 1,
            text: "Это будет в воскресенье 31 октября в 14:00",
            userName: "Максим Павлов",
            messageDate: "17:43 16.2.2022",
            avatar: "https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png"
        },

        {id: 2,
            text: "у меня есть QR",
            userName: "Максим Павлов",
            messageDate: "17:43 16.2.2022",
            avatar: "https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png"
        },

        {id: 3,
            text: "Я на самом деле под вопросом, так как могу уехать в соликамск, но скорее всего не уеду",
            userName: "Мария Сажина",
            messageDate: "17:45 16.2.2022",
            avatar: "https://i.pinimg.com/originals/8b/b1/e6/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg"
        },

        {id: 4,
            text: "не знаю",
            userName: "Владимир Буров",
            messageDate: "17:51 16.2.2022",
            avatar: "https://pbs.twimg.com/profile_images/1260892940165165056/DbnIwfQn_400x400.jpg"
        },

        {id: 5,
            text: "У меня, наверное, не получится.",
            userName: "Антон Сюраев",
            messageDate: "17:54 16.2.2022",
            avatar: "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/4f9d_6636722113216577541.jpg"
        },
    ],

    newMessageText: '',
};

const dialogsReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {
                ...state,
                messagesData: [...state.messagesData]
            };

            let messageText = action.messageText;
            let currentTime = new Date()
            let time = `${currentTime.getHours()}:${currentTime.getMinutes()} ${currentTime.getDate()}.${currentTime.getMonth() + 1}.${currentTime.getFullYear()}`

            if (messageText === "" || messageText === undefined || messageText === null) return state;

            let newMessage = {
                id: 5,
                userName: "Антон Сюраев",
                messageDate: time,
                text: messageText,
                avatar: "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/4f9d_6636722113216577541.jpg"
            }

            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }

        default:
            return state;
    }
}

export const addMessage = (messageText) => ({type: ADD_MESSAGE, messageText});

export default dialogsReducer;