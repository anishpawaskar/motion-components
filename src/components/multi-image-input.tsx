'use client';

import React, { useState } from 'react';
import { ScreenWrapper } from './common/screen-wrapper';
import { v4 as uuidv4 } from 'uuid';

export const MultiImageInput = ({ columns = 5 }) => {
    const [items, setItems] = useState<string[]>([]);

    const handleAddItem = () => {
        setItems((prevItems) => [...prevItems, uuidv4()]);
    };

    let addBtnLength;

    if (items.length === 0) {
        addBtnLength = 1;
    } else {
        if (items.length % columns === 0) {
            addBtnLength = 1;
        } else {
            const itemsInLastRow =
                items.length % columns === 0 ? columns : items.length % columns;

            addBtnLength = itemsInLastRow + 1;
        }
    }

    return (
        <ScreenWrapper>
            <div className="flex w-full max-w-2xl flex-col justify-center gap-4">
                <div className="flex flex-col gap-1.5">
                    <p className="font-semibold">
                        Landscape Logo <span className="text-blue-400">*</span>{' '}
                        <span className="font-normal text-neutral-500">
                            Max 5
                        </span>
                    </p>
                </div>
                <div
                    style={{
                        gridTemplateColumns: `repeat(${columns},1fr)`,
                    }}
                    className="grid gap-2"
                >
                    {items.map((item) => {
                        const handleDelete = () => {
                            const filteredItem = items.filter(
                                (prevItem) => prevItem !== item
                            );

                            setItems(filteredItem);
                        };
                        return (
                            <div
                                key={item}
                                className="flex h-32 items-center justify-center bg-red-400"
                            >
                                <button onClick={handleDelete}>
                                    Delete item {item}
                                </button>
                            </div>
                        );
                    })}
                    <div
                        style={{
                            gridColumn: `${addBtnLength} / ${columns + 1}`,
                        }}
                        className="flex h-32 items-center justify-center rounded-md border border-neutral-400"
                    >
                        <button onClick={handleAddItem}>Add item</button>
                    </div>
                </div>
            </div>
        </ScreenWrapper>
    );
};
