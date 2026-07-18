'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useSkills } from '@/hooks/use-skills'

export function SkillsSection() {
	const { data, isLoading } = useSkills()

	if (isLoading || !data) {
		return (
			<section className="px-8 py-16">
				<Skeleton className="h-10 w-64" />
				<div className="mt-8 space-y-4">
					<Skeleton className="h-24 w-full max-w-2xl" />
					<Skeleton className="h-24 w-full max-w-2xl" />
					<Skeleton className="h-24 w-full max-w-2xl" />
				</div>
			</section>
		)
	}

	return (
		<section id="about" className="px-8 py-16">
			<h2 className="font-bold text-3xl text-slate-900">{data.title}</h2>
			<ul className="mt-8 space-y-4">
				{data.items.map(skill => (
					<li key={skill.id} className="max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
						<span className="text-slate-400">{skill.position}</span>
						<h3 className="font-bold text-xl text-slate-900">{skill.title}</h3>
						<p className="mt-2 text-slate-600">{skill.description}</p>
					</li>
				))}
			</ul>
		</section>
	)
}
