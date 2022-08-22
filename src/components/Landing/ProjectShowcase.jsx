import { h } from 'preact';
import { useState } from 'preact/hooks';

// Icons
import IconComponent from '../Icons/IconComponent';
import ElectronicIcon from '../Icons/electronic-skill';
import MobileIcon from '../Icons/mobileSkills';
import WebIcon from '../Icons/desktopIcon';
// ClodeBlock
import CodeBlock from './CodeBlock';

export default function ProjectShowcase() {
  const [selected, setSelected] = useState('electronic');

  return (
    <div>
      <h2 class="text-3xl font-semibold md:place-self-end text-white capitalize my-8 relative">
        {selected}
      </h2>
      <p class="md:w-2/3 my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        aperiam ipsum tenetur animi laborum accusantium corrupti soluta sit
        officiis itaque nihil? Ex mollitia sunt, quasi necessitatibus ratione
        pariatur reiciendis excepturi.
      </p>
      <div className="circles absolute right-[30%] top-[25%]">
        <div
          className={`h-40 w-40 bg-primary   rounded-full filter blur-2xl opacity-40 top-[0px] left-[0px] absolute ${
            selected === 'electronic' ? 'animate-blob' : ''
          }`}
        ></div>
        <div
          className={`h-40 w-40 bg-secondary  rounded-full filter blur-2xl opacity-40 top-[4rem] left-[5rem] absolute
        ${selected === 'web' ? 'animate-blob' : ''}
        `}
        ></div>
        <div
          className={`h-40 w-40 bg-success   rounded-full filter blur-2xl opacity-40 top-[4rem] left-[-5rem] absolute
                ${selected === 'mobile' ? 'animate-blob' : ''}
        `}
        ></div>
      </div>
      <a href="/projects" class="btn">
        See all projects
      </a>
      <div class="grid md:flex place-items-center  grid-cols-3  p-8 my-4 gap-8 text-sm ">
        <IconComponent
          title="Electronic"
          onClick={() => setSelected('electronic')}
          active={selected === 'electronic'}
          activeClass={'text-pink-5i00 dark:text-pink-400'}
        >
          <ElectronicIcon />
        </IconComponent>
        <IconComponent
          title="Mobile"
          onClick={() => setSelected('mobile')}
          active={selected === 'mobile'}
          activeClass={'text-success '}
        >
          <MobileIcon />
        </IconComponent>
        <IconComponent
          title="Web"
          onClick={() => setSelected('web')}
          active={selected === 'web'}
          activeClass={'text-secondary'}
        >
          <WebIcon />
        </IconComponent>
      </div>
      <div className="flex flex-col md:flex-row justify-between mx-auto w-4/5 my-10 items-center">
        <div class="stack my-8">
          <figure className="max-w-[200px]">
            <img
              src="https://placeimg.com/500/500/arch"
              alt="Image 1"
              class="rounded w-full"
            />
          </figure>
          <figure className="max-w-[200px]">
            <img
              src="https://placeimg.com/500/500/arch"
              alt="Image 1"
              class="rounded w-full"
            />
          </figure>
          <figure className="max-w-[200px]">
            <img
              src="https://placeimg.com/500/500/arch"
              alt="Image 1"
              class="rounded w-full"
            />
          </figure>
        </div>
        <CodeBlock />
      </div>
    </div>
  );
}
