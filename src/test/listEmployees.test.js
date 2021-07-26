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
  