import React, { FC, useState } from 'react'
import './index.less'
import classNames from 'classnames'

const PREFIX = 'editable'

interface EditableProps {
    text: string
}

export const Editable: FC<EditableProps> = ({text}) => {
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
                    <span onClick={() => {setEditing(true)}}>{content}</span>
                </div>
            ) :
            (
                <input className={classNames(`${PREFIX}-input`)}
                    type="text"
                    value={content}
                    onBlur={() => {setEditing(false); setSuggesting(false)}}
                    onChange={e => {setContent(e.currentTarget.value)}}
                    autoFocus />
            )
        }
        </div>
    )
}