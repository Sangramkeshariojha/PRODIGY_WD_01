import { Request, Response } from "express";
import { randomUUID } from "crypto";

import { User } from "../types/user";
import { users } from "../data/users";
import { validateUserInput } from "../utils/validation";

// CREATE USER
export const createUser = (req: Request, res: Response): void => {
  const { name, email, age } = req.body;

  const validationError = validateUserInput(name, email, age);

  if (validationError) {
    res.status(400).json({
      error: validationError
    });
    return;
  }

  const id = randomUUID();

  const newUser: User = {
    id,
    name: name.trim(),
    email: email.trim(),
    age
  };

  users.set(id, newUser);

  res.status(201).json(newUser);
};

// GET ALL USERS
export const getUsers = (_req: Request, res: Response): void => {
  const allUsers = Array.from(users.values());

  res.status(200).json(allUsers);
};

// GET USER BY ID
export const getUserById = (req: Request, res: Response): void => {
  const id = req.params.id as string;

  const user = users.get(id);

  if (!user) {
    res.status(404).json({
      error: "User not found"
    });
    return;
  }

  res.status(200).json(user);
};

// UPDATE USER
export const updateUser = (req: Request, res: Response): void => {
  const id = req.params.id as string;
  const { name, email, age } = req.body;

  const existingUser = users.get(id);

  if (!existingUser) {
    res.status(404).json({
      error: "User not found"
    });
    return;
  }

  const validationError = validateUserInput(name, email, age);

  if (validationError) {
    res.status(400).json({
      error: validationError
    });
    return;
  }

  const updatedUser: User = {
    id,
    name: name.trim(),
    email: email.trim(),
    age
  };

  users.set(id, updatedUser);

  res.status(200).json(updatedUser);
};

// DELETE USER
export const deleteUser = (req: Request, res: Response): void => {
  const id = req.params.id as string;

  const userExists = users.has(id);

  if (!userExists) {
    res.status(404).json({
      error: "User not found"
    });
    return;
  }

  users.delete(id);

  res.status(204).send();
};