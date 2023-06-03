import { getInitials } from "../userHelpers";

describe("getInitials function", () => {
  it("should return initials for first and last name", () => {
    const userInfo = { first_name: "John", last_name: "Doe" };
    const initials = getInitials(userInfo);
    expect(initials).toBe("JD");
  });

  it("should return initials for first name only", () => {
    const userInfo = { first_name: "John" };
    const initials = getInitials(userInfo);
    expect(initials).toBe("J");
  });

  it("should return empty string if no name is provided", () => {
    const userInfo = {};
    const initials = getInitials(userInfo);
    expect(initials).toBe("");
  });
});
