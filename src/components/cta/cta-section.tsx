'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useCta } from '@/hooks/use-cta'

export function CtaSection() {
	const { data, isLoading } = useCta()

	if (isLoading || !data) {
		return (
			<section className="px-8 py-16">
				<Skeleton className="h-40 w-full rounded-3xl" />
			</section>
		)
	}

	return (
		<section className="px-8 py-16">
			<div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-indigo-700 p-10 text-white md:flex-row md:items-center">
				<div>
					<h2 className="font-bold text-3xl">{data.title}</h2>
					<p className="mt-2 text-indigo-100">
						{data.description} <span className="font-semibold text-white">{data.highlight}</span>
					</p>
				</div>
				<a
					href={data.buttonHref}
					className="whitespace-nowrap rounded-lg bg-teal-300 px-6 py-3 font-semibold text-indigo-900"
				>
					{data.buttonText}
				</a>
			</div>
		</section>
	)
}
