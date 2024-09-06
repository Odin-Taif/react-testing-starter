import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";
describe("UserList", () => {
  // no user if array is empty
  it("should render no user when users array is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  // list of users and each user is link with href attribute
  it("should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "Odin" },
      { id: 2, name: "Mike" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
