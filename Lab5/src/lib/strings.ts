import { Option } from '@/lib/types.js'
import { isNone } from '@/lib/utils.js'

export const isNullOrWhitespace = (input: Option<string>): boolean =>
  isNone(input) ? true : input.trim().length === 0
