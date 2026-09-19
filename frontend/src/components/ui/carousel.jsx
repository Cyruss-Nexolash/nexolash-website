import React from 'react';

const Carousel = ({ children }) => <div>{children}</div>;

const CarouselContent = ({ children }) => <div>{children}</div>;

const CarouselItem = ({ children }) => <div>{children}</div>;

const CarouselPrevious = ({ children }) => <button>{children}</button>;

const CarouselNext = ({ children }) => <button>{children}</button>;

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };