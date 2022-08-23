import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className="footer-center p-3 text-center">
      <p>Made with: </p>
      <div className="flex mx-auto w-full justify-center p-4 gap-4">
        <div
          class="aspect-square w-8 m-2 md:m-0 block relative md:before:content-[attr(data-tip)] before:opacity-0 before:transition-all before:block before:absolute before:py-2 before:px-2 before:bg-white before:bottom-12 before:whitespace-nowrap before:rounded before:-left-2 before:uppercase before:text-xs before:font-semibold after:content[''] after:opacity-0 after:block after:absolute after:w-0 after:h-0 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-t-8 after:border-t-white after:bottom-10 after:left-1 after:transition-all lg:hover:before:opacity-100 lg:hover:after:opacity-100"
          data-tip="Build with Astro"
        >
          <a href="https://astro.build/">
            <img
              loading="lazy"
              class="w-full h-full object-contain object-center dark:invert"
              src="https://res.cloudinary.com/ppkehl/image/upload/v1657591669/icons/astro-logo-bw_qjkufv_pmbpcg.svg"
              alt="Build with Astro"
            />
          </a>
        </div>
        <div
          class="aspect-square w-8 m-2 md:m-0 block relative md:before:content-[attr(data-tip)] before:opacity-0 before:transition-all before:block before:absolute before:py-2 before:px-2 before:bg-white before:bottom-12 before:whitespace-nowrap before:rounded before:-left-2 before:uppercase before:text-xs before:font-semibold after:content[''] after:opacity-0 after:block after:absolute after:w-0 after:h-0 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-t-8 after:border-t-white after:bottom-10 after:left-1 after:transition-all lg:hover:before:opacity-100 lg:hover:after:opacity-100"
          data-tip="CSS by Tailwind CSS"
        >
          <a href="https://tailwindcss.com/">
            <img
              loading="lazy"
              class="w-full h-full object-contain object-center dark:invert"
              src="https://res.cloudinary.com/ppkehl/image/upload/v1657572070/icons/logo-tailwind_iziq1i.svg"
              alt="CSS by Tailwind CSS"
            />
          </a>
        </div>
        <div
          class="aspect-square w-8 m-2 md:m-0 block relative md:before:content-[attr(data-tip)] before:opacity-0 before:transition-all before:block before:absolute before:py-2 before:px-2 before:bg-white before:bottom-12 before:whitespace-nowrap before:rounded before:-left-2 before:uppercase before:text-xs before:font-semibold after:content[''] after:opacity-0 after:block after:absolute after:w-0 after:h-0 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-t-8 after:border-t-white after:bottom-10 after:left-1 after:transition-all lg:hover:before:opacity-100 lg:hover:after:opacity-100"
          data-tip="Frontend by React JS"
        >
          <a href="https://tailwindcss.com/">
            <img
              loading="lazy"
              class="w-full h-full object-contain object-center dark:invert"
              src="https://www.svgrepo.com/show/342156/react.svg"
              alt="Frontend by React JS"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
