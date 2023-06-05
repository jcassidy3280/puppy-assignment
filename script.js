// Puppy Bowl Assignment (Blocks 22-23 )
const cohortName = '/2304-FTB-ET-WEB-FT';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api${cohortName}`;

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/players`)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const allContents = document.getElementById("all-contents")

const renderAllPlayers = async (playerList) => {
  try {
    const playerContainer = document.getElementById("all-players-container");
    playerContainer.innerHTML=`<h1>Players</h1>`
   
    for (let i = 0; i < playerList.length; i++) {
      let currentPlayer = playerList[i];
      console.log("Hello", currentPlayer)
      let playerDiv = document.createElement("div");
      playerDiv.classList.add("single-player-container");
      playerDiv.innerHTML = `<h2>${currentPlayer.name}</h2>`;
  
      let detailsButton = document.createElement("button")
      detailsButton.innerText="More Details"
      detailsButton.style.width="100px"
      detailsButton.style.margin="1%"
      detailsButton.addEventListener('click', () =>{
              
        localStorage.setItem("playerName", JSON.stringify(currentPlayer.name))
        localStorage.setItem("playerImage", JSON.stringify(currentPlayer.imageUrl))
        localStorage.setItem("playerBreed", JSON.stringify(currentPlayer.breed))
        localStorage.setItem("playerStatus", JSON.stringify(currentPlayer.status))
        window.location.href = "playerDetails.html";
        console.log(window.localStorage.getItem("playerName"))
      })
      let addPlayer = document.createElement("button")
      addPlayer.innerText=`Add ${currentPlayer.name} to Your Team`
      addPlayer.addEventListener("click", ()=>{
        currentPlayer.selection=true
        console.log("Selected Player: ", currentPlayer)            
      })
      let deletePlayer = document.createElement("button")
      deletePlayer.innerText=`Remove ${currentPlayer.name} from Your Team`
      deletePlayer.addEventListener("click", () => {
          currentPlayer.selection = false;
          console.log("Removed from Roster: ", currentPlayer)
        });

        playerContainer.appendChild(playerDiv);
        playerContainer.appendChild(detailsButton);
        playerContainer.appendChild(addPlayer);
        playerContainer.appendChild(deletePlayer);
                
      }
            
    } catch (error) {
      console.log(error);
    }
  };

  let myPuppyRoster = [] 
const buildMyTeam = async (arr) => {
  try {
    let myPuppyBowlTeamContainer = document.createElement("div")
    myPuppyBowlTeamContainer.classList.add("my-puppy-bowl-team-container")
    for (let i = 0; i < arr.length; i++){ 
      let currentObj = arr[i]
      if (!arr || arr.length === 0){
        myPuppyBowlTeamContainer.innerText="No players added yet"
        return
      } else if (currentObj.selection){ 
        let myPuppyRoster = myPuppyRoster.push(currentObj)

      } return myPuppyRoster
    }
    myPuppyBowlTeamContainer.innerText="myPuppyRoster"
    allContents.appendChild(myPuppyBowlTeamContainer)
    
}catch (error) {
    console.log(error)
  }
}

const init = async () => {
  try {
    const playerArray = await fetchAllPlayers();
    renderAllPlayers(playerArray.data.players);
    buildMyTeam(playerArray.data.players)
  } catch (error) {
    console.log(error);
  }
};

init()