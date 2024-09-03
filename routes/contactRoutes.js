const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({ message: 'Contacts' });
});
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Contact ${req.params.id}` });
});
router.route("/").post((req, res) => {
   res.status(201).json({ message: 'Contact created' });
});
router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Contact ${req.params.id} updated` });
});
router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Contact ${req.params.id} deleted` });
});

module.exports = router;