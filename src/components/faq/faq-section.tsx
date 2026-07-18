'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useFaq } from '@/hooks/use-faq'
import { useFaqAccordion } from '@/hooks/use-faq-accordion'
import type { FaqItem } from '@/lib/mock-api'

interface FaqRowProps {
	readonly item: FaqItem
	readonly isOpen: boolean
	readonly onToggle: () => void
}

function FaqRow({ item, isOpen, onToggle }: FaqRowProps) {
	return (
		<div className="rounded-xl bg-slate-100 p-6">
			<button type="button" onClick={onToggle} className="flex w-full items-center justify-between text-left">
				<span className="font-semibold text-slate-900">{item.question}</span>
				<span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
			</button>
			{isOpen ? <p className="mt-4 text-slate-600">{item.answer}</p> : null}
		</div>
	)
}

export function FaqSection() {
	const { data, isLoading } = useFaq()
	const firstItemId = data?.items[0]?.id ?? null
	const { isOpen, toggle } = useFaqAccordion(firstItemId)

	if (isLoading || !data) {
		return (
			<section className="grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2">
				<Skeleton className="h-40 w-full" />
				<div className="space-y-4">
					<Skeleton className="h-16 w-full" />
					<Skeleton className="h-16 w-full" />
					<Skeleton className="h-16 w-full" />
				</div>
			</section>
		)
	}

	return (
		<section data-section="faq" className="grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2">
			<div>
				<p className="font-semibold text-teal-500">{data.tagline}</p>
				<h2 className="mt-2 font-bold text-4xl text-slate-900">
					{data.title} <span className="text-teal-400">{data.titleHighlight}</span>
				</h2>
				<p className="mt-4 text-slate-600">{data.description}</p>
				<a href={`mailto:${data.contactEmail}`} className="text-teal-500">
					{data.contactEmail}
				</a>
			</div>
			<div className="space-y-4">
				{data.items.map(item => (
					<FaqRow key={item.id} item={item} isOpen={isOpen(item.id)} onToggle={() => toggle(item.id)} />
				))}
			</div>
		</section>
	)
}
