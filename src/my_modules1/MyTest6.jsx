
import React from 'react';


import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';


//kentät
//material-ui component
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

//Continuous sliders
//import Slider from 'material-ui/Slider';
//import Slider from 'material-ui/Slider'; //ei löydy  "Slider" komponenttia material-ui:ssa


//https://material-ui-1dab0.firebaseapp.com/component-demos/selection-controls
import { LabelRadio, RadioGroup } from 'material-ui/Radio';

//komponenttien layout



//let counter = 0;

class Luokka6 extends React.Component {

    uusiElementti(indeksi, nimi, arvo, kuvaus) {

        return { id: indeksi, nimi:nimi, arvo:arvo, kuvaus:kuvaus };
    }

    //------------------------------------
    
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                this.uusiElementti(1, "kirja", "500€", "jotain tekstiä"),
                this.uusiElementti(2, "auto", "20000€", "hieno auto"),
                this.uusiElementti(3, "Iphone 5", "180€", "hieman vanhentunut, mutta toimii"),
                this.uusiElementti(4, "talo", "300000€", "ei tietoa ..."),

            ],

            header_data: [ {id:"id"}, {nimi: "nimi"}, {arvo:"arvo"}, {kuvaus: "kuvaus"} ],
            kentta_arvo: "",
            tx_radio: "" 

        }
    }

    //------------------------------------

    uusi_tieto(){

        let radio_arvo = this.state.tx_radio;
        if(radio_arvo === "") radio_arvo = "0 €";

        let uusiElementti = this.uusiElementti( (this.state.data.length + 1), this.state.kentta_arvo, radio_arvo, "ei tietoa ...");
        this.state.data.push(uusiElementti);
        this.setState(this.state);
    }


    //------------------------------------

    poista_tieto(poisto_indeksi){
        this.state.data.splice(poisto_indeksi, 1);
        this.setState(this.state);
    }


    //------------------------------------
    render() {

                let solut_tyyli = { backgroundColor: '#708090', fontSize: 18, color: 'blue'  }

                // esim table elementeillä  <table>  data.map ... <tr><td>1</td><td>2</td> </tr>  </talbe>
        
        
                //--------------- taulun tulostus -------------------------    
                let map_taulu = this.state.data.map( (elementti, indeksi) => {
                return (
                <TableRow>
                    <TableCell style= { solut_tyyli } > { elementti.id} </TableCell>
                    <TableCell style= { solut_tyyli } > { elementti.nimi} </TableCell>
                    <TableCell style= { solut_tyyli }> { elementti.arvo} </TableCell>
                    <TableCell style= { solut_tyyli }> { elementti.kuvaus } </TableCell>
                    <TableCell> <Button style = {{ backgroundColor: 'silver', fontSize: 24, color: 'red' }} onClick={ () => this.poista_tieto( indeksi ) }  > Poista </Button> </TableCell>
                 </TableRow>)});
        

               let koko_taulu = ( <Table><TableBody>{map_taulu}</TableBody></Table> );



               //--------------- tekstikenttä ------------------------------
               let ui_tekstikentta = (
                <TextField style={ { backgroundColor: 'silver', fontSize: 24 }  }
               onChange = { (tekstikentta_tapahtuma) => this.state.kentta_arvo = tekstikentta_tapahtuma.target.value} > </TextField>
               );
               //--------------- nappi -------------------------------------
               let ui_nappi = (
                <Button style={ { backgroundColor: 'silver', fontSize: 24, color: 'blue' } } onClick={ () => this.uusi_tieto() }  > Uusi elementti </Button>
               );

               // ------------- radio buttons -------------------------------
               let radio_button = (
                   <RadioGroup
                    selectedValue={this.state.tx_radio}
                    onChange={( radio_tapahtuma ) => {this.state.tx_radio = radio_tapahtuma.target.value ;  this.setState(this.state);  }  }
                   
                   >
                      <LabelRadio label="0 €" value= "0 €" /> 
                       <LabelRadio label = "5 €" value = "5 €"  /> 
                      <LabelRadio  label = "10 €" value = "10 €"  /> 
                   </RadioGroup>    
               );

               //------------- material-ui komponentien layout --------------

               let ui_komponentti_layout = ""; 

               //laske datan määrä
               if( this.state.data.length < 10) {
                    ui_komponentti_layout = <div> { ui_tekstikentta }  {ui_nappi}  {radio_button} </div>;
               }
               else{
                   ui_komponentti_layout = <div> <p style={ { backgroundColor: 'silver', fontSize: 24, color: 'blue' } } > Ei voi lisätä enemmän, liian paljon dataa </p></div>;
               }


               return <div>{koko_taulu} {ui_komponentti_layout} </div>;
        
        //return <div> 123 </div>;
        
        
    }//render

}

export default Luokka6;

