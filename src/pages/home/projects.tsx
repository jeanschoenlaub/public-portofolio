import Link from "next/link";
import { projectData } from "../../data/projects";
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    full_text: string;
    video: string;
    tags: { [key: number]: string | undefined }; // Allow undefined values
    image: string;
  }

export default function Projects() {
    const recentProjects = [...projectData].slice(0, 3);
  
    const renderTags = (tags: { [key: number]: string | undefined }) => {
        return Object.values(tags)
          .filter((tag): tag is string => tag !== undefined) // Filter out undefined values
          .map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ));
      };
  
      return (
        <div >
          {recentProjects.map((project, index) => (
            <Link href="/projects">
            <div key={index} className="border-2 border-custom-mint-green flex bg-white rounded-lg mx-2 md:mx-5 my-4 shadow-md">
              {/* Image */}
              <div className="relative w-1/2 border border-slate-300">
                <Image
                  className="rounded-l-lg object-cover"
                  src={project.image || '/default-project-image.jpg'} // Fallback to default image
                  alt={`${project.title} image`}
                  layout="fill"
                />
              </div>
    
              {/* Content */}
              <div className="p-4 w-1/2 space-y-2">
                {/* Project Title */}
                <div className="text-lg tracking-tight font-bold">
                  {project.title}
                </div>
    
                {/* Description */}
                <div className="font-light text-gray-500 md:text-lg">
                  {project.description}
                </div>
    
                {/* Project Tags */}
                <div className="text-sm text-gray-800">
                  <span className="text-gray-500">
                  </span>
                  {renderTags(project.tags)}
                </div>
              </div>
            </div>
            </Link>
          ))}
          <div className="flex justify-center">
            <div className="flex w-52 justify-center items-center border py-1 px-2 rounded-lg border-custom-mint-green text-custom-mint-green hover:bg-custom-mint-green hover:text-white ">
                <Link href="/projects" download="Jean_Resume.pdf">
                    <div className=" font-semibold text flex items-center">
                        Check out more cool stuff
                    </div>
                </Link>
            </div>
            </div>
        </div>
      );
  }