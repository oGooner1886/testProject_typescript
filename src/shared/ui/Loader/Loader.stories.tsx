import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Loader } from "./Loader";
const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: {
    
  },
};

export const Dark: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
