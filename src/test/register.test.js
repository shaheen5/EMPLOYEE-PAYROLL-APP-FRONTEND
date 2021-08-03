/********************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : Test Register Component
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : test/register.test.js
 * @overview    : Testing using jest and enzyme
 * @module      : Contains code to test form elements in register component 
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ********************************************************************************/
import { render } from "@testing-library/react";
import { Register } from "../pages/register";
import "@testing-library/jest-dom/extend-expect";



describe("Heading tags test", () => {
  it("givenAvtarElementByTestId_whenRendered_shouldBePresentInDocument", () => {
    const { getByTestId } = render(<Register />);
    const header = getByTestId("logo");
    expect(header).toBeInTheDocument();
  });
  it("givenTitleElementByTestId_whenRendered_shouldContainProperTextContent", () => {
    const { getByTestId } = render(<Register />);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("EMPLOYEE PAYROLL");
  });

  it("givenheadingTagElementByTestId_whenRendered_shouldContainProperTextContent", () => {
    const { getByTestId } = render(<Register />);
    const header = getByTestId("heading");
    expect(header).toHaveTextContent("Registration Form");
  });
});

describe("Register Form test", () => {
  test("givenElementsByTestId_WhenRendered_shouldContainAllElementsInDocument", () => {
    const { getByTestId } = render(<Register />);
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const logo = getByTestId("logo");
    const form = getByTestId("form");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("submitButton");

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test("givenElementsByTestId_WhenRendered_shouldContainProperValues", () => {
    const { getByTestId } = render(<Register />);
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const email = getByTestId("email");
    const password = getByTestId("password");

    expect(firstName).toHaveTextContent("First Name");
    expect(lastName).toHaveTextContent("Last Name");
    expect(email).toHaveTextContent("Email");
    expect(password).toHaveTextContent("Password");
  });
});

describe('Negative Test Form Component', () => {
  it('giveWrongnDataTestId_whenVisitedRegisterFormComponent_shouldNotRenderProperly', (done) => {
      const { queryByTestId } = render(<Register />);
      const form = queryByTestId('for');
      const firstname = queryByTestId('irstname');
      const lastname = queryByTestId('astname');
      const email = queryByTestId('emil');
      const password = queryByTestId('assword');
      const button = queryByTestId('butto')
      const text = queryByTestId('typogrphy');

      expect(form).not.toBeInTheDocument();
      expect(firstname).not.toBeInTheDocument();
      expect(lastname).not.toBeInTheDocument();
      expect(email).not.toBeInTheDocument();
      expect(password).not.toBeInTheDocument();
      expect(button).not.toBeInTheDocument();
      expect(text).not.toBeInTheDocument();
      done()
  })

  it('givenDataTestId_whenVisitedRegisterFormComponent_shouldNotBeNull', () => {
    const { getByTestId } = render(<Register />);
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const button = getByTestId("submitButton");

      expect(firstName).not.toBeNull();
      expect(lastName).not.toBeNull();
      expect(email).not.toBeNull();
      expect(password).not.toBeNull();
      expect(button).not.toBeNull();
    
  })
});
