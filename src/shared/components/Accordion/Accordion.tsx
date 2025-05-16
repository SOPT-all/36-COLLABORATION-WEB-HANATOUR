import Content from '@/shared/components/Accordion/Content';
import Header from '@/shared/components/Accordion/Header';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface AccordionContextPropTypes {
  isVisible: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextPropTypes>({
  isVisible: false,
  toggle: () => {},
});

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Header, Content 컴포넌트는 Accordion 컴포넌트 내부에서 사용되어야 합니다.');
  }
  return context;
};

interface AccordionPropTypes {
  children: ReactNode;
}

const Accordion = ({ children }: AccordionPropTypes) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  return <AccordionContext.Provider value={{ isVisible, toggle }}>{children}</AccordionContext.Provider>;
};

export default Accordion;

Accordion.Header = Header;
Accordion.Content = Content;
