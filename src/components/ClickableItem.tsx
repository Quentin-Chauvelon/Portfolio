import React, { useContext } from 'react'
import { Item } from './Room'
import { Select } from './Selection'
import { ItemClickedContext } from '../pages/Scene'

export type ClickableItemProps = {
    item: Item
}

const ClickableItem = ({ item, ...props }: ClickableItemProps & JSX.IntrinsicElements["group"]) => {
    const [hovered, setHovered] = React.useState(false);

    const onItemClicked = useContext(ItemClickedContext);

    const onPointerEnter = () => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
    }

    const onPointerLeave = () => {
        setHovered(false);
        document.body.style.cursor = 'auto';
    }

    const onClick = () => {
        onItemClicked(item);
    }

    return (
        <>
            <Select enabled={!hovered} group='default'>
                <Select enabled={hovered} group='hovered'>
                    <group
                        {...props}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onClick={onClick}
                    />
                </Select>
            </Select>
        </>
    )
}

export default ClickableItem