
export default function HeroSection() {
    const heroContent = {
        Technologies: [
            "REACT JS",
            "NODE JS",
            "DEV OPS",
            "DATA BASES",
            "SYSTEM ADMIN"
        ]
    }
    return (
        <div>
            <div className='flex lg:justify-center lg:flex-row flex-col gap-2  w-full'>
                <div className='flex-1 flex items-center justify-center flex-col pb-20 gap-3 text-sm [word-spacing:.2rem]'>
                    <ul>
                        {heroContent.Technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className='w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] m-auto overflow-hidden grayscale hover:grayscale-0 transition-all duration-500'>
                    <img
                        className='w-full h-full object-contain scale-135 hover:scale-117 transition-transform duration-700'
                        src="/Profile.png"
                        alt="Prashanth Chowdary"
                    />
                </div>
                <div className='relative flex-1 flex flex-col justify-center items-center lg:justify-end lg:items-start text-sm [word-spacing:.2rem]'>
                    <p className="opacity-60 text-[0.7rem]">ME</p>
                    <p className="font-bold">PRASHANTH CHOWDARY</p>
                </div>
            </div>
        </div>
    )
}