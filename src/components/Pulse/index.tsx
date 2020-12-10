import React, { FC } from 'react'
import './index.less'
import { CSS_PREFIX } from '../@util/constants'
import { Cell } from '../Cell'

const COMPONET_NAME = '-pulse'
const PREFIX = CSS_PREFIX + COMPONET_NAME

interface PulseProps {}

export const Pulse: FC = (props: PulseProps) => {
    return (
        <div className={`${PREFIX}-component`}>
            <Cell></Cell>
        </div>
    )
}