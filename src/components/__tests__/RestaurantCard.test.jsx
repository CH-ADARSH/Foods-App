import { render,screen } from "@testing-library/react"
import ResturantCard from "../ResturantCard"
import React from "react";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

it("It should render RestaurantCard component with props data", () => {
    render(<ResturantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Theobroma")

    expect(name).toBeInTheDocument()
})