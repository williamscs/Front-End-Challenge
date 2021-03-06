# Front-End-Challenge
## Requirements
1) Rendering information from JSON: You can see a list of all of our sales in JSON format here: https://www.touchofmodern.com/sales.json (you must be logged in). The first stage of this challenge is to pull the content from the json and display it on the page. You should show each picture and underneath, the name and the tag line. Some or all of those elements should be a link to the url. You only need to worry about the "new_sales" part.

2) Layout and responsive adjustments: Implement styling to the elements so that they show up in a grid pattern. The grid should meet the following requirements: 
  - A cell will include an image, title and tagline noted above  
  - There should be no more than four cells per row. 
  - As many rows as possible will be necessary to display all of the content. 
  - The cell is a minimum of 250 pixels and a maximum of 300 pixels wide
  - The cells should be evenly spaced across a row with the images properly aligned within. 
  - The number of cells should adjust based on the width of a screen so that if this is viewed on a mobile device, there will only be once cell per row. 
  
3) Optional Extra Credit: Suggest an alternative method of viewing all of these sales. It could be breaking these up into pages, an infinite scroll, or a carousel. We are simply looking for your suggestions on a user experience. Also please give a general explanation on how you would implement it.

-------------

Alternative Methods: Probably the first and foremost thing to fix on my current implementation would be to reduce the calls on the images until the user is ready to view them. If we use an infinite scrolling mechanic, we could use some of the newer features of the JavaScript DOM API (window.matchMedia, depending on IE support) to check on the media query and use this information to know how many products are visible at a given time. We can create a buffer amount based on this size, and as the buffer is used we can begin loading more images in the background to be ready for display. Pages and carousels require that the image be loaded as late as possible since the action to request the new image is more discrete.