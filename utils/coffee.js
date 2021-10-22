const Coffee = require("../model/coffee");

//All coffee
const allCoffee = async () => Coffee.findAll({});
const addCoffee = async (coffee) => await Coffee.create(coffee);
const deleteAllCoffee = async () => await Coffee.destroy({truncate: true});

//One coffee
const oneCoffee = (id) => { return {}; };
const editCoffee =  (id) => { return {}; };
const deleteCoffee = async (id) => { return {}; };

module.exports = {
    allCoffee,
    oneCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
    deleteAllCoffee
};