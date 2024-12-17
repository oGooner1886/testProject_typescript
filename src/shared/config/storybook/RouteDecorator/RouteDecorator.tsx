import { StoryFn, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouteDecorator = (story: () => StoryFn) => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
