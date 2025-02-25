import Item from '../models/Item.js';

// Get all items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.render('index', { items });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Get form to add a new item
export const getAddForm = (req, res) => {
  res.render('add');
};

// Add a new item
export const addItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    await newItem.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Get form to edit an item
export const getEditForm = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.render('edit', { item });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Update an item
export const updateItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    await Item.findByIdAndUpdate(req.params.id, { name, description });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Delete an item
export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};