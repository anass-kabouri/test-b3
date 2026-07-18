import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title: 'Examen B3 — Reverse Engineering UI',
	description: "Starter kit d'examen : reproduisez la maquette présentée dans la vidéo.",
}

export default function RootLayout({ children }: { readonly children: ReactNode }) {
	return (
		<html lang="fr">
			<body className="antialiased">{children}</body>
		</html>
	)
}
