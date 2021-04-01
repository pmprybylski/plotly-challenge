// Set up function to generate plots
function getPlots(id) {
// Use the D3 library to read in `samples.json`.
      d3.json('../../data/samples.json').then(sampledata => {
            console.log(sampledata)

            // Set variables, pulling only the top 10 by OTU
            var ids = sampledata.samples[0].otu_ids.slice(0,10).reverse()
            console.log(ids);
            var values = sampledata.samples[0].sample_values.slice(0,10).reverse()
            console.log(values)
            var labels = sampledata.samples[0].otu_labels.slice(0,10).reverse() 
            console.log(labels)

            // Convert ID data to display properly
            var otuIds = ids.map(id => 'OTU ' + id)

            // * Use `sample_values` as the values for the bar chart.
            // * Use `otu_ids` as the labels for the bar chart.
            // * Use `otu_labels` as the hovertext for the chart.
            var trace_bar = {
                  x: values,
                  y: otuIds,
                  text: labels,
                  type: 'bar',
                  marker: { color: '#B20A1C'},
                  orientation: 'h'
            }

            var data_bar = [trace_bar]

            var layout_bar = {
                  title: 'Top 10 OTU',
                  height: 600,
                  width: 750
            }

            Plotly.newPlot('bar', data_bar, layout_bar);

            // Create a bubble chart that displays each sample.
            var trace_bubble = {
                  x: sampledata.samples[0].otu_ids,
                  y: sampledata.samples[0].sample_values,
                  text:sampledata.samples[0].otu_labels,
                  mode: 'markers',
                  marker: {
                        color: sampledata.samples[0].otu_ids,
                        size: sampledata.samples[0].sample_values
                  }
            }

            var data_bubble = [trace_bubble]

            var layout_bubble = {
                  xaxis: {title: 'OTU IDS'},
                  height: 600,
                  width: 1000
            }

            Plotly.newPlot('bubble', data_bubble, layout_bubble)
      });
}

// TODO: Display the sample metadata, i.e., an individual's demographic information.

// TODO: Display each key-value pair from the metadata JSON object somewhere on the page.

// TODO: Update all of the plots any time that a new sample is selected.

// TODO: Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

// TODO: Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file
