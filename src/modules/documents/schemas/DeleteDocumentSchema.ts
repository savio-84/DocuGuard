import { z } from "zod";
import { uuidStringValidator } from "../../../shared/utils/StringValidator";

const DeleteDocumentSchema = z.object({
  params: z.object({
    id: uuidStringValidator,
  })
})

type DeleteDocumentRequestType = z.infer<typeof DeleteDocumentSchema>[`params`];

export { DeleteDocumentSchema, DeleteDocumentRequestType };