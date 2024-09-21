import React, { useContext } from 'react'
import { Item } from './Room'
import { Outline, Select } from '@react-three/postprocessing'
import { ItemClickedContext } from '../pages/Scene'

export type ClickableItemProps = {
    item: Item,
    onHover: (hovered: boolean) => void,
}

const ClickableItem = ({ item, onHover, ...props }: ClickableItemProps & JSX.IntrinsicElements["group"]) => {
    const onItemClicked = useContext(ItemClickedContext);

    const onPointerEnter = () => {
        onHover(true);
    }

    const onPointerLeave = () => {
        onHover(false);
    }

    const onClick = () => {
        onItemClicked(item);
    }

    return (
        <Select enabled>
            <group
                {...props}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onClick={onClick}
            />
        </Select>
    )
}

export default ClickableItem