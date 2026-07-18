import { useAsyncData } from '@/hooks/use-async-data'
import { getPortfolio } from '@/lib/mock-api'

export function usePortfolio() {
	return useAsyncData(getPortfolio)
}
