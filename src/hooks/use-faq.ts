import { useAsyncData } from '@/hooks/use-async-data'
import { getFaq } from '@/lib/mock-api'

export function useFaq() {
	return useAsyncData(getFaq)
}
