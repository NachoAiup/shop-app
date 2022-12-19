import { Link as RouterLink } from "react-router-dom";
import MUILink from "@mui/material/Link";

type LinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Link = ({
  to,
  children,
  onClick,
  className,
  ...muiLinkProps
}: LinkProps) => {
  return (
    <MUILink
      component={RouterLink}
      to={to}
      underline="none"
      className={className}
      {...muiLinkProps}
      onClick={onClick}
    >
      {children}
    </MUILink>
  );
};

export default Link;
