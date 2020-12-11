import React, { CSSProperties } from 'react'
import './index.less'
import cx from 'classnames'
import { CSS_PREFIX } from '../@util/constants'
import { Editable } from '../Editable'
import { CellType, CellClassname } from '../@util/constants'

const COMPONENT_NAME = '-cell'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

interface CellProps {
    type: CellType,
    style: CSSProperties,
    name: string
}

export const Cell = (props: CellProps) => {
    return (
        <div className={cx(`${PREFIX}-component`, `${CellClassname[props.type]}-cell`)} style={props.style}>
        {(() => {
            switch (props.type) {
                case CellType.name:
                    return <NameCell value={props.name}></NameCell>
            }
        })()}
        </div>
    )
}

const NAME_PREFIX = CSS_PREFIX + '-name-cell'

export const NameCell = (props: {
    value: string
}) => {
    return (
        <div className={`${NAME_PREFIX}-component`}>
            <div className={`${NAME_PREFIX}-text`}>
                <Editable text={props.value} />
            </div>
        </div>
    )
}