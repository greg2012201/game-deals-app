import { GamesContext } from 'providers/GamesDataProvider'
import { render, screen, waitFor } from 'test-utils'
import Genres from './Genres'

const renderWithProvider = (data, ...children) => {
  const fetchGenres = jest.fn()
  render(<GamesContext.Provider value={{ data, fetchGenres }}>{children}</GamesContext.Provider>)
}

describe('Genres', () => {
  it('component is render', () => {
    render(<Genres />)
  })
  it('render link buttons when data has been fetched', async () => {
    const mockData = {
      genresData: {
        data: [
          { name: 'test', id: '1' },
          { name: 'test', id: '2' },
          { name: 'test', id: '3' },
          { name: 'test', id: '4' },
          { name: 'test', id: '5' },
        ],
        loading: false,
      },
    }

    renderWithProvider(mockData, <Genres />)
    await waitFor(() => {
      expect(screen.getByTestId('buttons-wrapper')).toBeVisible()
    })
    await screen.findAllByText(/test/)
    await screen.findAllByTestId('genre-link')
  })
  it('render only buttons wrapper when data is not being fetched', async () => {
    const mockData = {
      genresData: {
        data: [],
        loading: false,
      },
    }
    renderWithProvider(mockData, <Genres />)
    await waitFor(() => {
      expect(screen.getByTestId('buttons-wrapper')).toBeTruthy()
      expect(screen.queryByTestId('genre-link')).toBeFalsy()
    })
  })
  it('render only buttons wrapper when data is loading', async () => {
    const mockData = {
      genresData: {
        data: [],
        loading: true,
      },
    }
    renderWithProvider(mockData, <Genres />)
    await waitFor(() => {
      expect(screen.getByTestId('buttons-wrapper')).toBeTruthy()
    })
  })
})
