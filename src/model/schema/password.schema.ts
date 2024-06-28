import { z } from "zod";

const forgotPasswordFormSchema = z
  .object({
    emailAddress: z.string().email(),
    newPassword: z.string().min(8),
    confirmNewPassword: z.string().min(8),
  })
  .refine(
    (data) => {
      return data.newPassword === data.confirmNewPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmNewPassword"],
    }
  );

export default forgotPasswordFormSchema;
