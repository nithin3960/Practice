import { Grid2 } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import APIcall from './APIcall';
import Typography from '@mui/material/Typography';
import './App.css';
import APIupdate from './APIupdate';

function App() {
  
 const [data, error] = APIcall('https://jsonplaceholder.typicode.com/posts');
 const [dataup, errorup] = APIupdate('https://jsonplaceholder.typicode.com/posts/1');
 if(error) console.log(error);
 if(!data)
{
  return (
    <>
      <h1>no data has been retuned</h1>
    </>
  )
}else{
  return(
<>
{
  data.map((val)=>(
    <Grid2 key={val.id}  size={{ xs: 17, sm: 10 }}> 
    <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {val.title}
              </Typography>
              <Typography variant="body2">
                {val.body}
              </Typography>
            </CardContent>
          </Card>
    </Grid2>
    
  ))}
<h1> UPDATED DATA</h1>

{dataup.map((val)=>(
  <Grid2 key={val.id}  size={{ xs: 17, sm: 10 }}> 
  <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {val.title}
            </Typography>
            <Typography variant="body2">
              {val.body}
            </Typography>
          </CardContent>
        </Card>
  </Grid2>
  
))

}
</>
  );
};
}

export default App
