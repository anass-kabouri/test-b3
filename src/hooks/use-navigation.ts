import { getNavigation } from '@/lib/mock-api'
import { useAsyncData } from '@/hooks/use-async-data'

export function useNavigation() {
return useAsyncData(getNavigation)
}
