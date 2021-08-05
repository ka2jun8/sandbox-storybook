import { Meta, Story } from "@storybook/react";
import React from "react";

import App from "./App";

type Props = React.ComponentProps<typeof App>;

const meta: Meta<Props> = {
  title: "App",
  args: {
    descriptions: ["テスト"],
  },
  component: App,
};
export default meta;

const Template: Story<Props> = (args) => <App {...args} />;

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
