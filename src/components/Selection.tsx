import { EffectComposer, Outline, Selection as PostProcessingSelection } from '@react-three/postprocessing';
import ClickableItem, { ClickableItemProps } from './ClickableItem';
import { Item } from './Room';
import { useState } from 'react';

type SelectionProps = {
    item: Item
}

const Selection = ({ item, ...props }: SelectionProps & JSX.IntrinsicElements["group"]) => {
    const [hovered, setHovered] = useState(false);

    return (
        <PostProcessingSelection>
            <EffectComposer enabled={true} autoClear={false}>
                {/* Converting string to number, because otherwise VS Code says that visibleEdgeColor
                is expecting a number, but it works fine in the browser
                */}
                <Outline blur edgeStrength={20} />
            </EffectComposer>

            <ClickableItem {
                ...{
                    item,
                    onHover: setHovered
                }
            } {...props} />

        </PostProcessingSelection>
    )
}

export default Selection