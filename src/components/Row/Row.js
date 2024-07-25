import React from "react";

const Row = ({ playerId, playerData, setPlayers }) => {
  const handleInputChange = (playerId, rangeKey, value) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map(([id, data]) =>
        id === playerId
          ? [id, { ...data, [id]: { ...data[id], [rangeKey]: value } }]
          : [id, data],
      ),
    );
  };
  let rangeCounter = 1;
  return (
    <div key={playerId}>
      <h4>Player Name: {playerData[playerId]["player_name"]}</h4>
      {Object.entries(playerData[playerId]).map(
        ([rangeKey, rangeValue], idx) => (
          <div key={rangeKey}>
            {rangeKey !== "position" &&
              rangeKey !== "Target" &&
              rangeKey !== "player_name" &&
              rangeKey !== "number" && (
                <>
                  <label>{rangeKey}</label>
                  <label>Range{rangeCounter++}</label>
                  <input
                    type="text"
                    value={rangeValue}
                    onChange={(e) =>
                      handleInputChange(playerId, rangeKey, e.target.value)
                    }
                  />
                </>
              )}
          </div>
        ),
      )}
    </div>
  );
};

export default Row;
