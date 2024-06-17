import React from "react";
import NavigationTabs from "./NavigationTabs";

const inputStyles = {
    height: "30px",
    borderRadius: "25px",
    border: "3px solid #00aa17",
    textAlign: "center",
    backgroundColor: "black",
}

const headerStyles = {
    width: "70%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    // backgroundColor: "black"

}

function Header() {
    return (
        <React.Fragment>
            <div id="header" style={headerStyles}>
                <NavigationTabs />
                <div id="search-eventName">
                    <form>
                        <input style={inputStyles} id="eventName" type="text" name="eventName" placeholder="Event name" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;