interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    const base = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-sm transition-all active:scale-95",
        secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-sm",
        danger: "bg-error text-white hover:bg-error/90 shadow-sm",
        ghost: "bg-transparent text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 border border-sky-200 dark:border-sky-800 font-semibold",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
