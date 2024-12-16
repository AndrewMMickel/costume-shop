import React from 'react';
import NewCostumeForm from './NewCostumeForm';
import NewCostumePartForm from './NewCostumePartForm'
import CostumeList from './CostumeList';
import CostumePartList from './CostumePartList'
import CostumeDetail from './CostumeDetail';
import CostumePartDetail from './CostumePartDetail';
class CostumeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            formPartVisibleOnPage: false,
            mainCostumeList: [],
            mainCostumePartList: [],
            selectedCostumeList: [],
            selectedCostume: null,
            selectedCostumePart: null,
            showWarning: true
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
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }

    handleClickPart = () => {
        if (this.state.selectedCostumePart != null) {
            this.setState({
                formPartVisibleOnPage: false,
                selectedCostumePart: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formPartVisibleOnPage: !prevState.formPartVisibleOnPage
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

    handleAddingNewCostumePartToList = (newCostumePart) => {
        const newMainCostumePartList = this.state.mainCostumePartList.concat(newCostumePart);
        this.setState({
            mainCostumePartList: newMainCostumePartList,
            formPartVisibleOnPage: false
        });
    }

    handleAddingCostumePartToCostume = (id) => {
        const selectedCostumePart = this.state.mainCostumePartList.filter(costumePart => costumePart.id === id)[0];
        const newSelectedCostumeList = this.state.selectedCostumeList.concat(selectedCostumePart);
        this.setState({
            selectedCostumeList: newSelectedCostumeList
        });
    }

    handleChangingSelectedCostume = (id) => {
        const selectedCostume = this.state.mainCostumeList.filter(costume => costume.id === id)[0];
        this.setState({ selectedCostume: selectedCostume });
    }

    handleChangingSelectedCostumePart = (id) => {
        const selectedCostumePart = this.state.mainCostumePartList.filter(costumePart => costumePart.id === id)[0];
        this.setState({ selectedCostumePart: selectedCostumePart });
    }

    handleDeletingCostume = (id) => {
        const newMainCostumeList = this.state.mainCostumeList.filter(costume => costume.id !== id);
        this.setState({
            mainCostumeList: newMainCostumeList,
            selectedCostume: null
        });
    }

    handleDeletingCostumePart = (id) => {
        const newMainCostumePartList = this.state.mainCostumeList.filter(costumePart => costumePart.id !== id);
        this.setState({
            mainCostumePartList: newMainCostumePartList,
            selectedCostumePart: null
        });
    }

    handleAddingStock = (costume) => {
        const editedCostume = { ...costume, quantity: costume.quantity + 1 };
        const updatedMainCostumeList = this.state.mainCostumeList
            .filter(costume => costume.id !== this.state.selectedCostume.id)
            .concat(editedCostume);
        this.setState({
            mainCostumeList: updatedMainCostumeList, selectedCostume: editedCostume
        });
    };

    handleSubtractingStock = (costume) => {
        if (costume.quantity === 0) {
            return;
        } else {
            const editedCostume = { ...costume, quantity: costume.quantity - 1 };
            const updatedMainCostumeList = this.state.mainCostumeList
                .filter(costume => costume.id !== this.state.selectedCostume.id)
                .concat(editedCostume);
            this.setState({
                mainCostumeList: updatedMainCostumeList, selectedCostume: editedCostume
            });
        }
    }

    render() {
        let currentlyVisibleState = null;
        let currentlyVisibleState2 = null;
        let buttonText = null;
        let buttonText2 = null;
        let isVisible = true;
        let isVisible2 = true;

        if (this.state.selectedCostume != null) {
            currentlyVisibleState =
                <CostumeDetail
                    costume={this.state.selectedCostume}
                    onClickingDelete={this.handleDeletingCostume}
                    onAddingStock={this.handleAddingStock}
                    onSubtractingStock={this.handleSubtractingStock}
                    costumePartList={this.state.mainCostumePartList}
                    selectedCostumeList={this.state.selectedCostumeList}
                    onAddCostumePart={this.handleAddingCostumePartToCostume} />
            buttonText = "Return to Costume List";
            isVisible2 = false;
        } else if (this.state.selectedCostumePart != null) {
            currentlyVisibleState2 =
                < CostumePartDetail
                    costumePart={this.state.selectedCostumePart}
                    onClickingDelete={this.handleDeletingCostumePart} />
            isVisible = false;
            buttonText2 = "Return to Costume List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCostumeForm onNewCostumeCreation={this.handleAddingNewCostumeToList} />;
            buttonText = "Return to Costume List";
            isVisible2 = false;
        } else if (this.state.formPartVisibleOnPage) {
            currentlyVisibleState2 = <NewCostumePartForm onNewCostumePartCreation={this.handleAddingNewCostumePartToList} />;
            isVisible = false;
            buttonText2 = "Return to Costume List";
        } else {
            currentlyVisibleState = <CostumeList costumeList={this.state.mainCostumeList} onCostumeSelection={this.handleChangingSelectedCostume} />;
            currentlyVisibleState2 = <CostumePartList costumePartList={this.state.mainCostumePartList} onCostumePartSelection={this.handleChangingSelectedCostumePart} />
            isVisible = true;
            isVisible2 = true;
            buttonText = "Add Costume";
            buttonText2 = "Add Costume Part";
        }

        return (
            <React.Fragment>
                {currentlyVisibleState}
                {currentlyVisibleState2}
                <button id="buttonStyle" className="button-comp" style={{ display: isVisible ? 'block' : 'none' }} onClick={this.handleClick}>{buttonText}</button>
                <button id="buttonStyle2" className="button-comp" style={{ display: isVisible2 ? 'block' : 'none' }} onClick={this.handleClickPart}>{buttonText2}</button>
            </React.Fragment>
        );
    }
}
//boolean conditional rendering. If form is visible on page is true I don't want second button to show
export default CostumeControl;