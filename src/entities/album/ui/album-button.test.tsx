import { composeStories } from "@storybook/testing-react";
import * as stories from "./album-button.stories"
import { act, fireEvent, render, screen } from "@/jest/utils";
import userEvent from "@testing-library/user-event";

const { Default } = composeStories(stories)

describe("AlbumButtonTests", () => {
  it("AlbumButton should be render", () => {
    expect(render(<Default />).getByRole("button")).toBeInTheDocument()
  })
  it("AlbumButton event should work", () => {
    const onClick = jest.fn()
    render(<Default  onClick={onClick}/>)
    const button = screen.getByRole("button")
    expect(onClick).toHaveBeenCalledTimes(0)
    act(() => {
      fireEvent.click(screen.getByRole("button"))
    })
    expect(onClick).toHaveBeenCalledTimes(1)
    userEvent.click(button)
  })
})