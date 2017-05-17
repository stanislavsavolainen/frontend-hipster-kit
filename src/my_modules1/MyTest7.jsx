
import React from 'react';

import Button from 'material-ui/Button';

//import TimerMixin from 'react-timer-mixin';

class Luokka7 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ajastin: 0,
            taulukko: [" "],
            linebreak: [],
            nappi_painettu_kertaa: 0
        }
    }



    ajastin() {

        setTimeout( () => {

           // console.log("Delay text" + this.state.ajastin);

            //console.log("Taulukon koko : " +this.state.taulukko.length);

            this.state.taulukko.push(<font style={{color:'white'}}>_</font>); //ei näy valkoinen _ merkki valkoisella taustalla

            if(this.state.taulukko.length >= 200){
                this.state.taulukko.splice(0, this.state.taulukko.length);
                this.state.linebreak.push(<br />); //tee rivinvaihtotaulukko
            }

            this.state.ajastin += 1;
            this.setState(this.state);

        }, 100); // arvo millisekuntteina kuinka kauan odottaa

    }


    tee_jotain_muuta(){
        this.state.nappi_painettu_kertaa += 1;
        console.log("Nappi painettu " + this.state.nappi_painettu_kertaa + " kertaa");
    }


    render() {

        this.ajastin();
        /*
        this.setTimeout(function() {
            
            console.log("Aika on kulunut");

        }, 10000);
        */

        //  this.setTimeout( () => { console.log('I do not leak!'); }, 5000 );



        //console.log("Ajastuksen ulkopuolella");

        return <p>  {this.state.linebreak} {this.state.taulukko} <Button style={{ backgroundColor: 'orange', fontSize: 24, color: 'green' }} onClick={() => this.tee_jotain_muuta()}> Paina nappia {this.state.ajastin}  </Button></p>
    }


}

export default Luokka7;