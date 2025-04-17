interface BadgeProps {
  title: string;
}

export default function Badge({ title }: BadgeProps) {
  return (
    <div className="inline-flex w-fit items-center justify-center gap-2  border border-zinc-700 text-sm px-4 py-1 rounded-full mb-4">
      <span>{title}</span>
    </div>
  );
}
