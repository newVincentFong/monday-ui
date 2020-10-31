import React, { FC } from 'react'
import './index.less'
import classNames from 'classnames'

const PREFIX = 'editable'

export const Editable: FC = () => {
    return (
        <div className={classNames(`${PREFIX}-box`)}></div>
    )
} 