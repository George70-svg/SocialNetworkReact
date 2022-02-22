const ADD_FILM = "filmReducer/ADD-FILM";

let initionalState = {
    filmsDate: [
        {id: 38,
            name: "Твоё имя",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/7bf0a50d-ae10-4c3a-9406-c231cbc69691/1920x",
            rating: "9",
        },

        {id: 37,
            name: "Тренер Картер",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/cffd108f-61ec-4acd-8520-aef0375a7d33/1920x",
            rating: "8",
        },

        {id: 36,
            name: "Не смотрите наверх",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/9c7a6c39-a9fc-4c15-a634-ada778f7b86c/1920x",
            rating: "9",
        },

        {id: 35,
            name: "Славные парни",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9f1da2f6-a8e4-46f3-989c-29bca0a05454/1920x",
            rating: "7",
        },

        {id: 34,
            name: "Донни Браско",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/ba350980-0135-431d-a938-46c55673ad2e/1920x",
            rating: "8",
        },

        {id: 33,
            name: "Талантливый мистер Рипли",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f998586a-2677-449f-b04b-d4c1f66e8e03/1920x",
            rating: "7",
        },

        {id: 32,
            name: "Совокупность лжи",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/fe2619cc-da00-4e75-9caf-aa8e28a681d8/1920x",
            rating: "7",
        },

        {id: 31,
            name: "Тройная граница",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/cf3085e0-9eb7-4190-bd2d-b57c38468cd0/1920x",
            rating: "8",
        },

        {id: 30,
            name: "Код доступа Кейптаун",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/a4bf505a-3c02-4422-b301-1ebceb27672f/1920x",
            rating: "8",
        },

        {id: 29,
            name: "Охотники на гангстеров",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3d3bd766-e8c7-4915-8ac0-9288db45e4cc/1920x",
            rating: "8",
        },

        {id: 28,
            name: "Кровавый алмаз",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/2c405904-13c7-4810-843e-faa79a600dad/1920x",
            rating: "9",
        },

        {id: 27,
            name: "Веном 2",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/bcb31ec6-ac53-4aed-8bee-69247d271c4c/1920x",
            rating: "7",
        },

        {id: 26,
            name: "Хранители",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/415260cf-0682-41cc-9be7-f58a7eacbd76/1920x",
            rating: "8",
        },

        {id: 25,
            name: "Снайпер",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0237e19e-26c2-409d-8651-f55ccc39d982/1920x",
            rating: "7",
        },

        {id: 24,
            name: "Тренировочный день",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/56a27b42-3a02-4c76-9645-ab8e562de091/1920x",
            rating: "8",
        },

        {id: 23,
            name: "Крёстный отец 3",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/10b25c61-5354-4f2f-8da9-1fa2780ecc30/1920x",
            rating: "9",
        },

        {id: 22,
            name: "Крёстный отец 2",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/33474b2a-d670-47c8-9cbe-51291847b6d4/1920x",
            rating: "9",
        },

        {id: 21,
            name: "Крёстный отец",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/1920x",
            rating: "9",
        },

        {id: 20,
            name: "Завтрак у Тиффани",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9f744099-3e33-493c-86b2-bc8829f4264b/1920x",
            rating: "9",
        },

        {id: 19,
            name: "Морпехи",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/31d4e0de-c0e4-4180-9fa7-9e18e38998e6/1920x",
            rating: "7",
        },

        {id: 18,
            name: "Вам письмо",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7a6983b7-144f-4206-af24-145c2baf3bff/1920x",
            rating: "8",
        },

        {id: 17,
            name: "Дорога перемен",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/1eab91d6-e82d-4170-94b3-ca019f68a6ee/1920x",
            rating: "9",
        },

        {id: 16,
            name: "История рыцаря",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/dd301ea4-1871-48fe-83e8-1ef8829e86df/1920x",
            rating: "8",
        },

        {id: 15,
            name: "Виновный",
            poster: "https://kinopoisk-ru.clstorage.net/15D2S2r30/33deda7SK/7htRvK7qLcqB7zW47Pf5ERgu4sxJy-F4M37R8H0rzARd-esRa2vgXRtB0HI4A64PJyDcztuXoxmIVhANctqFu98TXfXPlwGX_J5N3dWT0ERcSoO1OZLQWWpupb0IRrC4nVkjtKPzHP2b8FVrBTv3QmZ93Ir-__pt7BpNxNaawXp6CxEMfhagTpHbcKgw1ykRpG_2nH2W_Ug7c03ozQeoeEkFPxhLj-TdV2w1jw32S_ZKUbASRvv2kJjWHYQvjoUC1kf58MqGrL75X3w8ALPFtRxbTiBhonHsa-PRTOEbxIDt5YMYE4f4_RvoyfPp6hc6ki0ATpL37lQwksGIa7Ih6qoTscie5tBG_ft0zOxPUbGYS7qohdJJgJMHyUBVT2DY_eUvAAfnbEWf0MkTYXrX4mah9FpelyLctB7dIBPGYfJyb0HYOhog7tUvxDTMl32FuO-GJEGCRVyvDwE4UaMwzDVN5_QHgzRd3wTZ-zFqV2Ki8UAW4m_-DADqyQif0rXyRqMN5MJG3F6Nv_QYpOcVIYhz8ihJ3kVgt5exyIGrdCBFvffgixfEMVf0PRPJWste4pFwEsbnhqjg3ik8GwZh5uLrSfT6bsg-XTO4tNDn9aU0R7JUeb7F6Df3YTRVg7hc2c2PAL_fwO2rWMn7CUqLZvoR2Koi855UkBohZKeG0R6O7x0MjiqwKqlTZBxYQwUFvG_WMEm-aeBnO6lY0SfgBIWRk2j3cwjJkxDdqwmyw8pmCdSqWnMSKEDisXw3IhHmyl9x_JYCoKJ5w3DQ3Nfdabyf5mT5PuXMK3PpiOE3rOTFZffsU_uweS9IPasFDlf6jhn4ohqzglzQ6r1w9wKV1tbH-VB2tuTKcTMQSGxTjcGUC5KUQaY9KB_7dbhde_jUpTk3FAcDmJlTbOX7cdp3Cup5bEbmlxLkXGKl-L9OgYomf5kIuuIkxgE_2NCkF_mVtEceqH3eDcyHq6HM8T-gwC15G-w3ZxiNo-BRdwk6n65aeSh-fley4GQCeQh78r2S_lfpyPIGgHZVv6isMOsFUcxnHjjZNn1ULxcN5MG_-NBVibscV_dIYTcU2YcZMke6IlWERtqfYiAUFgFc6y4p8q5vEYw6bqSaCR_IQBwTeWHYH2rwtcYR4Ld3uXj1p2Ts5QWD-DcviOEDXN0X3arXDk5ZPOpaw2p8wJaNfIe6qW6---38wua4_vHb4MC81229XC_KxPmCjcy_a4F8SbP4cGXpxxADq5yJk0wpMzGOa2Z66QDeznPmHGTCTZSLhsly7lNlRMIq8M6h73Qo3H_lxQhXkixptpX85x8tCN0HLAwp5X_sOxs8_dcQoVcxTlfO_uFoel7HhiRIAgEQ75Il9u6jRbSCAjBiveuoXAQX9VEUj45QEbqBcI8LxZxFq6gERcmzgJ9bjME7NNmjhepDtk6VuOJad3qclOrVlMOSoda-C3FAhsbk1t3nEDAgI3HVRNsSSJm-WfAHf7kEZfNAzCERz4hTX3QdI9x5L3FyC76OXcQK8svy0NwKxZSzgklWLp81MLaW1N71e_BIDLOVCcjnDuAVQvGgC_u1fJmDlEz12bNkQw9IRTv4cWv5VgeyYvUwolrTHujoXh2wPxbJnsYf-czODsB6jd_YmASrbZlEd96owTadsBNPIdRFM0TIteXPVHN7zElbcNlf3X6TXlLdaB4aY5KI-IqFcMMGoV56X_XIOh6k6pU3HATUq3G9VF_KZDVejcwjh_20eYvUfCVJ__hvw2Rxy-zZC4nuY6ZGAfR6Uh-uIJROFYiX_iG6YtNJYLqGfNqZp6DEAE8hidiHOviJSr1Yt3sNUI0r6HTRPWt8z9vMhSvk3fcVSneKCoEojkpTphTkDhFsr7YFYnrPBWhCRqBaHUugyAz_eQXkf860ZdJxpPPrKWgJt0B0iYkDsAfr5HEv0HlnfT4bMvqJRMbiO2LcmMKFfH9OSer6383cHubszgnLcLzoq3WNzG9uFG02PaRn441UZfPoYAlllwhHe9wJW3hJ84HScz7SXSBWGr-KFOgeHRhPMjGGeiNJ1DICdCKVM9BUyDt9zZT_stC5-oXolxvB_A0rxFSthXusA8fsQSfIqS_lyofKEgFoiuJ7pphYOpVcuzJdujJvbagublzmvatQhEj7TQ0IkxowVRbJvOufXcgZUzRs7bWfcAt7WOUv0C33TXbHenpd9KJy86bMBP5ZWJOSmf5WW2XQuqpkyv0rzByMt9FFZP-CoJme6XQDY0nYfa_IBMEd_zRvQ_hNl8jlD5lSmzp-XYBOcvvyXAAODfznImEa2teJ6IrqXK6dPyiErF9NUTwf-kSRMnXUn3fJcP2LrFwtwaP8O9_oBTtQ8RcZQo--zpWABh7fHuw0-hUYG04hBsJfdXj6CvS24U8cBCBXEcnYj74wkR6FMOsXqcABR7iMLbWLLB__8H0DyFlzEabTPmb9sNoqA_LE_HLxMDsq4SYqFxms_mboEtUvWAyo-4lVaIu-RDmKQXT7GyW0fZ-YDGW9j-Sb14B9F0xhY3XOE672ASQO0keCGESaiZwL0iEqflNtKAYySFaFM1yQNOultRQHQmxJ-nVoIwupcJlDECx9GQfwVwNAZZfkiXdtJgfeAi2w8vpf3lQw6lW0N6pdnu4f6dRqlvxSpTsYkKj7TaUIUx60uQ4JxJePsYwZh_h0KdGjLM9rmEET4EHnEXYTBsZR8FbqHzogXE7xrAu-7ZbCS_X0tjrQYjG3JMiwv-VRvI_6NAWqRcQ382GMOZuQwGVNB6zLn5z1G9zde0Ved9py3bBG9s_SmATmXWQ_CrmW2tf5xPoCqP6N62yEUD9ZEagXCsgRjpU0dzNdvE1D6FzB8ZeUe8vYQS90VfPNNmM-8lE4qsoLamTcOqHgzx6RhuarRfSOaohOFTfowIAj6Q0QG-5g5boRqDsLWUj912BAdWk7hNP7QH1DTLFzZTov2oYdfHZij4L87MK8#DSD",
            rating: "7",
        },

        {id: 14,
            name: "Двадцать одно",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d399b9bf-a61c-405b-a48d-51867da1be2e/1920x",
            rating: "7",
        },

        {id: 13,
            name: "#живой",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/28eb3cec-b7b9-4ab0-8ce3-bbdbdeb0fdfc/1920x",
            rating: "7",
        },

        {id: 12,
            name: "Не пойман — не вор",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/b6600325-7666-4da8-8a8d-7db4c55ae1cd/1920x",
            rating: "8",
        },

        {id: 11,
            name: "Красное уведомление",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/0c0262f1-ce51-446d-9cd8-5468e9e8b833/1920x",
            rating: "5",
        },

        {id: 10,
            name: "Невероятная история Острова роз",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/da8f24b6-4dbd-4ab0-89ec-28a9143fac48/1920x",
            rating: "9",
        },

        {id: 9,
            name: "Операция финал",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/78560127-754c-49d1-82f6-43efcbb223fb/1920x",
            rating: "9",
        },

        {id: 8,
            name: "Тем больнее падать",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/e1aad75d-0a8a-4639-9f9d-1d1569003b4f/1920x",
            rating: "6",
        },

        {id: 7,
            name: "Мемуары гейши",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/27ef781a-b05e-4e34-8af6-d04df47f3b93/1920x",
            rating: "9",
        },

        {id: 6,
            name: "Армия воров",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/34066019-9905-4227-a5ac-e630253effe6/1920x",
            rating: 8,
        },

        {id: 5,
            name: "В погоне за Бонни и Клайдом",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3a7b26f0-5c6e-4227-932b-46aeeb1bc674/1920x",
            rating: 8,
        },

        {id: 4,
            name: "Армия мертвецов",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/931b0013-5186-4bf4-825f-3418752a65c2/1920x",
            rating: "6",
        },

        {id: 3,
            name: "Птичий короб",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/65f50025-a1ee-46da-a607-0a9162281403/1920x",
            rating: "8",
        },

        {id: 2,
            name: "Кроваво-красное небо",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/582e09e7-51ac-4806-8bff-b4d410be46e9/1920x",
            rating: "5",
        },

        {id: 1,
            name: "47 ронинов",
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5bc68f1c-768f-4fa2-b5ae-80f3769cbdab/1920x",
            rating: "8",
        },
    ],

    newFilmDate: {
        name: "",
        poster: "",
        rating: ""
    }
};

const filmReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_FILM: {
            let stateCopy = {
                ...state,
                filmsDate: [...state.filmsDate]
            };

            //Проверка, что название фильма не пустое значение
            if (action.name === "" || action.name === undefined || action.name === null) return state;
            //Проверка, что url картинки начинается с http
            if (action.poster.slice(0, 4) !== 'http') return state;
            //Проверка, что название картинки не пустое значение
            if (action.poster === "" || action.poster === undefined || action.poster === null) return state;
            //Проверка, что рэйтинг фильма не пустое значение
            if (action.rating === "" || action.rating === undefined || action.rating === null) return state;

            let newFilmDate = {
                id: 5,
                name: action.name,
                poster: action.poster,
                rating: action.rating
            }

            stateCopy.filmsDate.unshift(newFilmDate);
            stateCopy.newFilmDate = {
                id: 5,
                name: "",
                poster: "",
                rating: ""
            };
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addFilmCreator = (filmName, poster, rating) =>
    ({type: ADD_FILM, name: filmName, poster: poster, rating: rating});

export default filmReducer;