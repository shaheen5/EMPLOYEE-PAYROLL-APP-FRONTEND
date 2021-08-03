/** ******************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : Test add Employee Component
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : test/addEmployees.test.js
 * @overview    : Testing using jest and enzyme
 * @module      : Contains code to test form elements in add employee component 
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ********************************************************************************/
import { render } from "@testing-library/react";
import { AddEmployee } from "../components/addEmployee";
import "@testing-library/jest-dom/extend-expect";


describe("Heading tags test", () => {

  it("givenElementByTestId_ShouldContainProperHeading", () => {
    const { getByTestId } = render(<AddEmployee />);
    const title = getByTestId("heading");
    expect(title).toHaveTextContent("Employee Details");
  });

  it("GivenWrongTitleContent_shouldGiveProperResult", () => {
    const { getByTestId } = render(<AddEmployee />);
    const title = getByTestId("heading");
    expect(title).not.toContain("Employee")
  });
});

describe("Employee Details Registration Form test", () => {
  test("givenElementsByTestId_WhenRendered_shouldContainAllElementsInDocument", () => {
    const { getByTestId } = render(<AddEmployee />);
    const form = getByTestId("form");
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const salary = getByTestId("salary");
    const department = getByTestId("department");
    const email = getByTestId("email");
    const gender = getByTestId("gender")
    const button = getByTestId("submitButton");

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(salary).toBeInTheDocument();
    expect(department).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test("givenElementsByTestId_WhenRendered_shouldContainProperValuesInForm", () => {
    const { getByTestId } = render(<AddEmployee />);
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const salary = getByTestId("salary");
    const department = getByTestId("department");
    const email = getByTestId("email");
    const gender = getByTestId("gender");

    expect(firstName).toHaveTextContent("First Name");
    expect(lastName).toHaveTextContent("Last Name");
    expect(salary).toHaveTextContent("Salary Amount");
    expect(department).toHaveTextContent("Department");
    expect(salary).toHaveTextContent("Salary");
    expect(email).toHaveTextContent("Email");
    expect(gender).toHaveTextContent("Gender");
  });
});
