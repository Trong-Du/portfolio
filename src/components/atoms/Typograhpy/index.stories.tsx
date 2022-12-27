import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Typograhpy } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Typograhpy",
  component: Typograhpy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Typograhpy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typograhpy> = (args) => (
  <Typograhpy {...args} />
);

export const Paragraph = Template.bind({});
Paragraph.args = {
  children: "Paragraph",
};

export const Heading1 = Template.bind({});
Heading1.args = {
  children: "Heading1",
  variant: "h1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: "Heading2",
  variant: "h2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: "Heading3",
  variant: "h3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  children: "Heading4",
  variant: "h4",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  children: "Heading5",
  variant: "h5",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  children: "Heading6",
  variant: "h6",
};
