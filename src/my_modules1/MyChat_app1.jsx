
import React from 'react';

import Table, {
    TableBody,
    TableCell,
    // TableHead,
    TableRow,
    // TableSortLabel,
} from 'material-ui/Table';


// kentät
// material-ui component
import Button from 'material-ui/Button';
// import TextField from 'material-ui/TextField';


class MyChat1 extends React.Component {


//-----------------------------

  constructor(props) {
    super(props);
    this.state = {
      joku_tieto: 'joku arvo',
      kaikki_viestit: ['aaaa', 'fwefwe'],
    };
  }


//---------------------------------------

// joku http-fetch hakee nodeJS chatti viestit globaali taulukosta
  haeViestitPalvelimelta() {
    console.log('Nappi painettu');

    // GET pyyntö Fetch:llä
// https://davidwalsh.name/fetch

/*
  fetch( (this.state.palvelin_url + this.state.palvelin_komentoB) , post_json_muuttujaB )
  .then((resp) => { return resp.json(); })
  .then((resp) => { })
  .catch(...);
*/

// url (required), options (optional)
// fetch("http://localhost:8081/all_msg", {
    fetch('http://10.41.40.183:8081/all_msg', {
      method: 'get',
    })

.then(resp => resp.json())

.then((response) => {
    // return message back to client http-response handler
  console.log("Vastaa käyttäjän 'hae kaikki viestit' pyyntöön  ");
  //  console.log("Chat viestit : " +JSON.parse(response ) );

   // this.state.kaikki_viestit = JSON.parse(response);
 // const taulukko = [];
  // taulukko = JSON.parse(response);

    // console.log("Chat viestit : " +this.state.kaikki_viestit );
 // console.log("Chat viestit : " +taulukko );
  console.log(`Chat viestit : ${response}`);

 // const arvot = response;

  this.state.kaikki_viestit = response;

  this.setState(this.state);

  console.log(this.state.kaikki_viestit);
  // console.log(arvot);
}).catch((err) => {
// Error :(
  console.log(`Sivua ei löytynyt suorita virhe poikkeus tänne ! ${err}`);
});
  }


//----------------------------------------


  tulostaData() {
    const kokoData = [];


    this.state.kaikki_viestit.forEach((fViesti) => {
      kokoData.push(<div> <br /><font color="green"> {fViesti} </font> </div>);
    });


    return kokoData;
  }


//----------------------------------------

// React + material-ui ---> TableRow/TableCell layout
  tulostaData2() {
    // split komento state merkkijonolle
   // let elements = this.state.kaikki_viestit.split("*");

    const rows = [];

    this.state.kaikki_viestit.forEach((tViestit) => {
      const elements = tViestit.split('*');

    /*
     rows.push(
            <TableRow>
                <TableCell> Käyttäjä </TableCell>
                <TableCell> Aika </TableCell>
                <TableCell> Viesti </TableCell>
            </TableRow>
            );
     */
      const tempStyle = { fontSize: 18, color: 'blue' };
        /*
        if(elements[0] == "User1" ){ temp_style = { fontSize: 18, color: 'blue'   } }
        else if(elements[0] == "User2"){ temp_style = { fontSize: 18, color: 'red'   } }
        else if(elements[0] == "User3"){ temp_style = { fontSize: 18, color: 'green'   } }
        else {  temp_style = { fontSize: 18, color: 'orange'   } }
        */

      rows.push(
        <TableRow>
          <TableCell style={tempStyle}> { elements[0] } </TableCell>
          <TableCell> { elements[1] } </TableCell>
          <TableCell style={tempStyle}> { elements[2] } </TableCell>
        </TableRow>,
            );
    });


    return <div> <Table> <TableBody> { rows } </TableBody> </Table> </div>;
  }


//----------------------------------------

  haeViestitPalvelimelta2() {
    console.log(this.state.kaikki_viestit);
  }


//---------------------------------------

  render() {
    const tyyli1 = { backgroundColor: '#708090', fontSize: 18, color: 'blue' };
    const uiHaeViestit = (
      <Button
        style={tyyli1}
        onClick={() => this.haeViestitPalvelimelta()}
      > Hae viestit
       </Button>);


    return (<p> 1234567890 <br /> {this.state.joku_tieto} <br /> <br /> {uiHaeViestit}
      <br /> <br /> <br /> <div> {this.tulostaData() } <br /> {this.tulostaData2() } </div> </p>);
  }


}


export default MyChat1;
