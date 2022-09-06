import { h } from 'preact';
export default function CodeBlock() {
  return (
    <div class="mockup-code bg-[#1E293B] max-w-md w-4/5 text-xs md:w-full">
      <pre data-prefix="1">
        {' '}
        <span className="text-primary">const </span>
        <span className="text-secondary">Fernando</span> = {'{'}
      </pre>
      <pre data-prefix="2">
        <span className="text-primary pl-5">name</span> : "Fernando Obregon"
      </pre>
      <pre data-prefix="3">
        <span className="text-primary pl-5">job</span> : "Software developer"
      </pre>
      <pre data-prefix="4">
        <span className="text-primary pl-5">passions</span> :
        {`[ "Code","Travel","Learning" ]`}
      </pre>
      <pre data-prefix="5">
        <span className="text-primary pl-5">location</span> : "Dublin, Ireland"
      </pre>
      <pre data-prefix="6">
        <span className="text-primary pl-5">learning</span> : "Astro"
      </pre>
      <pre data-prefix="7"> {'}'} </pre>
    </div>
  );
}
