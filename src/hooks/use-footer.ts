import { useAsyncData } from '@/hooks/use-async-data'
import { getFooter } from '@/lib/mock-api'

export function useFooter() {
	return useAsyncData(getFooter)
}
