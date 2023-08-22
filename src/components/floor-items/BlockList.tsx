import React, { useContext } from "react";
import { observer } from "mobx-react";
import Block from "./Block";
import { ShapeContext } from "../../stores/shapeStore";

const BlockList = observer((props) => {
    const context = useContext(ShapeContext);
	const { blocks, setBlocks, onShapeChange } = context;
    return (
        <>
            {blocks.map((block, i) => {
                return(
                    <Block
                        key={i}
                        shapeProps={block}
                        onChange={newAttrs => {
                            onShapeChange(i, blocks, newAttrs, setBlocks);
                        }}
                    />
                );
            })}
        </>
    );
});

export default BlockList;