// Set up function to generate plots
function getPlots(id) {
      // Use the D3 library to read in `samples.json`.
      d3.json('../../data/samples.json').then(sampledata => {
            console.log(sampledata)

            // Set variables, pulling only the top 10 by OTU
            var otu_ids = sampledata.samples[0].otu_ids.slice(0,10).reverse()
            console.log(otu_ids);
            var values = sampledata.samples[0].sample_values.slice(0,10).reverse()
            console.log(values)
            var otu_labels = sampledata.samples[0].otu_labels.slice(0,10).reverse() 
            console.log(otu_labels)

            // Convert ID data to display properly
            var otuIds = otu_ids.map(otu_id => 'OTU ' + otu_id)

            // * Use `sample_values` as the values for the bar chart.
            // * Use `otu_ids` as the labels for the bar chart.
            // * Use `otu_labels` as the hovertext for the chart.
            var trace_bar = {
                  x: values,
                  y: otuIds,
                  text: otu_labels,
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
                  text: sampledata.samples[0].otu_labels,
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

// Display the sample metadata, i.e., an individual's demographic information.
function getDemo(id) {
      d3.json('../../data/samples.json').then((sampledata) => {
            var metaID = sampledata.metadata[0].id
            var ethnicity = sampledata.metadata[0].ethnicity
            var gender = sampledata.metadata[0].gender
            var age = sampledata.metadata[0].age
            var location = sampledata.metadata[0].location
            var bbtype = sampledata.metadata[0].bbtype
            var wfreq = sampledata.metadata[0].wfreq
            
            function demoTable(metaID, ethnicity, gender, age, location, bbtype, wfreq) {
                  var table = d3.select('#summary-table')
                  var tbody = table.select('tbody')
                  var trow

                  trow = tbody.append('td')
                  trow.append('td').text(metaID)
                  trow.append('td').text(ethnicity)
                  trow.append('td').text(gender)
                  trow.append('td').text(age)
                  trow.append('td').text(location)
                  trow.append('td').text(bbtype)
                  trow.append('td').text(wfreq)
            }
      })
}

// Create the function for the change event
function optionChanged(id) {
      getPlots(id)
      getDemo(id)
}

// Create function for initial rendering
function init() {
      // Select dropdown menu
      var dropdown = d3.select('#selDataset')

      // Read the data
      d3.json('../../data/samples.json').then(sampledata => {
            console.log(sampledata)

            // Get the id data to the dropdown menu
            sampledata.names.forEach(function(name) {
                  dropdown.append('option').text(name).property('value')
            })

            // Call the functions to display data and plots to page
            getPlots(sampledata.names[0])
            getDemo(sampledata.names[0])
      })
}

init()
