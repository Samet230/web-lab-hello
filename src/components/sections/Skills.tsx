const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion"];

export default function Skills() {
    return (
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map(skill => (
                <span key={skill} className="px-5 py-2 rounded-xl text-sm font-bold bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-300 border border-sky-100 dark:border-sky-800 shadow-sm">
                    {skill}
                </span>
            ))}
        </div>
    );
}
