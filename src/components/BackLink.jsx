import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};

  padding: ${(props) => props.theme.spacing.lg};
  margin: ${(props) => props.theme.spacing.lg};

  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSize.lg};

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: ${(props) => props.theme.borderRadius.md};

  transition: color ${(props) => props.theme.transitions.normal},
    background ${(props) => props.theme.transitions.normal};

  &:hover {
    color: ${(props) => props.theme.colors.hover};
    background: rgba(0, 0, 0, 0.7);
  }
`;
