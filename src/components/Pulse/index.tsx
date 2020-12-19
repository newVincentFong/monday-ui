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
        value: string
    }
}

export const Pulse = (props: PulseProps) => {
    return (
        <div className={`${PREFIX}-component`} style={{height: '36px', lineHeight: '36px'}}>
            <Cell type={CellType.NAME} {...props.nameCell}></Cell>
            <Cell type={CellType.MULTIPLE_PERSON} value={{src: 'https://cdn1.monday.com/dapulse_default_photo.png'}} style={{flexBasis: '100px'}}></Cell>
            <Cell type={CellType.STATUS} value={{rgb: [253, 171, 61], text: 'Working in progress'}} style={{flexBasis: '100px'}}></Cell>
        </div>
    )
}