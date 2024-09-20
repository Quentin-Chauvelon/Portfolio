import CameraManager from "./CameraManager"

type HeroLinkProps = {
  link: string,
  icon: string
}

const HeroLink = ({ link, icon }: HeroLinkProps) => {
  return (
    <>
      <div className='group h-full aspect-square group bg-gradient-to-r bg-[#004e89] rounded-full p-1'>
        <a href={link} target='_blank'>
          <div className='aspect-square p-4 flex justify-center items-center bg-[#9bc7ec] group-hover:bg-transparent rounded-full transition-colors duration-200'>
            <i className={"fa fa-brands " + icon + " text-[#004e89] group-hover:text-white rounded-full transition-colors duration-200"}></i>
          </div>
        </a>
      </div >
    </>
  )
}

export default HeroLink