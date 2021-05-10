// test-utils.js
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'assets/styles/theme'
import { MemoryRouter } from 'react-router-dom'

const AllTheProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MemoryRouter>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
