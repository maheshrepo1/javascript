import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {Bottombar} from '../src/components/bottombar/bottombar'

test('This is my first test case',()=>{
    render(<Bottombar/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

it('This is my first test case',()=>{
    render(<Bottombar/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});


