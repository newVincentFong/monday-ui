import React, { CSSProperties } from 'react'
import './index.less'
import cx from 'classnames'
import { CSS_PREFIX, CellType, CellClassname } from '../@util/constants'
import { Editable } from '../Editable'
import { PersonBullet } from '../PersonBullet'
import { Text } from '../Text'
import Add from 'monday-ui-react-core/dist/icons/Add'
import AddSmall from 'monday-ui-react-core/dist/icons/AddSmall'
import CloseSmall from 'monday-ui-react-core/dist/icons/CloseSmall'
import { arr2rgb } from '../@util/formats'

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
                            <CloseSmall className="clear-btn" />
                        </div>
                    )
                case CellType.STATUS:
                    return <StatusCell value={props.value} />
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
            <AddSmall className="add-btn" size={50} />
            <PersonBullet src={props.value.src} />
        </div>
    )
}

const STATUS_PREFIX = CSS_PREFIX + '-status-cell'

export const StatusCell = (props: {
    value: any
}) => {
    const rgb = props.value.rgb || []
    const style: React.CSSProperties = {
        backgroundColor: arr2rgb(rgb),
        borderBottomColor: arr2rgb(rgb.map((i: any) => (i > 20) ? i - 20 : 0))
    }
    return (
        <div className={`${STATUS_PREFIX}-component`} style={style}>
            <div className="status-note-wrapper">
                <div className="status-print-color">
                    <div className="add-status-note"></div>
                    <Add className="fa-plus" size={12} style={{color: arr2rgb(rgb)}}/> 
                </div>
            </div>
            <Text>{props.value.text}</Text>
        </div>
    )
}