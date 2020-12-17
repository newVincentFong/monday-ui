import React from 'react'
import './index.less'
import cx from 'classnames'
import { CSS_PREFIX } from '../@util/constants'

const COMPONENT_NAME = '-person-bullet'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

interface PersonBulletProps {
    src?: string
}

export const PersonBullet = (props: PersonBulletProps) => {
    return (
        <img src={props.src || 'https://cdn7.monday.com/icons/dapulse-person-column.svg'} className={cx(`${PREFIX}-component`, `${PREFIX}-image`)}></img>
    )
}