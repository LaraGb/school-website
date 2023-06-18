
function removeFirstWord(title:string) {
    const palavras = title.split(' ');

    palavras.shift();

    const novotitle = palavras.join(' ');

    return novotitle;
  }

 export default removeFirstWord