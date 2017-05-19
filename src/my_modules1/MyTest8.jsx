import React from 'react';

import Layout from 'material-ui/Layout';

import Button from 'material-ui/Button';
import Slider from 'material-ui-old/Slider';

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
            <Layout container >
                <Layout item xs="12">
                    <Layout container justify="center" >
                        <Layout item><Button>123457</Button></Layout>
                        <Layout item><Button>123</Button></Layout>
                        <Layout item><Button>123</Button></Layout>
                        <Layout item><Button>123</Button></Layout>
                    </Layout>
                </Layout>
                <Layout item xs="12">
                    <Layout container justify="center" >
                        <Layout item><Button>123</Button></Layout>
                        <Layout item><Button>123</Button></Layout>
                        <Layout item><Button> <Slider style={{ maxWidth: 360, fontSize: 18,  backgroundColor: 'white', color: 'green' }}  /></Button></Layout>
                        <Layout item><Button>123</Button></Layout>
                    </Layout>
                </Layout>
            </Layout>
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
            </div>
            */
            
            <div> 
                <Slider style={{ maxWidth: 360, fontSize: 18,  backgroundColor: 'white', color: 'green' }}  />
                {ui_grid} 
            </div>)
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