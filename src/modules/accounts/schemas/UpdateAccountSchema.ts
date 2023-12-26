import { z } from "zod";
import { defaultStringValidator, emailStringValidator, passwordStringValidator, uuidStringValidator } from "../../../shared/utils/StringValidator";

const UpdateAccountSchema = z.object({
  body: z.object({
    name: defaultStringValidator.nullable(),
    email: emailStringValidator.nullable(),
    password: passwordStringValidator.nullable(),
  }),
  params: z.object({
    id: uuidStringValidator
  })
})

type UpdateAccountRequestBody = z.infer<typeof UpdateAccountSchema>['body'];
type UpdateAccountRequestParams = z.infer<typeof UpdateAccountSchema>['params'];

export { UpdateAccountRequestBody, UpdateAccountRequestParams, UpdateAccountSchema };