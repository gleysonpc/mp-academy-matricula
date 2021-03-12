import { ReactNode, useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { DropdownContainer, DropdownButtonWrapper, DropdownList } from './styles'

interface DropdownProps {
  items: Item[]
  component?: ReactNode
  position?: 'left' | 'right'
}

type Item = { 
  value: string;
  action?(): any;
}

function Dropdown({ items = [], component, position }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  function handleClick(item: Item) {
    if (item.action) {
      item.action();
    }
    toggle();
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <DropdownContainer>
        <DropdownButtonWrapper tabIndex={0} role='button' onKeyPress={toggle} onClick={toggle}>
          <div className='dropdown-component'>
            {component}
          </div>
        </DropdownButtonWrapper>
        <DropdownList className={position === 'left' ? 'left' : 'right'}>
          {
            open && (
              items.map((item: Item) => (
                <li key={item.value} onClick={() => handleClick(item)}>
                  {item.value}
                </li>
              ))
            )
          }
        </DropdownList>
      </DropdownContainer>
    </OutsideClickHandler>
  )

}



export default Dropdown

