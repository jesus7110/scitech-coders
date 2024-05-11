import React from 'react';

function Reviews() {
  return (
    <div class=" py-20" id="reviews">

    <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

        <div class="mb-10 space-y-4 px-6 md:px-0">
            <h2 class="text-center text-2xl font-bold md:text-4xl">
                What our students say
            </h2>
        </div>


        <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">


            <div
                class="aspect-auto p-8 border border-gray-200 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                <div class="flex gap-4">
                    <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                    <div>
                        <h6 class="text-lg font-medium text-gray-700">Daniella Doe</h6>
                        <p class="text-sm text-gray-500 ">Mobile dev</p>
                    </div>
                </div>
                <p class="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
                    illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
                    ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                    reprehenderit, veritatis harum et rerum.
                </p>
            </div>


            


            


            <div
                class="aspect-auto p-8 border border-gray-200 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                    <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 class="text-lg font-medium text-gray-700 ">Jane Doe</h6>
                        <p class="text-sm text-gray-500 ">Mobile dev</p>
                    </div>
                </div>
                <p class="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                    reprehenderit, veritatis harum et rerum.
                </p>
            </div>


            <div
                class="aspect-auto p-8 border border-gray-200 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                    <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 class="text-lg font-medium text-gray-700 ">Andy Doe</h6>
                        <p class="text-sm text-gray-500 ">Manager</p>
                    </div>
                </div>
                <p class="mt-8"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
                    deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                    reprehenderit, veritatis harum et rerum.
                </p>
            </div>


            <div
                class="aspect-auto p-8 border border-gray-200 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 dark:shadow-none">
                <div class="flex gap-4">
                    <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy"/>
                    <div>
                        <h6 class="text-lg font-medium text-gray-700 ">Yanndy Doe</h6>
                        <p class="text-sm text-gray-500 ">Mobile dev</p>
                    </div>
                </div>
                <p class="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
                    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
                    reprehenderit, veritatis harum et rerum.
                </p>
            </div>

        </div>
    </div>
</div>
  );
}

export default Reviews;
