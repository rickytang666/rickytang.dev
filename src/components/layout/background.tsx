export default function Background() {
    return (
        <div className="fixed inset-0 h-full w-full pointer-events-none">
            <svg className="h-full w-full opacity-[0.25]">
                <pattern
                    id="dot-pattern"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                >
                    <circle cx="2" cy="2" r="1.5" fill="var(--muted-foreground)" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
        </div>
    );
}
