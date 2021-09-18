import { getNameInitials } from "./name";

describe('getNameInitials', () => {
  it('should return first characters of first and last name', () => {
    expect(getNameInitials('John Doe')).toStrictEqual('JD');
  });
  it('should return first two characters of username', () => {
    expect(getNameInitials('johndoe')).toStrictEqual('JO');
  })
})
