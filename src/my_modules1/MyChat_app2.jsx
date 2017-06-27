

import React from 'react';

import Table, {
    TableBody,
    TableCell,
    // TableHead,
    TableRow,
   //  TableSortLabel,
} from 'material-ui/Table';


// kentät
// material-ui component
import Button from 'material-ui/Button';
// import TextField from 'material-ui/TextField';


class MyChat2 extends React.Component {


    //-----------------------------

  constructor(props) {
    super(props);
    // class variables here
    this.initWebSocket();
    // state variables here for rendering
    this.state = {
      joku_tieto: 'joku arvo',
      ajastin: 0,
      kaikki_viestit: ['aaaa*rwerw*rwerw', 'fwefwe*erewr*f43f34'],
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
    // fetch('http://10.41.40.183:8081/all_msg', {
    fetch('http://127.0.0.1:4142/all_msg', {
      method: 'get',
    })

            .then(resp => resp.json())

            .then((response) => {
                // return message back to client http-response handler
              console.log("Vastaa käyttäjän 'hae kaikki viestit' pyyntöön  ");
                //  console.log("Chat viestit : " +JSON.parse(response ) );

                // this.state.kaikki_viestit = JSON.parse(response);
                // taulukko = JSON.parse(response);

                // console.log("Chat viestit : " +this.state.kaikki_viestit );
                // console.log("Chat viestit : " +taulukko );
              console.log(`Chat viestit : ${response}`);

              this.state.kaikki_viestit = response;
              // this.state.kaikki_viestit.splice(1, this.state.kaikki_viestit.length);
              // this.state.kaikki_viestit.push(response);


              this.setState(this.state);

              console.log(this.state.kaikki_viestit);
                // console.log(arvot);
            }).catch((err) => {
                // Error :(
              console.log(`Sivua ei löytynyt suorita virhe poikkeus tänne ! ${err}`);
            });
  }


    //----------------------------------------
    // ========================== WEBSOCKET ========================

  initWebSocket() {
    // 123
    console.log(' ==================================> Init webSocket only one time !');
    // this.socket = '1234';

    const websocketURL = 'ws://127.0.0.1:4142';
    this.socket = new WebSocket(websocketURL);
    // if WebSocket connection found
    this.socket.onopen = (event) => {
      const socketData = event.data;
      console.log(`--------------------------------> Socket data : ${socketData}`);
      // this.state.kaikki_viestit.push(event.data); // receive message from webSocket server
      // this.setState(this.state);
    };
    // if WebSocket lose connection with server
    this.socket.onclose = (event) => {
      console.log(`+++++++++++++++++++++++++>  Connection closed : ${event.data}`);
    };
    // if client receive new message
    this.socket.onmessage = (event) => {
      console.log(`*************************> New Message from server : ${event.data}`);
      // setState to update React view , when new message is received
      this.state.kaikki_viestit.push(event.data); // receive message from webSocket server
      // this.state.kaikki_viestit = '1234';
      this.setState(this.state);
    };


    // Show a connected message when the WebSocket is opened.
  /*
    this.socket.onopen = function (event) {

      // socketStatus ???????????????????????? (not need ?)
      // socketStatus.innerHTML = `Connected to: ${event.currentTarget.URL}`;
      // socketStatus.className = 'open';

    };

    // socket create listener
    this.socket.addEventListener('open', (event) => { this.socket.send('Hello server !'); });
 */
  }

  // --------------------------------------------

  WebSocketSendMessage() {
    // if client send new message to server
    this.socket.send('Hello from React client');
    this.setState(this.state);
  }


  //--------------------------------------------

  funktio1() {
    this.a = '1234';
  }

  oki() {
    this.a = '4321';
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

  ajastin() {
    setTimeout(() => {
      this.state.ajastin += 1;
      console.log('---------------------------------> Timer');
      if (this.state.ajastin >= 10) {
        this.haeViestitPalvelimelta();
        this.state.ajastin = 0;
      }

      this.setState(this.state);
    }, 100); // arvo millisekuntteina kuinka kauan odottaa
  }


    //----------------------------------------

    // React + material-ui ---> TableRow/TableCell layout
  tulostaData2() {
        // split komento state merkkijonolle
        // let elements = this.state.kaikki_viestit.split("*");

    const rows = [];

   // const splitSymbol = '*';

    // if (this.state.kaikki_viestit.length !== 0) {

    console.log(' ************ forLoop begin ********************');
    for (let i = 0; i < this.state.kaikki_viestit.length; i += 1) {
      console.log(`state element ${i}: --->${this.state.kaikki_viestit[i]}`);
    }
    console.log(' ************ forLoop end ********************');

    // =================

    console.log(' ************ forEact begin ********************');

    this.state.kaikki_viestit.forEach((tViestit) => {
     // if (tViestit.indexOf(splitSymbol) !== -1) {
      const elements = tViestit.split('*');

      // console.log(` Elements -=-=> ${elements}`);
      console.log(` tViestit -=-=> ${this.state.kaikki_viestit}`);

            /*
             rows.push(
                    <TableRow>
                        <TableCell> Käyttäjä </TableCell>
                        <TableCell> Aika </TableCell>
                        <TableCell> Viesti </TableCell>
                    </TableRow>
                    );
             */
      const tempStyle = { fontSize: 18, color: 'green' };
            /*
                  if (elements[0] === 'User1') {
                    tempStyle = { fontSize: 18, color: 'blue' };
                  }             else if (elements[0] === 'User2') {
             tempStyle = { fontSize: 18, color: 'red' };
              }           else if (elements[0] === 'User3') {
                  tempStyle = { fontSize: 18, color: 'green' };
            } else { tempStyle = { fontSize: 18, color: 'orange' }; }
            */
      rows.push(
        <TableRow>
          <TableCell style={tempStyle}> {elements[0]} </TableCell>
          <TableCell> {elements[1]} </TableCell>
          <TableCell style={tempStyle}> {elements[2]} </TableCell>
        </TableRow>,
            );
    //  }// end if
    });

    console.log(' ************ forEact end *********************');


    return <div> <Table> <TableBody> {rows} </TableBody> </Table> </div>;
  }


    //----------------------------------------

  haeViestitPalvelimelta2() {
    console.log(this.state.kaikki_viestit);
  }


    //---------------------------------------

  render() {
   // this.ajastin();

     /*
    const tyyli1 = { backgroundColor: '#708090', fontSize: 18, color: 'blue' };

    const uiHaeViestit = (<Button
      style={tyyli1} onClick={
        () => this.haeViestitPalvelimelta()}
    > Hae viestit </Button>);


    const webSocketButton = (<Button
      style={tyyli1}
      onClick={() => this.WebSocketSendMessage()}
    > Send Message via WebSocket </Button>);
  */
    return (<p><br />
      <div>{this.tulostaData2()} <br /> </div> </p>);
  }


}


export default MyChat2;
