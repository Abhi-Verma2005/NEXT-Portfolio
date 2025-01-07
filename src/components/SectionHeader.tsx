export const SectionHeader = ({
    title,
    eyebrow,
    description
}:{
    title: string,
    eyebrow: string,
    description: string
}) => {
    return (
        <>
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from bg-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center md:text-5xl mt-6">
          {title}
        </h2>
        <p className="text-center md:text-lg max-wd-md lg:text-lg mx-auto text-white/60 mt-4">
          {description}
        </p>
        </>
    )
}