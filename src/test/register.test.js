import { render } from "@testing-library/react";
import { Register } from "../pages/register";
import { shallow, configure } from "enzyme";
import "@testing-library/jest-dom/extend-expect";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Heading tags test", () => {
  it("render signup logo", () => {
    const { getByTestId } = render(<Register />);
    const header = getByTestId("logo");
    expect(header).toBeInTheDocument();
  });
  it("render title element", () => {
    const { getByTestId } = render(<Register />);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("EMPLOYEE PAYROLL");
  });

  it("render header h2", () => {
    const { getByTestId } = render(<Register />);
    const header = getByTestId("heading");
    expect(header).toHaveTextContent("Registration Form");
  });
});

describe("Register Form test", () => {
  test("check if form displays", () => {
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

  test("check elements value", () => {
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
