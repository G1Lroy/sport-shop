import { CardT, ReviewT } from "../types";

type GenerateSlidesOptionsT = {
  mockData: CardT[] | ReviewT[]; // etc...
  ReactComponent: React.ComponentType<any>; 
  numberOfCards: 9 | 12; 
};

export const generateSlides = ({ mockData, numberOfCards, ReactComponent }: GenerateSlidesOptionsT): JSX.Element[] => {
  const sliderContent: JSX.Element[] = [];
  const mockProductsCount = mockData.length;

  for (let i = 0; i < numberOfCards; i++) {
    const mockProductIndex = i % mockProductsCount;
    const item = mockData[mockProductIndex];
    sliderContent.push(<ReactComponent key={i} card={item} />);
  }

  return sliderContent;
};
