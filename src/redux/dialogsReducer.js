import avatar1 from '../img/commonAvatar/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg'
import avatar2 from '../img/commonAvatar/3kthMb.md.jpg'
import avatar3 from '../img/commonAvatar/2796060407.jpg'
import avatar4 from '../img/commonAvatar/be86998f3a51862b04e6e9963e202f90.jpeg'
import avatar5 from '../img/commonAvatar/f769a2a14bda4462b1d3689647b508ea.png'
import avatar6 from '../img/commonAvatar/unnamed.jpg'
import avatar7 from '../img/commonAvatar/8a21f30ab4b823c23261.png'
import avatar8 from '../img/commonAvatar/4f9d_6636722113216577541.jpg'

const ADD_MESSAGE = "dialogsReducer/ADD-MESSAGE";

let initionalState = {
    dialogsDate: [
        {id: 1,
            name: "Лига выживших диснеевских принцесс",
            avatar: avatar4
        },
        {id: 2,
            name: "Владимир Буров",
            avatar: avatar6
        },
        {id: 3,
            name: "Роман Макаров",
            avatar: avatar2
        },
        {id: 4,
            name: "Максим Павлов",
            avatar: avatar5
        },
        {id: 5,
            name: "Мария Сажина",
            avatar: avatar1
        },
        {id: 6,
            name: "Софи Колчина",
            avatar: avatar3
        },
        {id: 7,
            name: "Матмоделирование ХТС",
            avatar: avatar7
        }
    ],

    messagesData: [
        {id: 1,
            text: "Это будет в воскресенье 31 октября в 14:00",
            userName: "Максим Павлов",
            messageDate: "17:43 16.2.2022",
            avatar: avatar5
        },

        {id: 2,
            text: "у меня есть QR",
            userName: "Максим Павлов",
            messageDate: "17:43 16.2.2022",
            avatar: avatar5
        },

        {id: 3,
            text: "Я на самом деле под вопросом, так как могу уехать в соликамск, но скорее всего не уеду",
            userName: "Мария Сажина",
            messageDate: "17:45 16.2.2022",
            avatar: avatar1
        },

        {id: 4,
            text: "не знаю",
            userName: "Владимир Буров",
            messageDate: "17:51 16.2.2022",
            avatar: avatar6
        },

        {id: 5,
            text: "У меня, наверное, не получится.",
            userName: "Антон Сюраев",
            messageDate: "17:54 16.2.2022",
            avatar: avatar8
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

            let currentMinute
            let messageText = action.messageText;
            let currentTime = new Date()
            if (currentTime.getMinutes() < 10) {
                currentMinute = `0${currentTime.getMinutes()}`
            } else {
                currentMinute = currentTime.getMinutes()
            }
            let time = `${currentTime.getHours()}:${currentMinute} ${currentTime.getDate()}.${currentTime.getMonth() + 1}.${currentTime.getFullYear()}`

            if (messageText === "" || messageText === undefined || messageText === null) return state;

            let newMessage = {
                id: 5,
                userName: "Антон Сюраев",
                messageDate: time,
                text: messageText,
                avatar: avatar8
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