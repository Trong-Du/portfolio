import { ComponentMeta, ComponentStory } from "@storybook/react";

import { EducationCard } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/EducationCard",
  component: EducationCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EducationCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EducationCard> = (args) => (
  <EducationCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  company: "SAMSUNG ELECTRONICS HCMC CE COMPLEX",
  title: "PHP Fullstack Developer",
  date: "Jan 2017 - Jun 2020",
  teamSize: "1 leader, 8 developers",
  businessValues: [
    "Build an intranet system to improve production operations, and systematize all processes to optimize time and costs",
  ],
  activities: [
    "Build web apps to manage resources and processes of the factory with main modules is Warehouse Management, Human Resource Management",
    "Build Batch job to auto calculate data, send a warning, notification email",
    "Optimize SQL queries for high load",
    "Analyze process and data to Innovate process to reduce maximum cost and resources",
    "Work with direct PIC to get requirements for the new system and get VOC for the deployed system",
  ],
  technicalStacks: [
    "Use CakePHP 2.x with the MVC model to implement web app",
    "Use HTML, CSS, JavaScript, JQuery, Bootstrap, DHTMLX to build UI",
    "Use MySQL as the main database and SQL Server for machine connect",
    "Use Highchart.js for data visualize",
    "Use SVN for source control",
  ],
  isLeft: true,
};
