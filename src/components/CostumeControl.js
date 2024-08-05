import React from 'react';
import NewCostumeForm from './NewCostumeForm';
import CostumeList from './CostumeList';
import CostumeDetail from './CostumeDetail';
import CostumePartDetail from './CostumePartDetail'
class CostumeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            formPartVisibleOnPage: false,
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
        const newMainCostumePartList = this.state.mainCostumeList.concat(newCostumePart);
        this.setState({
            mainCostumePartList: newMainCostumePartList,
            formVisibleOnPage: false
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
        let buttonText = null;
        let buttonText2 = null;
        if (this.state.selectedCostume != null) {
            currentlyVisibleState =
                <CostumeDetail
                    costume={this.state.selectedCostume}
                    onClickingDelete={this.handleDeletingCostume}
                    onAddingStock={this.handleAddingStock}
                    onSubtractingStock={this.handleSubtractingStock} />
            buttonText = "Return to Costume List";
        } else if (this.state.selectedCostumePart != null) {
            currentlyVisibleState =
                < CostumePartDetail
                    costumePart={this.state.selectedCostumePart}
                    onClickingDelete={this.handleDeletingCostumePart} />
            buttonText = "Return to Costume List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewCostumeForm onNewCostumeCreation={this.handleAddingNewCostumeToList} />;
            buttonText = "Return to Costume List";
        } else {
            currentlyVisibleState = <CostumeList costumeList={this.state.mainCostumeList} onCostumeSelection={this.handleChangingSelectedCostume} />;
            buttonText = "Add Costume";
            buttonText2 = "Add Costume Part";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button id="buttonStyle" className="button-comp" onClick={this.handleClick}>{buttonText}</button>
                <button id="buttonStyle" className="button-comp" onClick={this.handleClickPart}>{buttonText2}</button>
            </React.Fragment>
        );
    }
}

export default CostumeControl;