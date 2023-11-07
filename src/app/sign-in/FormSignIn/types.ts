import { z } from 'zod'
import { signInFormSchema } from './schemas'

export type ZapFormValues = z.infer<typeof signInFormSchema>
