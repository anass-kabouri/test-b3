'use client'

import type { MouseEvent } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { useNavigation } from '@/hooks/use-navigation'
import { useSiteMeta } from '@/hooks/use-site-meta'

export function Navbar() {
	const { data: siteMeta, isLoading: isSiteMetaLoading } = useSiteMeta()
	const { data: navLinks, isLoading: isNavLoading } = useNavigation()

	const isLoading = isSiteMetaLoading || isNavLoading || !siteMeta || !navLinks

	const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
		const sectionId = href.split('/').pop()
		const target = sectionId ? document.querySelector(`[data-section="${sectionId}"]`) : null

		if (target) {
			event.preventDefault()
			target.scrollIntoView({ behavior: 'smooth' })
		}
	}

	if (isLoading) {
		return (
			<nav className="flex items-center justify-between px-8 py-6">
				<Skeleton className="h-6 w-32" />
				<Skeleton className="h-6 w-64" />
				<Skeleton className="h-10 w-24" />
			</nav>
		)
	}

	return (
		<nav className="flex items-center justify-between px-8 py-6">
			<span className="font-bold text-slate-900">{siteMeta.siteName}</span>
			<ul className="hidden gap-6 md:flex">
				{navLinks.map(link => (
					<li key={link.href}>
						<a
							href={link.href}
							onClick={event => handleNavClick(event, link.href)}
							className="text-slate-600 hover:text-slate-900"
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>
			<a href={siteMeta.contactButtonHref} className="rounded-lg bg-indigo-700 px-5 py-2 font-semibold text-white">
				{siteMeta.contactButtonText}
			</a>
		</nav>
	)
}
