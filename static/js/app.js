// TODO: Wrap both plots code in a function called getPlots(id)


// TODO: Use the D3 library to read in `samples.json`.
d3.json('../../data/samples.json').then(sampledata => {
      console.log(sampledata)
})

// TODO: Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// * Use `sample_values` as the values for the bar chart.
// * Use `otu_ids` as the labels for the bar chart.
// * Use `otu_labels` as the hovertext for the chart.

var ids = sampledata.samples[0].out_ids.reverse().slice(0,10);
console.log(ids)



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
