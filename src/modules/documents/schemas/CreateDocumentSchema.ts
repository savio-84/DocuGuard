import { z } from "zod";
import { defaultStringValidator, uuidStringValidator } from "../../../shared/utils/StringValidator";

const CreateDocumentSchema = z.object({
  body: z.object({
    title: defaultStringValidator,
  })
});

type CreateDocumentRequestType = z.infer<typeof CreateDocumentSchema>['body'];

export { CreateDocumentSchema, CreateDocumentRequestType }