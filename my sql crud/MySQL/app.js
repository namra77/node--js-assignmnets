import express from 'express';
import db from './config/db.js';
import createUserTable from './model/user/table.js';
import createRolesTable from './model/roles/table.js';
import { getAllUsers, createUser } from './controllers/UserController.js';
import { getAllRoles, createRole } from './controllers/RoleController.js';




// Initialize tables
createUserTable;
createRolesTable;

// Create an Express app
const app = express();
const PORT = 3000;

// Use built-in JSON middleware (replaces body-parser)
app.use(express.json());



// Define routes

// User routes
app.get('/users', getAllUsers);
app.post('/users', createUser);

// Role routes
app.get('/roles', getAllRoles);
app.post('/roles', createRole);

// Example usage of queries
(async () => {
    try {

        // Insert a role
        const roleId = await rolesQueries.insertRole({ name: 'Admin' });
        console.log('Inserted role with ID:', roleId);

        // Insert a user
        const userId = await userQueries.insertUser({
            name: 'Namra mahmood',
            email: 'namra@example.com',
            phone: '1234567890',
            address: '123 Main St',
            role_id: roleId
        });
        console.log('Inserted user with ID:', userId);

        // Fetch all users
        const users = await userQueries.selectAllUsers();
        console.log('All users:', users);

        // Fetch all roles
        const roles = await rolesQueries.selectAllRoles();
        console.log('All roles:', roles);

    //     // Delete a user
    //     const deletedRows = await userQueries.deleteUser(userId);
    //     console.log('Deleted user rows:', deletedRows);
    } catch (err) {
        console.error('Error:', err);
    }

    
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

})();