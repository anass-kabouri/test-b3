'use client'

import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useHero } from '@/hooks/use-hero'

export function HeroSection() {
	const { data, isLoading } = useHero()

	if (isLoading || !data) {
		return (
			<section id="home" className="grid min-h-[600px] grid-cols-1 items-center gap-8 px-8 py-16 md:grid-cols-2">
				<div className="space-y-4">
					<Skeleton className="h-12 w-3/4" />
					<Skeleton className="h-6 w-full" />
					<div className="flex gap-3">
						<Skeleton className="h-12 w-12 rounded-full" />
						<Skeleton className="h-12 w-12 rounded-full" />
						<Skeleton className="h-12 w-12 rounded-full" />
					</div>
				</div>
				<Skeleton className="h-[500px] w-full" />
			</section>
		)
	}

	return (
		<section id="home" className="grid min-h-[600px] grid-cols-1 items-center gap-8 px-8 py-16 md:grid-cols-2">
			<div>
				<h1 className="font-bold text-4xl text-slate-900">
					{data.greeting} <span className="font-extrabold">I'm {data.name}</span>,{' '}
					<span className="font-extrabold">{data.role}</span>
				</h1>
				<p className="mt-4 text-slate-600">{data.description}</p>
				<ul className="mt-6 flex gap-3">
					{data.socials.map(social => (
						<li key={social.id}>
							<a
								href={social.href}
								target="_blank"
								rel="noreferrer"
								aria-label={social.label}
								className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100"
							>
								{social.label.charAt(0)}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
				<Image src={data.imageUrl} alt={data.name} fill className="object-cover" priority />
			</div>
		</section>
	)
}
