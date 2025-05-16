import { useAccordion } from '@/shared/components/Accordion/Accordion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className }: Props) => {
  const { isVisible } = useAccordion();

  return isVisible && <div className={className}>{children}</div>;
};

export default Content;
