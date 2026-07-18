import { useAsyncData } from '@/hooks/use-async-data'
import { getReviews } from '@/lib/mock-api'

export function useReviews() {
	return useAsyncData(getReviews)
}
