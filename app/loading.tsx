

export default function Loading() {
    return (
        <section className="w-full h-full flex items-center justify-center gap-5">
            <div className="rounded-full h-4 w-4 bg-black dark:bg-white motion-safe:animate-ping duration-150 ease-in-out" />
            <div className="rounded-full h-4 w-4 bg-black dark:bg-white motion-safe:animate-ping duration-500 ease-in-out" />
            <div className="rounded-full h-4 w-4 bg-black dark:bg-white motion-safe:animate-ping  duration-1000 ease-in-out" />
        </section>
    )
}