interface CardProps {
    title?: string;
    children: React.ReactNode;
    image?: string;
    imageAlt?: string;
    footer?: React.ReactNode;
    variant?: 'elevated' | 'outlined' | 'filled';
}

export default function Card({
    title,
    children,
    image,
    imageAlt,
    footer,
    variant = 'elevated',
}: CardProps) {
    const variants = {
        elevated: "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg",
        outlined: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
        filled: "bg-gray-100 dark:bg-gray-800",
    };

    return (
        <div className={`rounded-xl overflow-hidden transition-shadow flex flex-col h-full ${variants[variant]}`}>
            {image && (
                <img
                    src={image}
                    alt={imageAlt || ""}
                    className="w-full h-48 object-cover shrink-0"
                />
            )}
            <div className="p-5 flex-grow flex flex-col">
                {title && (
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {title}
                    </h3>
                )}
                <div className="text-gray-600 dark:text-gray-400 flex-grow">
                    {children}
                </div>
            </div>
            {footer && (
                <div className="mt-auto px-5 py-3 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
                    {footer}
                </div>
            )}
        </div>
    );
}
