import profileReducer, {addPost, deletePost} from "./profileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    postsData: [
        {id: 1,
            text: "Hi, how are you?",
            likesCount: 15,
            avatar: "https://i08.fotocdn.net/s123/1a152e8b84fe2ebe/user_l/2811351276.jpg"
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
}

test('new length posts should be increment', () => {
    let action = addPost('My first react test')

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(4)
});

test('new post text should be added', () => {
    let action = addPost('My first react test')

    let newState = profileReducer(state, action)

    expect(newState.postsData[0].text).toBe('My first react test')
});

test('new length posts should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(2)
});

test('new length posts don`t change if id is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action)

    expect(newState.postsData.length).toBe(3)
});