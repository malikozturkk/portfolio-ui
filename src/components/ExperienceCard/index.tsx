import { Experience } from "@/app/types"
import "../../app/globals.css";
import React from "react"

interface IExperienceCard {
    experience: Experience[]
}

const ExperienceCard: React.FC<IExperienceCard> = ({ experience }) => {
    return (
        <div className="p-8 rounded-lg shadow-md bg-[#21212e]" id="experience">
            <p id="experience" className="mb-8 text-center text-3xl text-white font-extrabold">📌 My <span className="text-[#793fff]">Experience</span></p>
            <p className="text-white text-center mb-10 px-[5px]">This timeline summarizes my professional experiences till the date.</p>
            {experience.map((item, index) => (
                <React.Fragment key={index}>
                    <div
                        className="gap-2 bg-[#793fff] md:gap-4 flex flex-col md:flex-row items-start md:items-center rounded-lg shadow p-4 space-y-4 md:space-y-0"
                        style={{ marginTop: 0 }}
                    >
                        <div className="flex-shrink-0">
                            <div className="px-1 py-6 h-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md">
                                <img
                                    src={`/images/${item.logo}`}
                                    alt={`${item.company} logo`}
                                    className="w-10"
                                />
                            </div>
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold text-gray-300">{item.position}</h3>
                            <p className="text-sm text-gray-200">
                                {item.period} |{' '}
                                {item.duration.years ? `${item.duration.years} years ` : ''}
                                {item.duration.months ? `${item.duration.months} months` : ''}
                            </p>
                            <p className="mt-2 text-sm text-white">{item.description}</p>
                        </div>

                        <div
                            className="text-base whitespace-nowrap font-bold px-3 py-1 bg-white w-full rounded-full min-w-60 md:w-60 text-center"
                            style={{ color: item.color }}
                        >
                            {item.company}
                        </div>
                    </div>
                    {experience.length > 1 && index + 1 !== experience.length && (
                        <div className="relative flex items-center justify-center flex-col" style={{ marginTop: 0 }}>
                            <div className="w-1 h-8 bg-white rounded-full"></div>
                            {index === 0 ?
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="30" width="30" version="1.1" id="Layer_1" viewBox="0 0 480 480" xmlSpace="preserve" className="bg-[#793fff] rounded-full rotating-svg"><g><g><g><path d="M240,0C107.664,0,0,107.664,0,240s107.664,240,240,240s240-107.664,240-240S372.336,0,240,0z M240,460     c-121.309,0-220-98.691-220-220S118.691,20,240,20s220,98.691,220,220S361.309,460,240,460z" fill="#793fff"></path><path d="M410,194.999h-27.058c-2.643-8.44-6-16.56-10.03-24.271l19.158-19.158c3.776-3.775,5.854-8.79,5.854-14.121     c0-5.332-2.08-10.347-5.854-14.121l-35.399-35.399c-3.775-3.775-8.79-5.854-14.122-5.854c-5.331,0-10.346,2.079-14.121,5.854     l-19.158,19.158c-7.711-4.03-15.832-7.386-24.271-10.03V70c0-11.028-8.972-20-20-20h-50c-11.028,0-20,8.972-20,20v27.058     c-8.44,2.643-16.56,6-24.271,10.03L151.57,87.93c-3.775-3.776-8.79-5.854-14.121-5.854c-5.332,0-10.347,2.08-14.121,5.854     l-35.399,35.399c-3.775,3.775-5.854,8.79-5.854,14.122c0,5.331,2.079,10.346,5.854,14.121l19.158,19.158     c-4.03,7.711-7.386,15.832-10.03,24.271H70c-11.028,0-20,8.972-20,20v50c0,11.028,8.972,20,20,20h27.057     c2.643,8.44,6,16.56,10.03,24.271L87.929,328.43c-3.776,3.775-5.854,8.79-5.854,14.121c0,5.332,2.08,10.347,5.854,14.121     l35.399,35.399c3.775,3.775,8.79,5.854,14.122,5.854c5.331,0,10.346-2.079,14.121-5.854l19.158-19.158     c7.711,4.03,15.832,7.386,24.271,10.03V410c0,11.028,8.972,20,20,20h50c11.028,0,20-8.972,20.001-20v-27.058     c8.44-2.643,16.56-6,24.271-10.03l19.158,19.158c3.775,3.776,8.79,5.854,14.121,5.854c5.332,0,10.347-2.08,14.121-5.854     l35.399-35.399c3.775-3.775,5.854-8.79,5.854-14.122c0-5.331-2.079-10.346-5.854-14.121l-19.158-19.158     c4.03-7.711,7.386-15.832,10.03-24.271H410c11.028,0,20-8.972,20-20v-50C430,203.971,421.028,194.999,410,194.999z M410,264.998     h-34.598c-4.562,0-8.544,3.086-9.684,7.503c-3.069,11.901-7.716,23.133-13.813,33.387c-2.337,3.931-1.71,8.948,1.524,12.182     l24.5,24.457l-35.357,35.4l-24.5-24.5c-3.236-3.235-8.253-3.86-12.182-1.524c-10.254,6.097-21.487,10.745-33.387,13.813     c-4.417,1.14-7.503,5.122-7.503,9.684V410h-50v-34.599c0-4.562-3.086-8.544-7.503-9.684     c-11.901-3.069-23.133-7.716-33.387-13.813c-1.587-0.944-3.353-1.404-5.107-1.404c-2.586,0-5.147,1.002-7.073,2.931l-24.457,24.5     l-35.4-35.357l24.5-24.5c3.234-3.235,3.861-8.251,1.524-12.182c-6.097-10.254-10.745-21.487-13.813-33.387     c-1.14-4.417-5.122-7.503-9.684-7.503H70v-50h34.596c4.562,0,8.544-3.086,9.684-7.503c3.069-11.901,7.716-23.133,13.813-33.387     c2.337-3.931,1.71-8.948-1.524-12.182l-24.5-24.457l35.357-35.4l24.5,24.5c3.236,3.235,8.253,3.861,12.182,1.524     c10.254-6.097,21.487-10.745,33.387-13.813c4.417-1.14,7.503-5.122,7.503-9.684V70h50v34.596c0,4.562,3.086,8.544,7.503,9.684     c11.901,3.069,23.133,7.716,33.387,13.813c3.929,2.337,8.947,1.709,12.182-1.524l24.457-24.5l35.4,35.357l-24.5,24.5     c-3.234,3.235-3.861,8.251-1.524,12.182c6.097,10.254,10.745,21.487,13.813,33.387c1.14,4.417,5.122,7.503,9.684,7.503H410     V264.998z" fill="white"></path><path d="M331.585,292.475l-40-35l-13.17,15.051L298.386,290H240c-27.57,0-50-22.43-50-50h-20c0,38.598,31.402,70,70,70h58.386     l-19.971,17.475l13.17,15.051l40-35c2.17-1.898,3.415-4.642,3.415-7.525S333.755,294.373,331.585,292.475z" fill="white"></path><path fill="white" d="M201.585,207.473L181.614,190H240c27.57,0,50,22.43,50,50h20c0-38.598-31.402-70-70-70h-58.386l19.971-17.475     l-13.17-15.051l-40,35c-2.17,1.898-3.415,4.642-3.415,7.525s1.245,5.627,3.415,7.525l40,35L201.585,207.473z"></path></g></g></g></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-[#793fff] bg-white rounded-full" viewBox="0 0 16 16">  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                            }
                            <div className="w-1 h-8 bg-white rounded-full"></div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default ExperienceCard