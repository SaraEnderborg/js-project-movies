import React from "react";
import styled, { useTheme } from "styled-components";
import { Star } from "lucide-react";

export const DetailCard = ({ movie }) => {
  const theme = useTheme();
  const { api } = theme;

  const posterUrl = movie?.poster_path
    ? `${api.imageBaseUrl}${api.imageSizes.poster.tablet}${movie.poster_path}`
    : null;

  const backdropUrl = movie?.backdrop_path
    ? `${api.imageBaseUrl}${api.imageSizes.backdrop.desktop}${movie.backdrop_path}`
    : null;

  const releaseYear = movie?.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const genres = movie?.genres?.length
    ? movie.genres.map((g) => g.name).join(", ")
    : "N/A";

  const runtime = movie?.runtime ? `${movie.runtime} min` : "N/A";

  return (
    <BackdropContainer $backdropUrl={backdropUrl}>
      <BackdropOverlay />

      <ContentWrapper>
        <PosterSection>
          {posterUrl && (
            <PosterImage
              src={posterUrl}
              alt={`${movie.title} movie poster`}
              width="350"
              height="525"
              loading="lazy"
            />
          )}
        </PosterSection>

        <DetailsSection>
          <TitleWrapper>
            <Title>{movie?.title ?? "Untitled"}</Title>

            <RatingBadge>
              <Star size={24} fill="currentColor" />
              <RatingText>
                {movie?.vote_average
                  ? Math.round(movie.vote_average * 10) / 10
                  : "N/A"}
              </RatingText>
            </RatingBadge>
          </TitleWrapper>

          {movie?.tagline && <Tagline>{movie.tagline}</Tagline>}

          {movie?.overview && <Overview>{movie.overview}</Overview>}

          <MovieDetails>
            <DetailItem>
              <DetailLabel>Release Year:</DetailLabel>
              <DetailValue>{releaseYear}</DetailValue>
            </DetailItem>

            <DetailItem>
              <DetailLabel>Runtime:</DetailLabel>
              <DetailValue>{runtime}</DetailValue>
            </DetailItem>

            <DetailItem>
              <DetailLabel>Genres:</DetailLabel>
              <DetailValue>{genres}</DetailValue>
            </DetailItem>
          </MovieDetails>
        </DetailsSection>
      </ContentWrapper>
    </BackdropContainer>
  );
};

const BackdropContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: ${(props) =>
    props.$backdropUrl ? `url(${props.$backdropUrl})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BackdropOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.85) 40%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.2) 100%
  );

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.9) 50%,
      rgba(0, 0, 0, 0.95) 100%
    );
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};
  padding: ${(props) => props.theme.spacing.xl};
  padding-top: calc(${(props) => props.theme.spacing.xxxl} + 60px);
  max-width: ${(props) => props.theme.breakpoints.wide};
  margin: 0 auto;
  min-height: 100vh;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    padding: ${(props) => props.theme.spacing.xxl};
    padding-top: calc(${(props) => props.theme.spacing.xxxl} + 80px);
  }
`;

const PosterSection = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 350px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 350px;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: ${(props) => props.theme.shadows["2xl"]};
  border: 4px solid rgba(255, 255, 255, 0.1);
`;

const DetailsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  max-width: 800px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing.lg};
  flex-wrap: wrap;
`;

const Title = styled.h1`
  flex: 1;
  font-size: ${(props) => props.theme.fontSize["4xl"]};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.text.primary};
  line-height: 1.2;
  min-width: 250px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSize["5xl"]};
  }
`;

const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.colors.accent.yellow};
  color: ${(props) => props.theme.colors.accent.yellowText};
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  box-shadow: ${(props) => props.theme.shadows.lg};
`;

const RatingText = styled.span`
  font-size: ${(props) => props.theme.fontSize["2xl"]};
`;

const Tagline = styled.p`
  color: ${(props) => props.theme.colors.text.muted};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-style: italic;
  margin-top: -${(props) => props.theme.spacing.md};
`;

const Overview = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.text.secondary};
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.md};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DetailItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
`;

const DetailLabel = styled.span`
  color: ${(props) => props.theme.colors.text.label};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const DetailValue = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSize.md};
`;
