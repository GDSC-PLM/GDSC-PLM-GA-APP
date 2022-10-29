import WelcomeHero from "./welcome-hero.component";

export default {
  title: "Welcome/Welcome Hero Component",
  component: WelcomeHero,
};

const Template = (args) => <WelcomeHero {...args} />;
export const WelcomeHeroStory = Template.bind({});
