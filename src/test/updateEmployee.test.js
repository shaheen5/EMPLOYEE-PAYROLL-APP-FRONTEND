import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import  UpdateEmployee from "../components/updateEmployee";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })


describe("Heading tags test", () => {

  it("givenElementById_ShouldContainProperHeading", () => {
    const wrapper = shallow(<UpdateEmployee />)
    expect(wrapper.find('#heading').text()).toEqual('Employee Details')
  });

  it("GivenWrongTitleContent_shouldGiveProperResult", () => {
    const component = shallow(<UpdateEmployee />)
        expect(component.find('#heading').text()).not.toEqual('ABC');
  });
});

describe("Employee Details Update Form test", () => {
  test("givenElementsByTestId_WhenRendered_shouldContainAllElementsInDocument", () => {
    const { getByTestId } = render(<UpdateEmployee />);
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
    const { getByTestId } = render(<UpdateEmployee />);
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



