import resume from '../assets/Resume_Quentin_Chauvelon.pdf'

const Resume = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-8 min-h-[100vh]">
            <a href={resume} target="_blank" className="mt-20 px-2 py-1 bg-[--gray-700] text-base font-semibold text-[--white] hover:text-[--white] rounded-md">DOWNLOAD RESUME</a>
            <div className="w-full max-w-[85vw] md:max-w-[40vw] mb-12 shadow-lg aspect-[21/29]">
                <object data={resume} width="100%" height="100%" type="application/pdf" className="flex justify-center items-center">
                    <p className="text-center text-[--gray-700]" >{"Unable to load resume " + (window.innerWidth < 1024 ? "on mobile" : "") + ". Please click the button above to download it"}</p>
                </object>
            </div>
        </div>
    )
}

export default Resume