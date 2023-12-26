import { z } from "zod";
import { uuidStringValidator } from "../../../shared/utils/StringValidator";

const DeleteAccountSchema = z.object({
  params: z.object({
    id: uuidStringValidator,
  })
});

type DeleteAccountRequestType = z.infer<typeof DeleteAccountSchema>['params'];

export { DeleteAccountRequestType, DeleteAccountSchema }