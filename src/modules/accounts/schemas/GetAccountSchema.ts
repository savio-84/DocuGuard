import { z } from "zod";
import { uuidStringValidator } from "../../../shared/utils/StringValidator";

const GetAccountSchema = z.object({
  params: z.object({
    id: uuidStringValidator,
  })
})

type GetAccountRequestType = z.infer<typeof GetAccountSchema>['params']

export { GetAccountSchema, GetAccountRequestType };