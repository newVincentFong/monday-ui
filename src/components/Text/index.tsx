import React, { FC } from 'react'
import './index.less'
import { CSS_PREFIX } from '../../util/constants'

const COMPONENT_NAME = 'text'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

export const Text: FC = ({children}) => {
    return (
        <div className={`${PREFIX}-component`} dir="auto">
            <span>{children}</span>
        </div>
    )
}