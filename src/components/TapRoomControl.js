import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class TapRoomControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList, formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleDecrementKegQuantity = (id) => {
    if (this.state.mainKegList.length > 1) {
      const selectedKeg = this.state.mainKegList.filter(
        (keg) => keg.id === id
      )[0];
      if(selectedKeg.quantity > 0){
        selectedKeg.quantity--;
        const newMainKegList = this.state.mainKegList
          .filter((keg) => keg.id !== id)
          .concat(selectedKeg);
        this.setState({
          mainKegList: newMainKegList,
        })};
    } else {
      const selectedKeg = this.state.mainKegList.filter(
        (keg) => keg.id === id
      )[0];
      if(selectedKeg.quantity > 0){
      selectedKeg.quantity--;
      const newKegListArray = [];
      const changedKegArray = newKegListArray.concat(selectedKeg);
      this.setState({
        mainKegList: changedKegArray,
      })};
    }
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    // if (this.state.editing) {
    //   currentlyVisibleState = (
    //     <EditKegForm
    //       keg={this.state.selectedKeg}
    //       onEditKeg={this.handleEditingKegInList}
    //     />
    //   );
    //   buttonText = "Return To Keg List";
    // } 
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
        <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} />
          //onClickBuy={this.handleDecrementQuantity}
      
      buttonText = "Return to Keg List";

    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
      buttonText = "Return to Keg List"

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Return to Keg List";
    
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TapRoomControl;