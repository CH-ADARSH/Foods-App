import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header.jsx"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    // const loginButton = screen.getByRole('button'); // is recommended

    const loginButton = screen.getByRole('button', { name: 'LogIn' }); // is recommended

  // const loginButton = screen.getByText('Login'); // not recommended

    expect(loginButton).toBeInTheDocument();
});


it('Should render Header Component with cart items 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText('Cart (0 items)'); // is recommended

  expect(cartItems).toBeInTheDocument();
});

it('Should render Header Component with cart item', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); // is recommended

  expect(cartItems).toBeInTheDocument();
});

it('Should change Login Button to Logout on Click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

     const loginButton = screen.getByRole('button',{name:"LogIn"}); // is recommended
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button',{name:"LogOut"})
    expect(loginButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    
});