import { z } from "zod";
import { defaultStringValidator, emailStringValidator, passwordStringValidator } from '../../../shared/utils/StringValidator';

const CreateAccountSchema = z.object({
  body: z.object({
    name: defaultStringValidator,
    email: emailStringValidator,
    password: passwordStringValidator,
  })
})

type CreateAccountRequestBodyType = z.infer<typeof CreateAccountSchema>['body'];

export { CreateAccountSchema, CreateAccountRequestBodyType }