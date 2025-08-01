import React from "react"
const { render } = require("@testing-library/react")
import MOCK_DATA from "../../components/mocks/mockResList.json"
import Body from "../Body.jsx"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should render The Body Component with Search", () => {
    render(<Body/>)
})