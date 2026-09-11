import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../cards/ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="border-b border-border py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="A few things I've built and kept maintained."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
