import { useState, useContext } from 'react';

import { ItemClickedContext } from '../pages/Scene'

import { Item } from '../Items';
import Toggle from './Toggle';

import sun from '../assets/images/sun.svg';
import moon from '../assets/images/moon.svg';

const NavBar = ({ }) => {
    const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    const onItemClicked = useContext(ItemClickedContext);

    const toggleDarkMode = (enabled: boolean) => {
        setDarkMode(enabled);
    }

    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

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

                    <Toggle
                        defaultEnabled={darkMode}
                        iconLeft={sun}
                        iconRight={moon}
                        callback={(enabled) => {
                            toggleDarkMode(enabled);
                        }}
                    />
                </div>
            </>
            : null
    )
}

export default NavBar