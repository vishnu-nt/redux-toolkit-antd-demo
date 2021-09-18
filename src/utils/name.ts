/**
 * Returns initials froms user name to display on Avatar
 * @example John Doe returns JD
 * @example John returns JO
 * @param {string} name User name
 * @returns {string}
 */
export const getNameInitials = (name: string = '') => {
  const [firstName, lastName] = name.split(' ');
  if (!firstName) return "";
  if (!!firstName && !!lastName) {
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  }
  return `${firstName.substring(0, 2).toUpperCase()}`;
};
