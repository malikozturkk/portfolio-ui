import { PersonalInfo } from "@/app/types";
import React from "react"

interface IAboutCard {
    personalInfo: PersonalInfo;
}

const AboutCard: React.FC<IAboutCard> = ({ personalInfo }) => {
    return (
        <section>
            <p
                id="about"
                className="my-[50px] text-center text-3xl text-white font-extrabold"
            >
                Here's More <span className="text-[#793fff]">About Me</span>
            </p>

            <img
                src="images/about.png"
                alt="About"
                className="select-none invisible h-[0px] w-[0px] md:visible md:h-[350px] md:w-[350px] md:mx-[20px] sm:visible sm:h-[200px] sm:w-[200px] sm:mx-[40px] lg:visible lg:h-[400px] lg:w-[400px] lg:mx-[100px] xl:visible xl:h-[400px] xl:w-[400px] xl:mx-[150px] 2xl:visible 2xl:h-[500px] 2xl:w-[500px] 2xl:mx-[200px]"
            />
            <div
                className="bg-[#21212e] shadow-lg flex mx-[28px] mb-8 rounded-[10px] h-[550px] w-[350px] sm:mx-[260px] md:mx-[400px] md:w-[350px] md:-mt-[350px] sm:-mt-[210px] lg:mx-[500px] lg:w-[500px] lg:-mt-[400px] xl:mx-[600px] xl:w-[580px] xl:-mt-[400px] 2xl:mx-[700px] 2xl:w-[600px] 2xl:-mt-[500px]"
            >
                <div className="bg-red-600 mx-[20px] mt-6 mb-8 rounded-full h-[15px] w-[15px]"></div>
                <div className="bg-green-600 -mx-[10px] mt-6 mb-8 rounded-full h-[15px] w-[15px]"></div>
                <div className="bg-blue-600 mx-[20px] mt-6 mb-8 rounded-full h-[15px] w-[15px]"></div>
                <pre className="my-[80px] -mx-[70px] text-pink-500 text-1xl">
                    {`const aboutMe = () => {
  const details = {
    name: ${personalInfo.name},
    surname: ${personalInfo.surname},
    age: ${personalInfo.age},
    profession: ${personalInfo.profession},
    based: ${personalInfo.based},
    TechnologiesKnown: {
    ${personalInfo.technologiesKnown.map((tech, index) => index === 0 ? `   ${tech}: "✅"` : `       ${tech}: "✅"`).join("\n")}
    },
  };
}`}
                </pre>
            </div>
        </section>

    )
}

export default AboutCard