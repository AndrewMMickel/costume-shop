import React from 'react';

const navTabStyles = {
    display: "flex",
    flexGrow: "3"
}

const navBtnStyles = {
    border: "3px solid #aa0000",
    color: "#aa0000",
    height: "100%",
    width: "20%",
    fontSize: "1.1vw",
    backgroundColor: "black",
    justifyContent: "space-between",
    borderRadius: "25px"
}

function NavigationTabs() {
    return (
        <React.Fragment>
            <div id="navigation-tabs" className="col-md-6" style={navTabStyles}>
                <button type="button" className="nav-btn" style={navBtnStyles}>Home</button>
                <button type="button" className="nav-btn" style={navBtnStyles}>Notifications</button>
                <button type="button" className="nav-btn" style={navBtnStyles}>Applications</button>
            </div>
        </React.Fragment>
    );
}

export default NavigationTabs;