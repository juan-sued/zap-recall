import { z } from 'zod'

export const zapFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'O título deve conter mais de 2 caracteres.',
    })
    .max(30, {
      message: 'O título deve conter menos de 30 caracteres.',
    }),

  description: z
    .string()
    .min(10, {
      message: 'A descrição deve conter mais de 10 caracteres.',
    })
    .max(100, {
      message: 'A descrição deve conter menos de 100 caracteres.',
    }),

  category: z.string().optional(),
  newCategory: z
    .string()
    .max(30, {
      message: 'A categoria deve conter menos de 30 caracteres.',
    })
    .optional(),

  questions: z.array(
    z.object({
      question: z
        .string()
        .min(10, {
          message: 'A pergunta deve conter mais de 10 caracteres.',
        })
        .max(100, {
          message: 'A pergunta deve conter menos de 100 caracteres.',
        }),
      response: z
        .string()
        .min(1, {
          message: 'A reposta deve conter mais de 10 caracteres.',
        })
        .max(100, {
          message: 'A reposta deve conter menos de 100 caracteres.',
        }),
    }),
  ),
})
