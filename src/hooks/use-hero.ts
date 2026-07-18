import { useAsyncData } from '@/hooks/use-async-data'
import { getHero } from '@/lib/mock-api'

export function useHero() {
	return useAsyncData(getHero)
}
