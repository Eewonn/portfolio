import { Box, Container, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import dict from '../assets/dict.png';
import hackerrank from '../assets/hackerrank.png';
import oracle from '../assets/oracle.png';
import certiport from '../assets/certiport.png';
import datacamp from '../assets/datacamp.png';
import nasa from '../assets/nasa.png';
import trendmicro from '../assets/trendmicro.png';

const certifications = [
  {
    id: 1,
    title: 'Principles of Web Development and Introduction to HTML',
    issuer: 'DICT',
    logo: dict,
    issueDate: 'October 26, 2024',
    credentialUrl: '/certificates/DICT_PrinciplesOfWebDevelopment.pdf',
  },
  {
    id: 2,
    title: 'Programming for Beginners Using Python',
    issuer: 'DICT',
    logo: dict,
    issueDate: 'October 26, 2024',
    credentialUrl: '/certificates/DICT_Python.pdf',
  },
  {
    id: 3,
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    logo: hackerrank,
    issueDate: 'October 20, 2024',
    credentialUrl: 'https://www.hackerrank.com/certificates/37b49461fb35',
  },
  {
    id: 4,
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    logo: hackerrank,
    issueDate: 'August 05, 2025',
    credentialUrl: 'https://www.hackerrank.com/certificates/7cf42004bb06',
  },
  {
    id: 5,
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    logo: hackerrank,
    issueDate: 'November 27, 2024',
    credentialUrl: 'https://www.hackerrank.com/certificates/b777904bf4e8',
  },
  {
    id: 6,
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    logo: hackerrank,
    issueDate: 'February 04, 2025',
    credentialUrl: 'https://www.hackerrank.com/certificates/8e8f57f5a6eb',
  },
  {
    id: 7,
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    logo: oracle,
    issueDate: 'November 12, 2024',
    credentialUrl: '/certificates/Oracle_FoundationAssociate.pdf',
  },
  {
    id: 8,
    title: 'Python',
    issuer: 'Certiport',
    logo: certiport,
    issueDate: 'July 16, 2025',
    credentialUrl: 'https://www.credly.com/badges/d1e4f3a3-a47d-4076-abed-c185f716f31e/linked_in_profile',
  },
  {
    id: 9,
    title: 'GitHub Foundations',
    issuer: 'DataCamp',
    logo: datacamp,
    issueDate: 'August 05, 2025',
    credentialUrl: '/certificates/Datacamp_GithubCompletion.pdf',
  },
  {
    id: 10,
    title: 'NASA Space Apps Challenge - Galactic Problem Solver',
    issuer: 'NASA',
    logo: nasa,
    issueDate: 'October 5, 2025',
    credentialUrl: '/certificates/NASA_SpaceAppsChallenge.pdf',
  },
  {
    id: 11,
    title: 'University Capture the Flag',
    issuer: 'TrendMicro',
    logo: trendmicro,
    issueDate: 'August 22, 2025',
    credentialUrl: '/certificates/TrendMicro_uCTF.pdf',
  },
];

export default function Certifications() {
  return (
    <Box
      component="section"
      id="certifications"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontFamily: '"Courier New", Courier, monospace',
            textAlign: 'center',
            mb: 6,
          }}
        >
          Certifications
        </Typography>

        {/* Certifications Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 3,
          }}
        >
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              sx={{
                display: 'flex',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                component="a"
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                {/* Logo */}
                <Box
                  component="img"
                  src={cert.logo}
                  alt={cert.issuer}
                  sx={{
                    width: 50,
                    height: 50,
                    objectFit: 'contain',
                    mr: 3,
                    flexShrink: 0,
                  }}
                />

                {/* Content */}
                <CardContent sx={{ flex: 1, p: 0 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 600,
                      fontFamily: '"Courier New", Courier, monospace',
                      mb: 0.5,
                    }}
                  >
                    {cert.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    {cert.issuer}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: 'italic' }}
                  >
                    Issued: {cert.issueDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}