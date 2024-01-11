import ProjectCard from "./ProjectCard";
import Link from "next/link";
import SelectedProjectData from "./ProjectData";
export default function ProjectsPreview() {
  return (
    <>
      <section className="relative py-10 space-y-4 ">
        <div className="flex items-center justify-between">
          <span className=" font-heading text-xl md:text-2xl lg:text-4xl font-bold">
            Selected Projects
          </span>

          <Link
            href="/projects"
            className="inline-flex items-center md:text-lg lg:text-xl font-heading tracking-normal gap-2.5  px-3 py-1 rounded-md  hover:bg-gray-300/80  dark:hover:bg-gray-800 transition duration-300"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 rotate-45 "
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className=" text-start text-sm md:text-base ">
          Take a look below at some of my best projects.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {/* <ProjectCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed equasi esse sequi corporis quibusdam debitis. Enim ut doloribus ea lorem10"
                url="/"
                imageSrc="/opengraph-image.png"
                tags={["JavaScript","React","NextJs"]}
                ongoing={false}
            /> */}

            {SelectedProjectData.map((project) => (
                <ProjectCard
                key={project.id}
                keys={project.id}
                title={project.title}
                description={project.description}
                url={project.url}
                imageSrc={project.imageSrc}
                tags={project.tags}
                ongoing={project.ongoing}
                />
            ))}
                
         </div>
      </section>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sed ex
      quasi esse sequi corporis quibusdam debitis. Enim ut doloribus ea
      accusantium! Doloribus, ratione? Praesentium, provident. Laborum inventore
      porro enim, error explicabo officiis, odio laudantium ut sequi, amet vero
      neque in voluptatem delectus eos consequatur nobis! Voluptas, deleniti. Ad
      commodi, ducimus qui vel accusantium similique doloremque laborum dolor
      dolore iusto delectus veritatis doloribus nemo voluptatibus reiciendis
      earum, tempore repellendus eligendi ea odit eum? Sint mollitia deserunt,
      voluptatum ex quis accusantium distinctio hic, debitis aperiam quo
      suscipit aut at? Alias ipsum, itaque provident at ex accusantium
      cupiditate praesentium amet dolorem maiores perspiciatis possimus ullam
      autem quis earum dolorum illo! Mollitia nam facere nostrum necessitatibus
      iure at eaque tenetur quam omnis vero nobis libero consequuntur, repellat
      earum, ipsam ducimus ratione ipsa? Esse nesciunt quibusdam magnam
      reprehenderit assumenda. Sint labore, quisquam provident dolore dolorem
      vel, rem porro suscipit assumenda fugiat magnam voluptates quas,
      aspernatur reprehenderit eos esse! Architecto velit dolores earum sequi ut
      necessitatibus eum, temporibus, quae obcaecati repellat alias ad nam
      delectus repudiandae laborum nihil deleniti aliquam quasi perferendis
      magni rem id? Eius maiores expedita sit quos, totam, qui eveniet fugit vel
      quod laudantium similique consectetur repudiandae? Soluta reprehenderit
      quae architecto sunt.
    </>
  );
}
