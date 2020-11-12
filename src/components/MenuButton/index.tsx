import React, { FC, useState } from 'react'
import './index.less'
import classNames from 'classnames'
import { CSS_PREFIX } from '../../util/constants'
import DropdownChevronDown from 'monday-ui-react-core/dist/icons/DropdownChevronDown'

const COMPONENT_NAME = 'menu-button'
const PREFIX = CSS_PREFIX + COMPONENT_NAME

interface MenuButtonProps {
    size: 'lg' | 'md' | 'smd' | 'sm' | 'xs' | undefined
}

export const MenuButton: FC<MenuButtonProps> = ({size = 'xs'}) => {
    return (
        <div className={`${PREFIX}-component`}>
            <div className={classNames(`${PREFIX}-button`, `${PREFIX}-button-${size}`)}>
                <DropdownChevronDown />
            </div>
        </div>
    )
}