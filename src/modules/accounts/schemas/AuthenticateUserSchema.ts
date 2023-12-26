import { z } from "zod";
import { emailStringValidator, passwordStringValidator } from "../../../shared/utils/StringValidator";

const AuthenticateUserSchema = z.object({
  body: z.object({
    email: emailStringValidator,
    password: passwordStringValidator
  }),
})

type AuthenticateUserRequestType = z.infer<typeof AuthenticateUserSchema>['body'];

export { AuthenticateUserRequestType, AuthenticateUserSchema };