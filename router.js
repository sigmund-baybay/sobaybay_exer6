//import statements
import express from 'express';
import controller from './controller.js'

// router server
const router = express.Router();

//different routes 
router.post('/save-student',controller.saveStudent);
router.post('/update',controller.updateStudent);
router.post('/remove-user',controller.removeUser);
router.post('/remove-all-users',controller.removeAllUsers);

router.get('/user',controller.getUsers);
router.get('/members',controller.getMembers);

export default { router }
