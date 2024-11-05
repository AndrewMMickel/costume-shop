import React from 'react';
import NewCostumeForm from './NewCostumeForm';
import NewCostumePartForm from './NewCostumePartForm'
import CostumeList from './CostumeList';
import CostumePartList from './CostumePartList'
import CostumeDetail from './CostumeDetail';
import CostumePartDetail from './CostumePartDetail';
import CostumePart from './CostumePart';
class CostumeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            formPartVisibleOnPage: false,
            mainCostumeList: [],
            mainCostumePartList: [],
            selectedCostumeList: [
                // {
                //     names: 'NAN',
                //     imageurl: 'NAN',
                //     brand: 'NAN',
                //     price: 'NAN',
                //     size: 'NAN',
                //     quantity: 0,
                //     id: 'NAN',
                //     description: 'NAN'
                // }
            ],
            selectedCostume: null,
            selectedCostumePart: null,
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
        console.log("Click");
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

    handleAddingCostumePartToCostume = (id) => { //New
        const selectedCostumePart = this.state.mainCostumePartList.filter(costumePart => costumePart.id === id)[0];
        const newSelectedCostumeList = this.state.selectedCostumeList.concat(selectedCostumePart);
        this.setState({
            selectedCostumeList: newSelectedCostumeList
        });
        // give parameter that takes in id of part AND currently selected costume
        // add array of parts that costume is associated with
        //currently works with adding keys
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
        if (this.state.selectedCostume != null) {
            currentlyVisibleState =
                <CostumeDetail
                    costume={this.state.selectedCostume}
                    onClickingDelete={this.handleDeletingCostume}
                    onAddingStock={this.handleAddingStock}
                    onSubtractingStock={this.handleSubtractingStock}
                    costumePartList={this.state.mainCostumePartList}
                    selectedCostumeList={this.state.selectedCostumeList} //new
                    onAddCostumePart={this.handleAddingCostumePartToCostume} />
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
        } else if (this.state.formPartVisibleOnPage) {
            currentlyVisibleState = <NewCostumePartForm onNewCostumePartCreation={this.handleAddingNewCostumePartToList} />;
            buttonText = "Return to Home Page";
        } else {
            currentlyVisibleState = <CostumeList costumeList={this.state.mainCostumeList} onCostumeSelection={this.handleChangingSelectedCostume} />;
            currentlyVisibleState2 = <CostumePartList costumePartList={this.state.mainCostumePartList} onCostumePartSelection={this.handleChangingSelectedCostumePart} />
            buttonText = "Add Costume";
            buttonText2 = "Add Costume Part";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                {currentlyVisibleState2}
                <button id="buttonStyle" className="button-comp" onClick={this.handleClick}>{buttonText}</button>
                <button id="buttonStyle" className="button-comp" onClick={this.handleClickPart}>{buttonText2}</button>
            </React.Fragment>
        );
    }
}

export default CostumeControl;