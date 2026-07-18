import { useAsyncData } from '@/hooks/use-async-data'
import { getNavigation } from '@/lib/mock-api'

export function useNavigation() {
	return useAsyncData(getNavigation)
}
