import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

export default function ContactInfo() {
    const contactDetails = [
        [<FaPhoneAlt />, ' Mobile Number:', 'tel:+918600258253', '+91 8600258253'],
        [<FaPhoneAlt />, ' Alternate Mobile Number:', 'tel:+918668398733', '+91 8668398733'],
        [<FaEnvelope />, ' Email Id:', 'mailto:golukamble123@gmail.com', 'golukamble123@gmail.com'],
        [<FaGithub />, ' GitHub Profile:', 'https://github.com/GoluLithel', 'github.com/GoluLithel'],
        [<FaLinkedin />, ' LinkedIn Profile:', 'https://www.linkedin.com/in/bhogendra-k-435258216/', 'linkedin.com/in/bhogendra-k-435258216/']
      ];

    return (
        <TableContainer>
            <Table>
                <TableBody>
                {contactDetails.map((data, index) => (
                    <>
                    <TableRow key={index}>
                        <TableCell sx={{ display: {md: 'none', sm:'none', xs: 'block'}, fontSize: '1.2rem', border: 'none', marginBottom:'-10px', paddingBottom:'0px'}}>{data[0]}&nbsp;&nbsp;&nbsp;<strong>{data[1]}</strong></TableCell>
                    </TableRow>
                    <TableRow key={index} sx={{borderBottom: 'solid #eeeeee 1px', paddingBottom: '50px'}}>
                        <TableCell sx={{ display: {md: 'block', sm:'block', xs: 'none'}, fontSize: '1.2rem', border: 'none'}}>{data[0]}&nbsp;&nbsp;&nbsp;<strong>{data[1]}</strong></TableCell>
                        <TableCell style={{fontSize: '1.2rem', border: 'none'}}>
                            <a href={data[2]}>
                                {data[3]}
                            </a>
                        </TableCell>
                    </TableRow>
                    </>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}