import { Box, Container, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

const projects = [
  {
    id: 1,
    title: 'SierraVision',
    description: 'A comprehensive website designed for users to visualize and analyze the changes in the Sierra Madre mountain range, over time.',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'AI-Assisted PDF Summarizer',
    description: 'An AI-powered tool that summarizes PDF documents, extracting key information and insights for users.',
    image: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Gym Management System',
    description: 'A web-based gym management system using PHP to help gym owners, and staff manage daily operations digitally and efficiently.',
    image: '/project3.jpg',
  },
  {
    id: 4,
    title: 'Library Management System',
    description: 'A modern, responsive library management system built with Java to help libraries manage their collections and users effectively.',
    image: '/project4.jpg',
  },
];

export default function Projects() {



  return (
    <Box
      component="section"
      id="projects"
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
          Projects
        </Typography>

        {/* Projects Grid using flexbox */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 600,
                      fontFamily: '"Courier New", Courier, monospace',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
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