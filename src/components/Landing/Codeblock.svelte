<script>
  import { h } from 'preact';
  import Prism from 'prismjs';
  import { onMount } from 'svelte';

  export let language;
  export let code;

  onMount(() => {
    let script = document.createElement('script');
    script.src =
      'https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js';
    document.head.append(script);

    script.onload = function () {
      let langJS = false;
      let lang_script;
      let lang_module;

      // This switch statement, evaluates what language is being used, if one of a key language is being used, it will
      // load the proper Prisim support tool, like Python requires "prism-python.js" to modify the raw code so that
      // Prisim can render it properly.
      switch (language) {
        case 'js':
          lang_module = 'https://prismjs.com/components/prism-javascript.js';
          langJS = true;

          break;
        case 'json':
          lang_module = 'https://prismjs.com/components/prism-json.js';
          langJS = true;
          break;

        case 'python':
          lang_module = 'https://prismjs.com/components/prism-python.js';
          langJS = true;
          break;

        case 'rust':
          lang_module = 'https://prismjs.com/components/prism-rust.js';
          langJS = true;
          break;

        case 'r':
          lang_module = 'https://prismjs.com/components/prism-r.js';
          langJS = true;
          break;

        case 'sql':
          lang_module = 'https://prismjs.com/components/prism-sql.js';
          langJS = true;
          break;
      }

      if (langJS == true) {
        lang_script = document.createElement('script');
        lang_script.src = lang_module;
        lang_script.async = true;
        document.head.append(lang_script);

        lang_script.onload = () => {
          Prism.highlightAll();
        };
      } else {
        Prism.highlightAll();
      }
    };
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
    type="text/css"
  />
  <link
    rel="stylesheet"
    href="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism_okaidia.css"
  />
  <link
    rel="stylesheet"
    href="https://prismjs.com/plugins/line-numbers/prism-line-numbers.css"
  />
</svelte:head>

<div class="mockup-code  max-w-md w-4/5 text-xs md:w-full bg-[#1E293B]">
  <pre id="pre" class="line-numbers"><code
      class=" bg-[#1E293B] max-w-md w-4/5 text-xs md:w-full  language-{language}"> {@html Prism.highlight(
        code,
        Prism.languages.javascript,
        'javascript'
      )} </code></pre>
</div>

<!-- .mockup-code {
  position: relative !important;
  overflow: hidden !important;
  overflow-x: auto !important;
  /* min-width: 18rem ; */

  padding-top: 1.25rem !important;
  padding-bottom: 1.25rem !important;
  border-radius: var(--rounded-box, 1rem);
} -->
<style>
  pre::after,
  pre::before {
    display: none !important;
  }
  pre {
    background-color: #1e293b !important;
  }
  :global(.token.property) {
    color: #f472b6 !important;
  }
</style>
