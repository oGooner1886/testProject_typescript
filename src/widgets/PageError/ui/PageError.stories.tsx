import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { PageError } from "./PageError";

const meta: Meta<typeof PageError> = {
  title: "widget/PageError",
  component: PageError,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
