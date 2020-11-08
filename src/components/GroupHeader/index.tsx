import React, { FC, useState } from 'react'
import './index.less'
import classNames from 'classnames'
import { CSS_PREFIX } from '../../util/constants'
import Drag from 'monday-ui-react-core/dist/icons/Drag'
import { Editable } from '../Editable'

const COMPONENT_NAME = 'group-header'
const PREFIX = CSS_PREFIX + COMPONENT_NAME
const COLUMN_PREFIX = CSS_PREFIX + 'column'

interface Column {
    LeftElement?: React.ReactNode
    title: string
    RightElement?: React.ReactNode
}

interface GroupHeaderProps {
    columns: Column[],
}

export const GroupHeader: FC<GroupHeaderProps> = ({columns}) => {
    const columnWidth: string = '100px' // TODO need cal
    const [hoverIndex, setHoverIndex] = useState(-1)
    const [isRenaming, setIsRenaming] = useState(false)

    return (
        <div className={classNames(`${PREFIX}-component`)}>
        {
            columns.map(({LeftElement, title, RightElement}, i) => (
                <div className={classNames(`${COLUMN_PREFIX}-header`, isRenaming ? 'renaming-column' : '')}
                    style={{flexBasis: columnWidth, maxWidth: columnWidth}}
                    onMouseEnter={() => {setHoverIndex(i)}}
                    onMouseLeave={() => {setHoverIndex(-1)}}>
                    <div className={`${COLUMN_PREFIX}-header-inner`}>
                        <div className={`${COLUMN_PREFIX}-header-element-wrapper`}>
                            <Drag className="drag-handle" size="16" />
                        </div>
                        <div className={`${COLUMN_PREFIX}-title-wrapper`}>
                            <span className={`${COLUMN_PREFIX}-title`}>
                                <Editable text={title} onEdit={(isEditing) => {setIsRenaming(isEditing)}} />
                            </span>
                        </div>
                        <div className={`${COLUMN_PREFIX}-header-element-wrapper`}>
                        {
                            hoverIndex === i ? RightElement : ''
                        }
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}