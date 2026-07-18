import { useAsyncData } from '@/hooks/use-async-data'
import { getSiteMeta } from '@/lib/mock-api'

export function useSiteMeta() {
	return useAsyncData(getSiteMeta)
}
