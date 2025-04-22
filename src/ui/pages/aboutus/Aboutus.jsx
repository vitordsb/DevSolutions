// AboutCarousel.jsx
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

const slides = [
  { title: 'Missão',  description: 'Nossa missão é entregar soluções de software de alta qualidade que gerem impacto positivo nos negócios dos nossos clientes.' },
  { title: 'Visão',   description: 'Ser referência nacional em inovação e excelência em engenharia de software, antecipando tendências e superando expectativas.' },
  { title: 'Valores', description: 'Transparência, colaboração, qualidade e respeito ao cliente e ao time. Acreditamos que ética e inovação caminham juntas.' },
  { title: 'História',description: 'Nossa história começou há 10 anos com a paixão por tecnologia e evolução constante.' },
  { title: 'Equipe',  description: 'Contamos com uma equipe multidisciplinar focada em resultados e aprendizado contínuo.' },
]

const SLIDE_WIDTH = 450
const GAP = 30 

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const CarouselTrack = styled.div`
  display: flex;
  gap: ${GAP}px;
  transition: transform 0.5s ease;
  transform: translateX(-${props => props.translate}px);
  padding: 50px;
`

const Slide = styled.div`
  flex: 0 0 500px;
  background: var(--box-color);
  height: 400px;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 0 0 10px;
    font-size: 2rem;
    color: #333;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: center;
    color: #555;
  }
`

const PrevButton = styled(FaArrowCircleLeft)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 2.5rem;
  cursor: pointer;
  opacity: ${props => (props.disabled ? 0.3 : 0.7)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
`

const NextButton = styled(FaArrowCircleRight)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 2.5rem;
  cursor: pointer;
  opacity: ${props => (props.disabled ? 0.3 : 0.7)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
`

export default function AboutCarousel() {
  const [index, setIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    const calc = () => {
      const width = containerRef.current?.offsetWidth || 0
      const count = Math.floor((width + GAP) / (SLIDE_WIDTH + GAP))
      setSlidesPerView(Math.max(count, 1))
      setIndex(i => Math.min(i, Math.max(slides.length - count, 0)))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  const maxIndex = Math.max(slides.length - slidesPerView, 0)
  const canSlide = slides.length > slidesPerView
  const translate = index * (SLIDE_WIDTH + GAP)

  const handlePrev = () => setIndex(i => Math.max(i - 1, 0))
  const handleNext = () => setIndex(i => Math.min(i + 1, maxIndex))

  return (
    <CarouselWrapper ref={containerRef}>
      <CarouselTrack translate={translate}>
        {slides.map((slide, i) => (
          <Slide key={i}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Slide>
        ))}
      </CarouselTrack>

      {canSlide && (
        <>
          <PrevButton
            disabled={index === 0}
            onClick={handlePrev}
          />
          <NextButton
            disabled={index === maxIndex}
            onClick={handleNext}
          />
        </>
      )}
    </CarouselWrapper>
  )
}
