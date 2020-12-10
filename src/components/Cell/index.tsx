import React from 'react'
import './index.less'
import { CSS_PREFIX } from '../@util/constants'
import { Editable } from '../Editable'

const COMPONENT_NAME = '-cell'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

export const Cell = () => {
    return (
        <div className={`${PREFIX}-component`}></div>
    )
}

const NAME_PREFIX = CSS_PREFIX + '-name-cell'

export const NameCell = () => {
    return (
        <div className={`${NAME_PREFIX}-component`}>
            <div className={`${NAME_PREFIX}-text`}>
                <Editable text={'Task1'} />
            </div>
        </div>
    )
}