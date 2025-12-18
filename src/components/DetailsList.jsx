import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DetailCard } from "./DetailCard";

export const DetailsList = () => {
  const { id } = useParams();
  const { api } = useTheme();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setNotFound(false);
    setMovie(null);

    const url = `${api.baseUrl}/movie/${id}?api_key=${api.key}&language=en-US`;

    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          throw new Error("not-found");
        }
        if (!res.ok) {
          throw new Error("fetch-error");
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setMovie(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setNotFound(true);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id, api]);

  if (loading) {
    return <LoadingText>Loading movie details...</LoadingText>;
  }

  if (notFound) {
    return <NotFoundText>Movie Not Found</NotFoundText>;
  }

  if (!movie) return null;

  return <DetailCard movie={movie} />;
};

const LoadingText = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.xl};
  padding: ${(props) => props.theme.spacing.xl};
`;

const NotFoundText = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.xl};
  padding: ${(props) => props.theme.spacing.xl};
`;
