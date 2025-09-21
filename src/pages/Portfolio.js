import React, {useEffect, useState} from 'react'
import { Typewriter ,Cursor} from 'react-simple-typewriter'
import portolio from '../data/porfolio.json'
import PortfolioCard from '../components/Portfolio/PortfolioCard'
import PortfolioPosts from '../components/Portfolio/PortfolioPosts'
import { Helmet } from 'react-helmet';
import ScrollToTop from '../utils/ScrollToTop'

export default function Portfolio() {
  const [selectedFilter,setSelectedFilter] = useState([])
  const [filteredData,setFilteredData] = useState(portolio.portfolio)
  let items = portolio.portfolio
  let filters = ["Web","Swift","ML/DL"]

  const handleFilter = (selectedCategory) => {
    console.log(selectedCategory);
    if(selectedFilter.includes(selectedCategory)) {
      let filters = selectedFilter.filter((ele) => ele !== selectedCategory)
      setSelectedFilter(filters)
    } else {
      setSelectedFilter([...selectedFilter,selectedCategory])
    }
  }

  useEffect (() => {
    filterItems()
  },[selectedFilter]);

  const filterItems = () => {
    if (selectedFilter.length > 0) {
      let tempItems = selectedFilter.map((selectedTopic) => {
        let temp = items.filter((item) => item.topic === selectedTopic);
        return temp
      })
      setFilteredData(tempItems.flat())
  }
  else{
    setFilteredData([...items])    
  }
}
  return (
    <>
    <ScrollToTop />
    <Helmet>
        <title>_portfolio</title>
    </Helmet>
    <div className='flex items-center justify-center'>
    <div className='section-width'>
    <div>
        <div className='section-heading pt-4'>
            &#123;
            <Typewriter  words={["_Portfolio"]} typeSpeed={200} />
            <Cursor />
            &#125;
        </div>
        <p className='body-color text-center'>
        Welcome to my portfolio—a visual narrative of my journey, passions, and creations.
        Each piece reflects my dedication, creativity, and commitment to excellence. Explore and immerse yourself in the stories behind the work
        </p>
        <div className='section-heading pt-[50px]'>
        &lt;
        Projects
        &gt;
        </div>
        <div className='flex flex-items-center justify-center '>
          {filters.map((category,idx) => (
            <button onClick={() => handleFilter(category)} className={`${selectedFilter?.includes(category) ? "bg-gray-800 w-fit body-color  pt-2 pb-2 pr-4 pl-4 code-font" : "button-style"} mx-2 my-4`} key={`filter-${idx}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 m-4 content-center">
          {filteredData.map(item => (
            <PortfolioCard item={item} />
          ))}
        </div>
        <PortfolioPosts />
    </div>
    </div>
    </div>
    </>
  )
}
