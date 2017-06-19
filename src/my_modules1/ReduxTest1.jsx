
import React from 'react';

//material-ui component
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class Redux_test1 extends React.Component {

   //------------------------------------------------------------------

    constructor(props) {
        super(props);
        this.state = {
            kentta_arvo : ""
        }
    }

    //-----------------------------------------------------------------

    tallenna_redux(){

        console.log("Tallenna redux " + this.state.kentta_arvo);

    }

    //-----------------------------------------------------------------

    render(){

        let a;
        //this.state.tx_radio = radio_tapahtuma.target.value;
        let nappi = <p> ok </p>;  //( <TextField inputStyle={{ backgroundColor: 'silver', color: 'blue' }}  onChange={ (tapahtuma) => this.setState({ kentta_arvo = tapahtuma.target.value }) } /> );
        let kentta = ( <Button style={{ backgroundColor: 'silver', color: 'green'} } onClick={ () => this.tallenna_redux() } > Tallenne arvo redux kenttään </Button> );

        return <p> redux test 1 <br /> {nappi} <br /> < br /> {kentta}  </p>;
    }


}


export default Redux_test1;