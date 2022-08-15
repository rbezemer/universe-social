import { render, screen } from '@testing-library/react';
import AppMenu from "./AppMenu";
import {BrowserRouter} from "react-router-dom";

test('renders the Body', () => {
    render(<AppMenu />, {wrapper: BrowserRouter});
    const homeElement = screen.getByText(/Home/i);
    expect(homeElement).toBeInTheDocument();
    const profileElement = screen.getByText(/Profile/i);
    expect(profileElement).toBeInTheDocument();

});