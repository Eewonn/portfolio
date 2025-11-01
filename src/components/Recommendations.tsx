import { Box, Container, Typography, Card, CardContent, Avatar } from '@mui/material';

const recommendations = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Senior Software Engineer',
    affiliation: 'Tech Corp',
    avatar: '/avatars/avatar1.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Project Manager',
    affiliation: 'Innovation Labs',
    avatar: '/avatars/avatar2.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Tech Lead',
    affiliation: 'Digital Solutions',
    avatar: '/avatars/avatar3.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    position: 'DevOps Engineer',
    affiliation: 'Cloud Systems Inc',
    avatar: '/avatars/avatar4.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    name: 'David Martinez',
    position: 'CTO',
    affiliation: 'StartUp Ventures',
    avatar: '/avatars/avatar5.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 6,
    name: 'Emily Brown',
    position: 'Full Stack Developer',
    affiliation: 'Web Dynamics',
    avatar: '/avatars/avatar6.jpg',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function Recommendations() {
  return (
    <Box
      component="section"
      id="recommendations"
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
            mb: 2,
          }}
        >
          Recommendations
        </Typography>
        
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontStyle: 'italic',
          }}
        >
          To be added later
        </Typography>

        {/* Recommendations Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {recommendations.map((rec) => (
            <Card
              key={rec.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                {/* Profile Picture and Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={rec.avatar}
                    alt={rec.name}
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        fontFamily: '"Courier New", Courier, monospace',
                      }}
                    >
                      {rec.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {rec.position}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {rec.affiliation}
                    </Typography>
                  </Box>
                </Box>

                {/* Comment */}
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  "{rec.comment}"
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
