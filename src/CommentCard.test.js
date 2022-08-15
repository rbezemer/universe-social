import {render, screen} from '@testing-library/react';
import CommentCard from "./CommentCard";
import {Store} from "./model/store";
import {Comment} from "./model/comment";


beforeEach(() => {
    fetch.resetMocks();
    Store.registerModel('comment', Comment)
});

test('renders the CommentCard', () => {
    const commentJson = {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos"
    };
    const comment = new Comment(commentJson)
    render(<CommentCard contentData={comment}/>);

    const title = screen.getByTestId('comment-title');
    expect(title.textContent).toBe(commentJson.name)

    const username = screen.getByTestId('comment-username');
    expect(username.textContent).toBe(commentJson.email)

    const content = screen.getByTestId('comment-content');
    expect(content.textContent).toBe(commentJson.body)

});