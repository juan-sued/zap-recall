import { z } from 'zod'

export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(4, {
        message: 'O nome deve conter mais de 3 caracteres.',
      })
      .max(60, {
        message: 'O nome deve conter menos de 60 caracteres.',
      }),
    email: z.string().trim().email('Digite um email válido'),

    password: z
      .string()
      .trim()
      .min(4, {
        message: 'A senha deve conter mais de 4 caracteres.',
      })
      .max(40, {
        message: 'A senha deve conter menos de 40 caracteres.',
      }),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })
