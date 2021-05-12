import { render, screen, waitFor, fireEvent } from 'test-utils'
import GamesListItem from './GamesListItem'

const componentRender = (data) => render(<GamesListItem gamesData={data} />)
describe('GamesListItem', () => {
  it('component is render', async () => {
    const mockData = {
      name: 'test',
      background_image: 'http://example-image.com',
      genres: [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
      ],
      slug: 'test-game',
      metacritic: 9,
    }
    componentRender(mockData)
    await screen.findAllByText(/test/i)
    await waitFor(() => {
      expect(screen.findByTestId('image')).toBeTruthy()
      expect(screen.queryByTestId('image').getAttribute('src') === 'http://example-image.com').toBeTruthy()
      expect(screen.queryByTestId('metascore')).toBeInTheDocument()
    })
  })
  it(`image renders with alt text when the background_image value is null, undefined or ''`, async () => {
    const mockData = {
      name: 'test',
      background_image: '' || null || undefined,
      genres: [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
      ],
      slug: 'test-game',
      metacritic: 9,
    }
    componentRender(mockData)
    await screen.findAllByText(/test/)

    await waitFor(() => {
      expect(screen.queryByTestId('image').getAttribute('alt') === 'test').toBeTruthy()
      expect(screen.queryByTestId('image').getAttribute('src') === '').toBeTruthy()
      expect(screen.queryByTestId('image')).toBeInTheDocument()
    })
  })
  it(`link to game detail displays with slug text`, async () => {
    const mockData = {
      name: 'test',
      background_image: 'http://example-image.com',
      genres: [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
      ],
      slug: 'test-game',
      metacritic: 9,
    }
    componentRender(mockData)
    await screen.findAllByText(/test/)

    await waitFor(() => {
      expect(screen.queryByTestId('game-link').getAttribute('href') === `/games/${mockData.slug}`).toBeTruthy()
    })
  })
  it(`displays link to game genres`, async () => {
    const mockData = {
      name: 'test',
      background_image: 'http://example-image.com',
      genres: [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
      ],
      slug: 'test-game',
      metacritic: 9,
    }
    componentRender(mockData)
    await screen.findAllByText(/test/i)

    await waitFor(() => {
      const genreLink = screen.getAllByTestId('genre-link')
      genreLink.map((element) => {
        return expect(element).toBeInTheDocument()
      })
    })
  })
  it(`the rating is not display while the metacritic data value is '', null or undefined`, async () => {
    const mockData = {
      name: 'test',
      background_image: 'http://example-image.com',
      genres: [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
      ],
      slug: 'test-game',
      metacritic: '' || null || undefined,
    }
    componentRender(mockData)
    await waitFor(() => {
      expect(screen.queryByTestId('metascore')).not.toBeInTheDocument()
    })
  })
  it(`tooltip displays when rating is on hover`, async () => {
    const mockData = {
      name: 'test',
      background_image: 'http://example-image.com',
      genres: [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
      ],
      slug: 'test-game',
      metacritic: 9,
    }
    componentRender(mockData)

    await waitFor(() => {
      const rating = screen.getByTestId('metascore')
      fireEvent.mouseOver(rating)
    })
    expect(screen.findByText(/metascore/)).toBeTruthy()
  })
})
