
import React from "react";
import { NavLink } from "react-router-dom";
import './sidePortion.css'
const SidePortion = () => {
    const data = [
        {
            id: 1,
            step: "step 1",
            title: "your info",
            linkTo: "/",
        },
        {
            id: 2,
            step: "step 2",
            title: "select plan",
            linkTo: "selectplan",
        },
        {
            id: 3,
            step: "step 3",
            title: "add-ons",
            linkTo: "addons",
        },
        {
            id: 4,
            step: "step 4",
            title: "summary",
            linkTo: "summary",
        },
    ];
    return (
        <aside className=" absolute top-0 left-0 right-[100%] sm:relative bg-mobile sm:bg-url('../assets/bg-sidebar-desktop.svg') sm:bg-cover bg-no-repeat w-[100%] h-[100%] pt-8 sm:pl-8 sm:basis-[30%] sm:rounded-lg flex items-start justify-center sm:flex-col sm:justify-start">
            {data.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        className="flex items-center space-x-4 leading-4 sm:mb-10"
                    >
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "#000" : "hsl(229, 24%, 87%)",
                                background: isActive ? "hsl(228, 100%, 84%)" : "transparent",
                                border: isActive ? "none" : "2px solid hsl(229, 24%, 87%)",
                                fontWeight: "500",
                                width: "2rem",
                                height: "2rem",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            })}
                            to={item.linkTo}
                        >
                            {item.id}
                        </NavLink>
                        <div>
                            <p className="sidep">
                                {item.step}
                            </p>
                            <p className="sidep">
                                {item.title}
                            </p>
                        </div>
                    </div>
                );
            })}
        </aside>
    );
};



export default SidePortion