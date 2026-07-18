import { useState } from 'react'

const ITEMS_PER_VIEW = 3

export function useReviewCarousel(itemCount: number) {
	const maxIndex = Math.max(0, itemCount - ITEMS_PER_VIEW)
	const [currentIndex, setCurrentIndex] = useState(0)

	const canGoPrevious = currentIndex > 0
	const canGoNext = currentIndex < maxIndex

	const goToPrevious = () => {
		setCurrentIndex(index => Math.max(0, index - 1))
	}

	const goToNext = () => {
		setCurrentIndex(index => Math.min(maxIndex, index + 1))
	}

	return { currentIndex, itemsPerView: ITEMS_PER_VIEW, canGoPrevious, canGoNext, goToPrevious, goToNext }
}
