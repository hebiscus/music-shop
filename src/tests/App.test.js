import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import React from 'react'
import App from '../App';
import SpecialOffers from '../components/SpecialOffers';


test('renders navbar no matter the subpage', () => {
  render(<App />, {wrapper: MemoryRouter});
  const cdLink = screen.getByText(/Cds/i);
  const homeLink = screen.getByText(/Home/i);
  const vinylLink = screen.getByText(/Vinyls/i);
  
  expect(cdLink).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(vinylLink).toBeInTheDocument();
});



describe('special offer rendering', () => {
  const testPictures = [
    "xtc.png", "klark.png", "jah.png"
  ]

  test('first render shows XTC picture and data', () => {
    render(<SpecialOffers pictures={testPictures}/>);
  
    const testImage = screen.getByRole('img');
    expect(testImage).toHaveAttribute('src', 'xtc.png');
    expect(testImage.alt).toContain("xtc");
  })

  test('click on previous slide displays jah picture and data', async () => {
    const user = userEvent.setup();
    render(<SpecialOffers pictures={testPictures}/>);

    // const leftArrow = screen.getByRole('button', { pressed: true });

    await user.click(screen.getByRole('button', { name: "previous slide" }));
    const testImage = screen.getByRole('img', { name: "jah.png"});
    console.log(testImage)
    expect(testImage).toBeInTheDocument();
  })
})