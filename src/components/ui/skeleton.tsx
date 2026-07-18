interface SkeletonProps {
	readonly className?: string
}

export function Skeleton({ className }: SkeletonProps) {
	return <div className={`animate-pulse rounded-md bg-neutral-200 ${className ?? ''}`} />
}
