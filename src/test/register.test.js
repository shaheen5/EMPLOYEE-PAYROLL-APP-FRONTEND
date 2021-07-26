import { render } from "@testing-library/react";
import { Register } from "../pages/register";
import { shallow, configure } from "enzyme";
import "@testing-library/jest-dom/extend-expect";



describe("Heading tags test", () => {
  it("givenAvtarElementByTestId_whenRendered_shouldBePresentInDocument", () => {
    const { getByTestId } = shallow(<Register />);
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
