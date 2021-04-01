// TODO: Wrap both plots code in a function called getPlots(id)


// TODO: Use the D3 library to read in `samples.json`.
d3.json('../../data/samples.json').then(sampledata => {
      console.log(sampledata)


      // TODO: Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

      // Set variables, pulling only the top 10 by OTU
      var ids = sampledata.samples[0].otu_ids.slice(0,10).reverse()
      console.log(ids);
      var values = sampledata.samples[0].sample_values.slice(0,10).reverse()
      console.log(values)
      var labels = sampledata.samples[0].otu_labels.slice(0,10).reverse()
      console.log(labels)

      // Convert ID data to strings to display properly
      var otuIds = ids.map(id => 'OTU ' + id)

      // * Use `sample_values` as the values for the bar chart.
      // * Use `otu_ids` as the labels for the bar chart.
      // * Use `otu_labels` as the hovertext for the chart.
      var trace = {
            x: values,
            y: otuIds,
            text: labels,
            type: 'bar',
            marker: {
                  color: '#31AD26'
            },
            line: {
                  width: 2
            },
            orientation: 'h'
      }

      var data = [trace]

      var layout = {
            title: 'Top 10 OTU',
            margin: {
                  l: 100,
                  r: 100,
                  t: 100,
                  b: 30
            }
      }

      Plotly.newPlot('bar', data, layout);


});


// TODO: Create a bubble chart that displays each sample.
// * Use `otu_ids` for the x values.
// * Use `sample_values` for the y values.
// * Use `sample_values` for the marker size.
// * Use `otu_ids` for the marker colors.
// * Use `otu_labels` for the text values.



// TODO: Display the sample metadata, i.e., an individual's demographic information.

// TODO: Display each key-value pair from the metadata JSON object somewhere on the page.

// TODO: Update all of the plots any time that a new sample is selected.

// TODO: Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

// TODO: Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file
