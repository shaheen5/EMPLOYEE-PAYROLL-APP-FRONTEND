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
