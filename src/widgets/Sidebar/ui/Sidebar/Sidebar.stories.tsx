import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Sidebar } from "./Sidebar";
const meta: Meta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

