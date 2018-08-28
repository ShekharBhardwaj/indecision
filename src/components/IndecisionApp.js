import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';
import Footer from './Footer';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleClearOptionModal = () =>{
       this.setState(() => {
           return {
            selectedOption: undefined
           };
       }); 
    };
    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {

                options: prevState.options.filter((option) => option !== optionToRemove)
            };

        });
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    handlePick = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const optionSelected = this.state.options[rand];
        this.setState (() => {
            return {
                selectedOption: optionSelected
            }
        });
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({
                    options
                }));
            }
        } catch (e) {
            // Do nothing
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };
    componentWillUnmount() {
        console.log('ComponentWillUnmount');
    };

    render() {
        const subTitle = "Put your life in the hands of a robot!";
        return ( 
            <div>
                <Header subTitle = {subTitle}/> 
                <div className="container">
                    <Action hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick}/> 
                    <div className="widget">
                        <Options options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}/>
                        <AddOption handleAddOption = {this.handleAddOption}/> 
                    </div>
                </div>
                <OptionModal selectedOption = {this.state.selectedOption} handleClearOptionModal = {this.handleClearOptionModal}/>
                <Footer />
            </div>
        );

    };

}

IndecisionApp.defaultProps = {
    options: []
};