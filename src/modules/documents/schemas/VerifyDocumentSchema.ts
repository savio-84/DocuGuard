import { z } from "zod";
import { uuidStringValidator } from "../../../shared/utils/StringValidator";

const VerifyDocumentSchema = z.object({
  params: z.object({
    id: uuidStringValidator
  })
})

type VerifyDocumentRequestType = z.infer<typeof VerifyDocumentSchema>['params'];

export { VerifyDocumentRequestType, VerifyDocumentSchema }