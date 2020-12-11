import React, { CSSProperties, FC } from 'react'
import './index.less'
import { CSS_PREFIX } from '../@util/constants'
import { Cell } from '../Cell'
import { CellType } from '../@util/constants'

const COMPONET_NAME = '-pulse'
const PREFIX = CSS_PREFIX + COMPONET_NAME

interface PulseProps {
    nameCell: {
        style: CSSProperties,
        name: string
    }
}

export const Pulse = (props: PulseProps) => {
    return (
        <div className={`${PREFIX}-component`} style={{height: '36px', lineHeight: '36px'}}>
            <Cell type={CellType.name} {...props.nameCell}></Cell>
        </div>
    )
}