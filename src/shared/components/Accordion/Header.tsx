import { useAccordion } from '@/shared/components/Accordion/Accordion';

interface HeaderPropTypes {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderPropTypes) => {
  const { toggle } = useAccordion();

  return (
    <div onClick={toggle} className={className}>
      {children}
    </div>
  );
};

export default Header;
