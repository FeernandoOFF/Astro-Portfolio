export default function IconComponent({
  children,
  title,
  active = false,
  onClick,
  activeClass,
}) {
  return (
    <div
      onClick={onClick}
      class={`flex flex-col text-center items-center cursor-pointer 
        ${
          active
            ? activeClass
            : 'text-slate-300 group-hover:text-slate-400 dark:text-slate-400 dark:group-hover:text-slate-500'
        }

    `}
    >
      {children}
      <h4>{title} </h4>
    </div>
  );
}
