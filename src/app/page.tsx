import { CtaSection } from '@/components/cta/cta-section'
import { FaqSection } from '@/components/faq/faq-section'
import { FooterSection } from '@/components/footer/footer-section'
import { HeroSection } from '@/components/hero/hero-section'
import { Navbar } from '@/components/layout/navbar'
import { PortfolioSection } from '@/components/portfolio/portfolio-section'
import { ReviewsSection } from '@/components/reviews/reviews-section'
import { SkillsSection } from '@/components/skills/skills-section'

export default function HomePage() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<SkillsSection />
			<PortfolioSection />
			<ReviewsSection />
			<CtaSection />
			<FaqSection />
			<FooterSection />
		</main>
	)
}
