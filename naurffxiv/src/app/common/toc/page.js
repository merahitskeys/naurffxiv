import React from "react";
import "./page.css";

export default function TableOfContents(props) {

    return (
        <>
        <ul className="fight-refbar">
            {
                props.tabs.map((tab, idx) => {
                    return <li
                        className={`fight-tab ${props.selectedTab == tab ? 'active' : ''}`}
                        key={idx}
                        onClick={() => props.handleTabClick(tab)}
                        >
                            {tab}
                    </li>
                })
            }
        </ul>
        </>
    )
}