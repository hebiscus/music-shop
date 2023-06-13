import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import React from 'react'
import App from '../App';
import SpecialOffers from '../components/SpecialOffers';
import Home from '../components/Home';
import Products from '../components/Products';


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

  test('first render shows XTC picture and associated data', () => {
    render(<SpecialOffers pictures={testPictures}/>);
  
    const testImage = screen.getByRole('img');
    const xtcHeadline = screen.getByRole('heading', { name: "XTC - Life Begins At The Hop" });
    expect(testImage).toHaveAttribute('src', 'xtc.png');
    expect(testImage.alt).toContain("xtc");
    expect(xtcHeadline).toBeInTheDocument();
  });

  test('click on previous slide displays jah picture and associated data', async () => {
    const user = userEvent.setup();
    render(<SpecialOffers pictures={testPictures}/>);

    await act(async() => {
       await user.click(screen.getByRole('button', { name: "previous slide" }));
    })

    // act(() => {
    //   user.click(screen.getByRole('button', { name: "previous slide" }));
    // })

    // await user.click(screen.getByRole('button', { name: "previous slide" }));
    
    const testImage = screen.getByRole('img', { name: "jah.png"});
    const jahHeadline = screen.getByRole('heading', { name: "Jah Wurzel - Wuthering Heights" });
    expect(testImage).toBeInTheDocument();
    expect(jahHeadline).toBeInTheDocument();
  });

  test('click on next slide displays klark picture and associated data', async () => {
    const user = userEvent.setup();
    render(<SpecialOffers pictures={testPictures}/>);


    await act(async() => {
      await user.click(screen.getByRole('button', { name: "next slide" }));
    })
    
    const testImage = screen.getByRole('img', { name: "klark.png"});
    const klarkHeadline = screen.getByRole('heading', { name: "Klark Kent - Don't Care" });
    expect(testImage).toBeInTheDocument();
    expect(klarkHeadline).toBeInTheDocument();
    });
});

test('renders additional info on Home correctly', () => {
  render(<Home />);

  const mainParagraph = screen.getByText(/For all/i);
  const githubLink = screen.getByText(/Github/i);
  const linkedinLink = screen.getByText(/Linkedin/i);
  expect(mainParagraph).toBeInTheDocument(); 
  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
});

describe("rendering Products component", () => {
  const testProducts = [
    {title: "Colin Stetson - When we were that wept for the sea",
    cover: "/blueCD.png",
    description: "ababa cnsdkc yes!",
    price: "$30.00"}
  ];

  // test("renders Genres section properly", () => {
  //   render (<Products products={testProducts} />)

  //   const genresHeadline = screen.getByRole("heading", {name: "Genres"});
  //   const genresButtons = screen.getAllByRole("button")
  //   expect(genresHeadline).toBeInTheDocument();
  //   expect(genresButtons).toHaveLength(6);
  // });

  // test("renders all products passed in", () => {
  //   render (<Products products={testProducts} />)

  //   const productTitle = screen.getByAltText("Colin Stetson - When we were that wept for the sea");
  //   const productImage = screen.getByRole("img", {name: "Colin Stetson - When we were that wept for the sea"});

  //   expect(productTitle).toBeInTheDocument();
  //   expect(productImage).toBeInTheDocument();
  //   expect(productImage).toHaveAccessibleName("Colin Stetson - When we were that wept for the sea")
  // })


})