import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact Us Component", () => {
    
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // ASSERTION
    expect(heading).toBeInTheDocument();
})

test("Should load Button in Contact component", () => {
    
    render(<Contact />);
    const button = screen.getByRole("button");

    // ASSERTION
    expect(button).toBeInTheDocument();
})

test("Should load PlaceHolder Name in Contact component", () => {
    
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");

    // ASSERTION
    expect(inputName).toBeInTheDocument();
})