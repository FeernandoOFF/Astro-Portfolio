import { h } from 'preact';
export default function CodeBlock() {
  return (
    <div class="mockup-code bg-[#1E293B] max-w-md w-4/5 text-xs md:w-full">
      <pre data-prefix="1">
        {' '}
        <span className="text-primary">const </span>
        <span className="text-secondary">Fernando</span> : {'{'}
      </pre>
      <pre data-prefix="2" class="pl-3">
        <span className="text-primary">name</span> : "Fernando Obregon"
      </pre>
      <pre data-prefix="3" class="pl-3">
        <span className="text-primary">job</span> : "Software developer"
      </pre>
      <pre data-prefix="4" class="pl-3">
        <span className="text-primary">passions</span> :
        {`[ "Code","Travel","Learning" ]`}
      </pre>
      <pre data-prefix="5"> {'}'} </pre>
    </div>
  );
}
