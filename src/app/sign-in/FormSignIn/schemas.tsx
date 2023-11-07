import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email('Digite um email válido'),

  password: z
    .string()
    .min(10, {
      message: 'A descrição deve conter mais de 10 caracteres.',
    })
    .max(100, {
      message: 'A descrição deve conter menos de 100 caracteres.',
    }),
})
