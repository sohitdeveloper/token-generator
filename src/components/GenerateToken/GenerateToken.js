import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import "./style.css";
export default function GenerateToken() {
  const [blueTokens, setBlueTokens] = useState();
  const [blueTokenCount, setBlueTokenCount] = useState();
  const [blueTokenPrefix, setBlueTokenPrefix] = useState();
  const [blueTokenPerRow, setBlueTokenPerRow] = useState();
  const [redTokens, setRedTokens] = useState();
  const [redTokenCount, setRedTokenCount] = useState();
  const [redTokenPrefix, setRedTokenPrefix] = useState();
  const [redTokenPerRow, setRedTokenPerRow] = useState();
  const [updateRow, setUpdateRow] = useState(true);

  const handleClear = () => {
    setBlueTokens([]);
    setBlueTokenCount("");
    setBlueTokenPrefix("");
    setBlueTokenPerRow("");
    setRedTokens([]);
    setRedTokenCount("");
    setRedTokenPrefix("");
    setRedTokenPerRow("");
  };

  const handleGenerate = () => {
    if (!!blueTokenCount && !!blueTokenPrefix && !!blueTokenPerRow) {
      let count = Number(blueTokenCount);
      const res = [...Array(count)].map((_, i) => {
        let obj = {
          tokenName: blueTokenPrefix + (i + 1)
        };
        return obj;
      });
      setBlueTokens(res);
      setUpdateRow(!updateRow);
    }
    if (!!redTokenCount && !!redTokenPrefix && !!redTokenPerRow) {
      let count = Number(redTokenCount);
      const res = [...Array(count)].map((_, i) => {
        let obj = {
          tokenName: redTokenPrefix + (i + 1)
        };
        return obj;
      });
      setRedTokens(res);
      setUpdateRow(!updateRow);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Card sx={{ width: 450 }}>
        <div className="child">
          <div className="name">Number of blue tokens</div>
          <TextField
            size="small"
            label="No. of blue tokens"
            variant="outlined"
            value={blueTokenCount}
            onChange={(e) => setBlueTokenCount(e.target.value)}
          />
        </div>
        <div className="child">
          <div className="name">Blue token prefix</div>
          <TextField
            size="small"
            label="Blue token prefix"
            variant="outlined"
            value={blueTokenPrefix}
            onChange={(e) => setBlueTokenPrefix(e.target.value)}
          />
        </div>
        <div className="child">
          <div className="name">Blue token per row</div>
          <TextField
            size="small"
            label="Blue token per row"
            variant="outlined"
            value={blueTokenPerRow}
            onChange={(e) => setBlueTokenPerRow(e.target.value)}
          />
        </div>
        <div className="child">
          <div className="name">Number of red tokens</div>
          <TextField
            size="small"
            label="No. of red tokens"
            variant="outlined"
            value={redTokenCount}
            onChange={(e) => setRedTokenCount(e.target.value)}
          />
        </div>
        <div className="child">
          <div className="name">Red token prefix</div>
          <TextField
            size="small"
            label="Red token prefix"
            variant="outlined"
            value={redTokenPrefix}
            onChange={(e) => setRedTokenPrefix(e.target.value)}
          />
        </div>
        <div className="child">
          <div className="name">Red token per row</div>
          <TextField
            size="small"
            label="Red token per row"
            variant="outlined"
            value={redTokenPerRow}
            onChange={(e) => setRedTokenPerRow(e.target.value)}
          />
        </div>
        <div className="btn">
          <Button variant="contained" onClick={() => handleGenerate()}>
            Generate
          </Button>
          <Button variant="contained" onClick={() => handleClear()}>
            Clear
          </Button>
        </div>
      </Card>
      <Box sx={{ width: "100%", display: "grid", "justify-content": "start" }}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            "grid-template-columns": `repeat(${
              !!blueTokens && blueTokenPerRow
            }, 1fr)`,
            "place-items": "center",
            "column-gap": "70px"
          }}
        >
          {blueTokens?.map((token) => (
            <Box
              sx={{
                padding: "2px 16px",
                margin: "7px 0px 7px 0px",
                border: "2px solid black",
                width: "100px",
                "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                backgroundColor: "purple",
                "justify-self": "start"
              }}
            >
              {token.tokenName}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            "grid-template-columns": `repeat(${
              !!redTokens && redTokenPerRow
            }, 1fr)`,
            "place-items": "center",
            "column-gap": "70px"
          }}
        >
          {redTokens?.map((token) => (
            <Box
              sx={{
                padding: "2px 16px",
                margin: "7px 0px 7px 0px",
                border: "2px solid black",
                width: "100px",
                "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                backgroundColor: "red",
                "justify-self": "start"
              }}
            >
              {token.tokenName}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
