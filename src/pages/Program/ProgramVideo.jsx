export default function ProgramVideo() {
    return (
      <div id="introvideo" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
         
        <div className="mx-auto max-w-4xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What we <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom"> Offers </span>
          </p>
        </div>
  
        <div className="flex flex-col w-2/3 pt-10 mx-auto">
    
          <div className="flex items-center w-full col-span-6">
                <div className="px-6 h-full w-full max-w-6xl col-span-6 flex items-center mx-auto">
                    <video class="h-full w-full rounded-lg" controls>
                      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                   </video>
                </div>
            </div>
        </div>
          
        </div>
      </div>
    )
  }
  