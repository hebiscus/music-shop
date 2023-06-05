import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import React from 'react'
import App from '../App';

test('renders navbar no matter the subpage', () => {
  render(<App />, {wrapper: MemoryRouter});
  const cdLink = screen.getByText(/Cds/i);
  const homeLink = screen.getByText(/Home/i);
  const vinylLink = screen.getByText(/Vinyls/i);
  
  expect(cdLink).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(vinylLink).toBeInTheDocument();
});
