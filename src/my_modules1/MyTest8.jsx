import React from 'react';

import Grid from 'material-ui/Grid';

import Button from 'material-ui/Button';

import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';

class Luokka8 extends React.Component {


    //------------------------------------------------------------------

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    //------------------------------------------------------------------


    piira_ohjain_ui() {



        let taulun_solut = (<TableRow>  <TableCell> 1 </TableCell>  <TableCell> 2 </TableCell> </TableRow>);

        let taulukko_layout = (<Table style={{ maxWidth: 360, borderStyle: 'solid', borderWidth: 5, borderColor: 'green' }} ><TableBody>{taulun_solut}</TableBody></Table>);

        let ui_grid = (
            <Grid container >
                <Grid item xs="12">
                    <Grid container justify="center" >
                        <Grid item>
                            <Button>123</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );

        return (
            /*
            <div> 
                <Table>
                    <TableBody> 
                        <TableRow> 
                            <TableCell>
                            </TableCell>
                            <TableCell>
                                 {taulukko_layout} 
                            </TableCell>                 
                            <TableCell>
                            </TableCell> 
                        </TableRow> 
                    <TableRow> </TableRow>
                    </TableBody> 
                </Table>
            </div>);
            */

            <div></div>)
    }

    //------------------------------------------------------------------

    odotus_funktio() {

    }


    //------------------------------------------------------------------

    render() {



        return (<p> {this.piira_ohjain_ui()}</p>);
    }


}

export default Luokka8;