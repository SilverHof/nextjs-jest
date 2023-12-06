import { Meta, Story } from "@storybook/react";
import { AlbumButton, AlbumButtonProps } from "./album-button";

export default {
  title: "AlbumButton",
  component: AlbumButton,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      defaultValue: "medium"
    }
  }
} as Meta

const Template: Story<AlbumButtonProps> = args => <AlbumButton {...args}></AlbumButton>
export const Default = Template.bind({})