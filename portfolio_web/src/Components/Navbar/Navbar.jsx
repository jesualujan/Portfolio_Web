import {Nav, 
       NavbarContainer, 
       Span,
       NavLogo, 
       NavItems, 
       NavLink,
       GitHubButton, 
       ButtonContainer, 
       MobileIcon, 
       MobileMenu, 
       MobileNavLogo, 
       MobileLink} from './NavbarStyledComponents'
import { useState } from 'react'
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { GoGitBranch } from "react-icons/go";
import { TbSlash } from "react-icons/tb";
import { FaBars } from 'react-icons/fa';
import { Bio } from '@/Data/constants';
import { useTheme } from 'styled-components';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
 
  return (
  <Nav>
    <NavbarContainer>
    <NavLogo to='/'>
     <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
          <FcPrevious style={{ fontSize: '35px'}}/><Span>Jesua</Span><TbSlash style={{ fontSize: '35px', color: '#2196F3'}}/><Span>Luján</Span><FcNext style={{ fontSize: '35px' }} />
        </a>
    </NavLogo>
          <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
          </MobileIcon>
    <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
    </NavItems>
    <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile 
            <GoGitBranch style={{ fontSize: '20px', color: 'white', marginLeft: '10px' }} />
          </GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
          <GitHubButton style={{padding: '10px 16px', background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">
            Github Profile<GoGitBranch style={{ fontSize: '20px', color: 'white', marginLeft: '5px' }} />
            </GitHubButton>
        </MobileMenu>
        }
    </NavbarContainer>
    </Nav>
  )
}


export default Navbar