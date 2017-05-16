
import React from 'react';

import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';

//let counter = 0;

class Luokka5 extends React.Component {

    uusiElementti(indeksi, nimi, arvo, kuvaus) {

        return { id: indeksi, nimi:nimi, arvo:arvo, kuvaus:kuvaus };
    }

    //------------------------------------


    constructor(props) {
        super(props);
        this.state = {
            data: [
                this.uusiElementti(0, "kirja", "500€", "jotain tekstiä"),
                this.uusiElementti(0, "auto", "20000€", "hieno auto"),
                this.uusiElementti(0, "Iphone 5", "180€", "hieman vanhentunut, mutta toimii"),
                this.uusiElementti(0, "talo", "300000€", "ei tietoa ..."),

            ],

            header_data: [ {id:"id"}, {nimi: "nimi"}, {arvo:"arvo"}, {kuvaus: "kuvaus"} ] 

        }
    }


    //------------------------------------
    render() {

                // esim table elementeillä  <table>  data.map ... <tr><td>1</td><td>2</td> </tr>  </talbe>
        
        
                
                let map_taulu = this.state.data.map( (elementti) => {
                return (
                <TableRow>
                    <TableCell> { elementti.id} </TableCell>
                    <TableCell> { elementti.nimi} </TableCell>
                    <TableCell> { elementti.arvo} </TableCell>
                    <TableCell> { elementti.kuvaus } </TableCell>
                 </TableRow>)});
        

               let koko_taulu = ( <Table><TableBody>{map_taulu}</TableBody></Table> );
            
            
            
               return <div>{koko_taulu}</div>;
        
        //return <div> 123 </div>;
        
        
    }//render

}

export default Luokka5;

