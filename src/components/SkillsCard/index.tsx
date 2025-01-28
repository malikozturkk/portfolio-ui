"use client"
import Image from "next/image";
import React from "react";
import { PersonalInformationResponse, Skill } from "@/app/types";
import { getRequest } from "@/utils/api";

interface ISkills {
    initialSkills: Skill[];
    totalSkills: number;
}

const SkillsCard: React.FC<ISkills> = ({ initialSkills, totalSkills }) => {
    const [skills, setSkills] = React.useState(initialSkills);
    const [currentPage, setCurrentPage] = React.useState(1);

    const loadMoreSkills = async () => {
        const nextPage = currentPage + 1;
        const newSkills = await getRequest<PersonalInformationResponse>(`personal-information?page=${nextPage}&limit=8`);
        setSkills((prevSkills) => [...prevSkills, ...newSkills.skills]);
        setCurrentPage(nextPage);
    };

    const isLoadMoreDisabled = skills.length >= totalSkills;

    return (
        <section>
            <div id="skills" className="bg-[#21212e] w-auto mt-10 mb-10">
                <p className="pt-[40px] text-center text-3xl text-white font-extrabold mb-12">🤹 Checkout my <span className="text-[#793fff]">skills</span></p>
                <div className="w-full flex flex-col gap-2 items-center justify-center pb-8">
                    <div className="flex items-center justify-center gap-4 px-8 flex-wrap mx-auto">
                        {skills.map((skill: Skill, index: number) => (
                            <div
                                key={index}
                                style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 8px 0px" }}
                                className="bg-[#793fff] text-white basis-[calc(100%-1rem)] sm:basis-[calc(50%-1rem)] md:basis-[calc(25%-1rem)] cursor-pointer flex flex-col gap-4 rounded-lg items-center justify-center p-4 border-2 border-transparent hover:border-white transition-all"
                            >
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={70}
                                    height={70}
                                    unoptimized
                                />
                                <span className="text-2xl font-bold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    <button
                        className={`bg-[#793fff] text-white py-2 px-6 rounded-md mt-6 transition-all ${isLoadMoreDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#5c2bcc]'
                            }`}
                        onClick={loadMoreSkills}
                        disabled={isLoadMoreDisabled}
                    >
                        {isLoadMoreDisabled ? 'All Loaded' : 'Load More'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SkillsCard;
