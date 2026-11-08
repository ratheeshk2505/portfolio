import { activeTemplate } from "../../templates";
import HeroClassic from "./hero/HeroClassic";
import HeroMinimal from "./hero/HeroMinimal";
import HeroTerminal from "./hero/HeroTerminal";

const heroes = {
  classic: HeroClassic,
  minimal: HeroMinimal,
  terminal: HeroTerminal,
};

function Hero() {
  const Component = heroes[activeTemplate.id] ?? HeroClassic;
  return <Component />;
}

export default Hero;
