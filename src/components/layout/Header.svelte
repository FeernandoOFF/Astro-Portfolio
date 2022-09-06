<script>
  const links = [
    { label: 'Portfolio', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Garden', href: 'https://garden.feernandooff.com' },
  ];
</script>

<nav class="nav">
  <a class="logolink" href="/">
    <div class="monogram">OFF</div>
  </a>
  <div class="hidden md:flex">
    {#each links as link}
      <a class="link" href={link.href}>{link.label} </a>
    {/each}
  </div>
  <div class="dropdown dropdown-end block md:hidden">
    <label tabindex="0">
      <button class="">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
            fill="currentColor"
          />
          <path
            d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
            fill="currentColor"
          />
          <path
            d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </label>
    <ul
      tabindex="0"
      class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
    >
      {#each links as link}
        <li><a class="link" href={link.href}>{link.label} </a></li>
      {/each}
    </ul>
  </div>
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
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
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
