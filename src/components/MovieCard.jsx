import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieCard = ({ id, title, image }) => {
  return (
    <CardWrapper>
      <Link to={`/movies/${id}`}>
        <MovieImage src={image} alt={title} />
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background.secondary};
  border-radius: ${(props) => props.theme.borderRadius.md};
  transition: ${(props) => props.theme.transitions.normal};
  margin: ${(props) => props.theme.spacing.md};
  box-shadow: 4px 4px 12px rgba(100, 149, 237, 0.3);
  overflow: hidden;
  width: 350px;
  height: 500px;
  margin: 10px;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 70vw;
    height: 85vw;
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter ${(props) => props.theme.transitions.normal};

  ${CardWrapper}:hover & {
    filter: brightness(30%);
  }
`;

const MovieTitle = styled.h3`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSize["5xl"]};
  text-align: center;
  padding: ${(props) => props.theme.spacing.sm};
  position: absolute;
  bottom: 20%;
  width: 100%;
  opacity: 0;
  transition: opacity ${(props) => props.theme.transitions.normal};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  ${CardWrapper} :hover & {
    opacity: 1;
  }
`;
