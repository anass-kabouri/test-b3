import { getSiteMeta } from '@/lib/mock-api'
import { useAsyncData } from '@/hooks/use-async-data'

export function useSiteMeta() {
return useAsyncData(getSiteMeta)
}
