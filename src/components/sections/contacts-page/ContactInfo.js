import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { contactDetails } from '../../../data/contactDetails';
import { v4 as uuidv4 } from 'uuid';

export default function ContactInfo() {

    const details = [];
    contactDetails.forEach(item => {
        details.push(item);
        details.push(item);
    })

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {details.map((data, index) => {
                        if (index % 2 === 0) {
                            return (
                                <TableRow key={uuidv4()}>
                                    <TableCell sx={{ display: { md: 'none', sm: 'none', xs: 'block' }, fontSize: '1.2rem', border: 'none', marginBottom: '-10px', paddingBottom: '0px' }}>{data[1]}&nbsp;&nbsp;&nbsp;<strong>{data[2]}</strong></TableCell>
                                </TableRow>
                            );
                        } else {
                            return (
                                <TableRow key={uuidv4()} sx={{ borderBottom: 'solid #eeeeee 1px', paddingBottom: '50px' }}>
                                    <TableCell sx={{ display: { md: 'block', sm: 'block', xs: 'none' }, fontSize: '1.2rem', border: 'none' }}>{data[1]}&nbsp;&nbsp;&nbsp;<strong>{data[2]}</strong></TableCell>
                                    <TableCell style={{ fontSize: '1.2rem', border: 'none' }}>
                                        <a href={data[3]}>
                                            {data[4]}
                                        </a>
                                    </TableCell>
                                </TableRow>
                            );
                        }
                    })}
                </TableBody>
            </Table>
        </TableContainer >
    );
}