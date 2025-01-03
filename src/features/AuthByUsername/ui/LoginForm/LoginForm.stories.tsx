import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};
