import React, { FC, useState } from 'react'
import './index.less'
import classNames from 'classnames'
import { CSS_PREFIX } from '../@util/constants'
import DropdownChevronDown from 'monday-ui-react-core/dist/icons/DropdownChevronDown'
import Settings from 'monday-ui-react-core/dist/icons/Settings'
import Sort from 'monday-ui-react-core/dist/icons/Sort'
import Info from 'monday-ui-react-core/dist/icons/Info'

const COMPONENT_NAME = '-menu-button'
const PREFIX = CSS_PREFIX + COMPONENT_NAME
const MENU_PREFIX = CSS_PREFIX + '-menu'

interface MenuButtonProps {
    size: 'lg' | 'md' | 'smd' | 'sm' | 'xs' | undefined
}

export const MenuButton: FC<MenuButtonProps> = ({size = 'xs'}) => {
    const [isOpen, setIsOpen] = useState(false)
    const SIZE = 16

    return (
        <div className={`${PREFIX}-component`} onClick={() => {setIsOpen(!isOpen)}}>
            <div className={classNames(`${PREFIX}`, `${PREFIX}-${size}`, isOpen ? 'open' : '')}>
                <DropdownChevronDown />
                {
                    !isOpen ? '' : (
                        <div className={classNames(`${MENU_PREFIX}-dialog`, `${MENU_PREFIX}-md`)}>
                            <div className={`${MENU_PREFIX}-inner`}>
                                <div className={`${MENU_PREFIX}-section`}>
                                    <div className={`${MENU_PREFIX}-item`}>
                                        <div className={`${MENU_PREFIX}-icon`}>
                                            <Settings size={SIZE} />
                                        </div>
                                        <div className={`${MENU_PREFIX}-title`}>Column Setting</div>
                                    </div>
                                    <div className={`${MENU_PREFIX}-item`}>
                                        <div className={`${MENU_PREFIX}-icon`}>
                                            <Sort size={SIZE} />
                                        </div>
                                        <div className={`${MENU_PREFIX}-title`}>Sort Column</div>
                                    </div>
                                </div>
                                <div className={`${MENU_PREFIX}-section`}>
                                    <div className={`${MENU_PREFIX}-item`}>
                                        <div className={`${MENU_PREFIX}-icon`}>
                                            <Info size={SIZE} />
                                        </div>
                                        <div className={`${MENU_PREFIX}-title`}>Add Description</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}