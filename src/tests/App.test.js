import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import React from 'react'
import App from '../App';
import SpecialOffers from '../components/SpecialOffers';
import Home from '../components/Home';
import Products from '../components/Products';
import { vinylData } from '../components/productsData';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BoughtProductsContext } from '../App';

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

  test('first render shows XTC picture and associated data', () => {
    render(<SpecialOffers offers={vinylData}/>, {wrapper: MemoryRouter});
  
    const testImage = screen.getByRole('img');
    const xtcHeadline = screen.getByRole('heading', { name: "XTC - Life Begins At The Hop" });
    expect(testImage.alt).toContain("XTC");
    expect(xtcHeadline).toBeInTheDocument();
  });

  test('click on previous slide displays jah picture and associated data', async () => {
    const user = userEvent.setup();
    render(<SpecialOffers offers={vinylData}/>, {wrapper: MemoryRouter});

    await act(async() => {
       await user.click(screen.getByRole('button', { name: "previous slide" }));
    })
    
    const testImage = screen.getByRole('img', { name: "Jah Wurzel - Wuthering Heights"});
    const jahHeadline = screen.getByRole('heading', { name: "Jah Wurzel - Wuthering Heights" });
    expect(testImage).toBeInTheDocument();
    expect(jahHeadline).toBeInTheDocument();
  });

  test('click on next slide displays klark picture and associated data', async () => {
    const user = userEvent.setup();
    render(<SpecialOffers offers={vinylData}/>, {wrapper: MemoryRouter});

    await act(async() => {
      await user.click(screen.getByRole('button', { name: "next slide" }));
    })
    
    const testImage = screen.getByRole('img', { name: "Klark Kent - Don't Care"});
    const klarkHeadline = screen.getByRole('heading', { name: "Klark Kent - Don't Care" });
    expect(testImage).toBeInTheDocument();
    expect(klarkHeadline).toBeInTheDocument();
    });
});

test('renders additional info on Home correctly', () => {
  render(<Home />, {wrapper: MemoryRouter});

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

  test("renders Genres section properly", () => {
    render (<Products products={testProducts}/>, {wrapper: MemoryRouter})

    const genresHeadline = screen.getByRole("heading", {name: "Genres"});
    const genresButtons = screen.getAllByRole("button")
    expect(genresHeadline).toBeInTheDocument();
    expect(genresButtons).toHaveLength(7);
  });

  test("renders all products passed in", () => {
    render (<Products products={testProducts}/>, {wrapper: MemoryRouter})

    const productTitle = screen.getByAltText("Colin Stetson - When we were that wept for the sea");
    const productImage = screen.getByRole("img", {name: "Colin Stetson - When we were that wept for the sea"});

    expect(productTitle).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAccessibleName("Colin Stetson - When we were that wept for the sea")
  })
})

describe("App routing", () => {
  test("should display proper subpage on click", async () => {
    const user = userEvent.setup()
    render (<App />, {wrapper: MemoryRouter})

    expect(screen.getByText(/XTC - Life Begins At The Hop/i)).toBeInTheDocument();

    await act(async () => {
      await user.click(screen.getByText(/CDs/i));
    })
    
    expect(screen.getByText(/Colin Stetson - When we were that wept for the sea/i)).toBeInTheDocument();

    await act(async () => {
      await user.click(screen.getByText(/Vinyls/i));
    })
    
    expect(screen.getByText(/XTC - Life Begins At The Hop/i)).toBeInTheDocument();
    expect(screen.getByText(/Klark Kent - Don't Care/i)).toBeInTheDocument();
  })
  
  test.skip("should redirect to Home when the page is not found", async () => {
    const user = userEvent.setup();
    render(<App />, {wrapper: MemoryRouter})
  })
})

describe("rendering bought products in sidebar", () => {
  const boughtProducts = vinylData;
  const deleteFromCartMock = jest.fn()
  test("should render products when passed it", () => {
    render(<BoughtProductsContext.Provider value={{boughtProducts, deleteFromCartMock}}>
      <Sidebar />
      </BoughtProductsContext.Provider>, {wrapper: MemoryRouter})

    expect(screen.getByText(/XTC - Life Begins At The Hop/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", {name: "Grand total: 1800$"})).toBeInTheDocument();
      // lacks ecpectations for number of products
  })
})