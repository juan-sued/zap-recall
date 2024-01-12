import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email('Digite um email válido'),

  password: z
    .string()
    .min(5, {
      message: 'A senha deve conter mais de 4 caracteres.',
    })
    .max(30, {
      message: 'A senha deve conter menos de 30 caracteres.',
    }),
})
