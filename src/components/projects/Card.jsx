import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../css/card.css';

export default function MediaCard({ name, description, sendProjectName, getProjectName, image }) {
    return (
        <Card className="my-3 mx-4 rounded cards" sx={{
            maxWidth: 350,
        }}>
            < CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent className="cardbody">
                <Typography gutterBottom variant="h5" component="div" className="fira">
                    {name}
                </Typography>
                <Typography variant="body2" className='text-light fira'>
                    {description}
                </Typography>
                <div>
                    <Button className="btn btn-primary mt-3 fira"
                        onClick={() => {
                            sendProjectName(name)
                            getProjectName(name)
                        }}
                    >View Project</Button>
                </div>

            </CardContent>



        </Card>
    );
}
