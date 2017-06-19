
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



class MyChat1 extends React.Component {


//-----------------------------

 constructor(props) {
        super(props);
        this.state = {
            joku_tieto : 'joku arvo',
            kaikki_viestit: ["aaaa", "fwefwe"]
         }
    }


//---------------------------------------

//joku http-fetch hakee nodeJS chatti viestit globaali taulukosta
hae_viestit_palvelimelta(){


    console.log("Nappi painettu");

    //GET pyyntö Fetch:llä
//https://davidwalsh.name/fetch

/*
  fetch( (this.state.palvelin_url + this.state.palvelin_komentoB) , post_json_muuttujaB )
  .then((resp) => { return resp.json(); })
  .then((resp) => { })
  .catch(...);
*/

// url (required), options (optional)
//fetch("http://localhost:8081/all_msg", {
 fetch("http://10.41.40.183:8081/all_msg", {   
	method: 'get'
})

.then((resp) => { return resp.json(); }) 

.then((response) => {
	
    //return message back to client http-response handler
    console.log("Vastaa käyttäjän 'hae kaikki viestit' pyyntöön  ");
  //  console.log("Chat viestit : " +JSON.parse(response ) );

   // this.state.kaikki_viestit = JSON.parse(response);
   let taulukko = [];
  // taulukko = JSON.parse(response);

    //console.log("Chat viestit : " +this.state.kaikki_viestit );
 // console.log("Chat viestit : " +taulukko );
    console.log("Chat viestit : " +response );

    let arvot = response;

    this.state.kaikki_viestit = response;

    this.setState(this.state);

   console.log(this.state.kaikki_viestit);
  // console.log(arvot);

}).catch(function(err) {
	// Error :(
         console.log("Sivua ei löytynyt suorita virhe poikkeus tänne ! " +err);
});



}


//----------------------------------------


tulosta_data(){

    let koko_data = [];

   
    this.state.kaikki_viestit.forEach( (f_viesti, indx) => {

        koko_data.push( <div> <br />  <font color="green"> {f_viesti} </font> </div> );

    });



    return koko_data;
}


//----------------------------------------

//React + material-ui ---> TableRow/TableCell layout
tulosta_data2(){

    //split komento state merkkijonolle
   // let elements = this.state.kaikki_viestit.split("*");

   let rows = [];

   this.state.kaikki_viestit.forEach( ( t_viestit, indx ) => {

        let elements = t_viestit.split("*");

    /*
     rows.push( 
            <TableRow>  
                <TableCell> Käyttäjä </TableCell>
                <TableCell> Aika </TableCell>
                <TableCell> Viesti </TableCell>
            </TableRow> 
            );
     */
        let temp_style ;

        if(elements[0] == "User1" ){ temp_style = { fontSize: 18, color: 'blue'   } }
        else if(elements[0] == "User2"){ temp_style = { fontSize: 18, color: 'red'   } }
        else if(elements[0] == "User3"){ temp_style = { fontSize: 18, color: 'green'   } }
        else {  temp_style = { fontSize: 18, color: 'orange'   } }

     rows.push(  
                <TableRow>  
                    <TableCell style={temp_style}> { elements[0] } </TableCell>
                    <TableCell> { elements[1] } </TableCell>
                    <TableCell style={temp_style}> { elements[2] } </TableCell>
                </TableRow>
            );

   } ); 


   return <div> <Table> <TableBody> { rows } </TableBody> </Table> </div>;
}


//----------------------------------------

hae_viestit_palvelimelta2(){

    console.log(this.state.kaikki_viestit);
}


//---------------------------------------

render(){

    let tyyli1 = { backgroundColor: '#708090', fontSize: 18, color: 'blue'  };
    let ui_hae_viestit = ( <Button style = { tyyli1  } onClick = { () => this.hae_viestit_palvelimelta() } > Hae viestit </Button>);


    return <p> 1234567890 <br /> {this.state.joku_tieto} <br /> <br /> {ui_hae_viestit} <br /> <br /> <br /> <div> {this.tulosta_data() }  <br /> {this.tulosta_data2() } </div> </p>;
}



}


export default MyChat1;