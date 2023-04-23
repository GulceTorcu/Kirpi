import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';

const Navbar = () => {
    return (
        <>
        <div className="header">
        </div>
            <div className="sidebar">
                <CDBSidebar textColor="#8e8d8f" backgroundColor="#2f273d">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a href="/" className="navbarHeader">
                            Kirpi
                            
                        </a>
                    </CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <NavLink to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem>
                                    Dashboard
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/about" activeClassName="activeClicked">
                                <CDBSidebarMenuItem>
                                    About
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                    <CDBSidebarFooter className="footer">
                        <div>
                            Kirpi 2023
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div >
        </>
    )
}

export default Navbar;