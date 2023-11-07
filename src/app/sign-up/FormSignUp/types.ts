import { z } from 'zod'
import { signUpFormSchema } from './schemas'

export type ZapFormValues = z.infer<typeof signUpFormSchema>
