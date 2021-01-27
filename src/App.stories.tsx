import { Meta, Story } from "@storybook/react";
import React from "react";

import App from "./App";

const meta: Meta = {
  title: "App",
  component: App
};
export default meta;

const Template: Story<React.ComponentProps<typeof App>> = (args) => (
  <App {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  descriptions: ["Hello", "Description"],
};

export const NgPattern = Template.bind({});
// expect type error
NgPattern.args = {
  title: "Title",
  // descriptions: [],
};
