import React from "react";
import "./Row.css";
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
    <div className="row" key={playerId}>
      <h4>{playerData[playerId]["player_name"]}</h4>
      <div className="fields_wrapper">
        {Object.entries(playerData[playerId]).map(
          ([rangeKey, rangeValue], idx) => (
            <div className="field" key={rangeKey}>
              {rangeKey !== "position" &&
                rangeKey !== "Target" &&
                rangeKey !== "player_name" &&
                rangeKey !== "number" && (
                  <>
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
    </div>
  );
};

export default Row;
