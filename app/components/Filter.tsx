import { motion } from 'framer-motion'

interface FilterButtonsProps {
    activeFilter: string
    onFilterChange: (filter: string) => void
    options?: Array<{
        value: string
        label: string
    }>
    className?: string
}

export default function FilterButtons({
    activeFilter,
    onFilterChange,
    options,
    className = '',
}: FilterButtonsProps) {
    return (
        <div className={`flex justify-center flex-wrap gap-3 ${className}`}>
            {options?.map((option) => (
                <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                        activeFilter === option.value
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => onFilterChange(option.value)}
                >
                    {option.label}
                </motion.button>
            ))}
        </div>
    )
}
