import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import styled from "styled-components";
import { DetailsList } from "../components/DetailsList";

export const DetailsPage = () => {
  return (
    <PageContainer>
      <BackLink to="/">
        <ChevronLeft size={24} />
        <span>Movies</span>
      </BackLink>

      <DetailsList />
    </PageContainer>
  );
};

const PageContainer = styled.article`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background.primary};
`;

const BackLink = styled(Link)`
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
