import React from 'react'
import SectionWrapper from '../SectionWrapper'
import SectionHeading from '../SectionHeading'
import ArticleCard from './ArticleCard'
import SectionContent from '../SectionWrapper/SectionContent'

export const articlesData = [
  {
    src: '/images/articles/article-1.jpg',
    alt: 'Supplement Guide',
    category: 'Article',
    date: 'Oct 6, 2025',
    title: 'Supplement Guide',
    description:
      'Understand the science behind popular gym supplements so you can choose what truly supports your goals.',
    href: '/articles/supplement-guide',
  },
  {
    src: '/images/articles/article-2.jpg',
    alt: 'Meal Timing Tips',
    category: 'Article',
    date: 'Oct 5, 2025',
    title: 'Meal Timing Tips',
    description:
      'Learn when to eat before and after workouts to maximize performance and recovery.',
    href: '/articles/meal-timing-tips',
  },
  {
    src: '/images/articles/article-1.jpg',
    alt: 'Supplement Guide',
    category: 'Article',
    date: 'Oct 6, 2025',
    title: 'Supplement Guide',
    description:
      'Understand the science behind popular gym supplements so you can choose what truly supports your goals.',
    href: '/articles/supplement-guide',
  },
  {
    src: '/images/articles/article-2.jpg',
    alt: 'Meal Timing Tips',
    category: 'Article',
    date: 'Oct 5, 2025',
    title: 'Meal Timing Tips',
    description:
      'Learn when to eat before and after workouts to maximize performance and recovery.',
    href: '/articles/meal-timing-tips',
  },
]

function ArticlesSection() {
  return (
    <SectionWrapper as="section">
      <SectionHeading content={'Articles & Tips'} />

      <SectionContent className={'overflow-x-scroll'}>
        {articlesData.map((obj, index) => (
          <ArticleCard key={index} objContent={obj} />
        ))}
      </SectionContent>
    </SectionWrapper>
  )
}

export default ArticlesSection
