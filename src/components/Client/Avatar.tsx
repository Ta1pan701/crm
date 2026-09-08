function Avatar({
    initials,
  small = false,
}: {
  initials: string;
  small?: boolean;
}) {
    return (
        <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-600 ${
            small ? "size-8 text-[11px]" : "size-9 text-xs"
        }`}
        >
      {initials}
    </span>
  );
}
export default Avatar