import { useAsyncData } from '@/hooks/use-async-data'
import { getCta } from '@/lib/mock-api'

export function useCta() {
	return useAsyncData(getCta)
}
