/********************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : Test Login Component
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : test/login.test.js
 * @overview    : Testing using jest and enzyme
 * @module      : Contains code to test form elements in login component 
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ********************************************************************************/
import { render } from "@testing-library/react";
import { Login } from "../pages/login";
import { shallow, configure } from "enzyme";
import "@testing-library/jest-dom/extend-expect";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Heading tags test", () => {
  it("givenTitleElementByTestId_whenRendered_shouldContainProperTextContent", () => {
    const { getByTestId } = render(<Login />);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("EMPLOYEE PAYROLL");
  });

  it("givenHeadingElementByTestId_whenRendered_shouldContainProperTextContent", () => {
    const { getByTestId } = render(<Login />);
    const header = getByTestId("signin");
    expect(header).toHaveTextContent("Sign In");
  });
});

describe("Login Form test", () => {
  test("givenFormElementByTestId_whenRendered_shouldBePresentInDocument", () => {
    const { getByTestId } = render(<Login />);
    const logo = getByTestId("logo");
    const form = getByTestId("form");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("submitButton");

    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test("givenFormElementByTestId_whenRendered_shouldContainProperTextContent", () => {
    const { getByTestId } = render(<Login />);
    const email = getByTestId("email");
    const password = getByTestId("password");

    expect(email).toHaveTextContent("User Email");
    expect(password).toHaveTextContent("password");
  });
});
