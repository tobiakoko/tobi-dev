const RATIOS = {
  '4/3': 'aspect-[4/3]',
  '16/8': 'aspect-[16/8]',
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
} as const;

/**
 * Diagonal-hatch stand-in for imagery that doesn't exist yet. Swapping in a
 * real photo later is a matter of replacing this element, not reworking layout.
 */
export default function HatchPlaceholder({
  note,
  ratio = '4/3',
  bordered = false,
}: {
  note: string;
  ratio?: keyof typeof RATIOS;
  bordered?: boolean;
}) {
  return (
    <div
      className={`hatch grid place-items-center ${RATIOS[ratio]} ${bordered ? 'border border-line' : ''}`}
    >
      <span className="font-mono text-[11px] text-muted">{note}</span>
    </div>
  );
}
