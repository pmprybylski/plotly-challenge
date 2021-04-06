// Set up variables and map to html
var idSelect = d3.select('#selDataset')
var demoTable = d3.select('#sample-metadata')
var barChart = d3.select('#bar')
var bubbleChart = d3.select('#bubble')
var gaugeChart = d3.select('#gauge')

// Function to reset all tables & charts
function dataReset() {
      demoTable.html('')
      barChart.html('')
      bubbleChart.html('')
      gaugeChart.html('')
}

// Function for initial rendering
function init() {
      
      // Data reset
      dataReset()

      // Read the data
      d3.json('/data/samples.json').then(sampledata => {
            console.log(sampledata)

            // Get the id data to the dropdown menu
            sampledata.names.forEach(name => {
                  var option = idSelect.append('option')
                  option.text(name)
            })

            // First ID as default
            var initId = idSelect.property('value')
            getPlots(initId)
      })
}


// Function to generate plots
function getPlots(id) {

      // Use the D3 library to read in `samples.json`.
      d3.json('/data/samples.json').then(sampledata => {
            console.log(sampledata)

            var meta = sampledata.metadata.filter(participant => participant.id == id)[0]
            
            // Clear demo table
            demoTable.html('')

            Object.defineProperties(meta).forEach(key => {
                  demoTable.append('p').text(key[0] + ' : ' + key[1])
            })

            // Variables for bar chart
            var participantSample = sampledata.samples.filter(sample =>
                  sample.id == id)[0]

            var otuIds = []
            var otuLabels = []
            var sampleValues = []

            Object.defineProperties(participantSample).forEach(([key, value]) => {
                  switch (key) {
                        case 'otu_ids':
                              otuIds.push(value);
                              break;
                        case 'sample_values':
                              sampleValues.push(value);
                              break;
                        case 'otu_labels':
                              otuLabels.push(value);
                              break;
                        default:
                              break;
                  }
            })

            // Select top 10
            var ids = otuIds[0].slice(0,10).reverse()
            var labels = otuLabels[0].slice(0,10).reverse()
            var values = sampleValues[0].slice(0,10).reverse()

            // Convert ID data to display properly
            var displayIds = ids.map(otu_id => 'OTU ' + otu_id)  

            // Create bar chart
            // * Use `sample_values` as the values for the bar chart.
            // * Use `otu_ids` as the labels for the bar chart.
            // * Use `otu_labels` as the hovertext for the chart.
            var traceBar = {
                  x: values,
                  y: displayIds,
                  text: ids,
                  type: 'bar',
                  marker: { color: '#B20A1C'},
                  orientation: 'h'
            }

            var dataBar = [traceBar]

            var layoutBar = {
                  title: `Top 10 OTU for Participant ${id}`,
                  height: 600,
                  width: 750,
                  xaxis: { title: 'Sample Values' }
            }

            Plotly.newPlot('bar', dataBar, layoutBar);

            // Create a bubble chart that displays each sample.
            var traceBubble = {
                  x: otuIds[0],
                  y: sampleValues[0],
                  text: otuLabels[0],
                  mode: 'markers',
                  marker: {
                        color: otuIds[0],
                        size: sampleValues[0]
                  }
            }

            var dataBubble = [traceBubble]

            var layoutBubble = {
                  xaxis: {title: 'OTU IDS'},
                  height: 600,
                  width: 1000
            }

            Plotly.newPlot('bubble', dataBubble, layoutBubble)
      })
}

// Create the function for the change event
function optionChanged(id) {
      dataReset(),
      getPlots()
}

init()
