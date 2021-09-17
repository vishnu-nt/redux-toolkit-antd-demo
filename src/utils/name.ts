export const getNameInitials = (name: string = '') => {
  const [firstName, lastName] = name.split(' ');
  if (!firstName) return "";
  if (!!firstName && !!lastName) {
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  }
  return `${firstName.substring(0, 2).toUpperCase()}`;
};
