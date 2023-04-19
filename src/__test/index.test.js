import { render,screen,logRoles} from "@testing-library/react";
import React from "react";
import Home from "./Home";


describe('Home Page',()=>{

  test('Home This is My first test case ',()=>{ 
  render(<Home/>);
  const linkElement  =  screen.getByText(/mahesh/i);
  expect(linkElement).toBeInTheDocument();

   
  })  

test('Home This is My first test case ',()=>{ 
  render(<Home/>);
  const linkElement  =  screen.getByText(/malik/i);
  expect(linkElement).toBeInTheDocument();
   
) })