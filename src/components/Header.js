import React from "react";
import NavigationTabs from "./NavigationTabs";

const inputStyles = {
    height: "30px",
    borderRadius: "25px",
    border: "3px solid #aa0000",
    textAlign: "center",
    backgroundColor: "black",
}

const headerStyles = {
    width: "70%",
    margin: "0 auto",
    display: "flex",
    color: "#aa0000",
    justifyContent: "space-between",
    // backgroundColor: "black"

}

function Header() {
    return (
        <React.Fragment>
            <div id="header" style={headerStyles}>
                <NavigationTabs />
                <div id="search-costumeName">
                    <form>
                        <input style={inputStyles} id="costumeName" type="text" name="costumeName" placeholder="Costume name" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;