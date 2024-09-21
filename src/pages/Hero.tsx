import React from 'react'
import { Easing, Tween } from '@tweenjs/tween.js'

import HeroLink from '../components/HeroLink'
import { CameraType, CameraRefType } from '../components/CameraManager'

type HeroProps = {
    cameraManagerRef: React.MutableRefObject<CameraRefType | undefined>
    chairVisible: (visible: boolean) => void
}

const Hero = ({ cameraManagerRef, chairVisible }: HeroProps) => {
    function cameraToDeskAnimation() {
        cameraManagerRef.current?.setActiveCamera(CameraType.Perspective);

        chairVisible(false);

        const values = {
            x: 0, y: 0, z: 21,
            rX: 0, rY: 0, rZ: 0,
            heroSectionLeft: parseInt(getComputedStyle(document.documentElement).getPropertyValue("--hero-section-left")),
            viewportWidth: 450
        };

        const tween = new Tween(values)
            .to({
                x: 3.5, y: 1.3, z: -14.5,
                rX: 0.2 * Math.PI / 4, rY: 1 * Math.PI / 4, rZ: 0.33 * Math.PI / 4,
                heroSectionLeft: -50,
                viewportWidth: 0
            }, 3000)
            .easing(Easing.Quartic.InOut)
            .onUpdate(() => {
                cameraManagerRef.current?.setCameraPosition(values.x, values.y, values.z);
                cameraManagerRef.current?.setCameraRotation(values.rX, values.rY, values.rZ);
                cameraManagerRef.current?.setViewportX(values.viewportWidth);

                document.documentElement.style.setProperty("--hero-section-left", values.heroSectionLeft + '%');
            })
            .onComplete(() => {
                (document.querySelector('#hero-section-container') as HTMLElement).style.display = 'none';
            })
            .start()

        // Setup the animation loop.
        function animate(time: number | undefined) {
            // Stop the function once the tween is complete
            if (!tween.isPlaying()) {
                return;
            }

            tween.update(time)
            requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    }

    return (
        <section id="hero-section-container" className="relative top-[8%] left-[--hero-section-left] w-[--hero-section-width] max-h-full text-[#f4faff] font-extrabold leading-none flex flex-col gap-8">
            <div className='flex flex-wrap w-full text-6xl'>
                <h1 className='w-full'>Hi, I'm</h1>
                <h1 className="bg-gradient-to-r gradient-bp bg-clip-text text-transparent">Quentin</h1>
                <h1>&nbsp;👋</h1>
            </div>

            <div className='relative flex justify-center items-center w-60 mt-14 ml-[15%] bg-gradient-to-br gradient-bp aspect-square rounded-full'>
                <div className='flex justify-center items-center w-[97%] bg-blue-200 aspect-square rounded-full'>
                    <img src="src/assets/images/Picture.png" alt="Photo" className='absolute aspect-square max-w-[200%] w-[130%] bottom-0' style={{ clipPath: 'circle(48% at 50% 51%)' }} />
                </div>
            </div>

            <div className='flex gap-10 text-2xl'>
                {/* <button className='group flex justify-center items-center bg-gradient-to-r bg-[--hero-section-buttons-color] self-center rounded-full p-1 border-0'>
                    <div className='p-4 bg-[#9bc7ec] group-hover:bg-transparent rounded-full transition-colors duration-200'>
                        <h2 className="text-3xl font-bold bg-gradient-to-r bg-[--hero-section-buttons-color] bg-clip-text text-transparent group-hover:text-current rounded-2xl transition-colors duration-200">
                            <i className="fa fa-regular fa-user pr-3"></i>
                            SEE PORTFOLIO
                        </h2>
                    </div>
                </button> */}
                <button className='gradient-animation group bg-gradient-to-r from-[--bg-gradient-from] to-[--bg-gradient-to] transition-colors self-center rounded-full p-[0.2rem] border-0'
                    onClick={cameraToDeskAnimation}
                >
                    <div className='px-4 py-2 bg-[--bg-light] rounded-full'>
                        <h2 className="gradient-animation font-bold bg-gradient-to-r from-[--bg-gradient-from] to-[--bg-gradient-to] bg-clip-text text-transparent rounded-2xl">
                            <i className="fa fa-regular fa-user pl-1 pr-3"></i>
                            SEE PORTFOLIO
                        </h2>
                    </div>
                </button>

                <div className='flex gap-4'>
                    < HeroLink {...{
                        link: 'https://www.linkedin.com/in/quentin-chauvelon/',
                        icon: 'fa-linkedin'
                    }} />
                    < HeroLink {...{
                        link: 'https://www.github.com/Quentin-Chauvelon/',
                        icon: 'fa-github'
                    }} />
                </div>
            </div >
            {/* 
                <div className='flex gap-12'>
                    <div className='group flex justify-center items-center bg-gradient-to-r from-blue-500 to-violet-500 self-center rounded-full p-1'>
                        <div className='p-4 bg-[#9bc7ec] group-hover:bg-transparent rounded-full transition-colors duration-200'>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent group-hover:text-current rounded-2xl transition-colors duration-200">
                                <i className="fa fa-regular fa-user pr-3"></i>
                                SEE PORTFOLIO
                            </h2>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='h-full aspect-square group bg-gradient-to-r from-blue-500 to-violet-500 rounded-[15px] p-1'>
                            <a href="https://www.linkedin.com/in/quentin-chauvelon/" target='_blank'>
                                <div className='aspect-square p-4 flex justify-center items-center bg-[#9bc7ec] hover:bg-transparent rounded-[12px] transition-colors duration-200'>
                                    <i className="fa fa-brands fa-linkedin text-white"></i>
                                </div>
                            </a>
                        </div>
                        <div className='h-full aspect-square group bg-gradient-to-r from-blue-500 to-violet-500 rounded-[15px] p-1'>
                            <a href="https://www.github.com/Quentin-Chauvelon/" target='_blank'>
                                <div className='aspect-square flex justify-center items-center bg-[#9bc7ec] hover:bg-transparent rounded-[12px] transition-colors duration-200'>
                                    <i className="fa fa-brands fa-github text-white"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div > */}

            {/* <div className='flex justify-center items-center bg-transparent self-center rounded-full p-1'>
                    <h2 className="text-3xl font-bold border-4 p-4 text-[--hero-section-buttons-color] border-[--hero-section-buttons-color] rounded-full">
                        <i className="fa fa-regular fa-user pr-3"></i>
                        SEE PORTFOLIO
                    </h2>
                </div> */}
        </section >
    )
}

export default Hero;