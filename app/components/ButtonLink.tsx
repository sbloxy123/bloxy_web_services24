export const ButtonLink = ({
  target,
  url,
  buttonText,
  aria,
}: {
  target?: "_blank";
  url: string;
  buttonText: string;
  aria?: string;
}) => {
  return (
    <div className="button__link mt-[3rem] tracking-wide w-fit">
      <a
        className="px-[1.8rem] py-[0.7rem] uppercase w-full h-full border-spacing-1 border-[1px] border-theme_green-900 rounded-sm"
        href={url}
        target={target}
        aria-label={aria}
      >
        {buttonText}
        <span className="pl-[1rem]">›</span>
      </a>
    </div>
  );
};
