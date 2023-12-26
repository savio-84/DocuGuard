import { z } from "zod";
import { uuidStringValidator } from "../../../shared/utils/StringValidator";

const GetDocumentSchema = z.object({
  params: z.object({
    id: uuidStringValidator,
  })
});

type GetDocumentRequestType = z.infer<typeof GetDocumentSchema>[`params`];

export { GetDocumentSchema, GetDocumentRequestType };