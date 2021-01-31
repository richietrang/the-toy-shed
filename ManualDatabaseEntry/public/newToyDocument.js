/* Returns a toy JSON object in the format:
  toy_name: string,
  short_description: string,
  youtube_video_id: string,
  thumbnail_icon: string,
  required_materials: [{
    image_url: string,
    name: string,
  }...],
  required_tools: [{
    image_url: string,
    name: string,
  }...],
*/
function newToyDocument() {
  return ({
    toy_name: "Wooden Bow",
    short_description: "Create unlimited arrows and shoot far away",
    youtube_video_id: "ZKnAhMKnOuc",
    toy_icon: "https://firebasestorage.googleapis.com/v0/b/the-toy-shed.appspot.com/o/theToyShed%2FwoodenBow%2Fbow-icon.png?alt=media&token=6fe5d37c-6ae1-4ca3-b4ab-9d3fdeba003a",
    gallery_primary_color: "#CAA195",
    gallery_secondary_color: "#E7CFC8",
    required_materials: [
      {name: "10 Paddlepop sticks", image_url: "https://firebasestorage.googleapis.com/v0/b/the-toy-shed.appspot.com/o/theToyShed%2FrequiredMaterials%2Fpaddlepop-sticks.jpg?alt=media&token=ba11714e-3062-4156-89ce-4d2ec88badf1"},
      {name: "Three rubber bands", image_url: "https://firebasestorage.googleapis.com/v0/b/the-toy-shed.appspot.com/o/theToyShed%2FrequiredMaterials%2Frubber-bands.png?alt=media&token=f8b21faa-c43c-41e9-945e-197d08e234da"},
      {name: "Wooden skewer", image_url: "https://firebasestorage.googleapis.com/v0/b/the-toy-shed.appspot.com/o/theToyShed%2FrequiredMaterials%2Fwooden-skewers.jpg?alt=media&token=e838c1d5-6017-4499-8e6c-1192d7f9437b"},
    ],
    required_tools: [
      {name: "Scissors", image_url: "https://firebasestorage.googleapis.com/v0/b/the-toy-shed.appspot.com/o/theToyShed%2FrequiredTools%2Fscissors.jpg?alt=media&token=5072b109-c73d-43da-badc-adbd339409e1"},
      {name: "Hole puncher", image_url: "https://firebasestorage.googleapis.com/v0/b/the-toy-shed.appspot.com/o/theToyShed%2FrequiredTools%2Fhole-puncher.jpg?alt=media&token=9a865a1e-04d2-4948-8f82-00ad8bd44834"},
    ]
  });
}
