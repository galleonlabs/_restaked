import { projects, team } from "../constants";
import LinkBadge from "./LinkBadge";

export interface Badge {
  title: string;
  url: string;
}
export interface ProjectProps {
  title: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  imagePadding?: string;
}

export interface TeamMemberProps {
  name: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  handle?: string;
  imagePadding?: string;
}

export default function Home() {

  function Project({ project }: { project: ProjectProps }) {
    return (
      <div className="pb-6 mb-6 border-b border-black/20">
        <span className="inline-flex items-center justify-center">
          <a className="flex" href={project.url} target="_blank" rel="noopener noreferrer">
            <div className="mx-auto w-auto justify-center text-center ">
              <img className={'bg-white mx-auto translate-y-0.5 inline-flex h-16 w-16 justify-center rounded-md border border-black shadow-[3px_3px_0px_#040728] hover:grayscale sm:h-16 ' + project.imagePadding} src={project.imageSrc} alt={project.imageAlt} />
            </div>
            <div className="group">
              <p className="mt-1 text-md  pl-6 group group-hover:text-theme-green font-semibold">{project.title}</p>
              <p className="mt-1 text-md  pl-6 group group-hover:text-theme-green">{project.description}</p>
            </div>
          </a>
        </span>
      </div>
    );
  }

  function TeamMember({ member }: { member: TeamMemberProps }) {
    return (
      <div className="pb-4">
        <span className="inline-flex items-center justify-center">
          <a className="flex" href={member.url} target="_blank" rel="noopener noreferrer">
            <div className="mx-auto w-auto justify-center text-center ">
              <img className={' mx-auto translate-y-0.5 inline-flex h-16 w-16 justify-center rounded-md border border-black shadow-[3px_3px_0px_#040728] hover:grayscale sm:h-16 ' + member.imagePadding} src={member.imageSrc} alt={member.imageAlt} />
            </div>
            <div className="group">
              <p className="mt-1 text-md  pl-6 group group-hover:text-theme-green font-bold">{member.name}</p>
              <p className="mt-1 text-md  pl-6 group group-hover:text-theme-green">{member.handle}</p>
            </div>
          </a>
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="pb-12 sm:pb-4 ">
        <div className="relative isolate lg:px-8">
          <div className="mx-auto max-w-3xl py-8 sm:py-16">
            <div className="rounded-md  font-normal border bg-white border-black p-4 shadow-[3px_3px_0px_#040728] sm:p-8">
              <div className="mb-4 border-b pb-8 border-black">
                <img
                  className="block mb-3 sm:mb-0 sm:inline-flex h-16 sm:translate-y-2.5 w-auto justify-start rounded-md border border-theme-oldlace navy   shadow-[3px_3px_0px_#040728]  sm:h-16"
                  src={'https://pbs.twimg.com/profile_images/1746939609836077056/mrrz-OrF_400x400.png'}
                  alt=""
                />
                <div className="inline-flex sm:ml-8  text-left">
                  <div className="    font-bold tracking-wide">
                    <span className="text-lg">_Restaked Capital</span>
                    <p className="  text-md  font-normal">
                      A community of industry angels funding the growing Restaking ecosystem.
                      
                    </p>
               
                  </div>
                </div>
              </div>

              <p className="  text-md font-normal mt-2">
                <LinkBadge url={'https://twitter.com/_restaked'} title={'_Restaked'}></LinkBadge>
                <LinkBadge url={'https://t.co/R3RO2lqQ6H'} title={'Discord'}></LinkBadge>
              </p>


              <h1 className="text-left text-lg font-bold  pb-4">Portfolio</h1>
              {projects.length === 0 ? <p className=" -mt-2 pb-2">Coming soon.</p> : <></>}
              {projects.map((project: any) => (
                <Project key={project.title} project={project} />
              ))}

              <h1 className="text-left text-lg font-bold  pb-3">Contributors</h1>
              {team.map((member: any) => (
                <TeamMember key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}