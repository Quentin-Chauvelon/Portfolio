import { useProgress } from '@react-three/drei'

import "/src/assets/styles/loading-screen.css"


export function LoadingScreen() {
    const { active, progress } = useProgress()

    document.querySelector('#loading-progress-bar')?.setAttribute('style', 'width: ' + progress + '%');

    return active ? (
        <div className="flex flex-col justify-center items-center w-full h-full bg-[--bg-ligh] gap-2">
            <div className='flex items-end gap-1'>
                <h1 className='font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl'>Loading</h1>
                <div className='loading-dots'></div>
            </div>
            <div className='relative flex justify-center bg-[--bg-color] border-[--bg-dark] border-[0.25rem] w-4/5 sm:w-1/2 lg:w-2/5 2xl:w-1/3 rounded-full overflow-hidden'>
                <div id="loading-progress-bar" className='absolute left-0 top-0 bg-[--bg-dark] h-full'></div>
                <span className='z-10 font-bold sm:text-2xl '>{Math.floor(progress)}%</span>
            </div>
        </div>
    ) : null
}