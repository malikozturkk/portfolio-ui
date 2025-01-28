import { PersonalInformationResponse } from "@/app/types";
import AboutCard from "@/components/AboutCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProfileCard from "@/components/ProfileCard";
import ProjectsCard from "@/components/ProjectsCard";
import SkillsCard from "@/components/SkillsCard";
import { getRequest } from "@/utils/api";

export default async function Home() {
  const getPersonalInformation = await getRequest<PersonalInformationResponse>("personal-information?page=1&limit=8")
  return (
    <main>
      <ProfileCard />
      <AboutCard personalInfo={getPersonalInformation.personalInfo} />
      <SkillsCard initialSkills={getPersonalInformation.skills} totalSkills={getPersonalInformation.totalSkills} />
      <ExperienceCard experience={getPersonalInformation.experience} />
      <ProjectsCard portfolio={getPersonalInformation.portfolio} />
    </main>
  );
}
