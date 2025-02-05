export default function Card(){  
    return(
        <>
<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-6">
    <div class="mb-2 flex items-center justify-between">
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        Apple AirPods
      </p>
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        $95.00
      </p>
    </div>
    <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
      With plenty of talk and listen time, voice-activated Siri access, and an
      available wireless charging case.
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Add to Cart
    </button>
  </div>
</div>
<div class="w-full pt-5 px-4 mb-8 mx-auto ">
    <div class="text-sm text-gray-700 py-1">
        Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
    </div>
</div>

<!-- stylesheet -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/>
        </>
    );
}