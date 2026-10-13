import React from "react";

const Sabal = () => {
  return (
    <div
      tabindex="0"
      class="
    group relative isolate mx-auto my-8 min-h-[240px] w-full max-w-[420px]
    rounded-3xl p-8
    bg-gradient-to-br from-white/90 to-indigo-50/70
    backdrop-blur-xl backdrop-saturate-150
    shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.08),0_24px_48px_-12px_rgba(99,102,241,0.18)]
    transition duration-300 ease-out
    hover:-translate-y-1.5
    hover:shadow-[0_2px_4px_rgba(16,24,40,0.06),0_16px_32px_rgba(16,24,40,0.1),0_32px_64px_-12px_rgba(99,102,241,0.3)]
    focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-indigo-500
    motion-reduce:transition-none motion-reduce:hover:translate-y-0
    dark:from-slate-800/85 dark:to-slate-900/75
    dark:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.4),0_24px_48px_-12px_rgba(99,102,241,0.25)]

    before:pointer-events-none before:absolute before:inset-0 before:-z-10
    before:rounded-[inherit] before:p-[1.5px] before:content-['']
    before:bg-gradient-to-br before:from-indigo-500 before:via-pink-500 before:to-amber-500
    before:opacity-50 before:transition-opacity before:duration-300
    before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
    before:[mask-composite:exclude]
    before:[-webkit-mask-composite:xor]
    hover:before:opacity-100
  "
    ></div>
  );
};

export default Sabal;
