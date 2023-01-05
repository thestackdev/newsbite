import { signal } from '@preact/signals-react'

export const newsResponse = signal([])
export const isFetching = signal(true)
export const currentCategory = signal('general')
