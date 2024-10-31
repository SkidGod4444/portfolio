import { z } from "zod";
import { Profanity } from "profanity-validator";

const profanity = new Profanity({
  heat: 0.5, // lower heat for more profanity detection. Wanna know more? https://profanity.devwtf.in/
});

const profanityCheck = async (value: string) => {
  const result = await profanity.validateField(value);
  return result.isValid;
};

export const postSchema = z.object({
  msgbox: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .refine(async (val) => await profanityCheck(val), {
      message: "Fuck, You can't just hate me here darling!",
    }),
});

export type PostSchemaT = z.infer<typeof postSchema>;
