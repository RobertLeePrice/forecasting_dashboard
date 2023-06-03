function getInitials(name) {
  if (!name) return "";

  const [firstName, lastName] = name.split(" ");

  if (firstName && lastName) {
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  }

  return firstName ? firstName[0].toUpperCase() : lastName[0].toUpperCase();
}
