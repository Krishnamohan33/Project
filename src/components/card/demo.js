import React from "react";
import "./demo.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CardActions from "@material-ui/core/CardActions";




function Demo() {
  return (

      
      
     <div className="demo">
      
    <div style={{}}>
      <h1>   Types Of water</h1>
      <Card
        style={{
          width: 400,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
           
          </Typography>
          <Typography variant="h5" component="h2">
            Sea Water
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            
          </Typography>
          <Typography variant="body2" component="p">
          The two ions that are present most often in seawater are chloride and sodium. These two make up over 90% of all dissolved ions in seawater. The concentration of salt in seawater (its salinity) is about 35 parts per thousand; in other words, about 3.5% of the weight of seawater comes from the dissolved salts.
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
      <Card
        style={{
          width: 400,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
         
          </Typography>
          <Typography variant="h5" component="h2">
          Lake Water
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            
          </Typography>
          <Typography variant="body2" component="p">
          Salinity, nutrients, and oxygen. Salinity is the total concentration of the ions present in lake water and is usually computed from the sodium, potassium, magnesium, calcium, carbonate, silicate, and halide concentrations. Several important bodies of inland waters, often called inland seas, have very high salinities.
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
      <Card
        style={{
          width: 400,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
         
          </Typography>
          <Typography variant="h5" component="h2">
          Normal Water
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            
          </Typography>
          <Typography variant="body2" component="p">
          Natural water consists mainly of the isotopes hydrogen-1 and oxygen-16, but there is also a small quantity of heavier isotopes oxygen-18, oxygen-17, and hydrogen-2 (deuterium).
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </div>  
    </div>
    
    
   
    
  );
}

export default Demo;