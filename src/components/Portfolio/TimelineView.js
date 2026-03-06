import TimelineItem from './TimelineItem';

export default function TimelineView({ items }) {
  const sorted = [...items].sort((a, b) => {
    // Sort descending by startDate (most recent first)
    if (!a.startDate) return 1;
    if (!b.startDate) return -1;
    return b.startDate.localeCompare(a.startDate);
  });

  return (
    <div className="relative w-full mt-8">
      {/* Vertical centre line — desktop only */}
      <div
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
        style={{ backgroundColor: 'var(--color-border)' }}
        aria-hidden="true"
      />
      {/* Mobile left rail */}
      <div
        className="md:hidden absolute left-1.5 top-0 bottom-0 w-px"
        style={{ backgroundColor: 'var(--color-border)' }}
        aria-hidden="true"
      />

      {sorted.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
