/**
 * Mock API — NE PAS MODIFIER CE FICHIER.
 *
 * Toute donnée affichée dans l'application DOIT provenir de ces fonctions.
 * Le délai aléatoire simule une vraie latence réseau : gérez vos états de
 * chargement et vos race conditions comme si vous parliez à un vrai serveur.
 */

export interface NavLink {
	readonly label: string
	readonly href: string
}

export interface SocialLink {
	readonly id: string
	readonly label: string
	readonly href: string
}

export interface Hero {
	readonly greeting: string
	readonly name: string
	readonly role: string
	readonly description: string
	readonly imageUrl: string
	readonly socials: readonly SocialLink[]
}

export interface Skill {
	readonly id: string
	readonly position: number
	readonly title: string
	readonly description: string
}

export interface SkillsSection {
	readonly title: string
	readonly items: readonly Skill[]
}

export interface Project {
	readonly id: string
	readonly title: string
	readonly badges: readonly string[]
	readonly description: string
	readonly href: string
	readonly buttonText: string
	readonly imageUrl: string
}

export interface PortfolioSection {
	readonly title: string
	readonly items: readonly Project[]
}

export interface Review {
	readonly id: string
	readonly quote: string
	readonly author: string
	readonly role: string
	readonly avatarUrl: string
}

export interface ReviewsSection {
	readonly title: string
	readonly items: readonly Review[]
}

export interface CallToAction {
	readonly title: string
	readonly description: string
	readonly highlight: string
	readonly buttonText: string
	readonly buttonHref: string
}

export interface FaqItem {
	readonly id: string
	readonly question: string
	readonly answer: string
}

export interface FaqSection {
	readonly tagline: string
	readonly title: string
	readonly titleHighlight: string
	readonly description: string
	readonly contactEmail: string
	readonly items: readonly FaqItem[]
}

export interface FooterButton {
	readonly id: string
	readonly label: string
	readonly href: string
}

export interface Footer {
	readonly title: string
	readonly avatarUrl: string
	readonly buttons: readonly FooterButton[]
	readonly madeWith: string
	readonly contactLabel: string
	readonly contactEmail: string
}

export interface SiteMeta {
	readonly siteName: string
	readonly contactButtonText: string
	readonly contactButtonHref: string
}

const DELAY_MIN_MS = 300
const DELAY_MAX_MS = 800

const sleep = async (): Promise<void> => {
	const duration = DELAY_MIN_MS + Math.random() * (DELAY_MAX_MS - DELAY_MIN_MS)
	await new Promise(resolve => {
		setTimeout(resolve, duration)
	})
}

const SITE_META: SiteMeta = {
	siteName: 'Student Portfolio',
	contactButtonText: 'Contact',
	contactButtonHref: '/contact',
}

const NAVIGATION: readonly NavLink[] = [
	{ label: 'Home', href: '/home' },
	{ label: 'About me', href: '/about' },
	{ label: 'Portfolio', href: '/portfolio' },
	{ label: 'Reviews', href: '/reviews' },
	{ label: 'FAQ', href: '/faq' },
	{ label: 'Contact', href: '/contact' },
]

