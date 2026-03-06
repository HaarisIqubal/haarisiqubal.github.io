import RevealOnScroll from '../RevealOnScroll';

function formatDate(dateStr) {
  if (!dateStr || dateStr === 'present') return 'Present';
  const [year, month] = dateStr.split('-');
  const d = new Date(parseInt(year), parseInt(month) - 1);
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2 py-1 rounded-full code-font"
          style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text)' }}
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

export default function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <RevealOnScroll delay={`${index * 80}ms`} className="relative w-full mb-12">
      {/* Desktop: two-column alternating layout */}
      <div className="hidden md:flex items-start w-full">
        {/* Left column — card sits here when isLeft */}
        <div className="w-5/12 flex justify-end pr-8">
          {isLeft && <TimelineCard item={item} />}
        </div>

        {/* Center dot */}
        <div className="w-2/12 flex flex-col items-center flex-shrink-0 pt-4">
          <div
            className="w-4 h-4 rounded-full border-2 z-10"
            style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
          />
          <span
            className="text-xs code-font mt-1 whitespace-nowrap text-center"
            style={{ color: 'var(--color-muted)' }}
          >
            {formatDate(item.startDate)}
          </span>
        </div>

        {/* Right column — card sits here when !isLeft */}
        <div className="w-5/12 flex justify-start pl-8">
          {!isLeft && <TimelineCard item={item} />}
        </div>
      </div>

      {/* Mobile: single left-rail layout */}
      <div className="flex md:hidden w-full pl-8 relative">
        <div
          className="absolute left-0 top-2 w-3 h-3 rounded-full"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
        <div className="flex-1">
          <span className="text-xs code-font" style={{ color: 'var(--color-muted)' }}>
            {formatDate(item.startDate)} — {formatDate(item.endDate)}
          </span>
          <TimelineCard item={item} />
        </div>
      </div>
    </RevealOnScroll>
  );
}

function TimelineCard({ item }) {
  return (
    <div
      className="rounded-lg p-4 w-full"
      style={{
        backgroundColor: 'var(--color-card-bg)',
        border: '1px solid var(--color-border)',
      }}
    >
      {item.img && !item.img.includes('tecdn') && (
        <img src={item.img} alt={item.title} className="w-full h-32 object-cover rounded mb-3" />
      )}
      <p className="text-xs code-font mb-1" style={{ color: 'var(--color-muted)' }}>
        {formatDate(item.startDate)} — {formatDate(item.endDate)}
      </p>
      <h4 className="code-font text-lg leading-snug mb-2" style={{ color: 'var(--color-primary)' }}>
        {item.title}
      </h4>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
        {item.description}
      </p>
      <TagList tags={item.tags} />
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="button-style inline-block mt-3 text-sm"
        >
          View Project &#125;
        </a>
      )}
    </div>
  );
}
