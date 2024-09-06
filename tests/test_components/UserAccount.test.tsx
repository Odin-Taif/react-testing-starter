// we will be testing the UserAccount component and apply the knowledge we learned so far.
//here we import the render and screen from react-testing.
//we use render to render the component in the mock enviroment. in our case it is jsdom.
//we use screen to get the element.

import { render, screen } from "@testing-library/react";
// let's import the component to be test.
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  //first test case | should return  the user name
  it("should render user name", () => {
    const user: User = { id: 1, name: "odin" };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  // second test case |  it should render edit button if user is admin
  it("it should render edit button if user is admin", () => {
    const user: User = { id: 1, name: "odin", isAdmin: true };
    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  // third test case |  it should Not render edit button if user is Not admin
  it("it should Not render edit button if user is Not admin", () => {
    const user: User = { id: 1, name: "odin" };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
