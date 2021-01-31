/* Returns FAQ JSON object in the format:
  FAQ: [
    picture_reference: string,
    question: string,
    answer: [string],
  ...]
*/
function newFAQDocument() {
  return ({
    faqs: [
      {picture_reference: "https://firebasestorage.googleapis.com/v0/b/the-toy-shed.appspot.com/o/theToyShed%2FwoodenBow%2Finstructions%2Ffake-instruction-1.png?alt=media&token=073c8086-7a97-49cc-9d15-e09cd489ebe7",
      question: "What can I use instead of scissors?", 
      answer: ["You can ask your parent to use a knife to cut along the lines.", "You can ask a parent to cut along the lines if your hands are too tired."]},

      {picture_reference: "https://firebasestorage.googleapis.com/v0/b/the-toy-shed.appspot.com/o/theToyShed%2FwoodenBow%2Finstructions%2Ffake-instruction-1.png?alt=media&token=073c8086-7a97-49cc-9d15-e09cd489ebe7",
      question: "How can I customise my toy?", 
      answer: ["You can paint the holster.", "You can change the ammo colour"]},
    ]
  });
}
