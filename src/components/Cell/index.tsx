import React, { CSSProperties } from 'react'
import './index.less'
import cx from 'classnames'
import { CSS_PREFIX, CellType, CellClassname } from '../@util/constants'
import { Editable } from '../Editable'
import { PersonBullet } from '../PersonBullet'
import Add from 'monday-ui-react-core/dist/icons/AddSmall'

const COMPONENT_NAME = '-cell'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

interface CellProps {
    type: CellType,
    style: CSSProperties,
    value: any
}

export const Cell = (props: CellProps) => {
    return (
        <div className={cx(`${PREFIX}-component`, `${CellClassname[props.type]}-cell`)} style={props.style}>
        {(() => {
            switch (props.type) {
                case CellType.NAME:
                    return <NameCell value={props.value}></NameCell>
                case CellType.MULTIPLE_PERSON:
                    return (
                        <div>
                            <MultiplePersonCell value={props.value}></MultiplePersonCell>
                        </div>
                    )
            }
        })()}
        </div>
    )
}

const NAME_PREFIX = CSS_PREFIX + '-name-cell'

export const NameCell = (props: {
    value: string | any
}) => {
    return (
        <div className={`${NAME_PREFIX}-component`}>
            <div className={`${NAME_PREFIX}-text`}>
                <Editable text={props.value} />
            </div>
        </div>
    )
}

const MULTIPLE_PERSON_PREFIX = CSS_PREFIX + '-multiple-person-cell'

export const MultiplePersonCell = (props: {
    value: any
}) => {
    return (
        <div className={`${MULTIPLE_PERSON_PREFIX}-component`}>
            <Add className="add-btn" size={50} />
            <PersonBullet src={props.value.src} />
        </div>
    )
}