module.exports = (sequalize, type) => {
  return sequalize.define("user", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    password: type.STRING,
  });
};
