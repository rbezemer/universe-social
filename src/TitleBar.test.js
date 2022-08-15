import { render, screen } from '@testing-library/react';
import TitleBar from './TitleBar';
import {BrowserRouter} from "react-router-dom";


test('renders the TitleBar', () => {
    render(<TitleBar />, {wrapper: BrowserRouter});
    const linkElement = screen.getByText(/Universe Social/i);
    expect(linkElement).toBeInTheDocument();
});