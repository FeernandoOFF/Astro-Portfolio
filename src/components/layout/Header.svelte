<nav class="nav">
  <a class="logolink" href="/">
    <div class="monogram">OFF</div>
  </a>
  <a class="link" href="/projects"> Portfolio </a>
  <a class="link" href="/about"> About </a>
  <a class="link" href="/blog"> Blog </a>
  <a class="link" href="https://garden.feernandooff.com"> Garden </a>
  <!-- <a class="social" href="https://twitter.com/me" /> -->
</nav>

<style>
  .nav {
    z-index: 10;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 1rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
  }

  .logolink {
    display: block;
    color: var(--t-fg);
    text-decoration: none;
  }

  .link {
    color: var(--t-subdue);
    display: block;
    margin-left: 1rem;
    text-decoration: none;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
  }

  .monogram {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    margin-right: 0.5rem;
    color: var(--c-black);
    font-weight: 900;
    letter-spacing: -0.125rem;
    border: 3px solid currentColor;
    border-radius: 50%;
  }

  .social {
    display: block;
    margin-left: auto;
  }
  .social {
    margin-left: 0.75rem;
  }

  .socialicon :hover {
    fill: var(--t-active);
  }

  .socialicon {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--t-subdue);
    transition: fill linear 150ms;
  }
</style>
