import type { Meta, StoryObj } from "@storybook/react";

import "app/styles/index.scss";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "Text",
    value: '123'
  },
};

