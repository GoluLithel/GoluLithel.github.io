import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import angular from '../../../resources/skills/angular.png';
import bootstrap from '../../../resources/skills/bootstrap.png';
import cpp from '../../../resources/skills/c++.png';
import couchdb from '../../../resources/skills/couchdb.png';
import css from '../../../resources/skills/css.png';
import docker from '../../../resources/skills/docker.png';
import dockerCompose from '../../../resources/skills/docker-compose.png';
import etherium from '../../../resources/skills/etherium.png';
import expressjs from '../../../resources/skills/expressjs.png';
import git from '../../../resources/skills/git.png';
import html from '../../../resources/skills/html.png';
import hyperledger from '../../../resources/skills/hyperledger.png';
import java from '../../../resources/skills/java.png';
import javascript from '../../../resources/skills/javascript.png';
import jira from '../../../resources/skills/jira.png';
import kubernetes from '../../../resources/skills/kubernetes.png';
import mangodb from '../../../resources/skills/mangodb.png';
import materialUI from '../../../resources/skills/material-ui.png';
import mysql from '../../../resources/skills/mysql.png';
import nestjs from '../../../resources/skills/nestjs.png';
import nodejs from '../../../resources/skills/nodejs.png';
import python from '../../../resources/skills/python.png';
import react from '../../../resources/skills/react.png';
import trello from '../../../resources/skills/trello.png';
import typescript from '../../../resources/skills/typescript.png';

export default function Skills() {
    let border = '';

    const skills = [
      ['Node.js', nodejs],
      ['React.js', react],
      ['Angular', angular],
      ['Nest.js', nestjs],
      ['Express.js', expressjs],
      ['Java Script', javascript],
      ['Type Script', typescript],
      ['HTML', html],
      ['CSS', css],
      ['Java', java],
      ['Python', python],
      ['C++', cpp],
      ['MangoDB', mangodb],
      ['CouchDB', couchdb],
      ['My SQL', mysql],
      ['Docker', docker],
      ['Docker Compose', dockerCompose],
      ['Kubernetes', kubernetes],
      ['Bootstrap', bootstrap],
      ['Material UI', materialUI],
      ['Etherium', etherium],
      ['Hyperledger', hyperledger],
      ['Git', git],
      ['Jira', jira],
      ['Trell', trello],
    ];

    return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '5vmin', width:'90%'}}>
        <Grid container>
          <Grid md={12} sm={12} xs={12} sx={{ display: { xs: 'block', sm:'block', md: 'block'}, border: border }}>
            <Box style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
              <h1>Skills</h1>
            </Box>
          </Grid>

          {skills.map((element)=>(
            <Grid md={2} sm={3} xs={4} sx={{ display: 'block', border: border }}>
              <Box sx={{
                display: 'grid',
                border: border,
                borderRadius: '15%',
                placeItems: 'center center',
                backgroundColor: '#f8f8f8',
                margin:'8%',
                width: '90%',
                aspectRatio: '1/1',
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
                padding: '5%',
              }}>
                  <img style={{width: '45%', border: border, placeItems: 'center center'}} src={element[1]} alt={element[0]}/>                  
                  <p style={{textAlign: 'center'}}>{element[0]}</p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
    );
}