import React from 'react'

export default function PortfolioCard({item}) {
  return (
  <div
    class="mx-3 mt-6 flex flex-col rounded-lg contact-card text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
      <img
        class="rounded-t"
        src={item.img}
        alt="Skyscrapers" />
    <div class="p-6">
      <h5 class="mb-2 text-xl code-font text-white leading-tight">{item.title}</h5>
      <p class="mb-4 body-color text-base">
        {item.description}
      </p>
      
    </div>
    <div class="mt-auto mx-2">
        {item.tags.map((tag) => (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
        )
      )}
    </div>
    <div
      class="mt-auto border-neutral-100 px-6 py-3 text-center text-surface/75 dark:border-white/10 dark:text-neutral-300">
      {item.link.length > 0 && (
      <a href={item.link} className='button-style'>Go to project</a>
    )}
    </div>
  </div>
  )
}
