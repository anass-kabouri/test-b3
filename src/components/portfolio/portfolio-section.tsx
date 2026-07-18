'use client'

import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { usePortfolio } from '@/hooks/use-portfolio'

export function PortfolioSection() {
	const { data, isLoading } = usePortfolio()

	if (isLoading || !data) {
		return (
			<section className="px-8 py-16">
				<Skeleton className="mx-auto h-10 w-48" />
				<div className="mt-8 space-y-8">
					<Skeleton className="h-80 w-full" />
					<Skeleton className="h-80 w-full" />
				</div>
			</section>
		)
	}

	return (
		<section data-section="portfolio" className="px-8 py-16">
			<h2 className="text-center font-bold text-4xl text-slate-900">{data.title}</h2>
			<ul className="mt-12 space-y-8">
				{data.items.map(project => (
					<li
						key={project.id}
						className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-teal-50 p-8 md:grid-cols-2"
					>
						<div>
							<h3 className="font-bold text-2xl text-slate-900">{project.title}</h3>
							<ul className="mt-3 flex flex-wrap gap-2">
								{project.badges.map(badge => (
									<li key={badge} className="rounded-full bg-white px-3 py-1 text-slate-700 text-sm">
										{badge}
									</li>
								))}
							</ul>
							<p className="mt-4 text-slate-600">{project.description}</p>
							<a
								href={project.href}
								target="_blank"
								rel="noreferrer"
								className="mt-6 inline-block rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white"
							>
								{project.buttonText}
							</a>
						</div>
						<div className="relative h-64 w-full overflow-hidden rounded-2xl">
							<Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
