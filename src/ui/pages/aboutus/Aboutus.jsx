
// AboutCarousel.jsx - Versão Melhorada
import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

const slides = [
  { 
    title: 'Missão', 
    description: 'Nossa missão é entregar soluções de software de alta qualidade que gerem impacto positivo nos negócios dos nossos clientes.',
    color: '#4A90E2'
  },
  { 
    title: 'Visão', 
    description: 'Ser referência nacional em inovação e excelência em engenharia de software, antecipando tendências e superando expectativas.',
    color: '#7ED321'
  },
  { 
    title: 'Valores', 
    description: 'Transparência, colaboração, qualidade e respeito ao cliente e ao time. Acreditamos que ética e inovação caminham juntas.',
    color: '#F5A623'
  },
  { 
    title: 'História', 
    description: 'Nossa história começou há 10 anos com a paixão por tecnologia e evolução constante, sempre buscando inovar e superar desafios.',
    color: '#BD10E0'
  },
  { 
    title: 'Equipe', 
    description: 'Contamos com uma equipe multidisciplinar focada em resultados e aprendizado contínuo, sempre pronta para novos desafios.',
    color: '#B8E986'
  },
]

const SLIDE_WIDTH = 400 
const GAP = 100

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 80px auto 0 auto; /* Adicionado margin-top para evitar sobreposição */
  padding: 60px ;
  background: linear-gradient(135deg, #F9D169 0%, #E7BE72 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 40px 15px;
    margin-top: 40px; /* Ajuste para mobile */
  }
`

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
`

const CarouselTrack = styled.div`
  display: flex;
  gap: ${GAP}px;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(-${props => props.translate}px);
  will-change: transform;
`

const Slide = styled.div`
  flex: 0 0 ${SLIDE_WIDTH}px;
  background: white;
  height: auto;
  min-height: 320px;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.accentColor || '#4A90E2'};
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  }

  h3 {
    margin-bottom: 20px;
    font-size: 2.4rem;
    color: #2c3e50;
    font-weight: 700;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: ${props => props.accentColor || '#4A90E2'};
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #5a6c7d;
    max-width: 320px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    flex: 0 0 300px;
    min-height: 280px;
    padding: 24px 20px;
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${props => (props.disabled ? 0.3 : 0.8)};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  z-index: 10;

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  svg {
    font-size: 1.5rem;
    color: #4A90E2;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    svg {
      font-size: 1.2rem;
    }
  }
`

const PrevButton = styled(NavigationButton)`
  left: 15px;
`

const NextButton = styled(NavigationButton)`
  right: 15px;
`

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
  padding: 0 20px;
`

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: scale(1.2);
  }
`

const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`

export default function AboutCarousel() {
  const [index, setIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const calculateSlidesPerView = useCallback(() => {
    if (!containerRef.current) return
    
    const containerWidth = containerRef.current.offsetWidth - 40 // padding
    const availableWidth = containerWidth - 40 // navigation buttons space
    const slideWithGap = SLIDE_WIDTH + GAP
    const count = Math.floor((availableWidth + GAP) / slideWithGap)
    const newSlidesPerView = Math.max(count, 1)
    
    setSlidesPerView(newSlidesPerView)
    setIndex(prevIndex => Math.min(prevIndex, Math.max(slides.length - newSlidesPerView, 0)))
  }, [])

  useEffect(() => {
    calculateSlidesPerView()
    window.addEventListener('resize', calculateSlidesPerView)
    return () => window.removeEventListener('resize', calculateSlidesPerView)
  }, [calculateSlidesPerView])

  const maxIndex = Math.max(slides.length - slidesPerView, 0)
  const canSlide = slides.length > slidesPerView
  const translate = index * (SLIDE_WIDTH + GAP)

  const handlePrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIndex(prevIndex => Math.max(prevIndex - 1, 0))
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const handleNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIndex(prevIndex => Math.min(prevIndex + 1, maxIndex))
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning, maxIndex])

  const goToSlide = useCallback((slideIndex) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIndex(Math.min(slideIndex, maxIndex))
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning, maxIndex])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 40
    const isRightSwipe = distance < -50

    if (isLeftSwipe && canSlide) {
      handleNext()
    }
    if (isRightSwipe && canSlide) {
      handlePrev()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext])

  return (
    <CarouselWrapper ref={containerRef}>
      <Title>Sobre Nós</Title>
      
      <CarouselContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CarouselTrack 
          ref={trackRef}
          translate={translate}
          role="region"
          aria-label="Carrossel sobre a empresa"
        >
          {slides.map((slide, i) => (
            <Slide 
              key={i} 
              accentColor={slide.color}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${slides.length}`}
            >
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
              aria-label="Slide anterior"
            >
              <FaArrowCircleLeft />
            </PrevButton>
            <NextButton 
              disabled={index === maxIndex} 
              onClick={handleNext}
              aria-label="Próximo slide"
            >
              <FaArrowCircleRight />
            </NextButton>
          </>
        )}
      </CarouselContainer>

      {canSlide && (
        <DotsContainer>
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <Dot
              key={i}
              active={i === index}
              onClick={() => goToSlide(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </DotsContainer>
      )}
    </CarouselWrapper>
  )
}


