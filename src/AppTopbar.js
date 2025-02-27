import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const AppTopbar = (props) => {
    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                {/* <img src={props.layoutColorMode === "light" ? "assets/layout/images/logo-dark.svg" : "assets/layout/images/logo-white.svg"} alt="logo" /> */}
                <img src={"assets/logo/cb-logo.svg"} alt="logo" />
                <span style={{ color: "#ea4659" }}>Code Bridge for Munirah</span>
            </Link>

            {props.showSideMenuButton ? (
                <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                    <i className="pi pi-bars" />
                </button>
            ) : null}

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
                snjbj
                
            </button>

            <ul className={classNames("layout-topbar-menu lg:flex origin-top", { "layout-topbar-menu-mobile-active": props.mobileTopbarMenuActive })}>
                {/* <li>
                    <button className="p-link layout-topbar-button" onClick={props.onCalender}>
                        <i className="pi pi-calendar" />
                        <span>Events</span>
                    </button>
                </li> */}
                {props.onSettings ? (
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onSettings}>
                            <i className="pi pi-cog" />
                            <span>Settings</span>
                        </button>
                    </li>
                ) : null}
                {props.onAccount ? (
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onAccount}>
                            <i className="pi pi-user" />
                            <span>Profile</span>
                        </button>
                    </li>
                ) : null}
            </ul>
        </div>
    );
};
