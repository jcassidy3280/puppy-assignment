window.onload = () => {
  let playerName = localStorage.getItem("playerName");
  let playerImage = localStorage.getItem("playerImage")
  let playerBreed = localStorage.getItem("playerBreed")
  let playerStatus = localStorage.getItem("playerStatus")

  let playerDetailsContainer = document.getElementById("player-details-container")

  let newNameElement = document.createElement("h2")
  newNameElement.innerText = playerName
  playerDetailsContainer.appendChild(newNameElement)
  
  let newDetailsElement = document.createElement("div")
  newDetailsElement.innerHTML = `
    <img src=${playerImage} alt="${playerName}" >`

  let newDetailsElement2 = document.createElement("p")
  newDetailsElement2.innerHTML=`<p><b> Player Breed: ${playerBreed}<br> Player Status: ${playerStatus}</p>`
  playerDetailsContainer.appendChild(newDetailsElement)
  playerDetailsContainer.appendChild(newDetailsElement2)
};
