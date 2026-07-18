'use client'

import { useEffect, useState } from 'react'

interface AsyncDataState<T> {
	readonly data: T | null
	readonly isLoading: boolean
	readonly error: Error | null
}

/**
 * Fetches data from a mock-api getter, handling loading state and
 * ignoring stale responses if the fetcher changes or the component
 * unmounts before the promise resolves.
 */
export function useAsyncData<T>(fetcher: () => Promise<T>): AsyncDataState<T> {
	const [state, setState] = useState<AsyncDataState<T>>({
		data: null,
		isLoading: true,
		error: null,
	})

	useEffect(() => {
		let isCancelled = false

		setState({ data: null, isLoading: true, error: null })

		fetcher()
			.then(result => {
				if (!isCancelled) {
					setState({ data: result, isLoading: false, error: null })
				}
			})
			.catch((error: unknown) => {
				if (!isCancelled) {
					const normalizedError = error instanceof Error ? error : new Error('Unknown error')
					setState({ data: null, isLoading: false, error: normalizedError })
				}
			})

		return () => {
			isCancelled = true
		}
	}, [fetcher])

	return state
}
