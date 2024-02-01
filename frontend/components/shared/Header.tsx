import {
  Image,
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from '@nextui-org/react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { AuthButton } from '@/components/authentication/AuthButton'

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex h-16 w-full border-b-[1px] border-solid border-gray-300 bg-white py-1.5">
      {/* TODO: change padding for responsiveness */}
      <div className="container mx-auto flex w-full items-center justify-between px-6 lg:px-20 xl:px-36 2xl:px-48">
        <Image src={'/logo3.png'} width={140} height={120} />
        <div className="flex-h flex">
          <Button variant="light" className="p-3">
            <FaSearch />
            <span className="text-sm">Search</span>
          </Button>
          <AuthButton />
          <Dropdown className="p-1" placement="bottom">
            <DropdownTrigger>
              <Button variant="light">
                <FaBars />
                <span className="text-sm">Menu</span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">My Bookings</DropdownItem>
              <DropdownItem key="edit">Settings</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
