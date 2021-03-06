import React, { CSSProperties, FC, useState } from 'react'
import './index.less'
import classNames from 'classnames'
import { CSS_PREFIX } from '../@util/constants'
import Drag from 'monday-ui-react-core/dist/icons/Drag'
import Sort from 'monday-ui-react-core/dist/icons/Sort'
import { Editable } from '../Editable'
import { MenuButton } from '../MenuButton'
import { CollapseGroupToggle } from '../CollapseGroupToggle'

const COMPONENT_NAME = '-group-header'
const PREFIX = CSS_PREFIX + COMPONENT_NAME
const COLUMN_PREFIX = CSS_PREFIX + '-column'

interface Column {
    LeftElement?: React.ReactNode
    title: string
    RightElement?: React.ReactNode
}

interface GroupHeaderProps {
    nameColumn: {
        style: CSSProperties
        name: string
    },
    columns: Column[],
}

export const GroupHeader: FC<GroupHeaderProps> = ({nameColumn = undefined, columns}) => {
    const columnWidth: string = '100px' // TODO need cal
    const [hoverIndex, setHoverIndex] = useState(-1)
    const [renamingIndex, setRenamingIndex] = useState(-1)
    const [sortedIndex, setSortedIndex] = useState(-1)

    return (
        <div className={`${PREFIX}-component`}>
        {
            nameColumn ? (
                <div className={`${CSS_PREFIX}-name-column-header`} style={{color: nameColumn.style.color, flexBasis: nameColumn.style.flexBasis || '300px'}}>
                    <div className={`${CSS_PREFIX}-name-column-header-inner`}>
                        <span className="collapse-group-button">
                            <CollapseGroupToggle />
                        </span>
                        <span className="drag-handle">
                            <Drag size="16" />
                        </span>
                        <span className="group-name">
                            <Editable text={nameColumn.name} onEdit={(isEditing) => {}} />
                        </span>
                    </div>
                </div>
            ) : ''
        }
        {
            columns.map(({LeftElement, title, RightElement}, i) => (
                <div className={classNames(`${COLUMN_PREFIX}-header`, renamingIndex === i ? 'renaming-column' : '')}
                    style={{flexBasis: columnWidth, maxWidth: columnWidth}}
                    onMouseEnter={() => {setHoverIndex(i)}}
                    onMouseLeave={() => {setHoverIndex(-1)}}>
                    <div className={`${COLUMN_PREFIX}-header-inner`}>
                        <div className={`${COLUMN_PREFIX}-header-element-wrapper`}>
                            <Drag className="drag-handle" size="16" />
                        </div>
                        <div className={`${COLUMN_PREFIX}-title-wrapper`}>
                            <span className={`${COLUMN_PREFIX}-title`}>
                                <Editable text={title} onEdit={(isEditing) => {isEditing ? setRenamingIndex(i) : setRenamingIndex(-1)}} />
                            </span>
                        </div>
                        <div className={`${COLUMN_PREFIX}-header-element-wrapper`}>
                        {
                            hoverIndex === i ? (
                                <div className={`${COLUMN_PREFIX}-menu`}>
                                    <MenuButton size="xs" />
                                </div>
                            ) : ''
                        }
                        </div>
                        {
                            hoverIndex === i || sortedIndex === i ? (
                                <div className={classNames('sort-by-column', sortedIndex === i ? 'sorted' : '')} onClick={() => {setSortedIndex(sortedIndex === i ? -1 : i)}}>
                                    <span className={`${CSS_PREFIX}-clear-button-wrapper`}>
                                        <span className={`${CSS_PREFIX}-clear-button`}>clear</span>
                                    </span>
                                    <span className={`${CSS_PREFIX}-save-button-wrapper`}>
                                        <span className={`${CSS_PREFIX}-save-button`}>save</span>
                                    </span>
                                    <span className={`${CSS_PREFIX}-sort-button`}>
                                        <Sort size="12" />
                                    </span>
                                </div>
                            ) : ''
                        }
                        {
                            hoverIndex === i ? (
                                <div className="resize-column"></div>
                            ) : ''
                        }
                    </div>
                </div>
            ))
        }
        </div>
    )
}