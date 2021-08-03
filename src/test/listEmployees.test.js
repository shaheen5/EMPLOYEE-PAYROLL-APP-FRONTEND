/** ******************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : Test List Employees Component
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : test/listEmployees.test.js
 * @overview    : Testing using jest and enzyme
 * @module      : Contains code to test table elements in list component 
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ********************************************************************************/
import { render } from "@testing-library/react";
import { ListEmployees } from "../components/listEmployees";
import "@testing-library/jest-dom/extend-expect";

describe("Test For Employee Details Table", () => {
    test("givenElementsByTestId_whenRendered_shouldBePresentInDocument", () => {
      const { getByTestId } = render(<ListEmployees />);
      const tableContainer = getByTestId("tableContainer");
      const table = getByTestId("table");
      const tableRowHeader = getByTestId("tableRowHeader");
      const tableBody = getByTestId("tableBody");
  
  
      expect(tableContainer).toBeInTheDocument();
      expect(table).toBeInTheDocument();
      expect(tableRowHeader).toBeInTheDocument();
      expect(tableBody).toBeInTheDocument();
     
    });
  
    test("givenRowElementsByTestId_whenRendered_shouldBePresentInDocument", () => {
      const { getByTestId } = render(<ListEmployees />);
      const firstName = getByTestId("firstName");
      const lastName = getByTestId("lastName");
      const salary = getByTestId("salary");
      const department = getByTestId("department");
      const email = getByTestId("email");
      const gender = getByTestId("gender");
  
      expect(firstName).toBeInTheDocument();
      expect(lastName).toBeInTheDocument();
      expect(salary).toBeInTheDocument();
      expect(department).toBeInTheDocument();
      expect(gender).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });
  
  describe("Negative Test For Table Elements",()=>{
    test("givenWrongRowElementsByTestId_whenRendered_shouldNotBePresentInDocument", () => {
      const { queryByTestId } = render(<ListEmployees />);
      const firstName = queryByTestId("Name");
      const lastName = queryByTestId("last");
      const salary = queryByTestId("sal");
      const department = queryByTestId("dept");
      const email = queryByTestId("emai");
      const gender = queryByTestId("gen");
  
      expect(firstName).not.toBeInTheDocument();
      expect(lastName).not.toBeInTheDocument();
      expect(salary).not.toBeInTheDocument();
      expect(department).not.toBeInTheDocument();
      expect(gender).not.toBeInTheDocument();
      expect(email).not.toBeInTheDocument();
    });

    it('givenTableHeadingDataByTestId_whenRendered_shouldNotBeNull', () => {
      const { getByTestId } = render(<ListEmployees />);
      const firstname = getByTestId('firstName');
      const lastname = getByTestId('lastName');
      const email = getByTestId('email');
      const department = getByTestId("department");
      const salary = getByTestId("salary");
      const gender = getByTestId("gender");
  
  
      expect(firstname).not.toBeNull();
      expect(lastname).not.toBeNull();
      expect(email).not.toBeNull();
      expect(department).not.toBeNull();
      expect(salary).not.toBeNull();
      expect(gender).not.toBeNull();
    })
  })