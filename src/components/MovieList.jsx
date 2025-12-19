import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const { api } = useTheme();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const url = `${api.baseUrl}/movie/popular?api_key=${api.key}&language=en-US&page=1`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [api]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Something went wrong when downloading movies.</p>;

  return (
    <GridContainer>
      {movies.map((movie) => {
        const imageUrl = movie.poster_path
          ? `${api.imageBaseUrl}/w342${movie.poster_path}`
          : null;

        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={imageUrl}
          />
        );
      })}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  padding: 10px;
  justify-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.wide}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
