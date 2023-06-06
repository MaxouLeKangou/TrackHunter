<template>
    <main class="overflow-hidden w-full h-[160px] rounded-3xl bg-[#101118] grid grid-cols-3 content-center">
        <div class="relative col-span-1">
            <p class="absolute justify-center flex inset-0 items-center z-10 text-white font-Anton text-[60px]">ASCENT</p>
            <div class="absolute bg-black w-full max-w-[350px] h-full opacity-40"></div>
            <img class="object-cover w-[350px] h-[200px]" src="@/img/imgmap.webp" alt="map image">
        </div>
        <div class="grid grid-cols-6 col-span-2 content-center text-center text-white">
            <div>
                <p>71.2%</p>
                <p>Win Ratio</p>
            </div>
            <span class="h-[50px] w-[1px] bg-white opacity-[25%] ml-[60px]"></span>
            <div>
                <p>5/2</p>
                <p>W/L</p>
            </div>
            <div>
                <p>1.16</p>
                <p>K/D Ratio</p>
            </div>
            <div>
                <p>226.2</p>
                <p>Acs/Round</p>
            </div>
            <div>
                <p>72.2%</p>
                <p>KAST</p>
            </div>
        </div>
    </main>
</template>