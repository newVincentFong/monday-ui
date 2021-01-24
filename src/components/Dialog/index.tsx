import React, { useState } from 'react'
import './index.less'
import { CSS_PREFIX } from '../@util/constants'
import { usePopper } from 'react-popper'
import { useClickAway } from 'ahooks'

const COMPONENT_NAME = '-dialog'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

interface DialogProps {
    children: React.ReactNode | (() => React.ReactNode),
    content: React.ReactNode | (() => React.ReactNode)
}

export const Dialog = (props: DialogProps) => {
    const [referenceEle, setReferenceEle] = useState<any>(null)
    const [popperEle, setPopperEle] = useState<any>(null)
    const { styles, attributes } = usePopper(referenceEle, popperEle, {})
    const [isShow, setIsShow] = useState(false)

    useClickAway((e) => {
        // TODO fix click inside
        if (e.target === referenceEle.children[0]) {
            setIsShow(!isShow)
        } else {
            setIsShow(false)
        }
    }, popperEle)

    return (
        <div className={`${PREFIX}-component`}>
            <div style={{width: 'fit-content'}} ref={setReferenceEle}>
                {props.children}
            </div>
            <div
                className={`${PREFIX}-content-wrapper`}
                ref={setPopperEle}
                style={{...styles.popper, display: isShow ? 'block' : 'none'}}
                {...attributes.popper}>
                    <div className={`${PREFIX}-content`}>
                        {props.content}
                    </div>
                </div>
        </div>
    )
}