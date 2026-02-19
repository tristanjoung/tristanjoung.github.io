const spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 600,
  "height": 400,
  "data": { "url": "data/videogames_wide.csv" },
  "mark": "bar",
  "encoding": {
    "y": {"field": "Genre", "type": "nominal"},
    "x": {"field": "Global_Sales", "type": "quantitative", "aggregate": "sum"},
    "color": {"field": "Platform", "type": "nominal"},
    "tooltip": [
      {"field": "Genre", "type": "nominal"},
      {"field": "Platform", "type": "nominal"},
      {"field": "Global_Sales", "aggregate": "sum", "type": "quantitative"}
    ]
  }
};



const spec2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 700,
  "height": 400,
  "data": { "url": "data/videogames_wide.csv" },
  "mark": "line",
  "encoding": {
    "x": {"field": "Year", "type": "temporal"},
    "y": {"field": "Global_Sales", "type": "quantitative", "aggregate": "sum"},
    "color": {"field": "Platform", "type": "nominal"},
    "tooltip": [
      {"field": "Year", "type": "temporal"},
      {"field": "Platform", "type": "nominal"},
      {"field": "Global_Sales", "type": "quantitative", "aggregate": "sum"}
    ]
  }
};

const spec3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 700,
  "height": 400,
  "data": { "url": "data/videogames_wide.csv" },
  "transform": [
    {
      "fold": ["NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales"],
      "as": ["Region", "Sales"]
    },
    {
      "aggregate": [{"op": "sum", "field": "Sales", "as": "Total_Sales"}],
      "groupby": ["Platform", "Region"]
    }
  ],
  "mark": "bar",
  "encoding": {
    "x": {"field": "Platform", "type": "nominal", "sort": "-y"},
    "y": {"field": "Total_Sales", "type": "quantitative", "title": "Total Sales (Millions)"},
    "color": {"field": "Region", "type": "nominal"},
    "xOffset": {"field": "Region", "type": "nominal"},
    "tooltip": [
      {"field": "Platform", "type": "nominal"},
      {"field": "Region", "type": "nominal"},
      {"field": "Total_Sales", "type": "quantitative"}
    ]
  }
};



const spec4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Nintendo vs. Non-Nintendo Japan Sales Over Time",
  "width": 700,
  "height": 400,
  "data": { "url": "data/videogames_wide.csv" },
  "transform": [
    {"filter": "datum.Year != 'N/A' && datum.Year != null"},
    {
      "calculate": "indexof(['NES','SNES','N64','GC','Wii','WiiU','GB','GBA','DS','3DS'], datum.Platform) >= 0 ? 'Nintendo' : 'Non-Nintendo'",
      "as": "Brand"
    },
    {
      "aggregate": [{"op": "sum", "field": "JP_Sales", "as": "JP_Total"}],
      "groupby": ["Year", "Brand"]
    }
  ],
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "Year", "type": "ordinal", "title": "Year"},
    "y": {"field": "JP_Total", "type": "quantitative", "title": "Japan Sales (Millions)"},
    "color": {
      "field": "Brand",
      "type": "nominal",
      "scale": {
        "domain": ["Nintendo", "Non-Nintendo"],
        "range": ["red", "blue"]
      }
    },
    "tooltip": [
      {"field": "Year", "type": "ordinal"},
      {"field": "Brand", "type": "nominal"},
      {"field": "JP_Total", "type": "quantitative"}
    ]
  }
};

vegaEmbed('#vis1', spec);
vegaEmbed('#vis2', spec2);
vegaEmbed('#vis3', spec3);
vegaEmbed('#vis4', spec4);