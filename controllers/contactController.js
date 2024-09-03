const asyncHandler = require('express-async-handler');

//@desc get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
})
//@desc get single contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Get contact ${req.params.id}` });
})
//@desc create new contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler (async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        throw new Error('Name, email, and phone fields are required');
    }
    res.status(201).json({ message: 'Create new contact' });
});
//@desc update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` });
})
//@desc delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` });
})

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };