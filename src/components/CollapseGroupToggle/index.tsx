import React, { CSSProperties, FC, useState } from 'react'
import './index.less'
import classNames from 'classnames'
import { CSS_PREFIX } from '../../util/constants'
import DropdownChevronUp from 'monday-ui-react-core/dist/icons/DropdownChevronUp'
import DropdownChevronDown from 'monday-ui-react-core/dist/icons/DropdownChevronDown'

const COMPONENT_NAME = '-collapse-group-toggle'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

export const CollapseGroupToggle: FC = () => {
    return (
        <div className={`${PREFIX}-component`}>
            <DropdownChevronDown className={classNames('arrow', 'bottom')} />
            <DropdownChevronUp className={classNames('arrow', 'top')} />
        </div>
    )
}