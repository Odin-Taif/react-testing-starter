import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render a name", () => {
    //arrange
    render(<Greet name="Odin" />);

    //act
    const heading = screen.getByRole("heading");
    //assert
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/odin/i);
  });
});
