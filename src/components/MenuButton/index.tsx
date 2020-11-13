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
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`${PREFIX}-component`} onClick={() => {setIsOpen(!isOpen)}}>
            <div className={classNames(`${PREFIX}`, `${PREFIX}-${size}`, isOpen ? 'open' : '')}>
                <DropdownChevronDown />
            </div>
        </div>
    )
}