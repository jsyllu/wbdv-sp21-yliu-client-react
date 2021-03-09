import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'

const DropDownFloating = ({options, btnIcon, btnColor, dataType}) => {
    return (
        <DropdownButton
            className={`option-dropdown float-right ${btnIcon}`}
            variant={btnColor}
        style={{position: `${dataType === 'lesson' ? 'relative!important' : ''}`}}>
            {options.map((option) => {
                return (
                    <Dropdown.Item eventKey={option.key}
                                   className={option.icon}
                    onClick={() => option.setFunc(true)}>
                    </Dropdown.Item>
                )
            })}
        </DropdownButton>
    )
}

export default DropDownFloating