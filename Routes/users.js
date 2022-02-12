import express from 'express'


import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router() //initialize our router

//all routes here are starting with /users
router.get('/', getUsers)

router.post('/', createUser)

// /user/2 -- retrive this value in callback => req.params{id: 2}
router.get('/:id', getUser )

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)

export default router