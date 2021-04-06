# Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

This project builds an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


Using the D3 library to read in the samples.json file, the user is able to select a data set by Participant Id using a dropdown box.  This populates the following panels:

## Demographics Table
Displays the individual's demographic information, including the key-value pair from the metadata JSON object.  Keys included:
* id
* ethnicity
* gender
* age
* location
* belly button type (bbtype)
* washing frequency (wfreq)

## Bar Chart
Generated using Plot.ly, the horizontal bar chart displays the top 10 OTUs found in that individual.
* Uses `sample_values` as the values for the bar chart.
* Uses `otu_ids` as the labels for the bar chart.
* Use s`otu_labels` as the hovertext for the chart.

## Bubble Chart
Generated using Plot.ly, the bubble chart displays all samples found in the individual.
* Uses `otu_ids` for the x values and marker colors.
* Uses `sample_values` for the y values and marker size
* Uses `otu_labels` for the text values.

These visuals update any time that a new sample is selected.
