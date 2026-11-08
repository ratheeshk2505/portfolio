import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ExperienceCard from "../cards/ExperienceCard";
import { experience } from "../../content";

function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="Where I've worked and what I was responsible for."
        />

        <div>
          {experience.map((item) => (
            <ExperienceCard key={`${item.company}-${item.duration}`} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
