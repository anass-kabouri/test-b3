'use client'

import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useReviewCarousel } from '@/hooks/use-review-carousel'
import { useReviews } from '@/hooks/use-reviews'

export function ReviewsSection() {
	const { data, isLoading } = useReviews()
	const itemCount = data?.items.length ?? 0
	const { currentIndex, itemsPerView, canGoPrevious, canGoNext, goToPrevious, goToNext } = useReviewCarousel(itemCount)

	if (isLoading || !data) {
		return (
			<section className="px-8 py-16 text-center">
				<Skeleton className="mx-auto h-10 w-64" />
				<div className="mt-8 flex justify-center gap-6">
					<Skeleton className="h-56 w-72" />
					<Skeleton className="h-56 w-72" />
					<Skeleton className="h-56 w-72" />
				</div>
			</section>
		)
	}

	const visibleReviews = data.items.slice(currentIndex, currentIndex + itemsPerView)

	return (
		<section data-section="reviews" className="bg-slate-50 px-8 py-16 text-center">
			<h2 className="font-bold text-3xl text-slate-900">{data.title}</h2>
			<div className="mt-10 flex flex-wrap justify-center gap-6">
				{visibleReviews.map(review => (
					<article key={review.id} className="w-72 rounded-2xl bg-white p-6 shadow-sm">
						<div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
							<Image src={review.avatarUrl} alt={review.author} fill className="object-cover" />
						</div>
						<p className="mt-4 text-slate-600">{review.quote}</p>
						<p className="mt-4 font-semibold text-slate-900">{review.author}</p>
						<p className="text-slate-400 text-sm">{review.role}</p>
					</article>
				))}
			</div>
			<div className="mt-8 flex justify-center gap-3">
				<button
					type="button"
					onClick={goToPrevious}
					disabled={!canGoPrevious}
					aria-label="Previous reviews"
					className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 disabled:opacity-30"
				>
					←
				</button>
				<button
					type="button"
					onClick={goToNext}
					disabled={!canGoNext}
					aria-label="Next reviews"
					className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 disabled:opacity-30"
				>
					→
				</button>
			</div>
		</section>
	)
}
