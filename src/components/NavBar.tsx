import { useContext } from 'react';

import { ItemClickedContext } from '../pages/Scene'

import { Item } from '../Items';

const NavBar = ({ }) => {
    const onItemClicked = useContext(ItemClickedContext);

    return (
        location.pathname !== "/"
            ? <>
                <div className='fixed flex justify-between items-center z-10 top-0 w-[calc(100%-2rem)] pt-4 pb-4 ml-4 bg-[--bg-color]'>
                    <button onClick={() => {
                        onItemClicked(Item.None);
                    }}>
                        <i className="fa fa-solid fa-arrow-left mr-1"></i>
                        Back
                    </button>

                    <p>Toggle</p>
                </div>
            </>
            : null
    )
}

export default NavBar