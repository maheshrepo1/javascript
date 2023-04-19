import {render,screen} from "@testing-library/react";
import App from "./App";

test('render learn react link',()=>{
    render(<App/>);
    const LinkElement = screen.getByText(/Empty Cart/i)
    expect(LinkElement).toBeInTheDocument();
})