const HERO: Hero = {
	greeting: 'HEY!',
	name: 'Student',
	role: 'Fullstack developer',
	description: 'A student that needs to build this super website.',
	imageUrl: 'https://picsum.photos/seed/student-hero/800/1000',
	socials: [
		{ id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/student-fullstack-dev' },
		{ id: 'dribbble', label: 'Dribbble', href: 'https://dribbble.com/student-fullstack-dev' },
		{ id: 'github', label: 'GitHub', href: 'https://github.com/student-fullstack-dev' },
	],
}

const SKILLS: SkillsSection = {
	title: 'I specialize in',
	items: [
		{
			id: 'skill-nextjs',
			position: 1,
			title: 'Next.js',
			description: 'App Router, server components and file-based routing to build fast, production-ready websites.',
		},
		{
			id: 'skill-react',
			position: 2,
			title: 'React',
			description: 'Component-driven interfaces with clean state management, custom hooks and a tidy lifecycle.',
		},
		{
			id: 'skill-typescript',
			position: 3,
			title: 'TypeScript',
			description: 'Strictly typed code that catches bugs before runtime and documents itself along the way.',
		},
		{
			id: 'skill-nodejs',
			position: 4,
			title: 'Node.js',
			description: 'REST APIs, authentication and database access to power everything the front-end displays.',
		},
		{
			id: 'skill-ui-integration',
			position: 5,
			title: 'UI Integration',
			description: 'Pixel-perfect integration of design mockups with Tailwind CSS, animations included.',
		},
	],
}

const PORTFOLIO: PortfolioSection = {
	title: 'Portfolio',
	items: [
		{
			id: 'project-redesign-portfolio',
			title: 'Re-Design For Web Designer Portfolio',
			badges: ['User Research', 'UX Design'],
			description:
				'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
			href: 'https://example.com/case-study/redesign-portfolio',
			buttonText: 'Read Case Study',
			imageUrl: 'https://picsum.photos/seed/project-redesign/1200/800',
		},
		{
			id: 'project-ecommerce-dashboard',
			title: 'E-commerce Analytics Dashboard',
			badges: ['Front-end', 'Data Viz', 'Next.js'],
			description: 'A real-time dashboard that turns raw sales data into clear, actionable charts for shop owners.',
			href: 'https://example.com/case-study/ecommerce-dashboard',
			buttonText: 'Read Case Study',
			imageUrl: 'https://picsum.photos/seed/project-dashboard/1200/800',
		},
		{
			id: 'project-mobile-banking',
			title: 'Mobile Banking Application',
			badges: ['UI Design', 'React Native'],
			description:
				'A secure and friendly banking experience, from onboarding to instant transfers, designed mobile-first.',
			href: 'https://example.com/case-study/mobile-banking',
			buttonText: 'Read Case Study',
			imageUrl: 'https://picsum.photos/seed/project-banking/1200/800',
		},
		{
			id: 'project-saas-landing',
			title: 'SaaS Product Landing Page',
			badges: ['Copywriting', 'SEO', 'Webflow'],
			description:
				'A conversion-focused landing page with A/B tested sections that doubled the sign-up rate in a month.',
			href: 'https://example.com/case-study/saas-landing',
			buttonText: 'Read Case Study',
			imageUrl: 'https://picsum.photos/seed/project-saas/1200/800',
		},
		{
			id: 'project-booking-platform',
			title: 'Booking Platform For Coworking Spaces',
			badges: ['Fullstack', 'PostgreSQL'],
			description: 'End-to-end booking flow with real-time availability, payments and a clean admin back office.',
			href: 'https://example.com/case-study/booking-platform',
			buttonText: 'Read Case Study',
			imageUrl: 'https://picsum.photos/seed/project-booking/1200/800',
		},
	],
}

const REVIEWS: ReviewsSection = {
	title: 'Customers reviews',
	items: [
		{
			id: 'review-anna-writens',
			quote:
				'To ensure that the Community continues to be the best place to find Figma resources, we ask that you avoid the following.',
			author: 'Anna Writens',
			role: 'Designer',
			avatarUrl: 'https://i.pravatar.cc/160?img=1',
		},
		{
			id: 'review-marc-dupont',
			quote:
				'The website was delivered ahead of schedule and every single detail of the mockup was respected. Impressive work.',
			author: 'Marc Dupont',
			role: 'Startup Founder',
			avatarUrl: 'https://i.pravatar.cc/160?img=12',
		},
		{
			id: 'review-sofia-lindberg',
			quote:
				'Great communication from start to finish. The animations feel smooth and the site scores 100 on Lighthouse.',
			author: 'Sofia Lindberg',
			role: 'Product Manager',
			avatarUrl: 'https://i.pravatar.cc/160?img=5',
		},
		{
			id: 'review-james-carter',
			quote:
				'We asked for a complex booking flow and got something even better than what we imagined. Highly recommended.',
			author: 'James Carter',
			role: 'Agency Owner',
			avatarUrl: 'https://i.pravatar.cc/160?img=13',
		},
		{
			id: 'review-elena-rossi',
			quote: 'Fast, reliable and creative. Our conversion rate went up by 40% after the redesign of our landing page.',
			author: 'Elena Rossi',
			role: 'Marketing Lead',
			avatarUrl: 'https://i.pravatar.cc/160?img=9',
		},
		{
			id: 'review-thomas-muller',
			quote: 'A rare mix of design sensibility and solid engineering. The handover documentation was crystal clear.',
			author: 'Thomas Müller',
			role: 'CTO',
			avatarUrl: 'https://i.pravatar.cc/160?img=14',
		},
	],
}

const CTA: CallToAction = {
	title: 'Try me out, risk free!',
	description: "If you're not happy with the design after the first draft, I'll refund your deposit,",
	highlight: 'no questions asked',
	buttonText: 'Contact',
	buttonHref: '/contact',
}

const FAQ: FaqSection = {
	tagline: 'FAQ',
	title: 'Frequently Asked',
	titleHighlight: 'Questions',
	description: 'If you have any other questions, you can contact me by email',
	contactEmail: 'youremail@gmail.com',
	items: [
		{
			id: 'faq-design-or-development',
			question: 'Do you do web design or web development?',
			answer:
				'Community files are design files creators have shared with the Community. Create templates for wireframe, UI kits, asset libraries, and design systems. Or share educational resources, interactive tutorials, and tools to use across the design process.',
		},
		{
			id: 'faq-how-long',
			question: 'How long does a website take to build?',
			answer:
				'A simple landing page usually takes one to two weeks. A complete website with custom features takes between four and eight weeks, depending on the scope and how fast feedback loops are.',
		},
		{
			id: 'faq-account',
			question: 'Will you work on the project in your account or mine?',
			answer:
				'Either works. Most clients prefer that I build everything directly in their account so they keep full ownership of the project, the hosting and the analytics from day one.',
		},
		{
			id: 'faq-agency',
			question: "I'm an agency, what you can do for us?",
			answer:
				'I can act as a white-label developer for your studio: you handle the client relationship and the design, I turn the mockups into fast, accessible and maintainable websites under your brand.',
		},
	],
}

const FOOTER: Footer = {
	title: "Let's build it together.",
	avatarUrl: 'https://i.pravatar.cc/160?img=32',
	buttons: [
		{ id: 'footer-linkedin', label: 'My Linkedin', href: 'https://www.linkedin.com/in/student-fullstack-dev' },
		{ id: 'footer-resume', label: 'Download my resume', href: '/resume.pdf' },
	],
	madeWith: 'Made with ❤️ by me.',
	contactLabel: 'Got a question?',
	contactEmail: 'youremail@gmail.com',
}

/** Métadonnées globales du site (nom, bouton contact de la navbar). */
export const getSiteMeta = async (): Promise<SiteMeta> => {
	await sleep()
	return SITE_META
}

/** Liens de la barre de navigation. */
export const getNavigation = async (): Promise<readonly NavLink[]> => {
	await sleep()
	return NAVIGATION
}

/** Contenu de la section hero (accroche, rôle, image, réseaux sociaux). */
export const getHero = async (): Promise<Hero> => {
	await sleep()
	return HERO
}

/** Section « I specialize in » : 5 compétences numérotées. */
export const getSkills = async (): Promise<SkillsSection> => {
	await sleep()
	return SKILLS
}

/** Section portfolio : 5 projets avec badges, lien et image. */
export const getPortfolio = async (): Promise<PortfolioSection> => {
	await sleep()
	return PORTFOLIO
}

/** Section avis clients : 6 reviews. */
export const getReviews = async (): Promise<ReviewsSection> => {
	await sleep()
	return REVIEWS
}

/** Bandeau d'appel à l'action « Try me out, risk free! ». */
export const getCta = async (): Promise<CallToAction> => {
	await sleep()
	return CTA
}

/** Section FAQ : titre, description, email de contact et 4 questions. */
export const getFaq = async (): Promise<FaqSection> => {
	await sleep()
	return FAQ
}

/** Contenu du footer (titre, avatar, boutons, mentions). */
export const getFooter = async (): Promise<Footer> => {
	await sleep()
	return FOOTER
}
