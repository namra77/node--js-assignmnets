import express from 'express';
import {
  getAllItems,
  getAddForm,
  addItem,
  getEditForm,
  updateItem,
  deleteItem,
} from '../controllers/itemController.js';

const router = express.Router();

// Home page (list all items)
router.get('/', getAllItems);

// Add a new item
router.get('/add', getAddForm);
router.post('/add', addItem);

// Edit an item
router.get('/edit/:id', getEditForm);
router.post('/edit/:id', updateItem);

// Delete an item
router.post('/delete/:id', deleteItem);

export default router;