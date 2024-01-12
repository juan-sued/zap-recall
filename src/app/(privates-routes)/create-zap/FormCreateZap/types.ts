import { z } from 'zod'
import { zapFormSchema } from './schemas'

export type ZapFormValues = z.infer<typeof zapFormSchema>
