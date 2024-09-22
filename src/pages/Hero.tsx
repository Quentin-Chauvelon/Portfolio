import React from 'react'
import { Easing, Tween } from '@tweenjs/tween.js'

import HeroLink from '../components/HeroLink'
import { CameraType, CameraRefType } from '../components/CameraManager'

import "/src/assets/styles/hero.css"

type HeroProps = {
    cameraManagerRef: React.MutableRefObject<CameraRefType | undefined>
    portfolioOpened: (visible: boolean) => void
}

const Hero = ({ cameraManagerRef, portfolioOpened }: HeroProps) => {
    function cameraToDeskAnimation() {
        if (window.innerHeight > window.innerWidth * 1.5) {
            // TODO: use toast instead of alert?
            alert("This portfolio is currently not optimized for portrait mode, please rotate your device. Thanks!");
            return;
        }

        cameraManagerRef.current?.setActiveCamera(CameraType.Perspective);

        portfolioOpened(true);

        const values = {
            x: 0, y: 0, z: 21,
            rX: 0, rY: 0, rZ: 0,
            heroSectionLeft: parseInt(getComputedStyle(document.documentElement).getPropertyValue("--hero-section-left")),
            viewportWidth: window.innerWidth > 1280 ? 450 / 1920 * window.innerWidth : 0
        };

        const heroSection = document.querySelector('#hero-section-container') as HTMLElement;

        const tween = new Tween(values)
            .to({
                x: 3.5, y: 1.3, z: -14.5,
                rX: 0.2 * Math.PI / 4, rY: 1 * Math.PI / 4, rZ: 0.33 * Math.PI / 4,
                heroSectionLeft: -100,
                viewportWidth: 0
            }, 3000)
            .easing(Easing.Quartic.InOut)
            .onUpdate(() => {
                cameraManagerRef.current?.setCameraPosition(values.x, values.y, values.z);
                cameraManagerRef.current?.setCameraRotation(values.rX, values.rY, values.rZ);
                cameraManagerRef.current?.setViewportX(values.viewportWidth);

                heroSection.style.left = values.heroSectionLeft + '%';
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


    // const TypewritingEffect = () => {

    //     const steps1 = [200, 200, 1500, 200, 0, 200, 200, 200]
    //     const steps2 = [200, 200, 200, 200, 200, 200, 200]

    //     const text1 = "Hi, I'm";
    //     const text2 = "Quentin";

    //     let step = 0;
    //     let i = 0;

    //     const typeWriter = (element: HTMLElement, text: string, steps: number[]) => {
    //         if (i == text.length) {
    //             i = 0;

    //             if (step == 0) {
    //                 typeWriter(document.querySelector("#hero-title-2") as HTMLElement, text2, steps2);
    //             } else if (step == 1) {
    //                 (document.querySelector("#hero-title-3") as HTMLElement).innerHTML = "&nbsp;👋";
    //             }

    //             step += 1;
    //             return;
    //         }

    //         element.innerHTML = text.substring(0, i + 1);
    //         i++;
    //         setTimeout(typeWriter, steps[i], element, text, steps);
    //     }

    //     typeWriter(document.querySelector("#hero-title-1") as HTMLElement, text1, steps1);
    // }

    return (
        <>
            <section id="hero-section-container" className="relative flex flex-col gap-8 justify-between xl:justify-normal items-center xl:items-stretch xl:top-[--hero-section-top] xl:left-[--hero-section-left] w-full xl:w-[--hero-section-width] h-full xl:h-[calc(100%-var(--hero-section-top))] text-[#f4faff] font-extrabold leading-none">
                <div className='flex flex-wrap w-full text-4xl md:text-6xl mt-4 xl:mt-0 pl-12 xl:pl-0'>
                    <h1 id="hero-title-1" className='w-full'>Hi, I'm</h1>
                    <h1 id="hero-title-2" className="ml-2 xl:ml-0 bg-gradient-to-r gradient-bp bg-clip-text text-transparent [text-shadow:_-7px_-7px_#e9f0f7] xl:[text-shadow:_0_0_rgba(0,0,0,0)] shadow-white;">Quentin</h1>
                    <h1 id="hero-title-3">&nbsp;👋</h1>
                </div>

                <div className='relative hidden xl:flex justify-center items-center w-60 mt-14 ml-[15%] bg-gradient-to-br gradient-bp aspect-square rounded-full'>
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
                    <button className='mb-10 xl:mb-0 gradient-animation group bg-gradient-to-r from-[--bg-gradient-from] to-[--bg-gradient-to] transition-colors self-center rounded-full p-[0.2rem] border-0'
                        onClick={cameraToDeskAnimation}
                    >
                        <div className='bottom-8 left-1/2 px-4 py-2 bg-[--bg-light] rounded-full'>
                            <h2 className="gradient-animation font-bold bg-gradient-to-r from-[--bg-gradient-from] to-[--bg-gradient-to] bg-clip-text text-transparent rounded-2xl">
                                <i className="fa fa-regular fa-user pl-1 pr-3"></i>
                                SEE PORTFOLIO
                            </h2>
                        </div>
                    </button>

                    <div className='hidden xl:flex gap-4'>
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

                {/*<div className='flex gap-12'>
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
        </>
    )
}

export default Hero;