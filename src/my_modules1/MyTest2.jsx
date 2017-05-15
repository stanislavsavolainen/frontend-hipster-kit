

//React + Material_UI

import React from 'react';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class Luokka2 extends React.Component {

    

    nappinTapahtumaKuuntelija( nappien_klikkien_lkm){
        nappien_klikkien_lkm++;
        console.log("Nappi painettu " +nappien_klikkien_lkm);

        return nappien_klikkien_lkm;
    }

    //=================================================================

    nappinTapahtumaKuuntelijaB(nappien_klikkien_lkm , kenttan_arvo){

        nappien_klikkien_lkm++;
        console.log("Nappi painettu " +nappien_klikkien_lkm + "kertaa ja kenttän arvo on : " +kenttan_arvo);

        return nappien_klikkien_lkm;

    }

    //=================================================================


    render() {
        var arvo = 123;
        let lukumaara = 0;
        let kentta_taulukko = [];
        kentta_taulukko.splice(0, kentta_taulukko.length); //poistaa taulukon kaikki elementit

        let paikallinen_tekstikenttan_arvo = "-";


        //-----------------------------------------

        //<Button style={{ color: 'red', backgroundColor: 'silver', fontSize: 30 } } onClick={ () => lukumaara = this.nappinTapahtumaKuuntelija(lukumaara) } >Hei</Button>

        //muuttuja_b = funktio( muuttuja_b) {  return muuttuja_b ++ } //kasvattaa kapseloidun muuttujan arvon ulkopuolisessa funktiossa
       // <Button style={{ color: 'red', backgroundColor: 'silver', fontSize: 30 } } onClick={ () => lukumaara = this.nappinTapahtumaKuuntelija(lukumaara) } >Hei </Button>


        let ui_nappi = (
            <div>
                <Button style={{ color: 'red', backgroundColor: 'silver', fontSize: 30 } } onClick={ () => lukumaara = this.nappinTapahtumaKuuntelijaB(lukumaara, paikallinen_tekstikenttan_arvo) } >Hei </Button>
            </div>
        );

        //----------------------------------------

        //material-ui tekstikenttän fontti väri , ei toimi css { color: blue }, muilla material-ui:llä se toimii
        let ui_kentta = (
            <div>
                <TextField textareaStyle={{ color: 'white' }} style={{ backgroundColor: 'yellow', fontSize: 26 }}  onChange ={ () => this.paikallinen_tekstikenttan_arvo = "." }  > </TextField>
            </div>
        );

        //----------------------------------------

        //Material-UI taulukko elementeistä
        kentta_taulukko.push( <br /> );
        kentta_taulukko.push(ui_kentta);
        kentta_taulukko.push(<br />);
        kentta_taulukko.push(ui_kentta);
        let rivit_a = (<div> <br />< br />< br /> </div >);
        kentta_taulukko.push(rivit_a);
        kentta_taulukko.push(ui_kentta);


        //Renderöi Material-UI

        //<br /> toimii material-ui:n kanssa , mutta <div align="center"> ei, ei voi tehdä tasauksia keskelle kenttää

    //    return <p> Uusi luokka ja oma uusi moduuli kansio projektissa
    //{ui_nappi} {ui_nappi} <br />  {ui_nappi} <div align="center"> {ui_nappi} </div> <br /> {ui_kentta} </p>;

    return <p> <br /> { ui_nappi } {kentta_taulukko} </p>;



    }



};

export default Luokka2;