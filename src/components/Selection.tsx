// @ts-nocheck

/**
 * Taken from https://codesandbox.io/p/sandbox/selective-multiple-outlines-v9c11m
 */

import * as THREE from 'three'
import React, { createContext, useState, useContext, useEffect, useRef, useMemo } from 'react'
import { Outline, OutlineProps, selectionContext as baseSelectionContext } from '@react-three/postprocessing'

export type Api = {
    selected: THREE.Object3D[]
    select: React.Dispatch<React.SetStateAction<THREE.Object3D[]>>
    enabled: boolean
}
export type SelectApi = JSX.IntrinsicElements['group'] & {
    enabled?: boolean
    group?: string
    groups?: string[]
}

export const selectionContext = createContext<Api | null>(null)

export function SelectionTest({ children, enabled = true }: { enabled?: boolean; children: React.ReactNode }) {
    // const [selected, select] = useState<THREE.Object3D[]>([])
    const [selected, select] = useState<Record<string, THREE.Object3D[]>>({})
    const value = useMemo(() => ({ selected, select, enabled }), [selected, select, enabled])
    return <selectionContext.Provider value={value}>{children}</selectionContext.Provider>
}

export function MultiOutline(props: OutlineProps & { group: string }) {
    const groupContext = useContext(selectionContext)
    const { enabled, select } = groupContext || {} // Add null check here
    const selected = groupContext?.selected[props.group as any] // Add null check here
    const context = useMemo(() => ({ selected, select, enabled }), [selected, select, enabled])
    return (
        <baseSelectionContext.Provider value={context}>
            <Outline {...props} />
            {/* <Outline visibleEdgeColor="red" hiddenEdgeColor="red" edgeStrength={10} width={500} selectionLayer={11} pulseSpeed={0.25} /> */}
        </baseSelectionContext.Provider>
    )
}

export function Select({ enabled = false, children, group: groupId, groups: groupIds, ...props }: SelectApi) {
    const group = useRef<THREE.Group>(null!)
    const api = useContext(selectionContext)
    useEffect(() => {
        if (api && enabled) {
            let changed = false
            const current: THREE.Object3D<THREE.Object3DEventMap>[] = []
            group.current.traverse((o) => {
                o.type === 'Mesh' && current.push(o)
                if ((api.selected[groupId] ?? []).indexOf(o) === -1) {
                    changed = true
                }
            })
            if (changed) {
                api.select((groupState) => {
                    const state = groupState[groupId] || []
                    const newState = [...state, ...current]
                    return {
                        ...groupState,
                        [groupId]: newState
                    }
                })
                return () => {
                    api.select((groupState) => {
                        const state = groupState[groupId] || []
                        const newState = state.filter((selected: THREE.Object3D<THREE.Object3DEventMap>) => !current.includes(selected))
                        return {
                            ...groupState,
                            [groupId]: newState
                        }
                    })
                }
            }
        }
    }, [enabled, children, groupId, groupIds])
    return (
        <group ref={group} {...props}>
            {children}
        </group>
    )
}