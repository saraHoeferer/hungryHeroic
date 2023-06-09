module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("items", {
    item_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    item_name: {
      type: Sequelize.STRING
    }
  },{
    timestamps: false
});

  return Item;
};
