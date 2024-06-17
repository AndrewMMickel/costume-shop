import React from 'react';
import NewCostumeForm from './NewCostumeForm';
import CostumeList from './CostumeList';
import CostumeDetail from './CostumeDetail';

class CostumeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainCostumeList: [],
            mainCostumePartList: [],
            selectedCostume: null,
        };
    }

    handleClick = () => {
        if (this.state.selectedCostume != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedCostume: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

    handleAddingNewCostumeToList = (newCostume) => {
        const newMainCostumeList = this.state.mainCostumeList.concat(newCostume);
        this.setState({
            mainCostumeList: newMainCostumeList,
            formVisibleOnPage: false
        });
    }

    handleChangingSelectedCostume = (id) => {
        const selectedCostume = this.state.mainCostumeList.filter(costume => costume.id === id)[0];
        this.setState({ selectedCostume: selectedCostume });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.selectedCostume != null) {
            currentlyVisibleState =
                <CostumeDetail
                    costume={this.state.selectedCostume} />
            buttonText = "Return to Costume List";
        }
        else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCostumeForm onNewCostumeCreation={this.handleAddingNewCostumeToList} />;
            buttonText = "Return to Costume List";
        } else {
            currentlyVisibleState = <CostumeList costumeList={this.state.mainCostumeList} onCostumeSelection={this.handleChangingSelectedCostume} />;
            buttonText = "Add Costume";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button id="buttonStyle" onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

export default CostumeControl;