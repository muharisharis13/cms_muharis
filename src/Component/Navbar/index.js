import React, { useState } from 'react'
import { ContainerIcon, ContainerNavbar, LeftNavbar, LinkNavbar, RightNavbar, SideNav } from './style.Navbar'
import { FaBars, FaGrinTears, FaHome } from 'react-icons/fa'

const data = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaGrinTears />
  },
]

export const Navbar = () => {
  const [side, setSide] = useState(false)

  return (
    <ContainerNavbar>
      <div className="container d-flex">
        <LeftNavbar >
          <FaBars cursor="pointer" fontSize={20} onClick={() => setSide(!side)} />
        </LeftNavbar>
        <RightNavbar>
          list navbar
        </RightNavbar>
      </div>


      {/* Side Bar */}

      <SideNav side={side} >
        <div className="container">
          <ContainerIcon >
            <FaBars onClick={() => setSide(!side)} cursor="pointer" />
          </ContainerIcon>


        </div>
        <div>
          {
            data.map((item, index) => (
              <LinkNavbar key={index}>
                <div>
                  {item.icon}
                </div> &nbsp;
                <div>
                  {item.name}
                </div>
              </LinkNavbar>
            ))
          }
        </div>
      </SideNav>

    </ContainerNavbar>
  )
}


