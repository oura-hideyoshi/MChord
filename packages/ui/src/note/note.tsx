interface Props {
  children?: React.ReactNode;
}

export const Note: React.FC<Props> = props => {
  return (
    <div className="ui-p-4 ui-inline-flex ui-items-center ui-aspect-square ui-h-12 ui-justify-center ui-rounded-full ui-border-2 ui-border-slate-700 ui-bg-slate-100">
      <span className="ui-text-xl">{props.children}</span>
    </div>
  );
};
