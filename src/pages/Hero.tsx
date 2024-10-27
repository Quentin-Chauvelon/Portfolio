import React from 'react'
import { Easing, Tween } from '@tweenjs/tween.js'

import { CameraType, CameraRefType } from '../components/CameraManager'

import "/src/assets/styles/hero.css"

import picture1 from "/src/assets/images/picture-1.png"
import picture2 from "/src/assets/images/picture-2.png"
import { useTranslation } from 'react-i18next'

type HeroLinkProps = {
    link: string,
    icon: string
}

const HeroLink = ({ link, icon }: HeroLinkProps) => {
    return (
        <>
            <div className='group h-full aspect-square group bg-gradient-to-r bg-[--hero-section-buttons-color] rounded-full p-[0.2rem]'>
                <a href={link} target='_blank'>
                    <div className='aspect-square flex justify-center items-center bg-[--hero-bg-color] group-hover:bg-transparent rounded-full'>
                        <i className={"fa fa-brands " + icon + " text-[--hero-section-buttons-color] group-hover:text-[--white] rounded-full"}></i>
                    </div>
                </a>
            </div >
        </>
    )
}


type HeroProps = {
    cameraManagerRef: React.MutableRefObject<CameraRefType | undefined>
    portfolioOpened: (visible: boolean) => void
}

const Hero = ({ cameraManagerRef, portfolioOpened }: HeroProps) => {
    const { t } = useTranslation(['hero'])

    function cameraToDeskAnimation() {
        if (window.innerHeight > window.innerWidth * 1.5) {
            // TODO: use toast instead of alert?
            alert("This portfolio is currently not optimized for portrait mode, please rotate your device. Thanks!");
            return;
        }

        cameraManagerRef.current?.setActiveCamera(CameraType.Perspective);

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
                portfolioOpened(true);
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
        <>
            <section id="hero-section-container" className="relative flex flex-col gap-8 justify-between xl:justify-normal items-center xl:items-stretch xl:top-[--hero-section-top] xl:left-[--hero-section-left] w-full xl:w-[--hero-section-width] h-full xl:h-[calc(100%-var(--hero-section-top))] text-[#f4faff] font-extrabold leading-none">
                <div className='flex flex-wrap w-full text-4xl md:text-6xl mt-4 xl:mt-0 pl-12 xl:pl-0'>
                    <h1 id="hero-title-1" className='w-full'>{t("title.hi")}</h1>
                    <h1 id="hero-title-2" className="ml-2 xl:ml-0 bg-gradient-to-r gradient-bp bg-clip-text text-transparent [text-shadow:_-7px_-7px_#e9f0f7] xl:[text-shadow:_0_0_rgba(0,0,0,0)] shadow-white;">{t("title.name")}</h1>
                    <h1 id="hero-title-3" className="wave">&nbsp;👋</h1>
                </div>

                <div className='relative hidden xl:flex justify-center items-center w-60 mt-10 mb-8 ml-[10%] bg-gradient-to-br gradient-bp aspect-square rounded-full'>
                    <div className='flex justify-center items-center w-[97%] bg-blue-200 aspect-square rounded-full'>
                        <img src={picture1} alt="Photo" className='absolute aspect-[8.34/8.98] max-w-[200%] w-[110%] bottom-[-1px]' />
                        <img src={picture2} alt="Photo" className='absolute aspect-[8.34/8.98] max-w-[200%] w-[110%] bottom-0' style={{ clipPath: 'circle(48% at 50% 52.5%)' }} />
                    </div>
                </div>

                <div className='flex gap-10 text-2xl'>
                    <button className='mb-10 xl:mb-0 gradient-animation group bg-gradient-to-r from-[--bg-gradient-from] to-[--bg-gradient-to] transition-all self-center rounded-full p-[0.2rem] border-0 active:scale-95'
                        onClick={cameraToDeskAnimation}
                    >
                        <div className='bottom-8 left-1/2 px-4 py-2 bg-[--hero-bg-color] rounded-full'>
                            <h2 className="gradient-animation font-bold bg-gradient-to-r from-[--bg-gradient-from] to-[--bg-gradient-to] bg-clip-text text-transparent text-base md:text-2xl rounded-2xl">
                                <i className="fa fa-regular fa-user pl-1 pr-3"></i>
                                {t("view-portfolio")}
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
            </section >
        </>
    )
}

export default Hero;