type HeroLinkProps = {
  link: string,
  icon: string
}

const HeroLink = ({ link, icon }: HeroLinkProps) => {
  return (
    <>
      <div className='group h-full aspect-square group bg-gradient-to-r bg-[--hero-section-buttons-color] rounded-full p-[0.2rem]'>
        <a href={link} target='_blank'>
          <div className='aspect-square flex justify-center items-center bg-[--bg-color] group-hover:bg-transparent rounded-full'>
            <i className={"fa fa-brands " + icon + " text-[--hero-section-buttons-color] group-hover:text-white rounded-full"}></i>
          </div>
        </a>
      </div >
    </>
  )
}

export default HeroLink