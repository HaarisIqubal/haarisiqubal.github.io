import React from 'react'

export default function PortfolioCard({ item }) {
  return (
    <div
      className="flex flex-col h-full rounded-xl overflow-hidden group transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-card-bg)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.14)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
      }}
    >
      {/* Image with overlay badges */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
          src={item.img}
          alt={item.title}
        />
        {item.topic && (
          <span
            className="absolute bottom-2 left-3 text-xs code-font px-2 py-1 rounded-full"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-bg)' }}
          >
            {item.topic}
          </span>
        )}
        {item.startDate && (
          <span
            className="absolute top-2 right-3 text-xs code-font px-2 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff' }}
          >
            {item.startDate} – {item.endDate || 'present'}
          </span>
        )}
      </div>

      {/* Accent line that slides in on hover */}
      <div
        className="h-[3px] w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h5
          className="mb-2 text-xl code-font leading-tight"
          style={{ color: 'var(--color-primary)' }}
        >
          {item.title}
        </h5>
        <p className="text-sm body-color leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs code-font px-2 py-1 rounded"
              style={{
                backgroundColor: 'var(--color-border)',
                color: 'var(--color-muted)',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {item.link && item.link.length > 0 && (
          <div className="mt-4">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="button-style text-sm inline-flex items-center gap-1"
            >
              View Project &#8594;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

