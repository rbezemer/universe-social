import { render, screen } from '@testing-library/react';
import PostCard from "./PostCard";
import {Store} from "./model/store";
import {Post} from "./model/post";
import {User} from "./model/user";
import {BrowserRouter} from "react-router-dom";

beforeEach(() => {
    fetch.resetMocks();
    Store.registerModel('user', User)
});

test('renders the Post Content Card', () => {
    const postJson = {
        userId: 2,
        id: 15,
        title: "eveniet quod temporibus",
        body: "reprehenderit quos placeat"
    };
    const userJson = {
        id: 2,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    }
    const post = new Post(postJson)
    fetch.mockResponseOnce( () => {
        return new Promise( resolve => {
            resolve(new Response(JSON.stringify(userJson)));
        })
    });
    fetch.mockResponseOnce(JSON.stringify(userJson));
    const {container} = render( <PostCard contentData={post}/>, {wrapper: BrowserRouter});

    const title = screen.getByTestId('post-title');
    expect(title.text).toBe(postJson.name)

    const username = screen.getByTestId('post-username');
    expect(username.text).toBe(postJson.email)

    const content = screen.getByTestId('post-content');
    expect(content.firstChild.textContent).toBe(postJson.body)

});