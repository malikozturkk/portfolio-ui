import Image from "next/image"
import React from "react"

const ProfileCard = () => {
    return (
        <section className="p-9 md:py-12 md:px-20 md:p-[50px] bg-[#21212e]">
            <div className="flex-col-reverse gap-6 items-center md:flex-row flex justify-between p-2 md:px-12 md:py-4">
                <div className="flex flex-col gap-4 max-w-96">
                    <span className="text-white text-3xl">👋 Hi, I'm <span className="text-[#793fff] text-3xl font-bold ">Malik</span></span>
                    <span className="text-white text-base">I'm a seasoned Full Stack Developer with a passion for crafting seamless user experiences. Leveraging ReactJS, NextJS, NestJS, NodeJS, Prisma, Socket Styled Components, Redux Toolkit, TypeScript, and JavaScript 🚀</span>
                    <a
                        href="/malik-resume.pdf"
                        download="malik-resume.pdf"
                        className="bg-[#793fff] text-white h-10 w-40 rounded-[5px] shadow-lg shadow-[#793fff]/30 flex items-center justify-center duration-200 transition-all hover:bg-[#5c2bcc]"
                    >
                        Download CV
                    </a>
                </div>
                <Image src="/images/avatar.jpeg" alt="Malik Avatar" className="rounded-full" width={250} height={250} />
            </div>
        </section>
    )
}

export default ProfileCard