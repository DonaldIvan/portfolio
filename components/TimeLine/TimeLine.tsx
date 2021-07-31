import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles';
import { Section, SectionText, SectionTitle } from 'styles/GlobalComponents';
import { ABOUT } from 'constants/header';
import { TIMELINE } from 'constants/timelines';

const TOTAL_CAROUSEL_COUNT = TIMELINE.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const scroll = (node: HTMLUListElement | null, left: number) => {
    return node?.scrollTo({ left, behavior: 'smooth' });
  };

  const clickHandler = (event: React.MouseEvent, index: number) => {
    event.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (index / TOTAL_CAROUSEL_COUNT),
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const scrollHandler = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TOTAL_CAROUSEL_COUNT,
      );

      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id={ABOUT.id}>
      <SectionTitle>{ABOUT.label}</SectionTitle>
      <SectionText>About Me</SectionText>
      <CarouselContainer ref={carouselRef} onScroll={scrollHandler}>
        <>
          {TIMELINE.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${item}`}
                active={activeItem}
                onClick={(event) => clickHandler(event, index)}
              >
                <CarouselItemTitle>{item.year}</CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TIMELINE.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => clickHandler(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
