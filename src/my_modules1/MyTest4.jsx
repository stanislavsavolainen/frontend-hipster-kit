
import React from 'react';

//material-ui component
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

//material-ui layout
import CardWrapper from '../components/CardWrapper';
import ResponsiveCard from '../components/ResponsiveCard';
import { CardActions, CardHeader, CardContent } from 'material-ui/Card';



class Luokka4 extends React.Component {



    //static arvo = 10;



    render() {

        //Material-UI layout, label ja elementien asettaminen tasauksen mukaan

        let ui_kentta = (<div> <TextField style={{ backgroundColor: 'silver', fontSize: 26 }} > </TextField> </div>);

        let ui_nappi_a = (<Button> Teksti </Button>);


        //Materia-UI "layout" toimii  "table" elementtien kanssa hyvin
        // return ( <div>  <table> <tr> <td> { ui_kentta } </td> <td>  {ui_nappi_a} </td>  </tr> </table> </div>  );


        // <ResponsiveCard style={{ maxWidth: 360 }}>
        //         <CardHeader title="Layout testi"></CardHeader>  

        return (
            <div>

                <CardWrapper>
                    <CardContent>
                        {ui_kentta}
                    </CardContent>

                    <CardContent>
                        {ui_nappi_a}
                    </CardContent>
                </CardWrapper>

                <CardWrapper>
                    <CardContent>
                        {ui_kentta}
                    </CardContent>

                    <CardContent>
                        {ui_nappi_a}
                    </CardContent>
                </CardWrapper>

            </div>
        );

    }

}


export default Luokka4;