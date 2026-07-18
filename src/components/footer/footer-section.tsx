'use client'

import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useFooter } from '@/hooks/use-footer'

export function FooterSection() {
	const { data, isLoading } = useFooter()

	if (isLoading || !data) {
		return (
			<footer className="px-8 py-16">
				<Skeleton className="h-40 w-full" />
			</footer>
		)
	}

	return (
		<footer data-section="contact" className="px-8 py-16">
			<div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
				<div>
					<div className="flex items-center gap-3">
						<div className="relative h-12 w-12 overflow-hidden rounded-full">
							<Image src={data.avatarUrl} alt={data.title} fill className="object-cover" />
						</div>
						<h2 className="font-bold text-2xl text-slate-900">{data.title}</h2>
					</div>
					<div className="mt-4 flex gap-3">
						{data.buttons.map(button => (
							<a
								key={button.id}
								href={button.href}
								className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white"
							>
								{button.label}
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="mt-12 flex flex-col justify-between gap-2 border-slate-200 border-t pt-6 text-slate-500 text-sm md:flex-row">
				<p>{data.madeWith}</p>
				<p>
					{data.contactLabel}{' '}
					<a href={`mailto:${data.contactEmail}`} className="text-teal-500">
						{data.contactEmail}
					</a>
				</p>
			</div>
		</footer>
	)
}
