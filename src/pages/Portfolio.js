import React, {useEffect, useState} from 'react'
import { Typewriter ,Cursor} from 'react-simple-typewriter'
import portolio from '../data/porfolio.json'
import PortfolioCard from '../components/Portfolio/PortfolioCard'
import PortfolioPosts from '../components/Portfolio/PortfolioPosts'
import TimelineView from '../components/Portfolio/TimelineView'
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../utils/ScrollToTop'
import { HiViewGrid, HiViewList } from 'react-icons/hi'

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState([])
  const [filteredData, setFilteredData] = useState(portolio.portfolio)
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'timeline'
  const filters = ["Web", "Swift", "ML/DL"]

  const handleFilter = (category) => {
    setSelectedFilter((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  useEffect(() => {
    const allItems = portolio.portfolio
    if (selectedFilter.length > 0) {
      setFilteredData(
        selectedFilter.flatMap((topic) => allItems.filter((item) => item.topic === topic))
      )
    } else {
      setFilteredData([...allItems])
    }
  }, [selectedFilter])

  return (
    <>
    <ScrollToTop />
    <Helmet>
        <title>_portfolio</title>
    </Helmet>
    <div className='flex items-center justify-center'>
    <div className='section-width w-full px-4'>

      <div className='section-heading pt-4'>
        &#123;
        <Typewriter words={["_Portfolio"]} typeSpeed={200} />
        <Cursor />
        &#125;
      </div>
      <p className='body-color text-center pt-2'>
        Welcome to my portfolio — a visual narrative of my journey, passions, and creations.
        Each piece reflects my dedication, creativity, and commitment to excellence.
      </p>

      <div className='section-heading pt-[50px]'>&lt; Projects &gt;</div>

      {/* Filter bar + view toggle */}
      <div className='flex flex-wrap items-center justify-between gap-2 mt-4'>
        <div className='flex flex-wrap gap-2'>
          {filters.map((category, idx) => (
            <button
              key={`filter-${idx}`}
              onClick={() => handleFilter(category)}
              className={`button-style text-sm`}
              style={
                selectedFilter.includes(category)
                  ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-bg)', borderColor: 'var(--color-primary)' }
                  : {}
              }
            >
              {category}
            </button>
          ))}
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
            className="button-style p-2 flex items-center gap-1 text-sm"
            style={viewMode === 'grid' ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-bg)', borderColor: 'var(--color-primary)' } : {}}
          >
            <HiViewGrid size={16} /> Grid
          </button>
          <button
            onClick={() => setViewMode('timeline')}
            aria-label="Timeline view"
            className="button-style p-2 flex items-center gap-1 text-sm"
            style={viewMode === 'timeline' ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-bg)', borderColor: 'var(--color-primary)' } : {}}
          >
            <HiViewList size={16} /> Timeline
          </button>
        </div>
      </div>

      {/* Grid view */}
      {viewMode === 'grid' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 items-stretch">
          {filteredData.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Timeline view */}
      {viewMode === 'timeline' && (
        <TimelineView items={filteredData} />
      )}

      <PortfolioPosts />
    </div>
    </div>
    </>
  )
}

