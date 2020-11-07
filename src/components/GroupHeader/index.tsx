import React, { FC, useState } from 'react'
import './index.less'
import classNames from 'classnames'
import { CSS_PREFIX } from '../../util/constants'

const COMPONENT_NAME = 'group-header'
const PREFIX = CSS_PREFIX + COMPONENT_NAME
const COLUMN_PREFIX = CSS_PREFIX + 'column'

interface Column {
    name: string
}

interface GroupHeaderProps {
    columns: Column[]
}

export const GroupHeader: FC<GroupHeaderProps> = ({columns}) => {
    const columnWidth: string = '100px' // TODO need cal
    const [isHover, setIsHover] = useState(false)

    return (
        <div className={classNames(`${PREFIX}-component`)}>
        {
            columns.map(column => (
                <div className={`${COLUMN_PREFIX}-header`}
                    style={{flexBasis: columnWidth, maxWidth: columnWidth}}>
                    <div className={`${COLUMN_PREFIX}-header-inner`}>
                        <div className={`${COLUMN_PREFIX}-header-element-wrapper`}>
                        {
                            isHover ? '' : ''
                        }
                        </div>
                        <div className={`${COLUMN_PREFIX}-title-wrapper`}>
                            <span className={`${COLUMN_PREFIX}-title`}>{column.name}</span>
                        </div>
                        <div className={`${COLUMN_PREFIX}-header-element-wrapper`}>
                        {
                            isHover ? '' : ''
                        }
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}