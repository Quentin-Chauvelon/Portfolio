import { useContext } from 'react';

import { ItemClickedContext } from '../pages/Scene'

import { Item } from '../Items';

const NavBar = ({ }) => {
    const onItemClicked = useContext(ItemClickedContext);

    return (
        location.pathname !== "/"
            ? <>
                <div className='fixed flex justify-between items-center z-10 top-0 w-full p-4 bg-[--bg-color]'>
                    <button onClick={() => {
                        onItemClicked(Item.None);
                    }}>
                        <i className="fa fa-solid fa-arrow-left mr-1"></i>
                        Back
                    </button>

                    <p className="text-transparent">Toggle</p>
                </div>
            </>
            : null
    )
}

export default NavBar