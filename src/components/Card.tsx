import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export const Card = ({
    className,
    children
}:PropsWithChildren<{
    className?: string
}>) => {
    return (
        <>
            <div  
                className={twMerge("bg-gray-800 rounded-3xl relative after:content-[''] z-0 after:z-10 overflow-hidden after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-7", className)}
                > 
            {children}
            </div>
        </>
    )
}