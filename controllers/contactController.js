const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
})
//@desc get single contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
})
//@desc create new contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler (async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        throw new Error('Name, email, and phone fields are required');
    }else {
        const contact = new Contact({
            name,
            email,
            phone
        });
        const createdContact = await contact.save();
        res.status(201).json(createdContact);
    }
});
//@desc update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
        contact.name = req.body.name || contact.name;
        contact.email = req.body.email || contact.email;
        contact.phone = req.body.phone || contact.phone;
        const updatedContact = await contact.save();
        res.status(200).json(updatedContact);
    } else {
        res.status(404);
        throw new Error('Contact not found');
    }
})
//@desc delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler (async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    if (contact) {
        res.status(200).json({message: 'Contact deleted'});
    }
    else {
        res.status(404);
        throw new Error('Contact not found');
    }
})

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };