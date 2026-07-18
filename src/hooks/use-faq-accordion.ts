import { useState } from 'react'

export function useFaqAccordion(defaultOpenId: string | null) {
	const [openId, setOpenId] = useState<string | null>(defaultOpenId)

	const toggle = (id: string) => {
		setOpenId(current => (current === id ? null : id))
	}

	const isOpen = (id: string) => openId === id

	return { isOpen, toggle }
}
