import userEvent from '@testing-library/user-event'
import { AlbumCard } from './album-card'
import { act, fireEvent, render, screen } from '@/jest/utils'

describe('AlbumCard', () => {
  it('should render properly', () => {
    render(<AlbumCard backHref={'/albums'} id={1} title={'title'} />)
  })
  it('should render button', () => {
    render(<AlbumCard backHref={'/albums'} id={1} title={'title'} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
  it('button onClick event should work', () => {
    render(<AlbumCard backHref={'/albums'} id={1} title={'title'} />)
    const button = screen.getByRole('button')
    const onClick = jest.fn()
    button.onclick = onClick

    // ** button.onclick = onClick
    // ** we can use
    expect(onClick).toBeCalledTimes(0)
    // ** or
    expect(button.onclick).toBeCalledTimes(0)

    act(() => {
      fireEvent.click(button)
      fireEvent.click(button)
      userEvent.click(button)
    })
    expect(button.onclick).toBeCalledTimes(2)
    userEvent.click(button)
    // expect(button.onclick).toBeCalledTimes(1)

    expect(onClick).toHaveBeenCalled()
  })
})
