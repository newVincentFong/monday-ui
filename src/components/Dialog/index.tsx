import React, { useState } from 'react'
import './index.less'
import { CSS_PREFIX } from '../@util/constants'
import { usePopper } from 'react-popper'

const COMPONENT_NAME = '-dialog'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

interface DialogProps {
    children: React.ReactNode
}

export const Dialog = (props: DialogProps) => {
    const [referenceEle, setReferenceEle] = useState<any>(null)
    const [popperEle, setPopperEle] = useState<any>(null)
    const { styles, attributes } = usePopper(referenceEle, popperEle, {})
    const [isShow, setIsShow] = useState(false)

    return (
        <div className={`${PREFIX}-component`}>
            <div style={{width: 'fit-content'}} ref={setReferenceEle} onClick={() => {setIsShow(!isShow)}}>
                {props.children}
            </div>
            <div ref={setPopperEle} style={{...styles.popper, visibility: isShow ? 'visible' : 'hidden'}} {...attributes.popper}>i m content</div>
        </div>
    )
}