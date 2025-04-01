function countWord() {
  let count = 0;

  // Get the text from the textarea by using "getElementById", The ID is "userText"
  let words = document.getElementById("userText").value;

  // Identify the words using the space and make an array using inbuilt Javascript function "split()"
  let word_array = words.split(" ");

  // used "for Loop" for counter the words and increase the counter when each "word_array" word is not empty
  for (let i = 0; i < word_array.length; i++) {
    if (word_array[i] != "") {
      count += 1;
    }
  }

  //  finally Display output
  document.getElementById("WordCount").innerHTML = count;
}
