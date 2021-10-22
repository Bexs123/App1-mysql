const router = require("express").Router();
const { allCoffee, oneCoffee, addCoffee, editCoffee, deleteCoffee, deleteAllCoffee } = require("../utils/coffee");

//Routes operating on ALL coffee resources
router.get("/", async (req, res) => res.status(200).json({msg: "All coffee", data: await allCoffee()}));

router.post("/", async (req, res) => res.status(201).json({msg: "Add a coffee", data: await addCoffee(req.body)}));

router.delete("/", async (req, res) => res.status(200).json({msg: "Delete all coffee", data: await deleteAllCoffee}));

//Routes operating on ONE specific coffee resource
router.get("/:id", async (req, res) => res.status(200).json({msg: "One coffee", data: await oneCoffee()}));

router.put("/:id", async (req, res) => res.status(200).json({msg: "Edit one coffee", data: await editCoffee()}));

router.delete("/:id", async (req, res) => res.status(200).json({msg: "Delete one coffee", data: await deleteCoffee()}));

module.exports = router;