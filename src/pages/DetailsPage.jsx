import React from "react";
import { ArrowLeft } from "lucide-react";
import styled from "styled-components";
import { DetailsList } from "../components/DetailsList";
import { BackLink } from "../components/BackLink";

export const DetailsPage = () => {
  return (
    <PageContainer>
      <BackLink to="/">
        <ArrowLeft size={24} />
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
