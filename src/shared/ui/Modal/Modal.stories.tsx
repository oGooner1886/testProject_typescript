import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";
const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatem pariatur architecto tenetur magni provident corrupti nesciunt beatae cumque sunt fuga iste eius libero. Tenetur voluptate sint, iure dolor quo quod libero fugit magnam iste odit quas ullam quaerat eos numquam harum corrupti eveniet nostrum, vitae neque distinctio aliquam. Eveniet!",
    isOpen: true,
  },
};

export const PrimaryDark: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatem pariatur architecto tenetur magni provident corrupti nesciunt beatae cumque sunt fuga iste eius libero. Tenetur voluptate sint, iure dolor quo quod libero fugit magnam iste odit quas ullam quaerat eos numquam harum corrupti eveniet nostrum, vitae neque distinctio aliquam. Eveniet!",
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
