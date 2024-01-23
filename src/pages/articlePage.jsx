import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { LinearProgress, List, ListItem } from "@mui/material"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export function ArticlePage() {
    const [listArticles, setListArticles] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch("https://api.spaceflightnewsapi.net/v3/articles")
            .then((res) => res.json())
            .then(data => setListArticles(data))
            .catch(() => navigate("/error"))
    }, [navigate])
    return (
        <div className="wrapArticle">
            <div>
                <h1 style={{ color: "darkblue" }}>Articles</h1>
            </div>
            {listArticles.length === 0 &&
                <Box sx={{ width: '100%', margin: '40%' }}>
                    <LinearProgress />
                </Box>}
            {listArticles.length > 0 && <List>
                {listArticles.map((item) =>
                    <ListItem key={item.id} disablePadding>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.imageUrl}
                                title={item.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.summary}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href={item.url}>
                                    <Button size="small" >Learn More</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </ListItem>
                )}
            </List>}
        </div>
    )
}