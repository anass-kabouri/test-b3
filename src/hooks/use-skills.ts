import { useAsyncData } from '@/hooks/use-async-data'
import { getSkills } from '@/lib/mock-api'

export function useSkills() {
	return useAsyncData(getSkills)
}
