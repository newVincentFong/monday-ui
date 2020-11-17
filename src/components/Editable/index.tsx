import React, { FC, useState } from 'react'
import './index.less'
import classNames from 'classnames'
import { CSS_PREFIX } from '../../util/constants'

const COMPONENT_NAME = '-editable'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

interface EditableProps {
    text: string
    onEdit?: (editing: boolean) => void
}

export const Editable: FC<EditableProps> = ({text, onEdit = () => {}}) => {
    const [content, setContent] = useState(text)
    const [suggesting, setSuggesting] = useState(false)
    const [editing, setEditing] = useState(false)

    return (
        <div className={classNames(`${PREFIX}-component`)}>
        {
            !editing ? 
            (
                <div className={classNames(`${PREFIX}-text`, suggesting ? `suggesting` : '')}
                    onMouseEnter={() => {setSuggesting(true)}}
                    onMouseLeave={() => {setSuggesting(false)}}>
                    <span onClick={() => {setEditing(true); onEdit(true)}}>{content}</span>
                </div>
            ) :
            (
                <input className={classNames(`${PREFIX}-input`, `${PREFIX}-input-text-align`)}
                    type="text"
                    value={content}
                    onBlur={() => {setEditing(false); setSuggesting(false); onEdit(false)}}
                    onChange={e => {setContent(e.currentTarget.value)}}
                    autoFocus />
            )
        }
        </div>
    )
}