import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send({});
}

export function createUser(
  request: Request<
    {
      id: string;
    },
    {},
    CreateUserDto,
    CreateUserQueryParams
  >,
  response: Response<User>
) {
  request.query.loginAfterCreate;
  request.params.id;
  request.user;
  return response.status(201).send({
    id: 1,
    username: "anson",
    email: "anson@ansonthedev.com",
  });
}
