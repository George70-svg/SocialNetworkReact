import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import filmReducer from "./filmReducer";
import friendsReducer from "./friendsReducer";

export let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1,
                    text: "Hi, how are you?",
                    likesCount: 15,
                    avatar: "https://youfriends.ru/public/promo_cache/chanel_logo_UCG8whNityNdZblPc_arHZ0g.png"
                },
                {id: 2,
                    text: "it's my first post",
                    likesCount: 20,
                    avatar: "https://pbs.twimg.com/media/Dz2w7QfX4AASPzL.jpg"
                },
                {id: 3,
                    text: "it's awesome",
                    likesCount: 2,
                    avatar: "https://uprostim.com/wp-content/uploads/2021/03/image018-95.jpg"
                },
            ],

            newPostText: "",
        },
        dialogsPage: {
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
                    messageDate: "22-10-2021 22:16",
                    avatar: "https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png"
                },

                {id: 2,
                    text: "у меня есть QR",
                    userName: "Максим Павлов",
                    messageDate: "22-10-2021 22:17",
                    avatar: "https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png"
                },

                {id: 3,
                    text: "Я на самом деле под вопросом, так как могу уехать в соликамск, но скорее всего не уеду",
                    userName: "Мария Сажина",
                    messageDate: "22-10-2021 22:23",
                    avatar: "https://i.pinimg.com/originals/8b/b1/e6/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg"
                },

                {id: 4,
                    text: "не знаю",
                    userName: "Владимир Буров",
                    messageDate: "22-10-2021 22:32",
                    avatar: "https://pbs.twimg.com/profile_images/1260892940165165056/DbnIwfQn_400x400.jpg"
                },

                {id: 5,
                    text: "У меня, наверное, не получится.",
                    userName: "Антон Сюраев",
                    messageDate: "22-10-2021 22:43",
                    avatar: "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/4f9d_6636722113216577541.jpg"
                },
            ],

            newMessageText: '',
        },
        filmPage:   {
            filmsDate: [
                {id: 5,
                    name: "Операция финал",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/78560127-754c-49d1-82f6-43efcbb223fb/1920x",
                    rating: "9"
                },

                {id: 5,
                    name: "Тем больнее падать",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e1aad75d-0a8a-4639-9f9d-1d1569003b4f/1920x",
                    rating: "6"

                },

                {id: 5,
                    name: "Мемуары гейши",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/27ef781a-b05e-4e34-8af6-d04df47f3b93/1920x",
                    rating: "9"
                },

                {id: 1,
                    name: "Армия воров",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/34066019-9905-4227-a5ac-e630253effe6/1920x",
                    rating: 8
                },

                {id: 2,
                    name: "В погоне за Бонни и Клайдом",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3a7b26f0-5c6e-4227-932b-46aeeb1bc674/1920x",
                    rating: 8
                },

                {id: 5,
                    name: "Армия мертвецов",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/931b0013-5186-4bf4-825f-3418752a65c2/1920x",
                    rating: "6"
                },

                {id: 5,
                    name: "Птичий короб",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/65f50025-a1ee-46da-a607-0a9162281403/1920x",
                    rating: "8"
                },

                {id: 5,
                    name: "Кроваво-красное небо",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/582e09e7-51ac-4806-8bff-b4d410be46e9/1920x",
                    rating: "5"
                },

                {id: 5,
                    name: "47 ронинов",
                    poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5bc68f1c-768f-4fa2-b5ae-80f3769cbdab/1920x",
                    rating: "8"
                },
            ],

            newFilmDate: {
                name: "",
                poster: "",
                rating: ""
            }
        },
        aside: {
            friendsList: [
                {id: "1",
                    avatar: "https://pbs.twimg.com/media/Dz2w7QfX4AASPzL.jpg",
                    name: "Яна"
                },

                {id: "3",
                    avatar: "https://pbs.twimg.com/profile_images/1260892940165165056/DbnIwfQn_400x400.jpg",
                    name: "Вова"
                },

                {id: "4",
                    avatar: "https://img.nickpic.host/3kthMb.md.jpg",
                    name: "Роман"
                },

                {id: "5",
                    avatar: "https://i.pinimg.com/originals/8b/b1/e6/8bb1e6f277f5325cdf4bb7c24a7414c4.jpg",
                    name: "Мария"
                },

                {id: "6",
                    avatar: "https://i01.fotocdn.net/s122/e7191cad2f5d6b50/user_l/2796060407.jpg",
                    name: "Софи"
                },

                {id: "7",
                    avatar: "https://media.sketchfab.com/avatars/ef6824b2e26b4f0d935be8635003e864/f769a2a14bda4462b1d3689647b508ea.png",
                    name: "Максим"
                },
            ]
        },
    },
    _callSubscriber() {
        console.log("State changed");
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    setState() {
        console.log("I dont have this method!!!");
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.filmPage = filmReducer(this._state.filmPage, action);
        this._state.aside = friendsReducer(this._state.aside, action);

        this._callSubscriber(this._state);
    },
}

//window.store = store;

//export default store;